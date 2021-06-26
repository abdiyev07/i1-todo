export default {
  async FETCH_TODOS({ commit }) {
    const { data } = await this.$axios.get('/todos')
    commit('SET_TODOS', data)
  },
}
