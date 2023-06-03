import './assets/index.css';
import App from './App.vue';
// import router from './router';
import { createApp } from 'vue';
import Vue3SmoothScroll from 'vue3-smooth-scroll';

const app = createApp(App)

app.use(Vue3SmoothScroll).mount('#app')
