<template>
  <form class="add-todo" v-on:submit="addTodo">
    <input type="text" placeholder="Add Todo..." v-model="todoTitle">
    <input type="submit" value="Submit">
  </form>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      todoTitle: "",
    };
  },
  methods: {
    addTodo: function (e) {
      e.preventDefault();
      this.$emit('addTodo', this.todoTitle);
      this.todoTitle = "";
    }
  },
}
</script>

<style scoped>
  .add-todo {
    display: flex;
    padding: 10px;
  }
  .add-todo > input[type="text"] {
    flex-grow: 10;
  }
  .add-todo > input[type="submit"] {
    flex-grow: 1;
  }
</style>
