<script setup lang="ts">
definePageMeta({
  pageTransition: { name: 'page', mode: 'out-in' },
})

await new Promise(resolve => setTimeout(resolve, 100))
</script>

<template>
  <main>
    <h1>Top of /same-layout</h1>
    <p>Same as /other, but in the default layout.</p>
    <div class="spacer" />
  </main>
</template>
