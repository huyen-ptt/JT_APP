<template>
    <div class="promotion-bao">
        <!-- <h1 class="text-center fw-bold pb-4 bg-white title pt-4">Winter Voucher</h1> -->
        <div class="top-bar-product p-4 bg-white title">
            <button class="back-button-product">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title-product">Winter Voucher</h1>
            <button class="cart-button-product">

            </button>
        </div>
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
            <div class="recently-carousel prodcut-sp pt-4">
                <ProductSearch />
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
import Drawer from 'primevue/drawer';
const visibleBottom = ref(false);
import { RouterLink, useRouter } from 'vue-router'
import ProductSearch from "../components/ProductSearch.vue";


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
</style>