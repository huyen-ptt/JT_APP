<template>
    <div class="">
        <div class="top-bar-product search-headerr">
            <button class="back-button-product">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title-product">Filter</h1>
            <a class="clear-button" id="clear-all">Clear All</a>

        </div>
        <div class="filter-sidebar">
            <!-- Destination Section -->
            <div class="filter-section">
                <h3 class="section-title">Destination</h3>
                <div class="button-grid" id="destinations">
                    <button class="filter-button selected" data-name="Ha Noi">Ha Noi</button>
                    <button class="filter-button" data-name="Hue">Hue</button>
                    <button class="filter-button" data-name="Ho Chi Minh">Ho Chi Minh</button>
                    <button class="filter-button" data-name="Hoi An">Hoi An</button>
                    <button class="filter-button" data-name="Phu Yen">Phu Yen</button>
                    <button class="filter-button" data-name="Sa Pa">Sa Pa</button>
                    <button class="filter-button" data-name="Da Lat">Da Lat</button>
                    <button class="filter-button" data-name="Da Nang">Da Nang</button>
                    <button class="filter-button" data-name="Phu Quoc">Phu Quoc</button>
                    <button class="filter-button" data-name="Ninh Binh">Ninh Binh</button>
                    <button class="filter-button" data-name="Hai Phong">Hai Phong</button>
                    <button class="filter-button" data-name="Vung Tau">Vung Tau</button>
                    <button class="filter-button" data-name="Nha Trang">Nha Trang</button>
                    <button class="filter-button" data-name="Quang Binh">Quang Binh</button>
                    <button class="filter-button" data-name="Hoa Binh">Hoa Binh</button>
                    <button class="filter-button" data-name="Quy Nhon">Quy Nhon</button>
                    <button class="filter-button" data-name="Phan Thiet">Phan Thiet</button>
                    <button class="filter-button" data-name="Bac Kan">Bac Kan</button>
                    <button class="filter-button" data-name="Son La">Son La</button>
                    <button class="filter-button" data-name="Ha Giang">Ha Giang</button>
                </div>
            </div>

            <!-- Service Section -->
            <div class="filter-section">
                <h3 class="section-title">Service</h3>
                <div class="button-grid" id="services">
                    <button class="filter-button" data-name="Tour & Sightseeing">Tour & Sightseeing</button>
                    <button class="filter-button" data-name="Ticket">Ticket</button>
                    <button class="filter-button" data-name="Combo">Combo</button>

                    <button class="filter-button selected" data-name="Travel SIM">Travel SIM</button>
                    <button class="filter-button" data-name="Transportation">Transportation</button>
                    <button class="filter-button" data-name="Souvenir">Souvenir</button>
                    <button class="filter-button" data-name="Food & Beverage">Food & Beverage</button>
                    <button class="filter-button" data-name="Fast Track">Fast Track</button>
                    <button class="filter-button" data-name="Spa">Spa</button>
                </div>
            </div>
            <div class="budget-slider-container">
                <h3 class="section-title budge">Budget</h3>
                <div class="slider-container">
                    <Slider v-model="budgetRange" range class="budget-slider" :min="0" :max="20000000" />
                    <div class="slider-labels">
                        <span class="min-label">{{ formatCurrency(budgetRange[0]) }}</span>
                        <span class="max-label">{{ formatCurrency(budgetRange[1]) }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-menu menu-search">
            <router-link to="/product" class="btn-search"> <button class="search-button btn-search" id="search">
                Apply Filters
                </button></router-link>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Slider from 'primevue/slider';

const budgetRange = ref([0, 20000000]);

const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN').format(value) + 'đ';
};
</script>
<style></style>