<template>
  <div
    class="flex items-center flex-col justify-center h-screen w-full mx-auto"
  >
    <div
      class="
        bg-white
        shadow-md
        rounded
        lg:px-8 lg:w-1/3
        pt-6
        pb-8
        mb-4
        w-3/4
        px-2
        mx-auto
      "
    >
      <form class="mt-4" @submit.prevent="handleSubmit">
        <div class="mb-5">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Email
          </label>
          <input
            id="username"
            v-model="email"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-2
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            id="password"
            v-model="password"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            type="password"
            placeholder="******************"
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              w-full
              mx-auto
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none focus:shadow-outline
            "
          >
            <span>Sign In</span>
            <i v-if="loading" class="fas fa-circle-notch fa-spin ml-2"></i>
          </button>
        </div>
      </form>
      <p class="horizontal-rule my-6">OR</p>
      <div class="flex items-center flex-col other-auth-options">
        <button class="google" @click="useAuthProvider('google', Google)">
          <img src="~/assets/google-logo.webp" alt="google icon" />
          <span class="ml-2">Continue with Google</span>
        </button>
        <button class="facebook" @click="useAuthProvider('facebook', Facebook)">
          <i class="fab fa-facebook-f mr-2"></i>
          <span>Continue with Facebook</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Facebook, Google } from 'universal-social-auth'
export default {
  layout: 'auth',
  middleware: ['guest'],
  data() {
    return {
      email: '',
      password: '',
      Facebook,
      Google,
      responseData: {
        provider: '',
        code: '',
      },
    }
  },
  computed: {
    ...mapGetters(['loading']),
  },

  methods: {
    async handleSubmit() {
      try {
        this.$store.commit('SET_LOADING', true)
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        this.$router.push('/')
        this.$store.commit('SET_LOADING', false)
      } catch (error) {
        this.$store.commit('SET_LOADING', false)
      }
    },

    async useAuthProvider(provider, proData) {
      const pro = proData
      const ProData = pro
      try {
        const response = await this.$Oauth.authenticate(provider, ProData)
        const rsp = response
        if (rsp.code) {
          this.responseData.code = rsp.code
          this.responseData.provider = provider
          this.useSocialLogin()
        }
      } catch (err) {}
    },

    async useSocialLogin() {
      const pdata = {
        code: this.responseData.code,
        redirect_uri: process.env.REDIRECT_URL,
      }
      this.$nuxt.$loading.start()
      if (this.responseData.provider === 'google') {
        pdata.client_id = process.env.GOOGLE_CLIENT_ID
      }
      if (this.responseData.provider === 'facebook') {
        pdata.client_id = process.env.FACEBOOK_CLIENT_ID
      }

      try {
        const { data } = await this.$axios.post(
          `${process.env.APP_URL}api/v1/users/auth/social/${this.responseData.provider}`,
          pdata
        )
        if (data.success) {
          this.$nuxt.$loading.finish()
          this.$auth.setUserToken(data.token)
          this.$router.push('/')
        }
      } catch (err) {
        if (err) {
          this.$nuxt.$loading.finish()
          this.$toast.error(err.response.data.msg, {
            duration: 5000,
          })
        }
      }
    },
  },
}
</script>

<style>
.other-auth-options button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  width: 300px;
  margin-bottom: 15px;
}
.other-auth-options button img {
  width: 14px;
  margin-right: 5px;
}
.other-auth-options .facebook {
  background-color: #4063b3;
}
.other-auth-options .google {
  background-color: #fff;
  color: #707070;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.other-auth-options button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 15px;
}
.other-auth-options .fb-btn {
  margin-right: 5px;
}

.horizontal-rule {
  display: flex;
  flex-direction: row;
}
.horizontal-rule {
  color: #707070;
  font-size: 14px;
  font-weight: 400;
}
.horizontal-rule:before,
.horizontal-rule::after {
  content: '';
  flex: 1 1;
  border-bottom: 1px solid #707070;
  color: #707070;
  margin: auto;
}
.horizontal-rule::before {
  margin-right: 10px;
}
.horizontal-rule::after {
  margin-left: 10px;
}
</style>
