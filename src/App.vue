<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import ShoesShop from './components/ShoesShop.vue';

</script>

<template>
  
    <Navbar></Navbar>
    <ShoesShop></ShoesShop>

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

  
    </div> -->
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->

  <!-- <RouterView /> -->
</template>

<style scoped>

*{
  margin: 0%;
  padding: 0%;
}

</style>
