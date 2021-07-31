require('dotenv').config()
export default {
  ssr: false,
  head: {
    title: 'auth',
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
    { src: '~/plugins/modules/social-auth', mode: 'client' },
  ],

  loading: {
    color: 'white',
    height: '3px',
  },

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
    baseURL: process.env.APP_URL,
    credentials: true,
  },

  proxy: {
    '/backend': {
      target: process.env.APP_URL,
      pathRewrite: { '^/backend': '' },
    },
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
            url: `${process.env.APP_URL}api/v1/users/login`,
          },
          logout: false,
          user: {
            url: `${process.env.APP_URL}api/v1/users/myprofile`,
          },
        },
      },
    },
  },

  build: {},
}
