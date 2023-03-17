import { createApp } from 'vue';
import App from './App.vue';
import AiUi from '../lib/index.js';
import 'theme-chalk/lib/index.css';

createApp(App).use(AiUi).mount('#app');
