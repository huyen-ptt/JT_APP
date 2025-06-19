import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './routers'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate';
import { StatusBar } from '@capacitor/status-bar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// Import Swiper styles toàn cục
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'primeicons/primeicons.css'

// import 'primevue/resources/themes/saga-blue/theme.css'; // theme sáng

const app = createApp(App);
// ✨ Gắn router toàn cục
app.config.globalProperties.$globalRouter = router
app.use(router);
app.use(i18n);
app.use(VueSweetalert2);
const pinia = createPinia();
pinia.use(piniaPersist);
app.use(pinia);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    },
    options: {
        darkModeSelector: false, // trying to also force a non-usage of the dark mode
    },
}
);

app.mount('#app');
