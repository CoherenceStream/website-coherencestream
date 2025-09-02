// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'CoherenceStream - A Besearch Entity',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'CoherenceStream is a besearch entity building peer-to-peer health networks using HOP and BentoBoxDS technology.' }
      ]
    }
  },
  nitro: {
    preset: 'static'
  }
})