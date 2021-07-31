export const state = () => ({
  loading: false,
})

export const getters = {
  loading: (state) => state.loading,
}

export const mutations = {
  SET_LOADING(state, load) {
    state.loading = load
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
}
