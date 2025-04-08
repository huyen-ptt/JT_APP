<template>
  <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  
</template>
<script scope>
import { StatusBar } from '@capacitor/status-bar';
import { RouterLink, useRouter } from 'vue-router'

StatusBar.setOverlaysWebView({ overlay: false }); // Cho nội dung tràn lên StatusBar
StatusBar.setBackgroundColor({ color: '#F8F9FA' }); // Làm trong suốt



import { App as CapacitorApp } from '@capacitor/app';
import axios from 'axios';

const router = useRouter(); // chỉ nếu dùng trong setup()



</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>