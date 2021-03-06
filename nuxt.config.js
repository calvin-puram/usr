require('dotenv').config()
export default {
  target: 'server',
  head: {
    title: 'user management app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700',
        rel: 'stylesheet',
      },
      {
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
        rel: 'stylesheet',
      },
    ],
  },

  css: [],

  plugins: [
    { src: '~/plugins/modules/auth', ssr: false },

    {
      src: '~/plugins/modules/geolocation',
      mode: 'client',
    },
  ],

  loading: '~/components/partials/preLoader.vue',

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxtjs/auth-next', '@nuxtjs/axios', '@nuxtjs/toast'],

  toast: {
    position: 'bottom-right',
  },

  axios: {
    proxy: true,
    credentials: false,
    baseURL: process.env.NUXT_ENV_APP_API,
  },

  proxy: {
    '/data/': process.env.NUXT_ENV_APP_API,
  },

  auth: {
    redirect: false,
    strategies: {
      local: {
        scheme: 'local',
        token: {
          property: 'token',
        },

        endpoints: {
          login: {
            url: `${process.env.NUXT_ENV_APP_URL}api/v1/users/login`,
          },
          logout: false,
          user: {
            url: `${process.env.NUXT_ENV_APP_URL}api/v1/users/myprofile`,
          },
        },
      },
    },
  },

  build: {},
}
