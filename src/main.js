import { createApp } from 'vue'
// import router from './router.js';
import App from './App'
import './assets/styles/index.css';
import store from './store/index.js';


const app = createApp(App)


app.use(store);

app.mount('#app')
