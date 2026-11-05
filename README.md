# LivingWorld website

The website and devlog for LivingWorld, built with [Eleventy](https://www.11ty.dev/)
and published to GitHub Pages at https://scripo.github.io/livingworld-site/.

## Write a devlog post

Add a Markdown file to `src/devlog/posts/`, named `YYYY-MM-DD-short-title.md`:

```markdown
---
title: The first winter
summary: One sentence shown on the devlog list and in the feed.
---

Post text in Markdown.
```

The date comes from the file name and the URL from the rest
(`/devlog/the-first-winter/`). Push to `main` and the site rebuilds in about a minute.

To show concept art in a post, always use the labeled include:

```
{% set img = "world-map.jpg" %}{% set alt = "Concept art: ..." %}{% set caption = "..." %}
{% include "concept.njk" %}
```

## Add a YouTube Short

Add an entry to `src/_data/videos.json`, newest first. The `id` is the part after
`/shorts/` in the video's URL:

```json
[
  { "id": "abc123XYZ", "title": "The band that walked into winter" }
]
```

## Settings

`src/_data/site.json` holds the site title, the YouTube channel URL
(`youtubeChannel`) and the Buttondown username (`buttondownUsername`).
The email form stays disabled until a Buttondown username is set.

## Run locally

```sh
npm install
npm start      # preview at http://localhost:8080
```

## One-time GitHub setup

In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
