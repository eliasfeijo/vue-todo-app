<template>
  <header>
    <h1>Todo List</h1>
    <span>
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
    </span>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
  h1 {
    margin: 10px;
  }
</style>
