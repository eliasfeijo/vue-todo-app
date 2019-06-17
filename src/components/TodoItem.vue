<template>
  <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
    <input type="checkbox" v-bind:checked="todo.completed" @change="toggleCompleted">
    <p>{{ todo.title }}</p>
    <button @click="$emit('deleteTodo', todo.id)">x</button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    toggleCompleted() {
      this.todo.completed = !this.todo.completed;
    },
  },
};
</script>

<style scoped>
  .todo-item {
    display: flex;
    background: #e9e9e9;
    margin: 3px;
    padding: 10px;
    align-items: center;
  }
  .todo-item > input[type="checkbox"] {
    flex-grow: 1;
  }
  .todo-item > p {
    word-break: break-all;
    flex-grow: 10;
  }
  .todo-item.is-complete > p {
    text-decoration: line-through;
  }
  .todo-item > button {
    color: #fff;
    background-color: #f00;
    border-radius: 50%;
    border: #f00;
    padding: 4px;
  }
</style>
