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

const router = useRouter();
const authStore = useAuthStore()
const auth = computed(() => authStore.auth)
// Force status bar không overlay (optional)

const langStore = useLanguageStore()

langStore.loadDefaulLanguage()

onMounted(async () => {

  StatusBar.setOverlaysWebView({ overlay: false });
  // StatusBar.setBackgroundColor({ color: '#F8F9FA' });
  // 🧠 Kiểm tra Android version
  const ua = navigator.userAgent || '';
  const versionMatch = ua.match(/Android\s([\d.]+)/);
  const androidVersion = versionMatch ? parseFloat(versionMatch[1]) : 0;
  const isAndroid15 = /Android/i.test(ua) && androidVersion >= 15;
  console.log(androidVersion)

  if (isAndroid15) {
    // ✔️ Android 15: set màu và style để tránh bị trong suốt không mong muốn
    try {
      await EdgeToEdge.setBackgroundColor({ color: '#000000' }); // hoặc '#ffffff'
      await StatusBar.setStyle({ style: Style.Light }); // chữ trắng
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
