---
title: My docs lied for months and nobody noticed
summary: A file said we ran SQLite in dev. We hadn't in a long time. Nobody caught it, because nobody was reading — until something started reading everything.
date: 2026-08-27
tags: [documentation, ai, process]
draft: false
---

The other day, working through something with an agent, we opened a file in our
repo that said dev and test ran on SQLite.

They hadn't, for months.

Nobody had said anything, and the boring reason is the right one: nobody was
reading it. I wrote it, changed the thing it described, and left it there being
wrong for anyone who trusted it.

That is how documentation has always failed. It drifts, and the drift is
invisible, because whoever would catch it already knows the answer and never opens
the file.

Except the reading is not done by people anymore. Someone who reads "dev runs on
SQLite" and knows better will shrug. An agent has no shrug. It reads the sentence,
believes it, and acts.

So a stale document stopped being debt and became a bug — one that ships, in a
pull request, with your name on it.

I do not build alone. I work next to agents most of every day, which means the
docs are not notes for some future colleague. They are what I hand the
collaborator I already have.

Dead links fail our build now. So do orphans. It sounds small, and it turned a
slow rot into a red build.
