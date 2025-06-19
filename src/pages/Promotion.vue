<template>
    <div class="promotion-bao">
        <HeaderTitle :title="$t('Promotion')" :uri="`/`"></HeaderTitle>

        <div class="container">
            <div class="promotion-container">
                <!-- Swiper -->
                <swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :space-between="16"
                    :pagination="{ clickable: true }" :autoplay="{ delay: 5000 }" class="promotion-swiper" style="padding-bottom: 40px;">
                    <swiper-slide v-for="(p, index) in promotions" :key="index" class="p-2 card-p">
                        <div class="promotion-card">
                            <div class="promotion-image">
                                <img :src="helper.getImageCMS(p.avatar)" alt="Promotion Image"
                                    class="img-fluid rounded-4" />
                            </div>
                            <div class="promotion-details">
                                <div>
                                    <h5 class="promotion-title">{{ p.title }}</h5>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="promotion-expiry">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                                <path
                                                    d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 
                             1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 
                             0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 
                             2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 
                             2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 
                             2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg>
                                            <span class="title-con">{{ $t('ends_on') }} {{ p.endingTime }}</span>
                                        </div>
                                        <RouterLink :to="`/promotion-detail/${p.id}`" class="btn btn-primary collect-btn">
                                            {{ $t('Button_Collect_Promotion') }}
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

            </div>
            <div class="recently-carousel prodcut-sp pt-4 pb-4">
                <ProductSearch v-for="p in products" :key="p.id" :product="p"></ProductSearch>
                
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import ProductSearch from "../components/ProductSearch.vue";
import Footer from "@/components/Footer.vue";
import HeaderTitle from '../components/HeaderTitle.vue';
import { useHome } from '@/composables/home.js';
import { usePromotion } from "@/composables/promotion.js";
import { useHelper } from "@/composables/helper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const helper = useHelper();
const homeComposable = useHome();
const promotionComposable = usePromotion();
const promotions = ref([]);
const products = ref([]);

onBeforeMount(async () => {
    promotions.value = await homeComposable.getZonesByTypeKhuyenMai();
    products.value = await promotionComposable.getProductInPromotions([]);
    console.log(promotions.value, 'promotions.value');

});
</script>
<style scoped>
.prodcut-sp {
    /* padding: 30px 10px; */
    display: grid;
    grid-template-columns: auto auto;
}

.tour-card {
    width: unset;
    padding: unset;
}

.promotion-bao {
    padding-bottom: 50px;
}

.promotion-title {
    max-width: unset;
    font-size: 16px;
    margin-bottom: 6px;
}

.tour-image {

    border-radius: 20px;
}
</style>