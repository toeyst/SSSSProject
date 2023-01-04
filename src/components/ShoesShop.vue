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
          <img src="src\assets\shoe02.webp" alt="" width="288" height="300">
        </div>
        <div class="section_item_text">
          <h3>Nike Air Force 1'07 LV8 Men</h3>
          <h3>4700$</h3>
        </div>
      </div>      
      
      <div class="section_grid_item2">
        <div class="section_item_img">
          <img src="src\assets\shoe03.webp" alt="" width="288" height="300">
        </div>
        <div class="section_item_text">
          <h3>Nike Air Max 97 SE Men Shoe</h3>
          <h3>6900$</h3>
        </div>
      </div>      
      
      <div class="section_grid_item3">
        <div class="section_item_img">
          <img src="src\assets\shoe04.webp" alt="" width="288" height="300">
        </div>
        <div class="section_item_text">
          <h3>Nike Blazer Mid Premium Women Shoe</h3>
          <h3>4700$</h3>
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
}
.section_grid_item{
  text-align: center;
}
.section_item_img img{
  width: 100%;
}
.section_item_text{
  color: black;
  font-weight: 500;
}

</style>
