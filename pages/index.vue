<template>
  <section class="main">
    <h2 class="title main__title">Список задач</h2>

    <div v-if="todos.length" class="todos">
      <div class="todos__list">
        <Todo v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
      </div>

      <div class="todos__filter">
        <div class="todos__filter-title">Фильтр по пользователям:</div>
        <div v-for="user in users" :key="user.email" class="todos__filter-item">
          <input v-model="selectedUsers" :value="user.id" type="checkbox" />
          <span> {{ user.name }} </span>
        </div>
      </div>
    </div>

    <div v-else class="todos-empty">Список задач пуст</div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',

  components: {
    Todo: () => import('~/components/Todos/Todo.vue'),
  },

  data: () => ({
    selectedUsers: [],
  }),

  async fetch() {
    try {
      if (this.users.length && this.todos.length) return
      await Promise.all([this.fetchUsers(), this.fetchTodos()])
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },

  computed: {
    ...mapState({
      users: (state) => state.users,
      todos: (state) => state.todos.list,
    }),

    filteredTodos() {
      if (!this.selectedUsers.length) return this.todos
      return this.todos.filter((todo) =>
        this.selectedUsers.includes(todo.userId)
      )
    },
  },

  methods: {
    ...mapActions({
      fetchUsers: 'FETCH_USERS',
      fetchTodos: 'todos/FETCH_TODOS',
    }),
  },
}
</script>

<style lang="scss">
.todos {
  @apply flex justify-center;

  &__filter {
    @apply ml-9;
  }

  &__item {
    @apply p-4 max-w-md mx-auto rounded-xl shadow-md text-center mb-5;

    &:nth-last-child(1) {
      margin-bottom: 1rem;
    }

    &-title {
      @apply text-xl font-medium text-black cursor-pointer;
    }
  }
}
</style>
