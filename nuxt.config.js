export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "project_nuxt",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat'
      },
      {
        rel: 'stylesheet', href: 'https://use.typekit.net/sbl0zfx.css'
      },
      {
        rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css', integrity: 'sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk', crossorigin: 'anonymous'
      }
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/all.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/v-calendar.js', ssr: false },
    { src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]]
    }
  },

  //* MODULES

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  axios: {
    baseURL: 'http://localhost:3000/'
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
