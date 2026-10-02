<template>
  <div class="home">
    <h1>Home</h1>
    <p class="lead">{{ msg }}</p>
    <div class="alert alert-info mt-4" role="alert">
      <strong>Welcome to FIN-LAB-1 (Vue 3 + Vite Edition)!</strong> This Single Page Application runs on Node v24 LTS using Vue Router 4.
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  padding: 20px 0;
}
h1 {
  font-weight: 700;
  color: #2c3e50;
}
</style>
