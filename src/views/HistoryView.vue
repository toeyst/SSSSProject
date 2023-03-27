<script setup>
import History from '../components/History.vue';
</script>

<template>
    <div>
      <h1>{{ pageTitle }}</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td class="date">{{ transaction.date }}</td>
            <td>{{ transaction.item }}</td>
            <td>{{ transaction.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pageTitle: 'Order History',
        transactions: [
          { id: 1, date: 'March 20, 2023', item: 'Shirt', price: '$25.00' },
          { id: 2, date: 'March 18, 2023', item: 'Pants', price: '$35.00' },
          { id: 3, date: 'March 15, 2023', item: 'Shoes', price: '$50.00' },
          { id: 4, date: 'March 12, 2023', item: 'Hat', price: '$15.00' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
    body {
      font-family: Arial, sans-serif;
    }
  
    h1 {
      text-align: center;
      margin-top: 50px;
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
  