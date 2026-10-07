---
layout: post
title: Breathalyzer Lock Box
description: >-
  A pocket-sized key lockbox that only releases car keys after a fingerprint match
  and an estimated BAC under 0.06. I modeled the enclosure and servo-driven lock in
  SolidWorks, 3D printed it, and programmed the MQ-3 alcohol sensor, fingerprint
  scanner and OLED display in MicroPython on a Raspberry Pi Pico.
skills: [SolidWorks, 3D Printing, Raspberry Pi Pico, MicroPython, Sensor Calibration, Soldering]
main-image: /hero.jpg
category: Hardware
featured: true
order: 1
metric: Unlocks only on fingerprint match + estimated BAC under 0.06

design_images:
  - src: solidworks-section.jpg
    caption: SolidWorks section view of the full assembly. Pico, battery bay, servo latch, fingerprint module and OLED all packaged around a central key drawer, with a threaded breath port on top.
build_images:
  - src: breadboard-prototype.jpg
    caption: First working electronics on the Pico, used to bring up and test each sensor before packaging.
  - src: wired-enclosure.jpg
    caption: Electronics and LiPo battery fitted into the printed enclosure. Screw bosses at each corner hold the lid.
  - src: finished-unit.jpg
    caption: Finished handheld unit. Fingerprint scanner on the top face, OLED window on the side, breath port up top.
results:
  - src: warmup-calibration.jpg
    caption: Self-calibration on startup. The MQ-3 output drifts as the heater warms up; the device samples a window (orange) to set its clean-air baseline (dashed) before taking a breath.
  - src: bac-curve.jpg
    caption: Converting the sensor reading to BAC. A sample reading of Rs/R0 = 0.590 maps to 0.384 mg/L breath alcohol, or 0.081% estimated BAC, which the device labels "Impaired" and stays locked.
  - src: calibration-fit.jpg
    caption: Calibration data (voltage drop from baseline vs. estimated BAC) compared against reference curves. I used this to re-fit the low-cost MQ-3's response and improve accuracy.
---

<div class="spec-strip">
  <div class="spec"><strong>2-factor</strong><span>fingerprint match + breath test to unlock</span></div>
  <div class="spec"><strong>&lt; 0.06</strong><span>estimated BAC required to release keys</span></div>
  <div class="spec"><strong>Pocket-sized</strong><span>battery-powered, 3D-printed enclosure</span></div>
  <div class="spec"><strong>Jan–May 2026</strong><span>Northeastern Cornerstone team project</span></div>
</div>

## Problem

In rural college towns, late-night options for getting home are limited, and the easiest
way home is often the car you drove there. The goal was a small, cheap device that holds a
driver's keys and only gives them back once the owner proves who they are **and** that
they're sober enough to drive.

## My Role

This was a Cornerstone of Engineering team project. I owned:

- **Mechanical design:** modeled the enclosure and the servo-driven locking mechanism in SolidWorks, then iterated on the 3D-printed parts.
- **Embedded programming:** wrote the MicroPython on the Raspberry Pi Pico that runs the MQ-3 alcohol sensor, fingerprint scanner, OLED display and servo.
- **Sensor data analysis:** analyzed raw sensor output to improve calibration and accuracy of the low-cost MQ-3.
- **Security logic:** built lockout logic and driver logging to block bypass attempts.

## Design

The whole device is packaged around a sliding key drawer that a small servo latches shut.
The breath port feeds straight to the MQ-3, the fingerprint module sits on the top face
where a thumb naturally lands, and the OLED shows status and results.

{% include results-gallery.html set=page.design_images %}

## Build

I brought up each component on a breadboard first, then moved everything onto
perfboard and soldered wiring so it would fit inside the printed shell with the LiPo battery.

{% include results-gallery.html set=page.build_images %}

## How it works

1. **Warm-up and self-calibration.** On power-up the MQ-3's heater needs time to stabilize. The Pico watches the drift, samples a clean-air window and sets a baseline.
2. **Fingerprint check.** The registered driver scans their finger. Anyone else is rejected.
3. **Breath test.** The sensor's resistance ratio (Rs/R0) is converted to breath alcohol (mg/L) and then to an estimated BAC.
4. **Decision.** Under 0.06 estimated BAC the servo releases the key drawer. Otherwise it stays locked, the attempt is logged, and repeated attempts trigger a lockout.

## Testing & Results

{% include results-gallery.html %}

- The full unlock flow works on a handheld, battery-powered unit.
- Calibrating against measured data improved the accuracy of the low-cost MQ-3 sensor.
- Lockout logic and driver logging block repeated bypass attempts and keep a record of them.

## What I'd Do Differently

- **Custom PCB.** The hand-wired perfboard worked but filled most of the enclosure; a PCB would shrink the device and make it more reliable.
- **Better sensor.** The MQ-3 is cheap but drifts with temperature and humidity. A fuel-cell alcohol sensor would be far more accurate.
- **More calibration points.** More controlled samples across the BAC range would tighten the fit near the 0.06 threshold where it matters most.

<!-- TODO: add a demo video, plus the 3D viewer once a .glb of the enclosure is exported:
{% raw %}{% include model-viewer.html src="enclosure.glb" poster="solidworks-section.jpg" alt="Breathalyzer lock box enclosure" %}{% endraw %}
-->
