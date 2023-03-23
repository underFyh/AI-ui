import { createApp } from 'vue';
import App from './App.vue';
import 'theme-chalk/src/index.scss';
// import AIUI from '../lib/index.js';
import AIUI from 'ai-ui';
createApp(App).use(AIUI).mount('#app');