# Brody Dickson: Engineering Portfolio

Live site: **https://bfddeveloper.github.io**

A Jekyll site hosted on GitHub Pages. Every push to `main` rebuilds the site automatically
in about a minute. There's nothing to install: you can edit files right on github.com,
or locally and push.

Built on the [free-to-engineer portfolio template](https://github.com/lowinertia/free-to-engineer-portfolio-template) by lowinertia.

## Where things live

| What | File |
|---|---|
| Name, headline, intro, social links, skills, résumé link | `_config.yml` |
| Projects (one folder each) | `_projects/<project-name>/index.md` + images in the same folder |
| Résumé PDF | `assets/resume/` (use a copy **without your phone number**) |
| Headshot | `assets/images/profile-image/` (update `profile_image` in `_config.yml`) |
| Home-page sections (Featured, Hardware, CAD, Specialty, Software) | `project-categories` in `_config.yml` |

## Add or edit a project

1. Copy `PROJECT_TEMPLATE.md` to `_projects/<project-name>/index.md`. Use lowercase with dashes, and **don't** use the word "index" in the folder name.
2. Put the project's images in that same folder.
3. Fill in the front matter (the part between the `---` lines):

| Field | What it does |
|---|---|
| `title` | Project name. Wrap it in quotes if it contains a colon. |
| `description` | 2–3 sentences. Shown on the card and at the top of the page. |
| `skills` | Tags shown as chips, e.g. `[SolidWorks, 3D Printing]` |
| `main-image` | Cover image file name **with a leading slash**, e.g. `/hero.jpg`. A 16:9 crop works best. |
| `category` | `Hardware`, `CAD`, `Specialty` or `Software`. Picks the home-page section. |
| `featured` | `true` puts the project in the Featured area at the top (and not in its section). |
| `order` | Number. Lower numbers show first within Featured or within a section. |
| `metric` | Optional one-line headline result shown on the card, e.g. `40.7 RPM, ~52.6 mW` |
| `published` | `false` hides the page entirely. Delete the line or set `true` to publish. |
| `results` (and any other list) | Captioned images for the results gallery (see below). |

### Captioned image galleries

List images in the front matter:

```yaml
results:
  - src: test-setup.jpg
    caption: What it shows and what was measured.
```

Then place the gallery in the page body:

```liquid
{% include results-gallery.html %}                      <!-- uses `results` -->
{% include results-gallery.html set=page.build_images %} <!-- any other list -->
```

Visitors can click any gallery image to see it full size.

### Other embeds

```liquid
{% include youtube-video.html id="VIDEO_ID" %}
{% include model-viewer.html src="part.glb" poster="part.png" alt="Part name" %}
```

The 3D viewer only loads when clicked. Export from SolidWorks as STL, convert to `.glb`
(Blender: File → Import STL → Export glTF binary), and keep it under ~5 MB.

## Images

Keep each image under about 300 KB, around 1400 px on the long side. Phone photos are
usually 3–5 MB, so shrink them first (for example with https://squoosh.app).

## Unpublished drafts waiting on photos

`rc-car-opencv`, `vintage-motorcycle`, `pa-sound-system`, `breathalyzer-cad`, `windmill-cad`,
`bar-cart`, `aluminum-d12-die`, `soldered-jewelry`, `woodworking-pens-knives`. Each page
has a TODO comment at the top listing the photos it needs.

## Template credit

Free-To-Engineer portfolio template © 2025 by [lowinertia.com](https://lowinertia.com).
