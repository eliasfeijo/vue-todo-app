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
  name: 'Home',
  components: {
    TodoList,
    AddTodo,
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
