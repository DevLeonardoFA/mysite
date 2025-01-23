// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // load scss file globally
  css: ['~/assets/scss/global.scss'],

  // seo
  app: {
    head: {
      title: 'Leonardo F. Alonso | Portifolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My Portifolio' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    }
  },

  modules: ['nuxt-aos']
})