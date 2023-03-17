import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js'
import './assets/main.css'
import axios from 'axios';
import VueWebSpeech from 'vue-web-speech'







const app = createApp(App)
app.config.globalProperties.axios = axios;
app.use(router)
app.use(VueWebSpeech)


app.mount('#app')
