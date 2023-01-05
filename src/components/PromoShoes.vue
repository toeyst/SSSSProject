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
<div class="container-fluid">
  <div class="promo-area-grid">
    <div class="promo-text-left">
      <h1>THE BEST</h1>
    </div>
    <div class="promo-img">
      <img src="src\assets\shoe04.webp" class="rounded mx-auto d-block" alt="...">
      <div class="button-area">
        <div class="button-pos"><button type="button" class="promo-button">BUY NOW AI NA HEE</button></div>
      </div>
    </div>
    <div class="promo-text-right">
      <h3>mo na rak</h3>
    </div>
  </div>
</div>
</template>


<style scoped>

.container-fluid{
  height: 450px;
}
.promo-container{
  max-width: max-content;
  margin: 0 auto;
}
.promo-area-grid{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  text-align: left;
  font-family:'Courier New', Courier, monospace
}
.button-pos{
  justify-content: center;
}
</style>