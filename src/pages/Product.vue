<template>
    <div class="search-header-product">
        <div class="top-bar-product">
            <button class="back-button-product">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title-product">Product</h1>
            <button class="cart-button-product">
                <img class="icon-cart " src="../assets/images/shopping-cart.png" />

            </button>
        </div>

        <div class="d-flex align-items-center thanh-loc">
            <div class="khac"  @click="visibleRight  = true">
                <div class="filter">
                    <img class="" src="../assets/images/Body.png" />

                    <span class="filter-counter-product">3</span>
                </div>
            </div>
            <div class="filters-container-product">

                <div class="filter-badge-product">
                    <span class="filter-text-product">Ha Noi</span>
                    <i class="fas fa-times remove-filter-product"></i>
                </div>

                <div class="filter-badge-product">
                    <span class="filter-text-product">Travel SIM</span>
                    <i class="fas fa-times remove-filter-product"></i>
                </div>

                <div class="filter-badge-product">
                    <span class="filter-text-product">0 - 8,500,000đ</span>
                    <i class="fas fa-times remove-filter-product"></i>
                </div>
                <div class="filter-badge-product">
                    <span class="filter-text-product">Ưu đãi</span>
                    <i class="fas fa-times remove-filter-product"></i>
                </div>
                <div class="filter-badge-product">
                    <span class="filter-text-product">0 - 8,500,000đ</span>
                    <i class="fas fa-times remove-filter-product"></i>
                </div>
            </div>
        </div>
    </div>

    <div class="results-info-product">
        <div class="results-count-product">12 results found</div>
        <div class="card flex justify-center">
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select"
                class="w-full md:w-56 seclec-pr" />
        </div>

    </div>
    <div class="recently-carousel prodcut-sp">
        <div class="tour-card">
            <img src="../assets/images/6.png" alt="Inter Sweet Love" class="tour-image">
            <div class="tour-content">
                <h3 class="tour-title">Day tour | 3.5 Hours explore Hanoi Street food</h3>
                <div class="tour-location tour-price">
                    <div>
                        
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
            <img src="../assets/images/7.png" alt="Inter Sweet Love" class="tour-image">
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
            <img src="../assets/images/6.png" alt="Inter Sweet Love" class="tour-image">
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
            <img src="../assets/images/7.png" alt="Inter Sweet Love" class="tour-image">
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
    </div>
    <Drawer v-model:visible="visibleRight " class="filter-modal">
        <Filter/>
    </Drawer>

</template>
<script setup>
import { ref } from 'vue';
import Drawer from 'primevue/drawer';
import Select from 'primevue/select';
import Filter from '../components/Filter.vue';
const selectedCity = ref();
const cities = ref([
    { name: 'Top view' },
    { name: 'Top rate' },
    { name: 'Top booking' },
    { name: 'Price low to high' },
]);
const visibleRight  = ref(false);
</script>
<style scoped>
.prodcut-sp {
    padding: 30px 10px;
    display: grid;
    grid-template-columns: auto auto;
}

.tour-card {
    width: unset;
    padding: 0;
}
.tour-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
}
.tour-title {
    font-size: 12px;
    font-weight: 600;
    color: #03294C;
    margin-bottom: 4px;
}
.card{
    margin-bottom: 0;
}
</style>