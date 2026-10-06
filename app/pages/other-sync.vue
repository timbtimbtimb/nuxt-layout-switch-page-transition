<script setup lang="ts">
definePageMeta({
  layout: 'other',
  pageTransition: { name: 'page', mode: 'out-in' },
})
</script>

<template>
  <main>
    <h1>Top of /other-sync</h1>
    <p>Control: same as /other without the <code>await</code>. Expected and actual: this heading is in view.</p>
    <div class="spacer" />
  </main>
</template>
