<template>
<section class="h-100 h-custom" style="background-color: white;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style="border-radius: 15px;">
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="settext fw-bold mb-0 text-black">Cart</h1>
                    <h6 class="settext mb-0 text-muted">3 items</h6>
                  </div>
                  <hr class="my-4">

                  <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="src\assets\ShoeShop01.png"
                        class="img-fluid rounded-3" alt="Cotton T-shirt">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 class="text-black mb-0">Nike Air Force 1'07 LV8</h6>
                      <h6 class="settext text-muted">Sneakers</h6>
                      <h6 class="settext text-muted">Green/White/Yellow</h6>
                      <h6 class="settext text-muted">Size 48</h6>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        class="form-control form-control-sm" />

                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">฿4,700</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="../assets/0017.png"
                        class="img-fluid rounded-3" alt="Cotton T-shirt">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 class="text-black mb-0">Nike Air Jordan 1 Mid</h6>
                      <h6 class="settext text-muted">Sneakers</h6>
                      <h6 class="settext text-muted">Grey/Blue/White</h6>
                      <h6 class="settext text-muted">Size 45</h6>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        class="form-control form-control-sm" />

                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">฿4,900</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="../assets/0034.png"
                        class="img-fluid rounded-3" alt="Cotton T-shirt">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 class="text-black mb-0">Nike Pegasus 39</h6>
                      <h6 class="settext text-muted">Running shoes</h6>
                      <h6 class="settext text-muted">Red/Black/White</h6>
                      <h6 class="settext text-muted">Size 44</h6>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        class="form-control form-control-sm" />

                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">฿4,700</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="pt-5">
                    <RouterLink to="/">
                    <h6 class="mb-0"><a href="#!" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a>
                        </h6>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 bg-grey">
                <div class="p-5">
                  <h3 class="settext fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="settext text-uppercase">Subtotal</h5>
                    <h5>฿14,300.00</h5>
                  </div>

                  <h5 class="settext text-uppercase mb-3">Shipping fees</h5>

                  <div class="settext mb-4 pb-2">
                    <h6>Free</h6>
                  </div>

                  <h5 class="settext text-uppercase mb-3">GIVE CODE</h5>

                  <div class="mb-5">
                    <div class="settext form-outline">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" placeholder="Enter your code here." />
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="settext text-uppercase">Total Price</h5>
                    <h5>฿14,300.00</h5>
                  </div>
                  <div class="settextbtn">
                  <button type="button" class="setbtn btn btn-dark  btn-lg"
                    data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Purchase</button>
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
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1"        aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title settext" id="exampleModalLabel">Payment</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="body-text settext">
          <h6>Please attach payment pictures.</h6>
          <form>
            <input type="file" @change="onFileChange">
          </form>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary settext" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary settext" @click.prevent="onSubmit">Confirm</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      file: null
    }
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    onSubmit() {
      const reader = new FileReader();
      reader.onload = () => {
        const imageBase64 = reader.result;
        // send the image data to the server using your preferred method (e.g. Axios)
      };
      reader.readAsDataURL(this.file);
    }
  }
}
</script>

<style scoped>
@media (min-width: 1025px) {
.h-custom {
height: 100vh !important;
}
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 1rem;
line-height: 2.15;
padding-left: .75em;
padding-right: .75em;
}

.card-registration .select-arrow {
top: 13px;
}

.bg-grey {
background-color: white;
}

@media (min-width: 992px) {
.card-registration-2 .bg-grey {
border-top-right-radius: 16px;
border-bottom-right-radius: 16px;
}
}

@media (max-width: 991px) {
.card-registration-2 .bg-grey {
border-bottom-left-radius: 16px;
border-bottom-right-radius: 16px;
}
}
.settextbtn{
  text-align: right;
}
.settext{
  font-family: 'Prompt', sans-serif;
}
.body-text{
  text-align: center;
}
.body-text h6{
  font-weight: 1000;
}
</style>
