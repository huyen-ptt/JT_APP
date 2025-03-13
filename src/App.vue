<template>
  <router-view/>
</template>
<script scope>
import { StatusBar } from '@capacitor/status-bar';
StatusBar.setOverlaysWebView({ overlay: true }); // Cho nội dung tràn lên StatusBar
StatusBar.setBackgroundColor({ color: 'transparent' }); // Làm trong suốt

</script>