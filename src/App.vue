<template>
  <div class="app-container" :style="{ paddingBottom: safeAreaBottom + 'px' }">
    <!-- Loading Screen -->
    <LoadingScreen v-if="!appReady" @finished="appReady = true" />

    <!-- Main App với transition chỉ khi app ready -->
    <div v-if="appReady" class="main-content">
    <!-- <div class="main-content"> -->
      <transition name="slide-left" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>
    </div>
  </div>
</template>

<script setup>
import { StatusBar, Style } from '@capacitor/status-bar';
import { App as CapacitorApp } from '@capacitor/app';
import { useRouter } from 'vue-router';
import { computed, nextTick, onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/authStore'
import { useLanguageStore } from './stores/languageStore'
import { App } from '@capacitor/app';
import { useI18n } from 'vue-i18n';
import Swal from 'sweetalert2'
import { useHelper } from "./composables/helper";
import { Capacitor } from '@capacitor/core'
import { checkAppVersion } from "@/composables/useVersion";
import LoadingScreen from './components/LoadingScreen.vue';
import { useSafeArea, setCSSCustomProperties } from '@/utils/safeArea.js'
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';



const { t } = useI18n();
const router = useRouter();
const authStore = useAuthStore()
const auth = computed(() => authStore.auth)
const helper = useHelper()
const langStore = useLanguageStore()
langStore.loadDefaulLanguage()

// Sử dụng composable
const {
  safeAreaTop,
  safeAreaBottom,
  safeAreaLeft,
  safeAreaRight
} = useSafeArea()

const appReady = ref(false)
const shouldShowLoading = ref(false)
// const safeAreaBottom = ref(0)

// Composable để xử lý platform
const usePlatform = () => {
  const platform = Capacitor.getPlatform()
  const isNative = Capacitor.isNativePlatform()
  const isAndroid = platform === 'android'
  const isIOS = platform === 'ios'
  const isWeb = platform === 'web'
  
  return {
    platform,
    isNative,
    isAndroid,
    isIOS,
    isWeb
  }
}


const onSetupStatusBarV1 = async () => {
  await nextTick();
  // await StatusBar.setOverlaysWebView({ overlay: false });
  
  // await StatusBar.setStyle({ style: Style.Dark }); // Icon đen trên nền trắng
  // await StatusBar.setBackgroundColor({ color: '#ffffff' }); // Background trắng
  const ins = await EdgeToEdge.getInsets();
  // alert(JSON.stringify(ins));

}


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
          // await EdgeToEdge.setBackgroundColor({ color: 'transparent' });
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
  await checkAppVersion();
  const { isAndroid, isIOS, isNative } = usePlatform()

  try {
    if (isAndroid) {
      // Android: hiển thị loading screen
      shouldShowLoading.value = true
      
      // Optional: Xử lý status bar cho Android
      if (isNative) {
        // await StatusBar.setBackgroundColor({ color: '#ffffff' })
      }
    } else {
      // iOS hoặc web: không hiển thị loading screen
      shouldShowLoading.value = false
      appReady.value = true
      
      // Optional: Xử lý status bar cho iOS
      if (isIOS && isNative) {
        await StatusBar.setOverlaysWebView({ overlay: false })
        await StatusBar.setBackgroundColor({ color: '#ffffff' })
        await StatusBar.setStyle({ style: Style.Light }) // Icon trắng trên nền trắng
      }
    }
  } catch (error) {
    console.warn('Platform setup error:', error)
    // Fallback: không hiển thị loading screen nếu có lỗi
    shouldShowLoading.value = false
    appReady.value = true
  }

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
  // Set CSS custom properties
  setCSSCustomProperties()


  // await onSetupStatusBar();
  await onSetupStatusBarV1();


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
/* .app-container {
  background-color: #ffffff;
  min-height: 100vh;
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
} */

.app-container {
  background-color: #ffffff;

  width: 100%;
  min-height: 100vh;
  /* height: calc(100vh - env(safe-area-inset-bottom, 60px)); 
  position: relative; */
  /* overflow: hidden; */
  /* Tránh scroll khi transition */
}

.main-content {
  width: 100%;
  height: 100%;
  /* Safe area cho mobile */
  /* padding-bottom: env(safe-area-inset-bottom, 0px); */
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
