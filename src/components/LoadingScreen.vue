<!-- src/components/LoadingScreen.vue -->
<template>
    <div v-if="isLoading" class="loading-screen">
        <!-- Chỉ có ảnh splash full màn hình -->
        <img src="/assets/splash.png" alt="Joytime Loading" class="loading-image-fullscreen" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits, onBeforeMount, onUnmounted } from 'vue'
import { SplashScreen } from '@capacitor/splash-screen'
import { StatusBar, Style } from '@capacitor/status-bar';
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';

const emit = defineEmits<{
    finished: []
}>()

const isLoading = ref(true)

onBeforeMount(async () => {
    await SplashScreen.hide()

})

onMounted(async () => {
    try {
        if (Capacitor.isNativePlatform()) {
            if (Capacitor.getPlatform() === 'android') {
                // Android: Cần cấu hình EdgeToEdge và StatusBar
                // Cách 1: Không set background color, chỉ enable overlay
                await EdgeToEdge.setBackgroundColor({ color: '#ffffff' });
                await EdgeToEdge.enable();
                await StatusBar.setStyle({ style: Style.Light });
                // Cách 2: Dùng EdgeToEdge với màu thực sự trong suốt
                try {
                    // await EdgeToEdge.setBackgroundColor({ color: 'transparent' });
                } catch (e) {
                    // Fallback: không set background
                    console.log('EdgeToEdge not supported or failed');
                }
            } else if (Capacitor.getPlatform() === 'ios') {
                // iOS: Chỉ cần overlay
                // await StatusBar.setOverlaysWebView({ overlay: true });
                // await StatusBar.setStyle({ style: Style.Light });
            }
        }
    } catch (error) {
        console.log('Error setting status bar:', error);
    }
    // await StatusBar.setOverlaysWebView({ overlay: true });

    try {
        // Ẩn splash screen mặc định NGAY LẬP TỨC

        // Delay một chút để đảm bảo splash đã ẩn
        setTimeout(() => {
            // Hiển thị ảnh custom trong 3 giây
            setTimeout(() => {
                isLoading.value = false
                emit('finished')
            }, 3000)
        }, 100)

    } catch (error) {
        console.error('Error hiding splash screen:', error)
        setTimeout(() => {
            isLoading.value = false
            emit('finished')
        }, 3000)
    }
})

onUnmounted(async () => {
    // await StatusBar.setOverlaysWebView({ overlay: false });

})
</script>

<style scoped>
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    overflow: hidden;
}

.loading-image-fullscreen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>