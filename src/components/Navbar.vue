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
  <div class="row navbar m-0 p-0">
    <div class="col-9  p-0 my-2 setmargin-img">
      <img src="../assets/Logo-removebg-preview.png" alt="" width="75">
    </div>
  
    <div class="col-1  setmargin-img " style="text-align:center;">
      <RouterLink class="settext" to="/">Home </RouterLink>
 
    </div>
    <div class="col-1 setmargin-img " style="text-align:center;">
      <RouterLink  class="settext" to="/about"> Contract Us </RouterLink>
 
    </div> 
    <div class="col-1 setmargin-img " style="text-align:center;">
      <RouterLink  class="settext" to="/"> Login</RouterLink>
 
    </div>


  </div>


</template>

<style scoped>
.navbar {
 
  color: #ffff;
  background: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 35px;
}

nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  color: #ffff;
  cursor: pointer;
}
.settext{
  text-decoration: none !important;
  color: #fff !important;
  font-family: 'Inria Serif' !important;
  font-weight: 500 !important;
}
.setmargin-img{
  margin-top: -1.5rem!important;
}
/* @media only screen and (max-width: 600px) {
  .setmargin-img{
    background-color: red;
  margin-top: 0.5rem!important;
}
} */
</style>
