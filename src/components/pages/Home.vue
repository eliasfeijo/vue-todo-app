<template>
  <div class="home">
    <AddTodo v-on:addTodo="addTodo" />
    <TodoList
      v-bind:todos="todos"
      v-on:deleteTodo="deleteTodo"
      v-on:toggleCompleted="toggleCompleted"
    />
  </div>
</template>

<script>
import TodoList from '../TodoList.vue';
import AddTodo from '../AddTodo.vue';
import axios from 'axios';

const baseUrl = "https://jsonplaceholder.typicode.com/todos";

export default {
  name: 'Home',
  components: {
    TodoList,
    AddTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    axios.get(`${baseUrl}/?_limit=5`).then(response => {
      this.todos = response.data;
    }).catch(error => console.log(error));
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
    addTodo(todoTitle) {
      const todo = {
        id: 4,
        title: todoTitle,
        completed: false
      };
      this.todos = [...this.todos, todo];
    },
  },
};
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
