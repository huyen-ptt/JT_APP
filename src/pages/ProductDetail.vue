<template>
    <div class="product-containerr" v-if="productDetail">
        <!-- Main image -->
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <!-- Slide 1 -->
                <div class="carousel-item active">
                    <img :src="helper.getImageCMS(productDetail.avatar)" class="d-block w-100"
                        style="height: 280px; object-fit: cover;">
                    <div class="position-absolute start-0 translate-middle-y p-3 icon">
                        <button class="back-button-product">
                            <i class="fas fa-arrow-left" style="color: white;"></i>
                        </button>
                    </div>
                    <div class="position-absolute end-0 translate-middle-y p-3 icon">
                        <img height="30" src="../assets/images/shopping-cart-w.png" />
                    </div>
                </div>

                <!-- <div class="carousel-item">
                    <img src="../assets/images/img11.jpg" alt="Fansipan Temple Complex" class="d-block w-100"
                        style="height: 280px; object-fit: cover;">
                    <div class="position-absolute start-0 translate-middle-y p-3 icon">
                        <button class="back-button-product">
                            <i class="fas fa-arrow-left" style="color: white;"></i>
                        </button>
                    </div>
                    <div class="position-absolute end-0 translate-middle-y p-3 icon">
                        <img height="30" src="../assets/images/shopping-cart-w.png" />
                    </div>
                </div> -->
            </div>

            <!-- Controls -->
            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> -->
        </div>

        <!-- Title section -->
        <div class="p-3">
            <div class=" title-detail">{{ productDetail.title }}</div>
            <div class="d-flex align-items-center mt-1 dia-chi-product justify-content-between">
                <div> <i class="fas fa-map-marker-alt location-dot"></i>
                    <span>{{ productDetail.location }} | {{ productDetail.totalSale }} {{ $t('BOOKED') }}
                    </span>
                </div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span class="rating-value">{{ productDetail.rateAVG.toFixed(2) }}</span>
                </div>

            </div>
        </div>

        <div className="container-fluid p-0">
            <ul className="nav nav-tabs custom-tabs justify-content-center" id="productTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active custom-tab-link" id="product-detail-tab" data-bs-toggle="tab"
                        data-bs-target="#product-detail" type="button" role="tab" aria-controls="product-detail"
                        aria-selected="true">
                        {{ $t('PRODUCT_DETAIL') }}
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custom-tab-link" id="description-tab" data-bs-toggle="tab"
                        data-bs-target="#description" type="button" role="tab" aria-controls="description"
                        aria-selected="false">
                        {{ $t('DESCRIPTION') }}
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custom-tab-link" id="terms-tab" data-bs-toggle="tab"
                        data-bs-target="#terms" type="button" role="tab" aria-controls="terms" aria-selected="false">
                        {{ $t('TERM_AND_CONDITIONS') }}
                    </button>
                </li>
            </ul>

            <div className="tab-content custom-tab-content" id="productTabsContent">
                <div className="tab-pane fade show active p-3" id="product-detail" role="tabpanel"
                    aria-labelledby="product-detail-tab">
                    <p className="mb-3 custom-paragraph" v-html="productDetail.content"></p>


                </div>
                <div className="tab-pane fade p-3" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <p className="mb-3 custom-paragraph" v-html="productDetail.description">

                    </p>

                </div>
                <div className="tab-pane fade p-3" id="terms" role="tabpanel" aria-labelledby="terms-tab">

                    <p className="mb-3 custom-paragraph" v-for="n in productDetail.policies" :key="n.tieuDe"
                        v-html="n.noiDung">

                    </p>
                </div>
            </div>
        </div>
        <!-- Ha Noi Station -->
        <div class="border-top p-3">
            <div class="-flex justify-content-between align-items-center">
                <h2 class="title-map">{{ productDetail.location }}</h2>
                <!-- <i class="fas fa-chevron-down" style="font-size: 20px;"></i> -->
            </div>
            <div>
                <div class="position-relative h-100">
                    <div className="position-relative mt-3" style="height: 300px;">
                        <iframe :src="productDetail.locationIframe" width="100%" height="100%" allowFullScreen={false}
                            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                </div>
            </div>
        </div>
        <div class="container-fluid p-4 review-product">
            <!-- Rating Header -->
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="d-flex align-items-center gap-4">
                    <h2 class="display-6 fw-bold mb-0 so-review">4.5</h2>
                    <div class="d-flex text-warning">
                        <i class="fas fa-star" style="font-size: 24px;"></i>
                        <i class="fas fa-star" style="font-size: 24px;"></i>
                        <i class="fas fa-star" style="font-size: 24px;"></i>
                        <i class="fas fa-star" style="font-size: 24px;"></i>
                        <i class="fas fa-star-half-alt" style="font-size: 24px;"></i>
                    </div>
                </div>
                <a href="#" class="text-primary text-decoration-none view-all">
                    {{ $t('VIEW_All') }}
                </a>
            </div>

            <div class="review-container">
                <!-- Review Quote -->
                <div class="nd-rv" v-for="r in productDetail.reviews" :key="r">
                    <div class="mb-4 border-bottom">
                        <div class="position-relative d-flex pb-3">
                            <div>
                                <img class="rounded-circle" width="20" src="../assets/images/phay.png" />


                            </div>
                            <div>
                                <p class="ms-4 mb-1 text-rv" style="font-size: 14px;"
                                    v-html="r.isExpanded ? r.content : (r.content?.slice(0, 50) + '...')"></p>
                                <a v-if="r.content?.length > 100" href="#" class="ms-4 read-more-pr"
                                    style="font-size: 14px;" @click.prevent="toggleReadMore(r)">
                                    {{ r.isExpanded ? $t('READ_LESS') : $t('READ_MORE') }}
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- User Profile -->
                    <div class="d-flex align-items-center gap-2 mb-4">
                        <!-- <img src="../assets/images/10.jpg" alt="Tanaka Yuki" class="rounded-circle" width="40"
                            height="40" /> -->
                        <img class="rounded-circle" width="40" height="40" v-if="r.avatar" :src="r.avatar" />
                        <img class="rounded-circle" width="40" height="40" v-else src="../assets/images/icon-user.png" />
                        <div>
                            <p class="mb-0 name-rv">{{ r.userName }}</p>
                            <div class="d-flex text-warning bao-sao">
                                <i class="fas fa-star" v-for="i in r.startNumber" style="font-size: 14px;"></i>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        <div class="recently-container p-4">
            <div class="recently-header">
                <h2 class="promo-title"> {{ $t('YOU_MIGHT_ALSO_LIKE') }}</h2>

            </div>

            <div class="recently-carousel">
                <!-- Tour Card 1 -->
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
                        <div class="bieu-tuong-gg">

                            <div class="flight-icon">
                                -50%
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
                        <div class="bieu-tuong">

                            <div class="flight-icon">
                                <img src="../assets/images/airplane.png" />
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
                        <div class="bieu-tuong">

                            <div class="flight-icon">
                                <img src="../assets/images/airplane.png" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div class="bottom-menu menu-search d-flex ">
            <div class="d-flex">
                <div class="don-vi align-items-center" id="clear-all">USD</div>
                <div class="price-pr">---</div>
            </div>
            <div class="d-flex">
                <div class="gio-hang-pr">
                    <img src="../assets/images/shopping-cart.png" />
                </div>
                <router-link to="/booking"> <button class="search-button" id="search">
                        {{ $t('BUY_NOW') }}
                    </button></router-link>
            </div>
        </div>

    </div>

