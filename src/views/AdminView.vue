<script setup>
import axios from 'axios';


</script>

<template>
  <div> 
    Admin Page
<button @click="getAllproduct"> test </button>
  </div>

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
  getAllproduct(){
    console.log('sending axios request...');
        axios.post(`https://localhost:44387/SSSS/GetAllProduct`, null, { withCredentials: true })
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
</script>