---
title: Nobody gets confused anymore
summary: A confused person asks a question. An agent fills the gap and keeps going. We lost the only test our documentation ever had.
date: 2026-08-27
tags: [documentation, ai, process]
draft: true
---

We stopped getting questions.

Not because anything got clearer. The thing doing most of the reading does not
ask. A person who hits a gap says *this doesn't explain X*, and that question was
the only working test we had. Confusion was the signal.

An agent hits the same gap and fills it — plausibly, in the shape of the code
around it. You get a pull request instead of a question.

So the failure mode flipped. Silence used to mean the docs were fine. Now it means
something was invented and nobody said so.

Which splits the work in two.

**What the repo owes the agent.** One map, with every answer about two hops away.
What is settled marked as settled, with the why — an agent cannot tell a decision
from a mess you have not cleaned up yet, and it will confidently undo the first
one. Dead links and orphans that fail the build, because the agent will never tell
you a file is stale.

**What the pilot owes.** Write the decision in the same pass — later is how a file
in our repo claimed for months that we ran SQLite in dev. Read the docs as a
prompt, not an archive. And go looking for the questions that stopped arriving,
because nobody is going to tell you which page is wrong.

That last one I am bad at. I catch things late, and mostly by accident.
