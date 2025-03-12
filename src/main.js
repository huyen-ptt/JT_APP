import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'
import router from './routers'
// import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate';
const app = createApp(App);
app.use(router);
app.use(i18n)
const pinia = createPinia()
pinia.use(piniaPersist);
app.use(pinia)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')
