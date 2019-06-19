<template>
  <div class="todo-list">
      <TodoItem
        v-for="todo in todos"
        v-bind:key="todo.id"
        v-bind:todo="todo"
        v-on:deleteTodo="$emit('deleteTodo', todo.id)"
        v-on:toggleCompleted="$emit('toggleCompleted', todo.id)"
      />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
  .todo-list {
    background: rgb(235, 235, 200);
    display: flex;
    flex-direction: column;
    border-radius: 10%;
    margin: 10px;
    overflow-y: auto;
    max-height: 60vh;
    width: 100%;
  }
</style>
