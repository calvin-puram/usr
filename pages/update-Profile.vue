<template>
  <div
    class="
      relative
      lg:min-h-screen
      flex
      items-center
      justify-center
      lg:py-12
      px-4
      sm:px-6
      lg:px-8
      mt-12
      lg:mt-0
    "
  >
    <div class="absolute inset-0 z-0"></div>
    <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
      <form class="mt-8 space-y-6" @submit.prevent="handleUpdate">
        <div class="relative">
          <label class="text-sm font-bold text-gray-700 tracking-wide"
            >Email</label
          >
          <input
            v-model="email"
            class="
              w-full
              text-base
              py-2
              border-b border-gray-300
              text-gray-400
              focus:outline-none focus:border-indigo-500
            "
            type="email"
            placeholder="mail@gmail.com"
          />
        </div>
        <div class="mt-8 content-center">
          <label class="text-sm font-bold text-gray-700 tracking-wide">
            Name
          </label>
          <input
            v-model="name"
            class="
              w-full
              content-center
              text-base
              py-2
              border-b border-gray-300
              focus:outline-none focus:border-indigo-500
              text-gray-400
            "
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <button
            type="submit"
            class="
              w-full
              flex
              justify-center
              bg-indigo-500
              text-gray-100
              p-4
              rounded-full
              tracking-wide
              font-semibold
              focus:outline-none focus:shadow-outline
              hover:bg-indigo-600
              shadow-lg
              cursor-pointer
              transition
              ease-in
              duration-300
            "
          >
            Update Details
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['aut'],
  data() {
    return {
      name: this.$auth.user.name,
      email: this.$auth.user.email,
    }
  },
  methods: {
    async handleUpdate() {
      this.$nuxt.$loading.start()
      await this.$store
        .dispatch('updateDetails', {
          name: this.name,
          email: this.email,
        })
        .then(async (res) => {
          if (res && res.success) {
            await this.$auth.fetchUser()
            this.$router.push('/profile')
          }
        })

      this.$nuxt.$loading.finish()
    },
  },
}
</script>
