---
layout: post
title: Windmill Prototype
description: >-
  A working small-scale wind turbine that measures its own RPM and electrical output in
  real time. I designed the laser-cut base in AutoCAD, wired and integrated the Raspberry Pi
  Pico, ultrasonic sensor, DC-motor generator and LCD, and led assembly and testing.
skills: [AutoCAD, Laser Cutting, Raspberry Pi Pico, MicroPython, Fritzing, Prototyping]
main-image: /hero.jpg
category: Hardware
featured: true
order: 2
metric: Live readout of 40.7 RPM and ~52.6 mW on the LCD

concept_images:
  - src: concept-sketch.jpg
    caption: First team concept sketch. Three-blade rotor, PVC tower, wood base, and open questions about gearing and the generator.
  - src: concept-sketch-final.jpg
    caption: Updated concept once parts were chosen. Ultrasonic sensor detects passing blades for RPM; the DC motor's voltage gives power.
cad_images:
  - src: base-autocad.jpg
    caption: My AutoCAD drawing for the base supports. Interlocking laser-cut wood rings (Ø1.90 in bore for the PVC tower) and tabbed ribs for a rigid, level base.
  - src: blades-autocad.jpg
    caption: Laser-cut blades, hub, and angled blade mounts (drawn by a teammate) that set the pitch of each blade.
electronics_images:
  - src: fritzing-ultrasonic.jpg
    caption: Fritzing wiring for the HC-SR04 ultrasonic sensor on the Pico.
  - src: fritzing-lcd.jpg
    caption: Fritzing wiring for the I2C 16×2 LCD (power, ground, SDA, SCL).
  - src: electronics-breadboard.jpg
    caption: Full electronics on the breadboard. DC motor as the generator, ultrasonic sensor, Pico and LCD, tested together before mounting.
results:
  - src: prototype.jpg
    caption: Assembled prototype. Laser-cut base and supports, PVC tower, three wooden blades on the motor shaft, ultrasonic sensor aimed at the blade path.
  - src: lcd-readout.jpg
    caption: Live output during a test run. 40.7 RPM and about 52.6 mW generated, updated continuously by the measurement loop.
  - src: code-excerpt.jpg
    caption: Excerpt of the team's MicroPython. Ultrasonic distance timing, I2C LCD setup, and ADC voltage reading through a resistor divider.
---

<div class="spec-strip">
  <div class="spec"><strong>40.7 RPM</strong><span>measured rotor speed in testing</span></div>
  <div class="spec"><strong>~52.6 mW</strong><span>electrical power, measured live</span></div>
  <div class="spec"><strong>3 blades</strong><span>laser-cut wood, set pitch</span></div>
  <div class="spec"><strong>Team of 4</strong><span>first-year design project</span></div>
</div>

## Goal

Design and build a working windmill prototype that turns wind into electricity and
**proves it**: the turbine had to measure its own rotational speed and electrical output and
display them in real time.

## My Role

Our team of four split the work into structural and technical halves. Teammates
designed the blades and wrote the code. I handled everything else:

- **Base & structure:** designed the base supports in AutoCAD and laser cut them from wood, giving a stable, level platform that minimizes vibration.
- **Electronics integration:** wired the Raspberry Pi Pico to the ultrasonic sensor, DC-motor generator and I2C LCD, testing each component on its own before combining them.
- **Assembly & testing:** brought the structural and electrical systems together into the final prototype and ran the test sessions.
- **Debugging:** helped troubleshoot the measurement code when RPM and voltage readings didn't line up.

## Concept

We started with research on how real turbines are built, brainstormed blade count and
materials, then sketched a concept. Once parts were chosen we redrew it with the actual
sensing approach.

{% include results-gallery.html set=page.concept_images %}

## Design (AutoCAD + laser cutting)

{% include results-gallery.html set=page.cad_images %}

## Electronics

RPM is measured by pointing an ultrasonic sensor at the blade path and timing each blade
that passes. Power comes from reading the DC motor's output voltage through a resistor
divider on the Pico's ADC. Both values are pushed to a 16×2 LCD in a continuous loop.

{% include results-gallery.html set=page.electronics_images %}

## Testing & Results

{% include results-gallery.html %}

- ✅ The windmill spins and generates measurable power.
- ✅ Working, real-time RPM measurement.
- ✅ Working, real-time voltage and power measurement.
- ⚠️ RPM and power readings varied a lot between runs because of wind consistency, vibration, misalignment and sensor placement.

## What We'd Do Differently

| Area | Issue we found | Improvement |
|---|---|---|
| Base | More complex than needed and built from heavy, expensive material, due to what was available | Simpler design in lighter material |
| Blades | Not very durable, not proportional to the tower, and needed a better motor connection | Stronger material, resized blades, a designed hub-to-shaft coupling |
| Sensing | Ultrasonic sensor missed blades at higher speeds | Switch to a more accurate sensor (e.g. optical or Hall-effect) and better resistors |
| Code | Didn't account for blades passing faster than the sensor's sampling rate; timing and threshold logic not optimized | Expand the code to handle these cases |

**Biggest takeaway:** making it work isn't the finish line. You need to understand *why*
it works, where it fails, and how to improve it. Mechanical, electrical and software
choices all affect each other.

<!-- TODO: SolidWorks renders of the windmill go on the separate windmill-cad page (unpublished). -->
