<template>
  <div class="todo-list">
      <TodoItem 
        v-for="todo in todos"
        v-bind:key="todo.id" 
        v-bind:todo="todo"
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
    background: #efefef;
    display: flex;
    flex-direction: column;
    border-radius: 10%;
  }
</style>
