<script setup>
import MainPage from '../components/MainPage.vue'
import {createRouter, createWebHistory} from 'vue-router'
const routes = [
  {path: '/', component: MainPage }
]

const router = createRouter({
  history: createWebHistory(),
})

</script>

<template>
  <nav>
    <ul class="nav-header">
      <li class="nav-item"><RouterLink to='/'></RouterLink>HOME</li>
      <li class="nav-item">PROFILE</li>
      <li class="nav-item">ABOUT</li>
      <li class="nav-item">CONTACT</li>
    </ul>
  </nav>
</template>

<style scoped>
nav{
  top: 0;
  display: flex;
  border: 1px solid red;
  position: sticky;
}
.nav-header {
  list-style: none;
}

.nav-item {
  display: inline;
  padding: 20px;
}
</style>
