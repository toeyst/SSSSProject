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
<div class="section_area">
  <div class="container">
    <div class="section_area_grid">
      <div class="section_grid_item1">

        <div class="section_item_img">
          <img src="src\assets\shoe02.png" alt="" width="288" height="300">
        </div>
        <div class="section_item_text">
          <h4>Nike Air Force 1'07 LV8</h4>
          <h5>Men Shoe</h5>
          <h6>$4700</h6>
        </div>
      </div>      
      
      <div class="section_grid_item2">
        <div class="section_item_img">
          <img src="src\assets\shoe03.png" alt="" width="288" height="300">
        </div>
        <div class="section_item_text">
          <h4>Nike Air Max 97 SE</h4>
          <h5>Men Shoe</h5>
          <h6>$6900</h6>
        </div>
      </div>      
      
      <div class="section_grid_item3">
        <div class="section_item_img">
          <img src="src\assets\shoe04.png" alt="" width="288" height="300">
        </div>
        <div class="section_item_text">
          <h4>Nike Blazer Mid Premium</h4>
          <h5>Women Shoe</h5>
          <h6>$4700</h6>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>


.container{
  width: 1150px;
  margin: 0 auto;
}
.section_area_grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap : 100px;
  text-align: center;
  color: #fff !important;
  font-family: 'Inria Serif' !important;
  font-weight: 500 !important;;
}
.section_item_img img{
  width: 100%;
}
.section_item_text{
  color: black;
  background-color: white;
  text-align: left;
}

</style>
