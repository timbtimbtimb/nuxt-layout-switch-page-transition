<script setup lang="ts">
definePageMeta({
  pageTransition: { name: 'page', mode: 'out-in' },
})

useHead({ title: 'Transition home' })
</script>

<template>
  <main>
    <h1>Transition home</h1>
    <p>Control: like Home, but with a <code>pageTransition</code>. Scroll to the bottom.</p>
    <div class="spacer" />
    <p>
      <NuxtLink to="/same-layout">
        Go to /same-layout
      </NuxtLink>
    </p>
  </main>
</template>
