<script setup >
import Register from '../components/Register.vue';
</script>
<template>
  <div v-if = !showRegis>
    <form @submit.prevent="login">
      <label>
        Email:
        <input v-model="email" type="email" required />
      </label>
      <br />
      <label>
        Password:
        <input v-model="password" type="password" required />
      </label>
      <br />
      <button type="submit">Login</button>
      <br>
      <br>
      <button type="button" @click="showRegis = true">regis</button>

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
      // Send a request to the server with the email and password
      // Handle the response (e.g. show an error message if login fails)
    },
  }
};
</script>
<style scoped>
.login-page {
  background-color: #333333;
  color: white;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

.login-label {
  font-size: 18px;
  margin-bottom: 10px;
}

.login-input {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background-color: white;
  color: #333333;
}

.login-button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: white;
  color: #333333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.login-button:hover {
  background-color: #333333;
  color: white;
}
</style>
