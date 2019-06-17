<template>
  <div class="todo-item">
    <p>{{ todo.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
};
</script>

<style scoped>
  .todo-item {
    background: #e9e9e9;
    margin: 3px;
    padding: 10px;
  }
  .todo-item > p {
    word-break: break-all;
  }
</style>
