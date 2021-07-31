import Vue from 'vue'
import axios from 'axios'
import UniversalSocialauth from 'universal-social-auth'

if (process.client) {
  Vue.config.productionTip = false

  const options = {
    providers: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        redirectUri: process.env.REDIRECT_URL,
      },
      facebook: {
        clientId: process.env.FACEBOOK_CLIENT_ID,
        redirectUri: process.env.REDIRECT_URL,
      },
    },
  }

  const Oauth = new UniversalSocialauth(axios, options)

  Vue.prototype.$axios = axios
  Vue.prototype.$Oauth = Oauth
}
