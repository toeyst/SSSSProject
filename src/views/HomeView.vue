<script setup>
import SearchBar from '../components/SearchBar.vue';
import PromoShoes from '../components/PromoShoes.vue';
import ShoesShop from './../components/ShoesShop.vue';
import Card from '../components/Card.vue'
import axios from 'axios';
import { useRouter } from 'vue-router'

const { push } = useRouter();
</script>

<template>
  <main>
    <SearchBar @search="onSearch"></SearchBar>
    <PromoShoes v-if="show"></PromoShoes>
    <ShoesShop v-if="show"></ShoesShop>
    <div class="container">
      <div class="row">

        <div class="col-md-3" v-for="item in items" :key="item.id" v-if="noResult">
          <card :title="item.productName" :sex="item.productSex" :image="item.productPicture" :type="item.productType"
            :color="item.productColor" @click="goToDetailPage" />
        </div>
        <div v-if="!noResult && search" class="txt">
          <h1 > SORRY </h1>
          <br>
          <img src="../assets/no-result.png" alt="">
          <br>
          <br>
          <h2> There is no search for what you are looking for. 
            Try  Another shoe model
          </h2>
        </div>
      </div>
    </div>
      <!-- <button @click="  Findsum(this.num)"> SSS </button>
      <button @click="  Findmax(this.num)"> max </button> -->


  </main>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      show: true,
      noResult: false,
      search:false,
      num:[2,4,6,8,10,14,12],
      sum:0,
      max:0
    };
  },

  methods: {
    Findsum(num){
      for(var i = 0;i < num.length;i++){
        this.sum = (this.sum + num[i]) ;
        console.log(num[i])
        
      }
      this.sum = (this.sum / num.length)
      console.log("ค่าเฉลี่ย",this.sum)
    },
    Findmax(num){
      for(var i = 0;i < num.length;i++){
        if(this.max < num[i]){
          this.max =  num[i] ;
          console.log("ss",num[i])
      console.log("max",this.max)

        }

       
        
      }
    }
    ,
    onSearch(value) {
      console.log("viewtest", value);
      const input = value;
      console.log("test", input)
      this.show = false;
      this.search = true;
      if (input) {
        console.log('sending axios request...');
        axios.post(`https://localhost:44387/SSSS/GetDetail?input=${input}`, null, { withCredentials: true })
          .then(response => {
            this.items = response.data
            console.log("kuy", this.items);
            if (response.data[0].productId === null) {
              console.log("productId is null, returning true");
              this.noResult = false;
              console.log("0", this.noResult);
            } else {
              this.noResult = true;
              console.log("1", this.noResult);
            }
            

          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    goToDetailPage() {
      this.$router.push(`/detail`);
    }

  }
}
</script>
<style scoped>
.txt{
  text-align: center;
}
</style>