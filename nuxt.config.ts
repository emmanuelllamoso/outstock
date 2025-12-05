// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vue3-carousel/dist/carousel.css",
    "~/assets/scss/main.scss",
  ],

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],

  app: {
    head: {
      title: "Outstock - Clean, Minimal eCommerce Vue Nuxt 3 Template",
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js",
        },
      ],
    },
  },

  // ✅ THIS FIXES YOUR DIGITALOCEAN ERROR
  nitro: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },

  compatibilityDate: '2024-11-10',
})
