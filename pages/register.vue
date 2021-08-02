<template>
  <div class="flex items-center justify-center h-screen w-full">
    <form
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
      @submit.prevent="handleSubmit"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input
          id="name"
          v-model="name"
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          type="text"
          placeholder="name"
        />
      </div>
      <div class="mb-4">
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
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-4">
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
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="conPassword"
        >
          Confirm Password
        </label>
        <input
          id="conPassword"
          v-model="conPassword"
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
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            w-full
            block
            py-2
            px-4
            rounded
            focus:outline-none focus:shadow-outline
          "
          type="submit"
        >
          <span>Sign Up</span>
          <i v-if="loading" class="fas fa-circle-notch fa-spin ml-2"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  layout: 'auth',
  middleware: ['guest'],
  data() {
    return {
      email: '',
      password: '',
      conPassword: '',
      name: '',
    }
  },
  computed: {
    ...mapGetters(['loading']),
  },
  methods: {
    ...mapActions(['register']),
    async handleSubmit() {
      this.$store.commit('SET_LOADING', true)
      if (this.password === this.conPassword) {
        const data = {
          email: this.email,
          password: this.password,
          passwordConfirm: this.conPassword,
          name: this.name,
        }

        await this.register(data).then(async (res) => {
          if (res && res.success) {
            await this.$auth
              .loginWith('local', {
                data: {
                  email: this.email,
                  password: this.password,
                },
              })
              .then(() => {
                this.$router.push('/')
                this.$store.commit('SET_LOADING', false)
              })
              .catch(() => {
                this.$store.commit('SET_LOADING', false)
              })
          }
        })
      }
    },
  },
}
</script>
