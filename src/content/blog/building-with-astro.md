---
title: "Building Static Sites with Astro"
description: "A technical deep dive into why we love Astro for building performant, content-driven websites."
pubDate: 2024-05-03
tags: ["engineering", "astro", "web"]
---

At CodingCup Labs, we are constantly evaluating the tools and technologies we use to build digital products. For content-driven static sites, our framework of choice is currently **Astro**. Here's why.

## The Zero-JS Paradigm

Astro's core philosophy is to ship zero JavaScript to the client by default. In a world where many frameworks send massive JS bundles just to render static HTML, Astro is a breath of fresh air.

When you build an Astro site, the framework renders your components to static HTML at build time. This results in incredible performance out of the box. Users get a fast, fully rendered page immediately, without having to wait for hydration.

## Component Islands

Of course, most sites need *some* interactivity. Astro handles this beautifully with its "Islands Architecture." You can selectively hydrate individual components on the page only when needed.

For example, you might have a static blog post but an interactive comment section at the bottom. Astro allows you to hydrate just the comment section, leaving the rest of the page completely static.

## Framework Agnostic

One of the most powerful features of Astro is its framework-agnostic nature. You can write your components using React, Vue, Svelte, or even plain HTML and vanilla JS. This flexibility allows us to choose the right tool for the job without being locked into a single ecosystem.

In this current project, we are sticking to pure Astro components and vanilla CSS to maintain our "Minimal Neobrutalism" aesthetic without the overhead of external libraries.

## Conclusion

Astro aligns perfectly with our engineering principles: it's fast, flexible, and focuses on delivering a superior user experience. We're excited to continue exploring its capabilities and building even more robust static sites.
