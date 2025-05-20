<template>
    <div class="promotion-bao">
        <HeaderTitle :title="$t('Promotion')"></HeaderTitle>

        <div class="container">
            <div class="promotion-container">
                <!-- Carousel/Slider -->
                <div id="promotionCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item p-2" v-for="(p, index) in promotions" :key="index"
                            :class="{ active: index === 0 }">
                            <div class="promotion-card">
                                <div class="promotion-image">
                                    <img :src="helper.getImageCMS(p.avatar)" alt="Winter Deal 20% Off"
                                        class="img-fluid rounded-4">
                                </div>
                                <div class="promotion-details">
                                    <div>
                                        <h5 class="promotion-title">{{ p.title }}</h5>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="promotion-expiry">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                                    <path
                                                        d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                                    <path
                                                        d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                </svg>
                                                <span class="title-con">{{ $t('ends_on') }} 28/2/2025</span>
                                            </div>
                                            <RouterLink to="/promotion-detail" class="btn btn-primary collect-btn">
                                                {{ $t('Button_Collect_Promotion') }}
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Carousel Indicators -->
                    <div class="carousel-indicators position-relative mt-2">
                        <button v-for="(p, index) in promotions" :key="index" type="button"
                            data-bs-target="#promotionCarousel" :data-bs-slide-to="index"
                            :class="{ active: index === 0 }" aria-label="Slide {{ index + 1 }}"></button>
                    </div>
                </div>
            </div>

            <div class="recently-carousel prodcut-sp pt-4 pb-4">
                <!-- <ProductSearch /> -->
                <div class="tour-card">
                    <img src="../assets/images/anh-1.png" alt="Inter Sweet Love" class="tour-image">
                    <div class="tour-content">
                        <h3 class="tour-title">Day tour | 3.5 Hours explore Hanoi Street food</h3>
                        <div class="tour-location tour-price">
                            <div>
                                <i class="fas fa-map-marker-alt location-dot"></i>
                                <span class="dia-diem">Ha Noi</span>
                                <span class="tour-booked">40 Booked</span>
                            </div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-value">4.5</span>
                            </div>
                        </div>
                        <div class="tour-price">
                            <div>
                                <span class="price-text">From</span>
                                <span class="price-value">~ USD 34</span>
                            </div>

                        </div>

                    </div>
                </div>

                <!-- Tour Card 2 -->
                <div class="tour-card">
                    <img src="../assets/images/2.png" alt="Inter Sweet Love" class="tour-image">
                    <div class="tour-content">
                        <h3 class="tour-title">Day tour | 3.5 Hours explore Hanoi Street food</h3>
                        <div class="tour-location tour-price">
                            <div>
                                <i class="fas fa-map-marker-alt location-dot"></i>
                                <span class="dia-diem">Ha Noi</span>
                                <span class="tour-booked">40 Booked</span>
                            </div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-value">4.5</span>
                            </div>
                        </div>
                        <div class="tour-price">
                            <div>
                                <span class="price-text">From</span>
                                <span class="price-value">~ USD 34</span>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="tour-card">
                    <img src="../assets/images/8.png" alt="Inter Sweet Love" class="tour-image">
                    <div class="tour-content">
                        <h3 class="tour-title">Day tour | 3.5 Hours explore Hanoi Street food</h3>
                        <div class="tour-location tour-price">
                            <div>
                                <i class="fas fa-map-marker-alt location-dot"></i>
                                <span class="dia-diem">Ha Noi</span>
                                <span class="tour-booked">40 Booked</span>
                            </div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-value">4.5</span>
                            </div>
                        </div>
                        <div class="tour-price">
                            <div>
                                <span class="price-text">From</span>
                                <span class="price-value">~ USD 34</span>
                            </div>

                        </div>

                    </div>
                </div>

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
import { useHelper } from "@/composables/helper";

const helper = useHelper();
const homeComposable = useHome();
const promotions = ref([]);

onBeforeMount(async () => {
    promotions.value = await homeComposable.getZonesByTypeKhuyenMai();
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