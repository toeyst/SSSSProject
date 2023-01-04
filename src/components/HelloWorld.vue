<script setup>
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
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item">Home</li>
  <li class="list-group-item">Contract Us</li>
  <li class="list-group-item">Login</li>
</ul>


</nav>
</header>
</template>

<style scoped>

</style>
