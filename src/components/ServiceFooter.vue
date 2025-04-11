<template>
    <!-- <div class="row "> -->
    <div class="col-3 service-item" style="width: 25%;" v-for="(s, index) in services" :key="index"
        @click="onChooseService(s)">
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
import { useSearchStore } from "../stores/searchStore";
import { RouterLink, useRouter } from 'vue-router'
import { useModalStore } from '../stores/modalStore';



const router = useRouter()


const helper = useHelper();
const homeComposable = useHome();
const searchStore = useSearchStore();
const modalStore = useModalStore();

const services = ref([])
const onChooseService = async (s) => {
    searchStore.onClearSearchItem();
    searchStore.onAddSearchItem(s)
    modalStore.close();
    if (router.currentRoute.value.path === '/list-results') {
        await router.replace('/blank');
        await router.replace('/list-results');
    } else {
        router.push('/list-results');
    }
}
onBeforeMount(async () => {
    services.value = await homeComposable.getZonesByTypeDichVu();
    services.value.forEach(r => {
        r.url = r.alias
        r.name = r.title
    })

})
</script>