import { createApp } from 'vue'
import App from './App'
import router from './router.js';
import store from './store/index.js';
import './assets/styles/index.css';

const app = createApp(App)

app.use(router);
app.use(store)

app.mount('#app')
