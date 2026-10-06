<script setup lang="ts">
const nuxtApp = useNuxtApp()
const route = useRoute()

useHead({ titleTemplate: title => (title ? `${title} – Repro` : 'Repro') })

// Live view of the state behind the bug: the scroll offset, the document title,
// and whether NuxtPage's transition promise (which scrollBehavior and head disposal wait on) is pending
const scrollY = ref(0)
const title = ref('')
const pending = ref(false)
onMounted(() => {
  setInterval(() => {
    scrollY.value = Math.round(window.scrollY)
    title.value = document.title
    pending.value = !!nuxtApp['~transitionPromise']
  }, 100)
})
</script>

<template>
  <div>
    <aside class="status">
      <div>route: <b>{{ route.path }}</b></div>
      <div>scrollY: <b>{{ scrollY }}</b></div>
      <div>document.title: <b>{{ title }}</b></div>
      <div>
        ~transitionPromise pending:
        <b :class="{ stuck: pending }">{{ pending ? 'yes' : 'no' }}</b>
      </div>
    </aside>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
}

.status {
  position: fixed;
  top: 8px;
  right: 8px;
  z-index: 1;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid #ccc;
  font-size: 14px;
  line-height: 1.6;
}

.stuck {
  color: #c00;
}

.layout {
  padding: 16px;
}

.layout-name {
  margin: 0 0 16px;
  font-size: 12px;
  text-transform: uppercase;
  color: #666;
}

.spacer {
  height: 200vh;
  margin: 16px 0;
  background: repeating-linear-gradient(#f4f4f4 0 40px, #fff 40px 80px);
}

.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.3s;
}

.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
