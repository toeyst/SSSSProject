<template>

  <div class="card">

      <img :src="image" alt="" width="288" height="300"/>
    <h1>{{ title }}</h1>
    <h3>{{ sex }} {{ type }}</h3>
    <h3>color : {{ color }} </h3>
    
   
  </div>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped>
.card {
  
  padding: 10px;
  margin: 10px;
}
.card img {
  max-width: 100%;
  margin-bottom: 10px;
}
.card h2 {
  font-size: 18px;
  margin-bottom: 5px;
}
.card p {
  font-size: 14px;
  color: #666;
}
</style>
