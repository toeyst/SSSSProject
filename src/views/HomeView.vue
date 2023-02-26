<script setup>
import SearchBar from '../components/SearchBar.vue';
import PromoShoes from '../components/PromoShoes.vue';
import ShoesShop from './../components/ShoesShop.vue';

</script>

<template>
  <main>
    <SearchBar @search="onSearch"></SearchBar>
    <PromoShoes></PromoShoes>
    <ShoesShop></ShoesShop> 
     

  </main>
</template>
<script>
export default {
methods:{ 
  onSearch(value) {
    console.log("test")
    console.log("viewtest",value);
  }

}
}
</script>