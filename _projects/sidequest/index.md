---
layout: post
title: SidequestMeet.com
description: >-
  A live web app that gets college students off their phones and into real conversations.
  It matches nearby students by location and shared interests, picks a campus meeting spot
  halfway between them, and walks both people through a quick in-person meetup.
skills: [React, Firebase, Firestore, Geolocation, Product Design, PWA]
main-image: /hero.jpg
category: Software
featured: true
order: 4
metric: Live at sidequestmeet.com, with verified .edu sign-up

screens:
  - src: landing.jpg
    caption: Landing screen. "Friend time, not phone time."
  - src: sign-up.jpg
    caption: Sign-up requires a .edu email, which is verified before anyone can match, so everyone is a real college student.
---

<div class="spec-strip">
  <div class="spec"><strong>Live</strong><span>deployed on Firebase Hosting</span></div>
  <div class="spec"><strong>.edu only</strong><span>email-verified student accounts</span></div>
  <div class="spec"><strong>~17 screens</strong><span>sign-up → match → meet → feedback</span></div>
  <div class="spec"><strong>15 min</strong><span>timed in-person meetups</span></div>
</div>

## Problem

College campuses are full of people with shared interests who never meet, because
everyone is on their phone. Social apps keep people scrolling instead of actually meeting.
Sidequest flips that: the app's whole job is to get you to put the phone down and go meet
someone nearby.

## How it works

1. **Verified sign-up.** Students register with a `.edu` email, verify it, and build a quick profile: name, bio, interests, photo.
2. **Nearby matching.** The app uses the phone's location to show students within a set radius, with distance and walking time.
3. **Mutual requests.** One person sends a request and the other accepts. The match is stored in Firestore and updates live on both phones.
4. **Smart meeting spot.** Sidequest picks the campus location closest to the midpoint between the two people, so nobody walks much farther than the other.
5. **Find each other.** Each person picks their shirt color and gets icebreakers based on shared interests.
6. **Meet.** Both check in, a 15-minute timer runs, and each leaves feedback afterward.

{% include results-gallery.html set=page.screens %}

## Tech

- **Front end:** React 18 as an installable web app (PWA), designed mobile-first.
- **Back end:** Firebase Authentication (email verification) and Cloud Firestore with live updates for match requests and meetup state.
- **Location:** the browser's location API, plus distance math to rank nearby students and pick the meeting spot closest to the midpoint.
- **Hosting:** Firebase Hosting on a custom domain, sidequestmeet.com.

## My Role

Sidequest is my own product. I came up with the concept, wrote the product spec, designed
the user flow from sign-up to meetup, and built and deployed the app with an AI coding
assistant (Claude Code) as a pair programmer.

## What's Next

- Move matching and meeting-spot selection to server-side functions so location data never has to reach other users' devices.
- Break the single large `App.js` into smaller components and add automated tests.
- Pilot it with a student group at Northeastern and use the feedback data to tune matching.

<div class="project-links">
  <a href="https://sidequestmeet.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Visit sidequestmeet.com</a>
</div>

<!-- TODO: add screenshots of the in-app screens (nearby list, match preview, meeting spot, check-in) from a test account. -->
