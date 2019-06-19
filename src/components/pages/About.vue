<template>
  <div class="about">
    <p>
      I made this app using the following stack:
    </p>
    <ul>
      <li>
        Vue
      </li>
    </ul>
    <p>
      Many thanks to Traversy Media for their vue tutorial.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
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
