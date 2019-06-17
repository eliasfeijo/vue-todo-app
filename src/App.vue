<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoList
      v-bind:todos="todos"
      v-on:deleteTodo="deleteTodo"
    />
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
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  },
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: beige;
  }
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
  }
  #app > h1 {
    text-align: center;
    margin: 10px;
  }
  #app > * {
    width: 100%;
  }
</style>
