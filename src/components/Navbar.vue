<script setup>
import { RouterLink, RouterView } from 'vue-router'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
<header :class="{'scrolled-nav': scrollPosition}">
<nav>

<div class="container">
  <div class="row">
    <div class="col-6">
      <RouterLink to="/">Home   </RouterLink>
    <RouterLink to="/about">   Contract Us </RouterLink> 
    <RouterLink to="/">    Login</RouterLink>
    </div>
    <div class="col-6">
      <RouterLink to="/">Home   </RouterLink>
    <RouterLink to="/about">   Contract Us </RouterLink> 
    <RouterLink to="/">    Login</RouterLink>
    </div>
    
  </div>
</div>

</nav>

</header>
</template>

<style scoped>

</style>
