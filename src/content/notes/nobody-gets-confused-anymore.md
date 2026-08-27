---
title: Nobody gets confused anymore
summary: A confused person asks a question. An agent fills the gap and keeps going. We lost the signal that told us our documentation was bad.
date: 2026-08-27
tags: [documentation, ai, process]
draft: true
---

Something I only noticed by its absence: we stopped getting questions.

Not because everything got clearer. Because the thing doing most of the reading
does not ask. A person who hits a gap in your docs comes back and says *this part
doesn't explain X*. That question was never an interruption. It was the only
working test we had. Confusion was the signal.

An agent hits the same gap and fills it. Plausibly, confidently, in the shape of
the surrounding code, and then it moves on. You get a pull request instead of a
question.

So the failure mode flipped. Silence used to mean the docs were fine. Now silence
means something was invented and nobody said so.

Once you see it that way, the work splits in two, and the halves are not the same
job.

## What the repo owes the agent

**A single door.** If the answer is not reachable in about two hops from one map,
it does not exist. An agent does not browse a folder hoping to get lucky.

**What is settled, marked as settled, with the why.** This is the one people skip.
An agent cannot tell the difference between a decision you made on purpose and a
mess you have not cleaned up yet. Both look like inconsistencies from inside a
single task, and it will helpfully undo the first one.

**A line between durable and dated.** A plan from March is not the present tense.
If they sit in the same place, they carry the same authority.

**Something mechanical that fails.** Dead links, orphan documents — make them
break the build. The agent will never tell you a file is stale. The repo has to.

## What the pilot has to change

**Write it in the same pass.** The decision and the record of it, or you will not
do it. Later is how a file in our repo claimed for months that we ran SQLite in
dev.

**Read the docs as a prompt, not as an archive.** Because that is what they are
now. Every word is context somebody will act on this afternoon.

**Go looking for the questions you stopped receiving.** Nobody is going to tell
you which page is wrong. That job moved to you when the asking stopped.

**Verify what comes back about your own system.** An agent will state a fact about
your codebase with the same confidence whether it read it or reconstructed it.
This is the part I am worst at.

I do not have this solved. The half I keep getting wrong is the last one — I still
catch things I let through, and I catch them late. But the split itself has held
up: most of what I used to file under "we should document better" was really two
different problems wearing one name.
