# Room Generator

Click a button. A room appears. What's the story here?

A procedural room generator for tabletop RPG players, writers, and anyone who likes finding a story in randomness. Each room is created from building blocks of room type, lighting, interesting details, and so on.

I have built this project several times over, but this time I scoped it, I'm finishing it, and I'm hosting it.

All of the content and code has been made without the use of AI. It has been a sounding board during the development of this project, but has not been used to do any actual work.

---

## Running Locally

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

---

## Stack

- Vite + React
- SCSS
- Vanilla JS procedural generation — no AI, no APIs, no accounts

---

## What's Intentionally Not Here

This is an MVP with a deliberate scope. The following are future ideas that may come to fruition:

- Mood/vibe system
- Tagging or filtering content
- Item generators, character generators, map generators
- Save system or shareable URLs
- Mobile optimization (althouth this was built with a mobile-first approach so far)
- Settings or configuration of any kind

---

## Content

All generated content lives in `/src/content` as simple JSON arrays. If you want to add or modify room types, lighting, sensory details, story details, or surprises, that's the only place you need to touch.

---

## Credits

Favicon from [Pictogrammers](https://github.com/Pictogrammers/Memory?ref=svgrepo.com) in GPL License via [SVG Repo](https://www.svgrepo.com/)