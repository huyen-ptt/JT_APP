<template>
    <div class="promotion-bao">
        <HeaderTitle :title="$t('PAGE_TITLE_PROMOTION')"></HeaderTitle>

        <div class="container">
            <div class="promotion-container ">
                <!-- Carousel/Slider -->
                <div id="promotionCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <!-- Slide 1 -->
                        <div class="carousel-item active p-2" v-for="(p, index) in promotions" :key="index">
                            <div class="promotion-card">
                                <div class="promotion-image">
                                    <img :src="helper.getImageCMS(p.avatar)" alt="Winter Deal 20% Off"
                                        class="img-fluid rounded-4">
                                </div>
                                <div class="promotion-details">
                                    <div>
                                        <div>
                                            <h5 class="promotion-title">{{ p.title }}</h5>

                                        </div>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="promotion-expiry">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                                    <path
                                                        d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                                    <path
                                                        d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                </svg>
                                                <span class="title-con">Ends on 28/2/2025</span>
                                            </div>
                                            <a href="/promotion-detail" class="btn btn-primary collect-btn">Collect</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Slide 2 -->
                       
                    </div>

                    <!-- Carousel Indicators -->
                    <div class="carousel-indicators position-relative mt-2">
                        <button type="button" data-bs-target="#promotionCarousel" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#promotionCarousel" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#promotionCarousel" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                </div>

            </div>
            <div class="recently-carousel prodcut-sp pt-4">
                <ProductSearch />


            </div>
        </div>
        <Footer></Footer>
    </div>

</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import Drawer from 'primevue/drawer';
const visibleBottom = ref(false);
import { RouterLink, useRouter } from 'vue-router'
import ProductSearch from "../components/ProductSearch.vue";
import Footer from "@/components/Footer.vue";

import { useHome } from '@/composables/home.js'
import { useHelper } from "@/composables/helper";
import HeaderTitle from '../components/HeaderTitle.vue';
const helper = useHelper();

const homeComposable = useHome();
const promotions = ref([])

// import { useProduct } from '@/composables/product.js'
// const productComposable = userProduct();
// const listProduct = ref([])
onBeforeMount(async () => {
    promotions.value = await homeComposable.getZonesByTypeKhuyenMai();
    console.log(promotions.value, 'promotions.value')
    // listProduct.value = productComposable.
})

</script>
<style scoped>
.prodcut-sp {
    padding: 30px 10px;
    display: grid;
    grid-template-columns: auto auto;
}

.tour-card {
    width: unset;
}

.promotion-bao {
    padding-bottom: 50px;
}

.promotion-title {
    max-width: unset;
}
</style>