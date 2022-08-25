import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s ',
    title: 'revue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Re:Vue is my anthology that expresses what I've learned from Information Technology" },
      { hid: 'keywords', name: 'keywords', content: 'Re:vue,revue,Nuxt.js,Vue.js,Laravel' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#da532c' },
      { hid: 'theme-color', name: 'theme-color', content: '#ffffff' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Re:Vue' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: 'https://sh-revue.net/' },
      { hid: 'og:title', property: 'og:title', content: 'Re:Vue' },
      { hid: 'og:description', property: 'og:description', content: "Re:Vue is my anthology that expresses what I've learned from Information Technology" },
      { hid: 'og:image', property: 'og:image', content: '/favicon/favicon-16x16.png' },
    ],
    link: [
      { hid: 'icon', rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { hid: 'icon32', rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { hid: 'icon16', rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { hid: 'manifest', rel: 'manifest', href: '/site.webmanifest' },
    ]
  },

  loading: '~/components/Loading.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/persistedstate.js", ssr: false },
    {
      src: '@/plugins/plugin',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/cognfig-modules
  modules: [
    ['@nuxt/content'],
    ['nuxt-webfontloader'],
    [
      '@nuxtjs/google-gtag',
      {
        id: 'G-M7RFW1SFQY',
        debug: true
      }
    ],
    ['nuxt-fontawesome'],
    // ['@nuxtjs/google-adsense'],
    ['@nuxtjs/moment']
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ],
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  webfontloader: {
    google: {
      families: ['Anton:400,700', 'Teko:400,700', 'Allura:400,700', 'Rock Salt:400,700']
    }
  },
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()
      return files.map(file => file.path === '/index' ? '/' : file.path);
    },
    dir: 'dist' //npm run generateで生成されるフォルダ名を変えられるよ。
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  // 'google-adsense': {
  //   id: 'ca-pub-8867179104088194'
  // },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  moment: {
    // ここにオプションが記述できる
    locales: ['ja']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
