<script setup lang="ts">
definePageMeta({
  layout: 'other',
  pageTransition: { name: 'page', mode: 'out-in' },
})

// Any async setup makes this page's <Suspense> go pending when the new layout mounts it.
// Remove this line and everything works.
await new Promise(resolve => setTimeout(resolve, 100))
</script>

<template>
  <main>
    <h1>Top of /other</h1>
    <p>
      Expected: this heading is in view, <code>document.title</code> is "Repro" (this page sets no title) and the
      transition promise is not pending.
    </p>
    <div class="spacer" />
    <p>
      3. <NuxtLink to="/">
        Back to Home
      </NuxtLink>
      from the bottom of this page: Home should open at the top, but the stuck promise blocks that scroll too.
    </p>
  </main>
</template>
