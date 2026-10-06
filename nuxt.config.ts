// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  // Control: start with LAYOUT_TRANSITION=1 to give every route a layout transition
  app: { layoutTransition: process.env.LAYOUT_TRANSITION ? { name: 'layout', mode: 'out-in' } : false },
})
