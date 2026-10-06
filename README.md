# Nuxt: a page transition started for a freshly mounted page is never settled

> This README was written by an AI agent (Claude Code) on behalf of @timbtimbtimb.

Minimal reproduction, Nuxt 4.6.0.

[Open in StackBlitz](https://stackblitz.com/github/timbtimbtimb/nuxt-layout-switch-page-transition)

## Setup

- `app.vue` renders `<NuxtLayout><NuxtPage /></NuxtLayout>`. There is no layout transition unless the dev server is started with `LAYOUT_TRANSITION=1`.
- `/` uses the `default` layout, has no page transition and sets `useHead({ title: 'Home' })`.
- `/other` uses the `other` layout, `pageTransition: { name: 'page', mode: 'out-in' }` and an async setup (`await` of 100 ms).

The box in the top-right corner shows `window.scrollY`, `document.title` and whether `nuxtApp['~transitionPromise']` is set.

## Steps

1. On `/`, scroll to the bottom and click **Go to /other**.
2. Scroll to the bottom of `/other` and click **Back to Home**.

## Expected

1. `/other` opens at the top, `document.title` is `Repro` (it sets no title) and the transition promise is not pending.
2. Home opens at the top.

## Actual

1. `/other` keeps the previous scroll offset, `document.title` still reads `Home – Repro`, and the transition promise stays pending.
2. Home keeps the scroll offset too. Every later scroll waits on the same promise until some page transition happens to leave.

## Variants and controls

Reload on the starting page before each one: the stuck promise survives client-side navigation.

| Start on | Go to | What differs | Result |
| --- | --- | --- | --- |
| `/` | `/other-sync` | no `await` | works |
| `/` | `/same-layout` | default layout: going there adds the `<Transition>` wrapper, which remounts the page's `<Suspense>` | broken |
| `/transition-home` | `/same-layout` | the starting page has a `pageTransition` too | works |
| `/` | `/other`, with the dev server started as `LAYOUT_TRANSITION=1 npm run dev` | every route has a layout transition | works |
