<script setup lang="ts">
useHead({ title: 'Home' })
</script>

<template>
  <main>
    <h1>Home</h1>
    <p>1. Scroll to the bottom of this page.</p>
    <div class="spacer" />
    <p>
      2. <NuxtLink to="/other">
        Go to /other
      </NuxtLink>
      (layout "other", a <code>pageTransition</code> and an async setup, no layout transition)
    </p>
    <p>
      Variants:
      <NuxtLink to="/other-sync">
        /other-sync
      </NuxtLink>
      (control, no <code>await</code>),
      <NuxtLink to="/same-layout">
        /same-layout
      </NuxtLink>
      (default layout).
    </p>
  </main>
</template>
