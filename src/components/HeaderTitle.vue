<template>
  <div class="top-bar-product bg-white title border-bottom">
    <button class="back-button-product" @click="goBack">
      <i class="fas fa-arrow-left"></i>
    </button>
    <h1 class="page-title-product">{{ title }}</h1>
    <button class="cart-button-product">
      &nbsp;
      &nbsp;
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

// Định nghĩa props
const props = defineProps({
  title: String,
  uri: {
    type: String,
    default: null
  }
})

const router = useRouter()

// Hàm điều hướng
const goBack = () => {
  if (props.uri) {
    router.push(props.uri)
  } else {
    router.go(-1)
  }
}
</script>
<style scoped>
.top-bar-product{
  padding: 10px 15px;
}
</style>
