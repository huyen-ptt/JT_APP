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
import { Capacitor } from '@capacitor/core'

const { t } = useI18n();
const router = useRouter();
const authStore = useAuthStore()
const auth = computed(() => authStore.auth)
const helper = useHelper()
const langStore = useLanguageStore()
langStore.loadDefaulLanguage()

const onSetupStatusBar = async () => {
  try {
    if (Capacitor.isNativePlatform()) {
      if (Capacitor.getPlatform() === 'android') {
        // Android: Cần cấu hình EdgeToEdge và StatusBar
        // Cách 1: Không set background color, chỉ enable overlay
        await StatusBar.setOverlaysWebView({ overlay: true });
        await StatusBar.setStyle({ style: Style.Light }); // Light content (white icons)

        // Cách 2: Dùng EdgeToEdge với màu thực sự trong suốt
        try {
          await EdgeToEdge.setBackgroundColor({ color: 'transparent' });
        } catch (e) {
          // Fallback: không set background
          console.log('EdgeToEdge not supported or failed');
        }
      } else if (Capacitor.getPlatform() === 'ios') {
        // iOS: Chỉ cần overlay
        await StatusBar.setOverlaysWebView({ overlay: true });
        await StatusBar.setStyle({ style: Style.Light });
      }
    }
  } catch (error) {
    console.log('Error setting status bar:', error);
  }
}

const onDebug = async () => {
  // Debug 1: Kiểm tra Capacitor platform
  try {
    const platform = Capacitor.getPlatform();
    alert('Platform: ' + platform);

    const isNative = Capacitor.isNativePlatform();
    alert('Is Native: ' + isNative);

    const isAndroid = Capacitor.getPlatform() === 'android';
    alert('Is Android: ' + isAndroid);
  } catch (error) {
    alert('Capacitor Error: ' + error.message);
  }

  // Debug 2: Kiểm tra safe area
  try {
    // Cách 1: Kiểm tra CSS env()
    const safeAreaTop1 = getComputedStyle(document.documentElement).getPropertyValue('--safe-area-inset-top');
    alert('Safe area CSS var: ' + safeAreaTop1);

    // Cách 2: Kiểm tra trực tiếp env()
    const testDiv = document.createElement('div');
    testDiv.style.paddingTop = 'env(safe-area-inset-top)';
    document.body.appendChild(testDiv);
    const safeAreaTop2 = getComputedStyle(testDiv).paddingTop;
    alert('Safe area env(): ' + safeAreaTop2);
    document.body.removeChild(testDiv);

    // Cách 3: Kiểm tra viewport
    const viewportHeight = window.innerHeight;
    const screenHeight = window.screen.height;
    alert('Viewport: ' + viewportHeight + ' Screen: ' + screenHeight);

  } catch (error) {
    alert('CSS Error: ' + error.message);
  }

  // Debug 3: Kiểm tra StatusBar plugin
  try {
    const statusBarInfo = await StatusBar.getInfo();
    alert('StatusBar Info: ' + JSON.stringify(statusBarInfo));
  } catch (error) {
    alert('StatusBar Error: ' + error.message);
  }

  // Debug 4: Test set overlay
  try {
    await StatusBar.setOverlaysWebView({ overlay: true });
    alert('Overlay set successfully');

    await StatusBar.setStyle({ style: Style.Light });
    alert('Style set successfully');
  } catch (error) {
    alert('StatusBar Set Error: ' + error.message);
  }
}

onMounted(async () => {
  // await onDebug();
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

  // const platform = helper.getPlatformInfo();
  // // Cấu hình StatusBar cho từng platform
  // if (platform.isIOS) {
  //   // iOS: Hiển thị status bar với background
  //   await StatusBar.setOverlaysWebView({ overlay: false });
  //   await StatusBar.setStyle({ style: Style.Light }); // hoặc Style.Dark
  //   await StatusBar.setBackgroundColor({ color: '#ffffff' }); // màu background
  // } else if (platform.isAndroid) {
  //   // Android: Hiển thị status bar bình thường
  //   await StatusBar.setOverlaysWebView({ overlay: false });
  //   await StatusBar.setStyle({ style: Style.Light }); // hoặc Style.Dark
  //   await StatusBar.setBackgroundColor({ color: '#ffffff' }); // màu background

  //   // Nếu muốn dùng EdgeToEdge cho Android 15+
  //   if (platform.isAndroid15Plus) {

  //     try {
  //       await EdgeToEdge.setBackgroundColor({ color: '#ffffff' });
  //       // Với EdgeToEdge, có thể cần overlay: true
  //       await StatusBar.setOverlaysWebView({ overlay: true });
  //     } catch (err) {
  //       console.warn('Lỗi set EdgeToEdge:', err);
  //       // Fallback về cấu hình bình thường
  //       await StatusBar.setOverlaysWebView({ overlay: false });
  //     }
  //   }
  // }
  await onSetupStatusBar();


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
  /* padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right); */
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
