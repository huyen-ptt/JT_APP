<template>
  <div class="app-container">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import { StatusBar } from '@capacitor/status-bar';
import { App as CapacitorApp } from '@capacitor/app';
import { useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore'
import { useLanguageStore } from './stores/languageStore'

const router = useRouter();
const authStore = useAuthStore()
const auth = computed(() => authStore.auth)
// Force status bar không overlay (optional)
StatusBar.setOverlaysWebView({ overlay: false });
// StatusBar.setBackgroundColor({ color: '#F8F9FA' });
const langStore = useLanguageStore()

langStore.loadDefaulLanguage()

onMounted(() => {
  
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
  color-scheme:light;
}
@media (prefers-color-scheme:dark) {
  :root{
    color-scheme:light !important;
  }
}
</style>
