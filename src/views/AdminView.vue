<script setup>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <h1>
        Admin Page

      </h1>
    </div>
    <div class="col"></div>


  </div>
  <table>
    <thead>
      <tr>
        <th>productId</th>
        <th>productName</th>
        <th>productColor</th>
        <th>productSex</th>
        <th>productType</th>
        <th>productPicture</th>



      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.productId }}</td>
        <td>{{ item.productName }}
          <br>
          
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"
            data-bs-whatever="@mdo">Update Stock </button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="pl-3"> {{item.productName}}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Color :</label>
                      <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Amount :</label>
                      <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Details:</label>
                      <textarea class="form-control" id="message-text"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" >Update</button>
                </div>
              </div>
            </div>
          </div>


        </td>
        <td>{{ item.productColor }}</td>
        <td>{{ item.productSex }}</td>
        <td>{{ item.productType }}</td>
        <img :src="item.productPicture" alt="" width="250" height="280" />

      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
      items: [],
      show: true,
    };
  },
  mounted() {
    this.getAllproduct();
  },
  methods: {
    getAllproduct() {
      console.log('sending axios request...');
      axios.post(`https://localhost:44387/SSSS/GetAllProduct`, null, { withCredentials: true })
        .then(response => {
          this.items = response.data
          console.log("kuy", this.items);

        })
        .catch(error => {
          console.error(error);
        });
    }

  }
}
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  color: #333;
}
</style>