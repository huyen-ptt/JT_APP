<template>
    <div class="top-bar-product p-4 bg-white title">
        <button class="back-button-product">
            <i class="fas fa-arrow-left" @click="$router.go(-1)"></i>
        </button>
        <h1 class="page-title-product">{{ title }}</h1>
        <button class="cart-button-product">
            &nbsp;
        </button>
    </div>
</template>
<script setup>
import { ref, onBeforeMount, computed, onMounted, watch } from "vue";

const props = defineProps({
    title: String,
})
</script>