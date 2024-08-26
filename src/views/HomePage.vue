<template>
    <div class="home">
      <p class="home__header">Welcome to Home <RouterLink to="/login">Page</RouterLink></p>
    </div>
  </template>
  
  <script>

  export default {
    name: 'HomePage',
  }
  </script>

<style>
.home__header {
    font-size: 60px;
}
</style>
  