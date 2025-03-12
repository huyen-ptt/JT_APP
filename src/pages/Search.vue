<template>
    <div class="container">
        <div class="header-search">
            <div class="close"><i class="fa-solid fa-xmark"></i></div>
        </div>
        <div class="search-container">
            <i class="fas fa-search search-icon"></i>
            <input type="text" class="search-input" :placeholder="$t('place_to_go')" @keyup.enter="handleSearch" />



        </div>
        <div class="filter-sidebar">
            <!-- Destination Section -->
            <div class="filter-section" v-if="destinationSearch">
                <h3 class="section-title">{{ destinationSearch.zoneParentName }}</h3>
                <div class="button-grid" id="destinations">

                    <button v-for="(s, index) in destinationSearch.zoneChilds" :key="index" class="filter-button"
                        :class="s.isActive ? 'selected' : ''" :data-name="s.name" @click="onClickSearchItem(s)">{{
                            s.name
                        }}</button>
                </div>
            </div>

            <!-- Service Section -->
            <div class="filter-section" v-if="serviceSearch">
                <h3 class="section-title">{{ serviceSearch.
                    zoneParentName }}</h3>
                <div class="button-grid" id="services">



                    <button class="filter-button" v-for="(d, key) in serviceSearch.zoneChilds" :key="index" :data-name="d
                        .name" :class="d.isActive ? 'selected' : ''" @click="onClickSearchItem(d)">{{ d.name
                        }}</button>
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
            <a class="clear-button" id="clear-all">{{ $t('clear_all') }}</a>
            <router-link to="/product"> <button class="search-button" id="search">
                    <i class="fas fa-search search-icon1"></i>
                    {{ $t('search') }}
                </button></router-link>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import Slider from 'primevue/slider';
import { useSearch } from "@/composables/search";
import { useSearchStore } from '../stores/searchStore';
const searchStore = useSearchStore();
const currentSearch = computed(() => searchStore.search);
const searchComposable = useSearch();
const searchZone = ref([])
const destinationSearch = ref(null)
const serviceSearch = ref(null)


const budgetRange = ref([0, 20000000]);

const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN').format(value) + 'đ';
};

const onClickSearchItem = async (searchItem) => {
    if (searchItem.isActive == false) {
        searchItem.isActive = true;
        searchStore.onAddSearchItem(searchItem);
    } else {
        searchItem.isActive = false;
        searchStore.onRemoveSearchItem(searchItem);
    }
}

onMounted(async () => {

    searchZone.value = await searchComposable.getSearchableZone();
    if (searchZone.value) {
        destinationSearch.value = searchZone.value.ssrZoneList.find(r => r.zoneParentType == 5);
        destinationSearch.value.zoneChilds.forEach(r => {
            r.isActive = false;
        })

        serviceSearch.value = searchZone.value.ssrZoneList.find(r => r.zoneParentType == 1);
        serviceSearch.value.zoneChilds.forEach(r => {
            r.isActive = false;
        })

        if (currentSearch.value) {
            currentSearch.value.searchItems.forEach(c => {
                console.log(c)
                destinationSearch.value.zoneChilds.forEach(s => {
                    if (c.id === s.id) {
                        s.isActive = true;
                    }
                })
                serviceSearch.value.zoneChilds.forEach(s => {
                    if (c.id === s.id) {
                        s.isActive = true;
                    }
                })
            })
        }
    }
})
</script>
<style></style>