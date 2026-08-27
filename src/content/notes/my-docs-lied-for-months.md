---
title: My docs lied for months and nobody noticed
summary: A file said we ran SQLite in dev. We hadn't in a long time. Nobody caught it, because nobody was reading — until something started reading everything.
date: 2026-08-27
tags: [documentation, ai, process]
draft: false
---

The other day, working through something with an agent, we opened a file in our
repo that said dev and test ran on SQLite.

They hadn't, for months. The file had been wrong that whole time, sitting in
`docs/` with everything else, right where you would look for it. Nobody had said
anything.

I want to be honest about why that happened, because the boring answer is the
correct one. Nobody said anything because nobody was reading it. I wasn't reading
it either. I wrote it, and then I went and changed the thing it described, and the
file stayed where it was, being wrong, for anyone who trusted it.

It took an agent reading it out loud, in the middle of an unrelated task, for
anyone to notice.

That is how documentation has always failed. Not dramatically. It just drifts, and
the drift is invisible, because the people who would catch it are the same people
who already know the answer and never open the file.

## Something changed and I was slow to notice it

Most of the reading in our repo is not done by people anymore.

It is done by agents. They open `docs/`, they follow the links, they read what is
there, and then they write code based on it. That has been true for a while now
and I had not thought about what it means.

Here is what it means. A human skims. A human who reads "dev runs on SQLite" and
knows it doesn't will shrug and keep going, because they have context and the file
is only one of their inputs. An agent has no context and no shrug. It reads the
sentence, believes it, and acts.

So a stale document stopped being debt and became a bug. Not a metaphorical bug. A
real one, that ships, in a pull request, with your name on it.

I should say where I stand, because it changes how you read the rest. I do not
build this alone. I work next to agents, every day, most of the day. The decisions
are mine and I would defend every one of them, but the execution is shared, and
this documentation system came out of that same way of working — it was not
handed down to it.

Which is the whole point, really. The docs are not notes I leave for some future
colleague who may never arrive. They are what I hand to the collaborator I
actually have, at the start of every session.

I keep coming back to that. I had always treated documentation as a thing you do
for other people, later, if there is time. It turns out I had been writing an
input to a machine and did not know it.

## What I did about it

The first thing was to make the drift visible, because that was the actual
failure. Not that the file was wrong — that it could be wrong for months without
anything happening.

So now the docs have a checker that runs in CI. Dead links fail the build. So do
orphans: a document that nothing points to. It sounds small. It is the single
change that has mattered most, because it turns a slow rot into a red build, and a
red build is something we already know how to deal with.

It does not catch a file that lies about SQLite. Nothing mechanical will. But it
catches the conditions in which lying files survive, which is documents that
nobody can reach and nobody owns.

The second thing was ownership. Every durable document belongs to someone. Not as
a header on each file, which is forty places to forget — declared in one place, so
there is a single list to read and a single list to be wrong.

The third one is the part I did not expect, and it is why I am writing this.

## The part I did not expect

I assumed that documenting the code would be enough. Explain the modules, the
sync, the deploy, and you are done.

It is not enough, and the reason is specific. An agent that knows how the code
works but not what is settled will happily undo a decision you made two years ago,
because from inside a single task the old choice looks like an inconsistency worth
cleaning up. It is not being careless. It genuinely cannot tell the difference
between a thing you have not gotten around to and a thing you decided on purpose
and would defend.

So the documentation has to go further up than I thought. Not just how the code
works — what the company is, what we sell, which decisions are closed and why. All
the way from the exact behavior of a module to what the business does. The more of
that span is written down, the fewer of these you get.

That is the 360 I keep saying to myself. Not "more docs". Both ends of the range,
connected, so that a session that starts with a question can get to the answer in
two hops.

Right now that is about 174 documents and forty thousand lines. I am not proud of
the number and I am not going to pretend it is a target. It is what it took.

## What it costs

It costs discipline, permanently. A new document has to hang off the map and off
an owner or CI fails, and there are days when that is exactly what you do not want
to deal with.

It also costs a habit I did not have. Every time we settle something worth
keeping, it has to be written down right then, in the same pass — not later, not
when there is time. Later is how the SQLite line survived.

The migration was four phases and touched around thirty links scattered through
config, agent files and code comments. Paths got longer. Some of the structure I
chose will turn out to be wrong and I will move it again.

And the honest part: I do not know yet whether this holds at ten times the size,
or whether I am just enjoying a tidy repo. What I do know is that the file that
said SQLite would not survive a week now, and it survived months before.

If you have a `docs/` folder you have not opened in a while, go read one page of
it. Not to fix it. Just to see how long it has been wrong.
