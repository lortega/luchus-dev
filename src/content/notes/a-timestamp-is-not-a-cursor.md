---
title: A timestamp is not a cursor
summary: Wall-clock time collides. When it does, a cursor built on it stops moving, and the client reads the same page forever.
date: 2026-08-27
tags: [sync, offline-first, databases]
draft: true
---

Mobile clients on a system I work on stopped syncing. Not with an error. The
requests kept succeeding, the payloads kept arriving, and nothing changed. Each
client asked for the next page of records, got fifty back, and asked again. The
same fifty. Forever.

The endpoint was ordinary. The client sends the timestamp it last saw, the server
returns records where `updated_at >= since` ordered by `updated_at`, and the
client takes the newest timestamp from the batch and sends it back on the next
request. This is cursor pagination the way most of us write it the first time.

It works until two records share a timestamp. Then it stops working completely.

## The cursor cannot move

Say fifty records were written inside one transaction, so they all carry
`updated_at = 2025-08-12T19:14:20`. The page size is also fifty.

The client asks for everything at or after some earlier point. The server returns
those fifty records. The client reads the highest timestamp in the batch —
`19:14:20` — and sends it as the next cursor. The server returns records at or
after `19:14:20`: the same fifty. The client has learned nothing, and it will keep
not learning it until someone notices the traffic.

The obvious fix is to change `>=` to `>`. That trades one bug for a worse one. If
sixty records share `19:14:20` and the page holds fifty, the strictly-greater
cursor steps past the timestamp entirely and the remaining ten are never sent.
The loop stops. The data is gone, quietly.

So the operator is not the problem. **You can loop, or you can lose records.** The
choice is forced, because the cursor is built on a value that does not identify a
position.

## Timestamps collide more than you would think

This is not a rare-event problem you can wave away.

A transaction assigns one timestamp to everything it writes. A background job that
touches a thousand rows produces long runs of identical values. And MySQL's
`datetime` stores whole seconds unless you ask for more, so on a busy table
collisions are not an edge case, they are the normal state of things.

Raising the precision feels like the fix and is not. Microseconds make collisions
less likely between unrelated writes, but a transaction still stamps all of its
rows with the same instant, whatever the precision. The failure was never about
resolution. It was about using a clock reading as an identity.

Martin Kleppmann makes the general case in *Designing Data-Intensive Applications*
— chapters 8 and 12 are the relevant ones. Physical clocks do not guarantee
uniqueness, they do not guarantee ordering, and they are not yours to control.

## What a cursor actually needs

A cursor has one job: given the last position, produce the next records exactly
once. That requires a value that is unique per record and ordered by the thing
you are paginating over. A timestamp is neither.

Two values do the job.

**A compound cursor** pairs the timestamp with the primary key and compares them
together: everything after this timestamp, plus everything at this timestamp with
a higher id. It is correct. It costs you a two-part cursor, a compound index, and
a query condition that people get wrong when they touch it later. It also orders
ties by insertion, not by modification, so a record created early and edited
yesterday sorts before one created later and never touched again. For pagination
that is fine. For "tell me what changed", it is a lie you will eventually read.

**A monotonic sequence** gives every syncable record a counter value assigned on
save, from a counter kept per record type. The cursor becomes a single number and
the comparison becomes `seq > x`. Every save takes a new value, so ties cannot
happen, and because the value is assigned at write time it reflects the order
things actually changed.

I took the sequence. Not because the compound cursor is wrong, but because the
cursor is the part of a sync protocol that other people have to reason about
years later, on a client you do not control, and one integer is easier to be
right about than a pair.

Roughly, the write path looks like this — atomically claim the next value, then
carry it on the row:

```sql
UPDATE sync_counters
   SET value = LAST_INSERT_ID(value + 1)
 WHERE record_type = 'inspection';

SELECT LAST_INSERT_ID();
```

`LAST_INSERT_ID(expr)` is a MySQL idiom worth knowing: it sets the value and
returns it on the same connection, so you get an atomic increment and its result
without holding a lock across a round trip.

## What it costs

I would rather say this plainly than have you discover it.

Every save now writes to a counter before it writes the row. That is real, it is
on the hot path, and it is the price of the guarantee. Existing rows have no
sequence value, so there is a backfill, and until it finishes the new cursor
cannot be trusted. And the rollout has an order: the server has to speak both
cursors at once — old clients keep sending timestamps, new clients send sequences
— because the client is an app on someone's phone and you do not get to decide
when it updates.

That last one is the constraint people forget when they read about sync. On the
server, a migration is something you run. On a device in the field, a migration is
something you hope for.

## The assumption

The bug was never in the pagination. It was in a belief so ordinary that nobody
writes it down: that `updated_at` says when a row changed *and* which row it was.
It says the first thing, approximately. It never said the second.

Most of the sync problems I have hit are shaped like this. Not a wrong algorithm —
a value quietly asked to carry a meaning it never had.
