<template>
    <div class="min-vh-100 d-flex align-items-center justify-content-center p-4">
        <img width="50%" src="/src/assets/images/anh-logo.png" alt="JOY TIME">
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.replace('/languagesonboading')
  }, 3000)
})
</script>
