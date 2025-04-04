<template>
    <div class="promotion-bao">

        <HeaderTitle :title="$t('Winter_Voucher')"></HeaderTitle>

        <div class="container">
            <div class="">
                <!-- Carousel/Slider -->
                <div id="promotionCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <!-- Slide 1 -->
                        <div class="p-2">
                            <div class="">
                                <div class="promotion-image">
                                    <img src="../assets/images/10.jpg" alt="Winter Deal 20% Off"
                                        class="img-fluid rounded-4">
                                </div>
                                <div class="promotion-details">
                                    <div>
                                        <div>
                                            <h5 class="promotion-title-lon">Winter Voucher - The Biggest winter deal at
                                                Joytime</h5>
                                            <p>Enjoy a massive <span class="highlight-prd">20% OFF</span> on ALL
                                                products at Joytime from Travel SIM cards, Fast Track services and
                                                eVisa. Everything you need is on sale!</p>

                                            <p>How to grab your discount?</p>

                                            <div class="steps-prd">
                                                <div class="step-prd">Visit Joytime.vn.</div>
                                                <div class="step-prd">Add your favorite products to the cart.</div>
                                                <div class="step-prd">Apply the code <span
                                                        class="discount-code-prd">WINTER20</span> at checkout to get 20%
                                                    OFF!</div>
                                            </div>

                                            <p class="urgency-prd">Hurry, the offer ends on 28/2/2025!</p>

                                            <p>Don't miss this chance to save big and make your travels smoother and
                                                more affordable!</p>

                                            <p class="footer-prd">Shop now and experience winter like never before!</p>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Carousel Indicators -->

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
        <div class="bottom-menu menu-search">
            <router-link class="btn-search"> <button class="search-button btn-search" id="search">
                    Collect
                </button></router-link>
        </div>
    </div>

</template>
<script setup>
import { onBeforeMount, ref } from "vue";
import HeaderTitle from '../components/HeaderTitle.vue';
import Drawer from 'primevue/drawer';
const visibleBottom = ref(false);
import { RouterLink, useRouter } from 'vue-router'
import ProductSearch from "../components/ProductSearch.vue";


</script>
<style scoped>
.prodcut-sp {
    /* padding: 30px 10px; */
    display: grid;
    grid-template-columns: auto auto;
}

.tour-card {
    width: unset;
    padding: 0;
}

.promotion-title {

    white-space: unset;
    overflow: hidden;
    text-overflow: unset;
    max-width: 100%;
}

.promotion-bao {
    padding-bottom: 70px;
}

.menu-search {
    padding: 16px 20px;
    align-items: center;
    border-radius: 15px 15px 0 0;

}

.tour-image {

    border-radius: 20px;
}
</style>