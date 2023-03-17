<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-container">
          <div class="form-group">
            <h1>Register</h1>
            <label for="email">Email</label>
            <input v-model="form.email" type="email" placeholder="Enter e-mail" class="form-control" id="email" required>
            <label for="password">Passsword</label>
            <input v-model="form.password" type="password" placeholder="Enter password" class="form-control" id="password" required>
            <div class="button-regis">
              <button type="submit" class="btn btn-primary">Register</button>
            </div>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Send the form data to your server here
      // You can use axios or fetch to make a post request
      // You can also clear the form fields after the request is successful
    }
  }
}
</script>

<style scoped>
.form-container{
  background-color: #3D3D3D;
  height: 600px;
  width: 650px;
  border-radius: 30px;
  border-color: black;
}
form {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(130deg,#2f3640,#353b48);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white !important;
  font-family: 'Prompt', sans-serif !important;
  font-weight: 500 !important;;
}
.form-group{
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;
}
h1{
  font-family: 'Inria Serif' !important;
  font-size: 80px;
  text-align: center;
}
.button-regis{
  margin-top: 300px;
  background-color:#3D3D3D;
  color: black;
  text-align: center;
}
.btn{
  background-color: white;
  color: black;
}
</style>
