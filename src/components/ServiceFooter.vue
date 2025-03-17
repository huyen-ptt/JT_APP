<template>
    <!-- <div class="row "> -->
        <div class="col-3 service-item" style="width: 25%;" v-for="(s, index) in services" :key="index">
            <div class="service-icon">
                <img :src="helper.getImageCMS(s.icon)" alt="Combo">
            </div>
            <div class="service-name">{{ s.title }}</div>
        </div>
    <!-- </div> -->
</template>
<script setup>
import { useHome } from '@/composables/home.js'
import { onBeforeMount, ref } from "vue";
import { useHelper } from "@/composables/helper";
const helper = useHelper();
const homeComposable = useHome();
const services = ref([])
onBeforeMount(async () => {
    services.value = await homeComposable.getZonesByTypeDichVu();

})
</script>