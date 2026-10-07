---
layout: post
published: false   # TODO: set to true once photos and code are added
title: Autonomous RC Car with OpenCV
description: >-
  An RC car converted to drive itself. A camera feed processed with OpenCV handles real-time
  navigation, path planning and obstacle avoidance without any manual input.
skills: [OpenCV, Python, Computer Vision, Embedded Systems, Motor Control]
main-image: /cover.jpg
category: Hardware
order: 1
metric: Fully autonomous driving, no manual input
---
<!--
TODO before publishing:
- cover.jpg: photo of the car (16:9 crop works best)
- build photos: camera mount, wiring, controller
- result media: OpenCV output frames (lane/obstacle detection overlays), a short driving video (YouTube id for youtube-video.html)
- code: link the repo once it's uploaded, and fill in the pipeline details below
-->

<div class="spec-strip">
  <div class="spec"><strong>Autonomous</strong><span>no manual input while driving</span></div>
  <div class="spec"><strong>OpenCV</strong><span>real-time vision pipeline</span></div>
  <div class="spec"><strong>Dec 2024–May 2025</strong><span>independent project</span></div>
</div>

## Goal

Turn an off-the-shelf RC car into a vehicle that can navigate a course, plan a path and
avoid obstacles entirely on its own, using a camera and computer vision instead of a remote.

## How it works

<!-- TODO: confirm and fill in from the code -->
1. **Perception:** a camera streams frames into an OpenCV pipeline that detects the path and obstacles.
2. **Planning:** the detected path and obstacles become a steering target each frame.
3. **Control:** steering and throttle commands go to the car's servo and motor controller.

## Build

<!-- TODO: photos of the hardware. Which board ran OpenCV, how the camera was mounted, how the motors were driven. -->

## Testing & Results

<!-- TODO: OpenCV output frames and a driving video:
{% raw %}{% include youtube-video.html id="VIDEO_ID" %}{% endraw %}
-->

## What I'd Do Differently

<!-- TODO -->
