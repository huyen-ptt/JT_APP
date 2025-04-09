<template>
    <a class="tour-card" v-for="index in 2" :key="index">
        <!-- Ảnh sản phẩm -->
        <Skeleton height="180px" class="tour-image mb-3" borderRadius="8px" />

        <div class="tour-content">

            <Skeleton width="80%" height="20px" class="mb-2" />


            <div class="tour-location tour-price flex justify-between mb-2">
                <div class="flex items-center space-x-2">
                    <Skeleton width="50px" height="14px" />
                </div>
                <div class="rating flex items-center space-x-1">
                    <Skeleton shape="circle" size="1rem" />
                    <Skeleton width="20px" height="14px" />
                </div>
            </div>


            <div class="tour-price mb-3">
                <Skeleton width="60%" height="16px" />
            </div>


            <div class="bieu-tuong flex justify-end">
                <Skeleton shape="circle" size="32px" />
            </div>
        </div>
    </a>
</template>
<script setup>
import Skeleton from 'primevue/skeleton';
</script>