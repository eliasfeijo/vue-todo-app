<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoList
      v-bind:todos="todos"
      v-on:deleteTodo="deleteTodo"
      v-on:toggleCompleted="toggleCompleted"
    />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

const initialData = [
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
];

export default {
  name: 'app',
  components: {
    TodoList,
  },
  data() {
    return {
      todos: initialData,
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    toggleCompleted(id) {
      this.todos = this.todos.map((t) => {
        const todo = t;
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
    margin: auto;
    background: rgb(240, 240, 210);
  }
  #app > h1 {
    text-align: center;
    margin: 10px;
  }
  #app > * {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    #app {
      width: 80%;
    }
  }
  @media screen and (min-width: 800px) {
    #app {
      width: 50%;
    }
  }
</style>
