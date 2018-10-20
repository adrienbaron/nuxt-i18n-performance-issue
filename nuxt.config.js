const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [[
    "nuxt-i18n",
    {
      locales: [
        {
          code: "en",
          iso: 'en-US',
          file: "en.js"
        },
        {
          code: "fr",
          iso: 'fr-FR',
          file: "fr.js"
        }
      ],
      lazy: true,
      defaultLocale: "en",
      langDir: "assets/i18n/",
      vueI18n: {
        fallbackLocale: "en"
      }
    }
  ]],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
