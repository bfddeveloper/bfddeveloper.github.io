---
layout: post
title: Rubber Duck Warriors
description: >-
  A turn-based iOS battle game built in Swift and SpriteKit by a team of three. Pick a duck,
  then fight geese across three levels using light attacks, heavy attacks and dodges while
  managing health and stamina. I built the health and stamina systems, the third level and
  the win screen.
skills: [Swift, SpriteKit, Xcode, Git, Team Development]
main-image: /hero.jpg
category: Software
order: 1
metric: 13 playable ducks, each with a different health/stamina tradeoff

art:
  - src: hero.jpg
    caption: Title art. Your rubber ducks take on the geese along the river.
  - src: ducks-lineup.png
    caption: Some of the 13 playable ducks (Original, Fire, Ice, Superhero, Cheetah, Biker). Each one trades health for stamina differently.
---

<div class="spec-strip">
  <div class="spec"><strong>3 levels</strong><span>goose battles, each its own scene</span></div>
  <div class="spec"><strong>13 ducks</strong><span>balanced health vs. stamina</span></div>
  <div class="spec"><strong>3 devs</strong><span>shared Git repo with branches and merges</span></div>
  <div class="spec"><strong>Spring 2024</strong><span>Swift / SpriteKit</span></div>
</div>

## The Game

You pick a rubber duck and take on a goose in turn-based combat. Each turn you choose a
**light attack**, a **heavy attack** or a **dodge**. Heavy attacks hit harder but cost more
stamina, so you have to manage your health and stamina bars while knocking the goose's HP
to zero.

Every duck is balanced around the same total: tankier ducks like **Fire** start with more
health and less stamina, while ducks like **Biker** trade health for more stamina, so each
pick changes how you play.

{% include results-gallery.html set=page.art %}

## My Role

We worked as a team of three in a shared GitHub repository, each on our own branch and
merging into `dev`. My commits covered the core combat feedback and the final level:

- **Health bars** for both the duck and the goose, plus the logic that shrinks them as damage lands.
- **Stamina bar** and the logic tying attack choices to stamina cost.
- **Enemy HP fixes** and an indexing bug fix in duck selection.
- **Game Scene 3**, the final level: scene setup and wiring in the progress bars.
- **Win screen** and the X / close button.

Teammates built the title and level-select scenes, the duck roster and balance stats,
the art and button assets, and the animations.

## What I Learned

- **Game state is a system.** Health, stamina, turns and win conditions all depend on each other. Getting the bars to stay in sync with the numbers behind them took careful debugging.
- **Team Git workflow.** Branching, merging and resolving conflicts in Xcode project files with three people committing at once.
- **What I'd do differently:** pull the three nearly identical level scenes into one reusable battle scene with per-level settings, and add unit tests for damage and stamina math.

<div class="project-links">
  <a href="https://github.com/jmadison88/Rubber-Warriors" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> Team repository on GitHub</a>
</div>

<!-- TODO: add gameplay screenshots or a screen recording from the iOS Simulator. -->
