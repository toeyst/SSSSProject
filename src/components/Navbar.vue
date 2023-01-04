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
<div class="nav">
  <RouterLink to="/">Home   </RouterLink>
  <RouterLink to="/about">   Contract Us </RouterLink> 
  <RouterLink to="/">    Login</RouterLink>

</div>
<div class="container">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>





</nav>
</header>
</template>

<style scoped>
.nav{
  width: 500px;
  background-color: black;
  color: white;
}
</style>
