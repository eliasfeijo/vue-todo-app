<template>
  <div id="app">
    <h1>Todo List</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
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
