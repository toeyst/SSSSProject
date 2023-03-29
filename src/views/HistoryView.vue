<script setup>
import History from '../components/History.vue';
</script>

<template>
  <div>
    <h1>Order History</h1>
  </div>
<section class="h-100 h-custom" style="background-color: white;">
  <div class="container py-3 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration" style="border-radius: 15px;">
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="p-3">
                <div>
                    <div class="row mb-4 d-flex align-items-center">
                      <h5>Order ID : 170865AA</h5>
                      <div class="col-md-2 col-md-2 col-md-2">
                        <img
                          src="src\assets\ShoeShop01.png"
                          class="img-fluid rounded-3" alt="Cotton T-shirt">
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-3">
                        <h5 class="text-black mb-0">Nike Air Force 1'07 LV8</h5>
                        <h6 class="settext text-muted">Sneakers</h6>
                        <h6 class="settext text-muted">Green/White/Yellow</h6>
                        <h6 class="settext text-muted">Size 48</h6>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-3" style="text-align: center;">
                        <h6>Order Date : 17/08/65</h6>
                        <h6>฿4,700</h6>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-3" style="text-align: center;">
                        <h4 class="text-black mb-0">Status :</h4>
                        <h5 class="settext mb-0" style="color: green;">Order Completed</h5>
                      </div>

                  <hr class="my-4">
                    <div class="row mb-4 d-flex align-items-center">
                      <h5>Order ID : 170865AB</h5>
                        <div class="col-md-2 col-md-2 col-md-2">
                          <img
                            src="src\assets\ShoeShop01.png"
                            class="img-fluid rounded-3" alt="Cotton T-shirt">
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h5 class="text-black mb-0">Nike Air Force 1'07 LV8</h5>
                          <h6 class="settext text-muted">Sneakers</h6>
                          <h6 class="settext text-muted">Green/White/Yellow</h6>
                          <h6 class="settext text-muted">Size 48</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3" style="text-align: center;">
                          <h6>Order Date : 17/08/65</h6>
                          <h6>฿4,700</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3" style="text-align: center;">
                          <h4 class="text-black mb-0">Status :</h4>
                          <h5 class="settext mb-0" style="color: orange;">Validating the order</h5>
                        </div>
                    </div>
                  <hr class="my-4">
                    <div class="row mb-4 d-flex align-items-center">
                      <h5>Order ID : 170865AC</h5>
                        <div class="col-md-2 col-md-2 col-md-2">
                          <img
                            src="src\assets\ShoeShop01.png"
                            class="img-fluid rounded-3" alt="Cotton T-shirt">
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h5 class="text-black mb-0">Nike Air Force 1'07 LV8</h5>
                          <h6 class="settext text-muted">Sneakers</h6>
                          <h6 class="settext text-muted">Green/White/Yellow</h6>
                          <h6 class="settext text-muted">Size 48</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3" style="text-align: center;">
                          <h6>Order Date : 17/08/65</h6>
                          <h6>฿4,700</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3" style="text-align: center;">
                          <h4 class="text-black mb-0">Status :</h4>
                          <h5 class="settext mb-0" style="color: red;">Order Incomplete</h5>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
</template>
  
<script>

</script>
  
  <style scoped>
    body {
      font-family: Arial, sans-serif;
    }
  
    h1 {
      text-align: center;
      margin-top: 9px;
    }
  
    table {
      margin: 50px auto;
      border-collapse: collapse;
      width: 80%;
    }
  
    th, td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
  
    tr:hover {
      background-color: #f5f5f5;
    }
  
    .date {
      font-weight: bold;
      background-color: #ddd;
    }
  </style>
  