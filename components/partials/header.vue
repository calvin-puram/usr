<template>
  <nav id="header" class="lg:fixed w-full z-30 top-0 text-white">
    <div class="w-full container mx-auto flex flex-wrap items-center mt-0 py-2">
      <div class="pl-4 flex items-center">
        <nuxt-link
          to="/"
          class="
            toggleColour
            text-white
            no-underline
            hover:no-underline
            font-bold
            text-2xl
            lg:text-4xl
          "
        >
          <svg
            class="h-8 fill-current inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.005 512.005"
          >
            <rect
              fill="#2a2a31"
              x="16.539"
              y="425.626"
              width="479.767"
              height="50.502"
              transform="matrix(1,0,0,1,0,0)"
            />
            <path
              class="plane-take-off"
              d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
            />
          </svg>
          Usr
        </nuxt-link>
      </div>

      <div
        id="nav-content"
        class="
          w-full
          flex-grow
          lg:flex lg:items-center lg:w-auto
          mt-2
          lg:mt-0
          bg-transparent
          text-black
          p-4
          lg:p-0
          z-20
        "
      >
        <ul class="list-reset flex justify-end flex-1 items-center">
          <li v-if="!$auth.user" class="mr-3">
            <nuxt-link
              to="/register"
              class="
                mx-auto
                lg:mx-0
                hover:underline
                bg-white
                text-gray-800
                font-bold
                rounded-lg
                text-sm
                mt-4
                lg:mt-0
                py-2
                px-4
                shadow
                no-underline
                opacity-75
                focus:outline-none focus:shadow-outline
                transform
                transition
                hover:scale-105
                duration-300
                ease-in-out
              "
            >
              Register
            </nuxt-link>
          </li>
          <li v-if="!$auth.user" class="mr-3">
            <nuxt-link
              id="navAction"
              to="/login"
              class="
                mx-auto
                lg:mx-0
                text-sm
                hover:underline
                bg-white
                text-gray-800
                font-bold
                rounded-lg
                mt-4
                lg:mt-0
                py-2
                px-4
                shadow
                no-underline
                opacity-75
                focus:outline-none focus:shadow-outline
                transform
                transition
                hover:scale-105
                duration-300
                ease-in-out
              "
            >
              Login
            </nuxt-link>
          </li>
          <li v-if="$auth.user" class="flex items-center mr-8">
            <nuxt-link to="/profile">
              <img
                :src="$auth.user.photo"
                alt="photo"
                class="
                  block
                  rounded-full
                  h-10
                  w-10
                  bg-cover bg-center
                  object-contain
                "
              />
            </nuxt-link>
          </li>
          <li v-if="$auth.user" class="flex items-center" @click="logout">
            <img
              src="~/assets/log-out.svg"
              alt="user"
              width="20px"
              class="cursor-pointer"
            />
          </li>
        </ul>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/')
    },
  },
}
</script>

<style>
a {
  text-decoration: none !important;
}
</style>
