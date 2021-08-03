export const state = () => ({
  loading: false,
  geolocation: {},
  weather: {},
})

export const getters = {
  loading: (state) => state.loading,
  geolocation: (state) => state.geolocation,
  getWeather: (state) => state.weather,
}

export const mutations = {
  SET_LOADING(state, load) {
    state.loading = load
  },

  SET_GEOLOCATION(state, load) {
    state.geolocation = load
  },

  SET_WEATHER(state, data) {
    state.weather = data
  },
}

export const actions = {
  async register({ commit }, registerData) {
    try {
      const data = await this.$axios.$post(
        'https://geo-tours.herokuapp.com/api/v1/users/signup',

        registerData
      )

      return data
    } catch (error) {}
  },

  async getWeather({ commit }, location) {
    try {
      const data = await this.$axios.$get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `http://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.NUXT_ENV_API_KEY}&units=metric`
        )}`
      )
      this.commit('SET_WEATHER', data)
    } catch (err) {}
  },

  async updateDetails({ commit }, userdata) {
    try {
      const data = await this.$axios.$patch(
        `https://geo-tours.herokuapp.com/api/v1/users/updateMe`,
        userdata
      )
      return data
    } catch (err) {}
  },
}
