<template>
    <div class="">
        <div class="top-bar-product search-headerr">
            <button class="back-button-product" @click="$router.go(-1)">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title-product">Filter</h1>
            <a class="clear-button" id="clear-all">Clear All</a>

        </div>
        <div class="filter-sidebar">
            <!-- Destination Section -->
            <div class="filter-section" v-if="destinationSearch">
                <h3 class="section-title">{{ destinationSearch.zoneParentName }}</h3>
                <div class="button-grid" id="destinations">
                    <button class="filter-button selected" data-name="Ha Noi">Ha Noi</button>
                    <button v-for="(s, index) in destinationSearch.zoneChilds" :key="index" class="filter-button"
                        :data-name="s.name">{{ s.name }}</button>
                </div>
            </div>

            <!-- Service Section -->
            <div class="filter-section" v-if="serviceSearch">
                <h3 class="section-title">{{ serviceSearch.
                    zoneParentName }}</h3>
                <div class="button-grid" id="services">


                    <button class="filter-button selected" data-name="Travel SIM">Travel SIM</button>
                    <button class="filter-button" v-for="(d, key) in serviceSearch.zoneChilds" :key="index" :data-name="d
                        .name">{{ d.name }}</button>
                </div>
            </div>
            <div class="budget-slider-container">
                <h3 class="section-title budge">{{ $t('budget') }}</h3>
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
            <router-link to="/list-results" class="btn-search"> <button class="search-button btn-search" id="search">
                    Apply Filters
                </button></router-link>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import Slider from 'primevue/slider';
import { useSearch } from "@/composables/search";
const searchComposable = useSearch();
const searchZone = ref([])
const destinationSearch = ref(null)
const serviceSearch = ref(null)


const budgetRange = ref([0, 20000000]);

const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN').format(value) + 'đ';
};

onMounted(async () => {

    searchZone.value = await searchComposable.getSearchableZone()
    destinationSearch.value = searchZone.value.ssrZoneList.find(r => r.zoneParentType == 5);
    serviceSearch.value = searchZone.value.ssrZoneList.find(r => r.zoneParentType == 1);

    console.log(destinationSearch.value, serviceSearch.value)
})
</script>
<style></style>