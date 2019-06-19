<template>
  <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
    <input
      type="checkbox"
      v-bind:checked="todo.completed"
      @change="$emit('toggleCompleted', todo.id)"
    >
    <p>{{ todo.title }}</p>
    <button @click="$emit('deleteTodo', todo.id)">x</button>
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
    display: flex;
    margin: 10px;
    padding: 10px;
    align-items: center;
    border-radius: 15%;
    justify-content: space-around;
    padding: 10px;
  }
  .todo-item > input[type="checkbox"] {
    outline: none;
  }
  .todo-item > p {
    word-break: break-all;
    flex-grow: 10;
    margin: 10px 5px;
  }
  .todo-item.is-complete > p {
    text-decoration: line-through;
  }
  .todo-item > button {
    color: #fff;
    background-color: #f00;
    border-radius: 50%;
    border: #f00;
    padding: 4px;
    min-width: 20px;
    outline: none;
  }
</style>