</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import { useProduct } from "../composables/product";
import { useHelper } from "../composables/helper";
const productComposable = useProduct();
const helper = useHelper();
const productDetail = ref([])
onBeforeMount(async () => {
    productDetail.value = await productComposable.getProductDetail();
    console.log(productDetail.value, "productDetail.value")
})
const toggleReadMore = (review) => {
    review.isExpanded = !review.isExpanded; // Đảo trạng thái mở rộng
};
</script>
<style scoped>
.custom-tabs {
    border-bottom: none;
}

.custom-tab-link {
    color: #8A929E;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
}

.custom-tab-link.active {
    color: #03294C;
    border-bottom: 2px solid #03294C;
    background-color: transparent;
    font-weight: 700;
}

.custom-tab-content {
    /* padding-top: 15px; */
}

.custom-paragraph {
    color: #8A929E;
    font-size: 14px;
    line-height: 1.5;
}

.nav-tabs .nav-link {
    border-radius: unset;
}

.nav-tabs .nav-link {
    background-color: unset;
}

iframe {
    border-radius: 25px;
}

.review-container {
    display: flex;
    width: 100%;
    overflow-x: auto;
    /* Allow horizontal scroll */
    max-width: 100%;
    /* Prevent it from overflowing */
    scrollbar-width: none;
}

/* Each review box */
.nd-rv {
    flex: 0 0 auto;
    /* Prevent reviews from shrinking or growing */
    width: 70%;
    /* This will make the first review take more than half the screen */
    margin-right: 20px;
    /* Add space between reviews */
}

.tour-card {
    flex: 0 0 auto;
    width: 230px;
    padding: 0;
    position: relative;
    border: 1px solid #EDF1F7;
    border-radius: 12px;
    overflow: hidden;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    background-color: white;
}
</style>