<script setup>
import t from '../components/Test.vue'
</script>
<template>
  <div class="about">
  <div>
    <!-- ตรวจสอบว่าผู้ใช้ได้ทำการล็อคอินหรือไม่ -->
    <div v-if="isLoggedIn">
      <p>ยินดีต้อนรับ! คุณ {{ username }}</p>
      <button @click="logout">ออกจากระบบ</button>
    </div>
    
    <div v-else>
      <p>กรุณาเข้าสู่ระบบ</p>
      <button @click="login">เข้าสู่ระบบ</button>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      username: ""
    };
  },
  methods: {
    login() {
      // ตรวจสอบข้อมูลล็อกอิน และตั้งค่าค่า isLoggedIn และ username ตามเหตุการณ์
      // สมมติว่าเราใช้ function ชื่อว่า authenticate() เพื่อตรวจสอบข้อมูลล็อกอิน
      const { success, username } = authenticate();
      if (success) {
        this.isLoggedIn = true;
        this.username = username;
      }
    },
    logout() {
      // ออกจากระบบ และตั้งค่าค่า isLoggedIn และ username ให้เป็นค่าเริ่มต้น
      this.isLoggedIn = false;
      this.username = "";
    }
  }
};
</script>

<style>

</style>
