<template>
  <section class="todo-details">
    <h3 class="title todo-details__title">Задача</h3>
    <div class="todo-details__row">
      <span>ID задачи:</span>
      <span> {{ details.id || 'Отсутствует ID' }} </span>
    </div>
    <div class="todo-details__row">
      <span>Заголовок задачи:</span>
      <span> {{ details.title || 'Отсутствует заголовок' }} </span>
    </div>
    <div class="todo-details__row">
      <span>Завершен: </span>
      <span> {{ details.completed ? 'Да' : 'Нет' }} </span>
    </div>
    <div class="todo-details__row">
      <span>ID пользователя: </span>
      <span> {{ details.userId || 'Отсутствует ID пользователя' }} </span>
    </div>
    <button class="button mt-3" @click="goBack">Назад</button>
  </section>
</template>

<script>
export default {
  name: 'TodoDetails',

  async asyncData({ params, $axios }) {
    try {
      const { data } = await $axios.get(`/todos?id=${params.id}`)
      return { details: data[0] }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },

  data: () => ({
    details: {},
  }),

  methods: {
    goBack() {
      this.$router.push({ name: 'index' })
    },
  },
}
</script>

<style lang="scss">
.todo-details {
  @apply pt-5 text-center;

  &__title {
    @apply mb-10;
  }
}
</style>
