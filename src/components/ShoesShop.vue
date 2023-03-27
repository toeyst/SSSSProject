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
          <img src="src\assets\ShoeShop01.png" alt="" width="288" height="300"/>
        </div>
        <div class="section_item_text">
          <h4>Nike Air Force 1'07 LV8</h4>
          <h5>Men Shoe</h5>
          <h6>฿4700</h6>
          <router-link to="/cart">
            <button class="button-28" role="button" type="submit">
              <img src="src\assets\cart.png" alt="buttonpng" border="0" width="20" height="20" />
              <span class="text">Add to cart</span>
            </button>
          </router-link>
        </div>
      </div>      
      
      <div class="section_grid_item2">
        <div class="section_item_img">
          <img src="src\assets\ShoeShop02.png" alt="" width="288" height="300"/>
        </div>
        <div class="section_item_text">
          <h4>Nike Air Max 97 SE</h4>
          <h5>Men Shoe</h5>
          <h6>฿6900</h6>
          <router-link to="/cart">
            <button class="button-28" role="button" type="submit">
              <img src="src\assets\cart.png" alt="buttonpng" border="0" width="20" height="20" />
              <span class="text">Add to cart</span>
            </button>
          </router-link>
        </div>
      </div>      
      
      <div class="section_grid_item3">
        <div class="section_item_img">
          <img src="src\assets\ShoeShop03.png" alt="" width="288" height="300"/>
        </div>
        <div class="section_item_text">
          <h4>Nike Blazer Mid Premium</h4>
          <h5>Women Shoe</h5>
          <h6>฿4700</h6>
          <router-link to="/cart">
            <button class="button-28" role="button" type="submit">
              <img src="src\assets\cart.png" alt="buttonpng" border="0" width="20" height="20" />
              <span class="text">Add to cart</span>
            </button>
          </router-link>
        </div>
      </div>

      <div class="section_grid_item4">
        <div class="section_item_img">
          <img src="src\assets\ShoeShop04.png" alt="" width="288" height="200"/>
        </div>
        <div class="section_item_text">
          <h4>Nike Blazer Mid Premium</h4>
          <h5>Women Shoe</h5>
          <h6>฿4700</h6>
          <router-link to="/cart">
            <button class="button-28" role="button" type="submit">
              <img src="src\assets\cart.png" alt="buttonpng" border="0" width="20" height="20" />
              <span class="text">Add to cart</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>


.container{
  width: 2000px;
  margin: 0 auto;
}
.section_area_grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap : 70px;
  text-align: center;
  color: #fff !important;
  font-family: 'Prompt';
  font-weight: 500 !important;;
}
.section_grid_item4{
  margin-top: 100px;
}
.section_item_img img{
  object-fit: contain;
}
.section_item_text{
  color: black;
  background-color: white;
  text-align: left;
  margin-left: 40px;
}
.button-28 {
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 10px;
  min-width: 0;
  outline: none;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 60%;
  will-change: transform;
}

.button-28:disabled {
  pointer-events: none;
}

.button-28:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}
.button-28:active {
  box-shadow: none;
  transform: translateY(0);
}

</style>
