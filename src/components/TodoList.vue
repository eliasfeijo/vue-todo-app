<template>
  <div class="todo-list">
    <div v-bind:key="todo.id" v-for="todo in todos">
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: ['todos'],
};
</script>
