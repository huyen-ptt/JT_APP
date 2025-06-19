<template>
  <div class="app-container">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import { StatusBar, Style } from '@capacitor/status-bar';
import { App as CapacitorApp } from '@capacitor/app';
import { useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore'
import { useLanguageStore } from './stores/languageStore'
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';
import { ScreenOrientation } from '@capawesome/capacitor-screen-orientation';
import { SplashScreen } from '@capacitor/splash-screen';
import {useHelper} from '@/composables/helper';



const router = useRouter();
const authStore = useAuthStore()
const auth = computed(() => authStore.auth)
const helper = useHelper()


// Force status bar không overlay (optional)

const langStore = useLanguageStore()

langStore.loadDefaulLanguage()

// Khóa portrait
ScreenOrientation.lock({ type: 'PORTRAIT_PRIMARY' });

// const lastScrollTop = ref(0);

// const handleScrollChange = async () => {
//   const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

//   if (scrollTop === 0 && lastScrollTop.value !== 0) {
//     // Cuộn về top
//     await StatusBar.setOverlaysWebView({ overlay: true });
//   } else if (scrollTop > 10 && lastScrollTop.value === 0) {
//     // Bắt đầu cuộn xuống
//     await StatusBar.setOverlaysWebView({ overlay: false });
//   }

//   lastScrollTop.value = scrollTop;
// }


onMounted(async () => {

  // Kiem tra phien ban
  const platform = helper.getPlatformInfo();
  if(platform.isIOS){
    StatusBar.setOverlaysWebView({ overlay: true });

    // StatusBar.setBackgroundColor({ color: '#F8F9FA' });
    // window.addEventListener('scroll', handleScrollChange, { passive: true });
  } else if (platform.isAndroid15Plus){
    StatusBar.setOverlaysWebView({ overlay: false });
    try {
      await EdgeToEdge.setBackgroundColor({ color: '#000000' }); // hoặc '#ffffff'
      await StatusBar.setStyle({ style: Style.Light }); // chữ trắng
    } catch (err) {
      console.warn('Lỗi set EdgeToEdge:', err);
    }

  }
  // Kiểm tra iphone cho overlay là true
  
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    const styleSheets = document.styleSheets;
    for (const sheet of styleSheets) {
      try {
        if (!sheet.cssRules) continue;
        for (const rule of sheet.cssRules) {
          if (rule.conditionText && rule.conditionText.includes('prefers-color-scheme: dark')) {
            sheet.deleteRule([...sheet.cssRules].indexOf(rule));
          }
        }
      } catch (e) {
        console.log('Cannot access stylesheet', e);
      }
    }
  }

})
</script>

<style>
/* Animation fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Add nền trắng + full màn hình */
.app-container {
  background-color: #ffffff;
  min-height: 100vh;
  padding-top: env(safe-area-inset-top); /* đảm bảo tránh notch */
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

:root {
  color-scheme: light;
}

@media (prefers-color-scheme:dark) {
  :root {
    color-scheme: light !important;
  }
}
</style>
