
<script setup>
import axios from 'axios';
</script>
<template>
  <form @submit.prevent="handleSearch">
    <input type="text" v-model="input" placeholder="Search Nike.com" />
    <button type="submit">Search</button>
  </form>



  <div>

    <button @click="startRecognition">Start Recognition</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      SpeechRecognition: window.SpeechRecognition || window.webkitSpeechRecognition,
      recognition: null,
    };
  },
  mounted() {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      this.recognition.lang = 'en-US';
    } else {
      console.error("The current browser doesn't support the speech recognition API")
    }
  },

  methods: {
    startRecognition() {
      if (this.recognition) {
        this.recognition.start();
        this.recognition.addEventListener('result', event => {
          this.input = event.results[0][0].transcript;
        });
      }
    },
    stopRecognition() {
      if (this.recognition) {
        this.recognition.stop();
      }
    },
    handleSearch() {
      console.log('handleSearch called');
      const input = this.input.trim().toLowerCase();
      console.log('input:', input);
      this.$emit("search", this.input)
      if (input) {
        console.log('sending axios request...');
        axios.post(`https://localhost:44387/SSSS/GetDetail?input=${input}`, null, { withCredentials: true })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}


input[type="text"] {
  flex: 1;
  margin: 0;
  padding: 0.5em 1em;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

button[type="submit"] {
  margin: 0;
  padding: 0.5em 1em;
  font-size: 1em;
  background-color: #333;
  color: #fff;
  border: 1px solid #333;
  border-radius: 0 4px 4px 0;
}

button[type="submit"]:hover {
  background-color: #000;
  border-color: #000;
}

input[type="text"]:focus {
  outline: none;
  border-color: #333;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

input[type="text"]:focus~#search-overlay {
  opacity: 1;
  pointer-events: auto;
}

#search-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: -1;
}
</style>
