<script setup>
import DetailPage from '../components/DetailPage.vue';
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import nyan  from '../assets/nyan-cat-rainbow-cat.gif';
const { push } = useRouter();
</script>

<template>
  <div>
    <DetailPage @checkLogin="checkedLogin"></DetailPage>

  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      userEmail: '',
    };
  },
  mounted() {
    // Check if the user is logged in

  },
  methods: {
    checkedLogin() {
      console.log("tss")
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn) {
        this.isLoggedIn = true;
        this.userEmail = localStorage.getItem('userEmail');
        this.$router.push({ path: '/cart' })
      } else {
        Swal.fire({
          title: 'Please Login First',
          width: 600,
          padding: '3em',
          color: '#716add',
          background: '#fff',
          backdrop: `
              rgba(0,0,123,0.4)
              url("${nyan}")
              left top
          no-repeat
           `
        })
        
        this.$router.push({ path: '/login' })
      }
    }
  }
}
</script>