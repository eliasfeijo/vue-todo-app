<template>
  <div id="app">
    <TodoList v-bind:todos="todos" />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'app',
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Todo 1',
          completed: false,
        },
        {
          id: 2,
          title: 'Todo 2',
          completed: true,
        },
        {
          id: 3,
          title: 'Todo 3',
          completed: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>
