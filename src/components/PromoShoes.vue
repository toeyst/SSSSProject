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
        <div class="promo-text-left">
          <h1>THE</h1>
          <h1>BEST SELLER</h1>
        </div>
        <div class="promo-img">
          <img src="src\assets\shoe01.png" class="rounded" alt="...">
        <div class="button-pos"> <button class="promo-button">BUY NOW</button></div>
        </div>
        <div class="promo-text-right">
          <h3>Nike Air Force 1 '07 Premium</h3>
          <h4>Men Shoe</h4>
          <h5>$4700</h5>
        </div>
    </div>
  </div>
</div>
</template>


<style scoped>

.promo-container{
  margin: 0 auto;
}
.promo-img img{
  width: 100%;
  height: 375px;
}
.promo-area-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: black !important;
  font-family: 'Inria Serif' !important;
  font-weight: 500 !important;
}
.promo-text-left{
  text-align: left;
  margin-top: 165px;
  text-decoration: solid;
}
.promo-text-right{
  text-align: left;
  margin-top: 165px;
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
  line-height: 60px;
  letter-spacing: 0em;
  text-align: center;

}
</style>