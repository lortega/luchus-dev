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
reading it. I wasn't reading it either. I wrote it, then changed the thing it
described, and left it sitting there being wrong for anyone who trusted it. It
took an agent reading it out loud, in the middle of an unrelated task, for anyone
to notice.

That is how documentation has always failed. Not dramatically. It drifts, and the
drift is invisible, because the people who would catch it are the ones who already
know the answer and never open the file.

Except the reading in our repo is not done by people anymore.

It is done by agents. They open `docs/`, follow the links, and write code based on
what they find there. A human skims. A human who reads "dev runs on SQLite" and
knows better will shrug and move on. An agent has no context and no shrug. It
reads the sentence, believes it, and acts.

So a stale document stopped being debt and became a bug. A real one, that ships,
in a pull request, with your name on it.

I should say where I stand. I do not build this alone — I work next to agents,
most of every day. The decisions are mine and I would defend every one of them,
but the execution is shared. Which means the docs are not notes for a future
colleague who may never arrive. They are what I hand to the collaborator I
actually have, at the start of every session.

So I made the drift visible. Dead links fail our build now. So do orphans:
documents that nothing points to. It sounds small. It has mattered more than
anything else I did, because it turns a slow rot into a red build, and a red build
is something we already know how to deal with.

It will never catch a file that lies about SQLite. Nothing mechanical will. What
it catches are the conditions that let lying files survive — documents nobody can
reach and nobody owns.

Then there is the part I did not expect.

Documenting the code is not enough. An agent that knows how the code works but not
what is settled will undo a decision you made two years ago, because from inside a
single task an old choice looks like an inconsistency worth cleaning up. It cannot
tell the difference between something you have not gotten around to and something
you decided on purpose and would defend.

So it has to reach further up than I thought. Not just how a module behaves — what
the company is, what we sell, which decisions are closed and why. Both ends of the
range, connected. That is the 360 I keep saying to myself.

It costs discipline, permanently. Anything worth keeping has to be written down in
the same pass, not later. Later is how the SQLite line survived.

And I do not know yet whether this holds at ten times the size, or whether I am
just enjoying a tidy repo. What I do know is that the file would not last a week
now, and it lasted months.

If you have a `docs/` folder you have not opened in a while, go read one page. Not
to fix it. Just to see how long it has been wrong.
