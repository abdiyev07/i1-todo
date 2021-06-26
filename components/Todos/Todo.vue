<template>
  <div class="todos__item">
    <div class="todos__item-title" @click="open">
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTodo',

  props: {
    todo: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },

  methods: {
    open() {
      this.$router.push({
        name: 'todo-id',
        params: { id: this.todo.id },
      })
    },
  },
}
</script>
