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
        '/backend/api/v1/users/signup',

        registerData
      )

      return data
    } catch (error) {}
  },

  async getWeather({ commit }, location) {
    try {
      const data = await this.$axios.$get(
        `/api/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.API_KEY}&units=metric`
      )
      this.commit('SET_WEATHER', data)
    } catch (error) {}
  },

  async updateDetails({ commit }, userdata) {
    try {
      const data = await this.$axios.$patch(
        `/backend/api/v1/users/updateMe`,
        userdata
      )
      return data
    } catch (error) {}
  },
}
