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
<div class="promo_section_area">
  <div class="promo-container">
    <div class="promo-area-grid">
      <div class="hellotextleft1">
        <h1>THE</h1>
      </div>
        <div class="promo-text-left">
          <h2>BEST</h2>
          <h2>SELLER</h2>
        </div>
        <div class="promo-img">
          <img src="src\assets\PromoShoesPic.png" class="rounded" alt="...">
        <div class="button-pos">
          <router-link to="/cart">
            <button class="promo-button" @click="$emit('checkLogin')">BUY NOW</button>
          </router-link>
        </div>
        </div>
        <div class="promo-text-right">
          <h3>Nike Air Force 1 '07 Premium</h3>
          <h4>Men Shoe</h4>
          <h5>฿4700</h5>
        </div>
    </div>
  </div>
</div>
</template>


<style scoped>

h1 {
font-size: 150px;
}
h2{
  font-size: 80px;
}
.promo-container{
  margin: 0 auto;
}
.promo-img img{
  object-fit: contain;
}
.promo-area-grid{
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  color: black !important;
  font-family: 'Prompt';
  font-weight: 500 !important;
}
.promo-text-left{
  font-family: 'Inria Serif' !important;
  text-align: left;
  margin-top: 165px;
  text-decoration-line: underline;
  text-decoration-thickness: 3px;
}
.hellotextleft1{
  font-family: 'Inria Serif' !important;
  padding-right: 10px;
  padding-top: 100px;
  text-align: right;
  text-decoration-line: underline;
  text-decoration-thickness: 3px;
}
.promo-text-right{
  text-align: left;
  margin-top: 275px;
  margin-left: 10px;
}
.button-pos{
  margin-top: auto;
  text-align: center;
}
.promo-button{
  width: 250px;
  color: white;
  background: #D10000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 60px;
  font-family: Inria Serif;
  font-size: 30px;
  font-style: italic;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: center;

}
</style>