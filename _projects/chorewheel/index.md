---
layout: post
title: ChoreWheel
description: >-
  A full-stack web app that splits chores fairly between housemates, makes another
  housemate check each finished chore before it counts, and sends email/SMS reminders.
  The fairness algorithm is backed by automated tests that simulate 12 weeks of chores.
skills: [Node.js, Express, SQLite, JavaScript, Algorithms, Automated Testing, GitHub Actions]
main-image: /hero.jpg
category: Software
featured: true
order: 3
metric: Nobody ends up more than one big chore ahead, verified over 12 simulated weeks

screens:
  - src: house-board.jpg
    caption: House board. The whole week's chores, who has each one, and their status (to do, waiting for check, done).
  - src: my-chores.jpg
    caption: My chores. Each housemate sees their own list and marks chores done.
  - src: to-check.jpg
    caption: Peer check. Another housemate approves the chore or sends it back with a reason; you can never approve your own.
  - src: fairness.jpg
    caption: Fairness view. Approved points per housemate, plus a weekly accountability table (assigned points, done, missed, checked).
  - src: mobile-to-check.jpg
    caption: Works on phones. Plain HTML/CSS/JS with no build step, plus dark mode.
---

<div class="spec-strip">
  <div class="spec"><strong>8 tests</strong><span>simulate 12 weeks for houses of 2–6 people</span></div>
  <div class="spec"><strong>≤ 5 pts</strong><span>max gap between any two housemates</span></div>
  <div class="spec"><strong>3</strong><span>runtime dependencies (Express, Nodemailer, Twilio)</span></div>
  <div class="spec"><strong>CI</strong><span>tests run on every push with GitHub Actions</span></div>
</div>

## Problem

Shared houses fight about chores for two reasons: the split feels unfair, and nobody
checks whether things actually got done. A paper chore wheel fixes neither. Some chores
take five minutes and some take an hour, and "I did it" is impossible to verify.

## What it does

- **Fair, automatic assignment.** Every chore has effort points (1–5). Each week, chores go to whoever has the fewest points, and they rotate so the same person doesn't always get the bathroom.
- **Peer checking.** A chore only counts after another housemate approves it, or sends it back with a reason.
- **Reminders.** In-app alerts plus email and text: new weekly chores, due tomorrow, overdue, "can you check this?", approved or sent back.
- **Real-life edge cases.** Housemates marked away are skipped and brought back level when they return. New housemates start at the house average. Missed chores earn no points, so that person gets more work next week.

{% include results-gallery.html set=page.screens %}

## How it works

**The fairness algorithm** (`src/assign.js`) is a greedy, load-balancing scheduler written
as pure functions. Big tasks are placed first. Each one goes to a housemate at or near the
lowest running point total, with ties broken by who did that chore least recently. That
keeps workloads even *and* makes chores rotate.

**Tested like an engineering spec.** Property-style tests simulate 12 weeks for houses of
2–6 people. They check that nobody's total ever gets more than one big chore (5 points)
ahead of anyone else's, that weekly chores rotate through everyone, and that away
housemates are skipped. They run in CI on every push.

**Built to be reliable:**
- Only one housemate can check a given chore. The server only updates it while it is still waiting for a check, so two people can't both approve it.
- The reminder scheduler runs every 15 minutes and records what it has sent, so a restart never sends a reminder twice.
- PINs are hashed with scrypt, sessions use signed HttpOnly cookies, logins are rate-limited, and every query is scoped to the signed-in user's house.

**Stack:** Node 24 (built-in `node:sqlite`), Express 5, plain HTML/CSS/JS front end,
Nodemailer for email, Twilio for SMS. Deploys to Railway with a persistent volume.

## My Role

I came up with the idea from living with housemates, defined the fairness rules and
accountability flow, and built the app with an AI coding assistant (Claude Code) as a pair
programmer. I made the product decisions, reviewed the code, and verified it against the tests.

## What I'd Do Next

- Let housemates swap or trade chores, with the point balance adjusting automatically.
- Add photo proof when marking a chore done, to make checking faster.
- Deploy a public demo house so visitors can try it without signing up.

<div class="project-links">
  <a href="https://github.com/bfddeveloper/chorewheel" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> Source code on GitHub</a>
</div>
