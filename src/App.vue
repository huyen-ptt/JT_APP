<template>
  <div class="app-container">
    <!-- Hiệu ứng chuyển trang slide -->
    <transition name="slide-left" mode="out-in">
      <router-view :key="$route.fullPath" />
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
import { App } from '@capacitor/app';
import { useI18n } from 'vue-i18n';
import Swal from 'sweetalert2'
import { useHelper } from "./composables/helper";
import { ScreenOrientation } from '@capawesome/capacitor-screen-orientation';
import { SplashScreen } from '@capacitor/splash-screen';

const { t } = useI18n();
const router = useRouter();
const authStore = useAuthStore()
const auth = computed(() => authStore.auth)
const helper = useHelper()
const langStore = useLanguageStore()
langStore.loadDefaulLanguage()

onMounted(async () => {
  App.addListener('backButton', async ({ canGoBack }) => {
    if (!canGoBack) {
      const res = await Swal.fire({
        title: t('EXIT_TITLE'),
        text: t('EXIT_TEXT'),
        showCancelButton: true,
        confirmButtonText: t('EXIT_OK'),
        cancelButtonText: t('EXIT_CANCEL'),
      });
      if (res.isConfirmed) App.exitApp();
    } else {
      window.history.back();
    }
  });

  const platform = helper.getPlatformInfo();
  if (platform.isIOS) {
    StatusBar.setOverlaysWebView({ overlay: true });
  } else if (platform.isAndroid15Plus) {
    StatusBar.setOverlaysWebView({ overlay: false });
    try {
      await EdgeToEdge.setBackgroundColor({ color: '#000000' });
      await StatusBar.setStyle({ style: Style.Light });
    } catch (err) {
      console.warn('Lỗi set EdgeToEdge:', err);
    }
  }

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
});
</script>

<style>
/* Slide mượt từ phải sang trái khi chuyển trang */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-enter-to {
  transform: translateX(0%);
}

.slide-left-leave-from {
  transform: translateX(0%);
}
   
.slide-left-leave-to {
  transform: translateX(-100%);
}


/* Layout mặc định */
.app-container {
  background-color: #ffffff;
  min-height: 100vh;
  padding-top: env(safe-area-inset-top);
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
