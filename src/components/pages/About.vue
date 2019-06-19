<template>
  <div class="about">
    <p>
      I made this app using
      <a href="https://vuejs.org/" target="_blank">
        Vue</a>.
    <p>
      Many thanks to
      <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank">
      Traversy Media</a>
      for their
      <a href="https://www.youtube.com/watch?v=Wy9q22isx3U" target="_blank">
      vue tutorial</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
  .about {
    background: rgb(235, 235, 200);
    border-radius: 15%;
  }
  .about > * {
    text-align: center;
    margin: 10px;
  }
  li {
    list-style: none;
  }
</style>
