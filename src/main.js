import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const app = createApp(App);
app.use(router);
const pinia = createPinia()
app.use(pinia)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')
