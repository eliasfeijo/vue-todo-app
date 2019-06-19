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
import axios from 'axios';
import TodoList from '../TodoList.vue';
import AddTodo from '../AddTodo.vue';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

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
    console.log('Populating Todos list with initial data from JSONPlaceholder');
    console.log(`Trying GET request on: ${baseUrl}`);
    axios.get(`${baseUrl}/?_limit=5`).then((response) => {
      console.log('GET request returned OK', response);
      this.todos = response.data;
    }).catch(error => console.log(error));
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      console.log(`Trying DELETE request on: ${baseUrl}/${id}`);
      axios.delete(`${baseUrl}/${id}`).then((response) => {
        console.log('DELETE request returned OK', response);
      }).catch(error => console.log(error));
    },
    toggleCompleted(id) {
      this.todos = this.todos.map((t) => {
        const todo = t;
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      console.log(`Trying PUT request on: ${baseUrl}/${id}`);
      axios.put(`${baseUrl}/${id}`, { todo: this.todos.find(t => t.id === id) })
        .then((response) => {
          console.log('PUT request returned OK', response);
        }).catch(error => console.log(error));
    },
    addTodo(todoTitle) {
      let todo = {
        title: todoTitle,
        completed: false,
      };
      console.log(`Trying POST request on: ${baseUrl}`);
      axios.post(`${baseUrl}/`, { todo }).then((response) => {
        console.log('POST request returned OK', response);
        todo = response.data.todo;
        todo.id = response.data.id;
        this.todos = [...this.todos, todo];
      }).catch(error => console.log(error));
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
