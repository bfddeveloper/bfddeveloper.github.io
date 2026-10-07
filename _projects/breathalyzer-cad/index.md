---
layout: post
published: false   # TODO: set to true once SolidWorks renders are added
title: Breathalyzer Enclosure (SolidWorks)
description: >-
  The full SolidWorks design behind the Breathalyzer Lock Box: a pocket-sized, 3D-printable
  enclosure that packages a Raspberry Pi Pico, LiPo battery, MQ-3 sensor, fingerprint module,
  OLED and a servo-latched key drawer.
skills: [SolidWorks, Assembly Modeling, Design for 3D Printing, Tolerancing]
main-image: /solidworks-section.jpg
category: CAD
order: 1
metric: Full assembly packaged for FDM printing
---
<!--
TODO before publishing:
- renders: full assembly, exploded view, each printed part, key drawer + servo latch close-up
- drawings: PDF of any part drawings (link or image)
- 3D viewer: export the assembly as STL, convert to .glb (Blender), keep it under ~5 MB, then:
  {% raw %}{% include model-viewer.html src="enclosure.glb" poster="solidworks-section.jpg" alt="Breathalyzer enclosure" %}{% endraw %}
- after publishing, add a "Full CAD breakdown →" link on the main breathalyzer-lock-box page
-->

## Design Requirements

- Pocket-sized, one-handed use
- House the Pico, LiPo battery, MQ-3 sensor, fingerprint scanner, OLED and servo
- A key drawer that stays locked until the servo releases it
- Printable on an FDM printer with no supports where possible

## Assembly Overview

![SolidWorks section view of the enclosure](/_projects/breathalyzer-cad/solidworks-section.jpg)

## Key Parts & Features

<!-- TODO: threaded breath port, sensor airflow path, servo latch geometry, screw bosses, display and fingerprint cutouts, battery bay -->

## Design for 3D Printing

<!-- TODO: wall thickness, print orientation, clearances/tolerances for the drawer, fastener choice -->

## Iterations

<!-- TODO: what changed between versions and why -->

[See the build and test results →](/projects/breathalyzer-lock-box/)
