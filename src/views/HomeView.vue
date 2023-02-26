<script setup>
import SearchBar from '../components/SearchBar.vue';
import PromoShoes from '../components/PromoShoes.vue';
import ShoesShop from './../components/ShoesShop.vue';
import Card from '../components/Card.vue'
import axios from 'axios';

</script>

<template>
  <main>
    <SearchBar @search="onSearch"></SearchBar>
    <PromoShoes v-if="show"></PromoShoes>
    <ShoesShop v-if="show"></ShoesShop> 
    <div class="container">
  <div class="row">
    
    <div class="col-md-3" v-for="item in items" :key="item.id">
      <card :title="item.productName" :sex="item.productSex" :image="item.productPicture"  :type="item.productType" :color="item.productColor" />
    </div>
  </div>
</div>
  

  </main>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      show:true,
    };
  },
methods:{ 
  onSearch(value) {
    console.log("viewtest",value);
    const input = value;
    console.log("test",input)
    this.show = false;
    if (input) {
        console.log('sending axios request...');
        axios.post(`https://localhost:44387/SSSS/GetDetail?input=${input}`, null, { withCredentials: true })
          .then(response => {
            this.items = response.data
            console.log("kuy",this.items);
            
          })
          .catch(error => {
            console.error(error);
          });
      }
  }

}
}
</script>