---
layout: post
published: false            # delete this line (or set true) when the page is ready
title: Project Name
description: >-
  Two or three sentences: what it is, what you did, and the result. This shows on the
  home-page card and at the top of the project page.
skills: [Skill One, Skill Two, Skill Three]
main-image: /hero.jpg       # file in this folder; keep the leading slash; 16:9 works best
category: Hardware          # Hardware | CAD | Specialty | Software
featured: false             # true = show in the Featured area at the top
order: 10                   # lower numbers show first
metric: One headline number or result

build_images:
  - src: build-1.jpg
    caption: What this photo shows.
results:
  - src: result-1.jpg
    caption: What was tested or measured, and the number.
---

<div class="spec-strip">
  <div class="spec"><strong>Number</strong><span>what it means</span></div>
  <div class="spec"><strong>Number</strong><span>what it means</span></div>
  <div class="spec"><strong>Date</strong><span>class / team / independent</span></div>
</div>

## Problem

What needed solving, and why it mattered. 2–3 sentences.

## My Role

What *you* did. Be specific if it was a team project.

## Design

How you approached it: sketches, CAD, key decisions and tradeoffs.

## Build

{% include results-gallery.html set=page.build_images %}

## Testing & Results

{% include results-gallery.html %}

- Result with a number
- Result with a number

## What I'd Do Differently

- Improvement 1
- Improvement 2

<div class="project-links">
  <a href="https://github.com/..." target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> Code</a>
</div>
