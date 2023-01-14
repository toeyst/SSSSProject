<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="form.email" type="email" class="form-control" id="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="form.password" type="password" class="form-control" id="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
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
