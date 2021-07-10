export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'p2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type:'text/css', href: '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-vue-material', {
      theme: 'default-dark',
      components: ['MdTabs', 'MdButton', 'MdBottomBar', 'MdApp', 'MdLayout']
    }]
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
