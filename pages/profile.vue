<template>
  <div
    v-if="Object.values(getWeather).length > 0"
    class="
      max-w-4xl
      flex
      items-center
      h-auto
      lg:h-screen
      flex-wrap
      mx-auto
      my-4
      lg:mt-12
      mt-24
    "
  >
    <!--Main Col-->
    <div
      id="profile"
      class="
        w-full
        rounded-lg
        lg:rounded-l-lg lg:rounded-r-none
        shadow-2xl
        bg-white
        opacity-75
        mx-6
      "
    >
      <div class="p-4 md:p-12 text-center">
        <!-- Image for mobile view-->
        <div>
          <img
            :src="$auth.user.photo"
            alt="photo"
            class="
              block
              rounded-full
              shadow-xl
              mx-auto
              -mt-16
              h-32
              w-32
              bg-cover bg-center
              object-contain
            "
          />
        </div>

        <h1 class="text-3xl font-bold pt-8 text-gray-400">
          {{ $auth.user.name }}
        </h1>
        <div
          class="mx-auto w-4/5 pt-3 border-b-2 border-green-500 opacity-25"
        ></div>
        <p
          class="
            pt-6
            text-base
            font-bold
            text-gray-400
            flex
            items-center
            justify-center
            lg:justify-start
            text-center
          "
        >
          <svg
            class="h-4 fill-current text-green-700 pr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
            />
          </svg>
          {{ $auth.user.email }}
        </p>
        <p
          class="
            pt-2
            text-base
            font-bold
            flex
            text-gray-400
            items-center
            justify-center
            lg:justify-start
          "
        >
          <svg
            class="h-4 fill-current text-green-700 pr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"
            />
          </svg>
          Your Location - {{ getWeather.coord.lon }}° ,
          {{ getWeather.coord.lat }}°
        </p>
        <div v-if="getWeather !== null" class="pt-8 text-sm text-gray-400">
          <div class="flex items-center justify-around">
            <h2 class="city-name">
              <span class="text-lg">{{ getWeather.name }}</span>
              <sup class="bg-green-900 p-1 ml-1 mb-1 rounded-full text-sm">{{
                getWeather.sys.country
              }}</sup>
            </h2>

            <h2>
              <div class="city-temp text-4xl text-black font-extrabold">
                {{ Math.round(getWeather.main.temp) }}<sup>°C</sup>
              </div>
            </h2>

            <figure>
              <img
                class="city-icon"
                :src="`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${getWeather.weather[0].icon}.svg`"
                :alt="getWeather.weather[0].description"
              />
              <figcaption>{{ getWeather.weather[0].description }}</figcaption>
            </figure>
          </div>
        </div>

        <div class="pt-12 pb-8">
          <nuxt-link
            to="/update-profile"
            class="
              bg-green-700
              hover:bg-green-900
              text-white
              font-bold
              py-2
              px-4
              rounded-full
            "
          >
            Update Details
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'auth',
  middleware: ['aut'],

  data() {
    return {
      geo: this.geolocation,
    }
  },
  computed: {
    ...mapGetters(['geolocation', 'getWeather']),
  },

  async created() {
    if (!this.geo) {
      const { coords } = await this.$CapacitorGeolocation.getCurrentPosition()
      this.geo = coords
    }

    this.$store.dispatch('getWeather', this.geo)
  },
}
</script>
