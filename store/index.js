export const state = () => ({
  isLoading: false,
  users: [],
})

export const mutations = {
  SET_LOADING(state, payload) {
    state.isLoading = payload
  },

  SET_USERS(state, payload) {
    state.users = payload
  },
}

export const actions = {
  async FETCH_USERS({ commit }) {
    const { data } = await this.$axios.get('/users')
    commit('SET_USERS', data)
  },
}
