<script setup >
import Register from '../components/Register.vue';
import { useRouter } from 'vue-router'

const { push } = useRouter();
</script>
<template>
  <div v-if = !showRegis>
    <form @submit.prevent="login">
      <div class="login-container">
        <h1>SS$S</h1>
        <div class="login-form-area">
          <div class="login-form-group">
            <div class="form-margin">
              <label>Email</label><input v-model="email" type="email" placeholder="Email" class="form-control" id="email" required>
              <label>Password</label><input v-model="password" type="password" placeholder="Password" class="form-control" id="password" required>
              <div class="button-login">
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
          <div class="text-regis-container">
            <div class="text-regis" @click="showRegis = true">
              Don't have an account? <strong>Register.</strong>
            </div>
          </div> 
        </div>
    </form>
  </div>
  <Register v-if="showRegis"></Register>
</template>

<script>
export default {

  data() {
    return {
      email: "",
      password: "",
      showRegis:false

    };
  },
  methods: {
    login() {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('userEmail', 'user@example.com');
      // Send a request to the server with the email and password
      if(this.password == "123456"){
        this.$router.push({ path: '/Admin' })
      } else{
        
        this.$router.push({ path: '/' })
        

      }
     
    },
  }
};
</script>
<style scoped>

h1 {
  font-size: 150px;
  text-align: center;
}
form {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(130deg,#2f3640,#353b48);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white !important;
  font-family: 'Inria Serif' !important;
  font-weight: 600 !important;;
}

.login-form-group{
  background-color: #3D3D3D;
  border-radius: 30px;
  border-color: black;
  height: 370px;
  width: 800px;
}
.login-form-area{
  border-color: black;
  display: flex;
  flex-direction: column;
}
.form-margin{
  margin-top: 90px;
  margin-left: 90px;
  margin-right: 90px;
}
.button-login{
  margin-top: 15px;
  background-color:#3D3D3D;
  color: black;
  text-align: center;
}
.text-regis-container:hover, .text-regis-container:active{
  color: #1C82AD;
  text-decoration: underline
}
.text-regis{
  text-align: center;
}
.btn{
  background-color: white;
  color: black;
  border-radius: 50px;
  width: 100px;
  height: 40px;
  font-size: larger;
}
</style>
