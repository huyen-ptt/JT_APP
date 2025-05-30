<template>
    <div class="container pt-2">
        <router-link to="/" class="header-search">
            <div class="close"><i class="fa-solid fa-xmark"></i></div>
        </router-link>
        <div class="search-container">
            <RouterLink to="/list-search">
                <i class="fas fa-search search-icon"></i>
                <input type="text" class="search-input" :placeholder="$t('place_to_go')" />
            </RouterLink>
        </div>
        <div class="filter-sidebar">
            <!-- Destination Section -->
            <div class="filter-section" v-if="destinationSearch">
                <h3 class="section-title">{{ destinationSearch.zoneParentName }}</h3>
                <div>
                    <div :class="['half-list-container', { expanded: isExpanded }]">
                        <div class="button-grid" id="destinations">
                            <button v-for="(s, index) in destinationSearch.zoneChilds" :key="index"
                                class="filter-button" :class="s.isActive ? 'selected' : ''" :data-name="s.name"
                                @click="onClickSearchItem(s)">
                                {{ s.name }}
                            </button>
                        </div>
                        <div v-if="!isExpanded" class="gradient-overlay"></div>
                    </div>

                    <button class="read-more-btn" @click="toggleExpand">
                        {{ isExpanded ? 'Show Less' : 'Read More' }}
                    </button>
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
            <a @click="clearAllSelected" class="clear-button" id="clear-all">{{ $t('clear_all') }}</a>
            <router-link to="/list-results"> <button class="search-button" id="search">
                    <i class="fas fa-search search-icon1"></i>
                    {{ $t('Button_ApplyFilters') }}
                </button></router-link>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Slider from 'primevue/slider';
import { useSearch } from "@/composables/search";
import { useSearchStore } from '../stores/searchStore';
const searchStore = useSearchStore();
const currentSearch = computed(() => searchStore.search);
const searchComposable = useSearch();
const searchZone = ref([])
const destinationSearch = ref(null)
const serviceSearch = ref(null)
const router = useRouter();
const searchQuery = ref('');
const isExpanded = ref(false)
const budgetRange = ref([0, 20000000]);

const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN').format(value) + 'đ';
};

const onClickSearchItem = async (searchItem) => {
    // console.log(searchItem);
    if (searchItem.isActive == false) {
        searchItem.isActive = true;
        searchStore.onAddSearchItem(searchItem);
    } else {
        searchItem.isActive = false;
        searchStore.onRemoveSearchItem(searchItem);
    }
}
const handleSearch = () => {
    if (searchQuery.value) {
        router.push({ path: '/list-search', query: { q: searchQuery.value } });
    }
}
const toggleExpand = () => {
    isExpanded.value = !isExpanded.value
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
const clearAllSelected = () => {
    if (destinationSearch.value) {
        destinationSearch.value.zoneChilds.forEach(s => s.isActive = false);
    }
    if (serviceSearch.value) {
        serviceSearch.value.zoneChilds.forEach(s => s.isActive = false);
    }
    searchStore.onClearSearchItem();
}
</script>
<style scoped>
.search-container {
    background-color: white;
    border-radius: 15px;
    padding: 15px 56px 15px 28px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 10px;
    color: #8A929E;
    align-items: center;
    justify-content: space-between;
}

.search-input::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    color: #8A929E;

}

.half-list-container {
    position: relative;
    max-height: 300px;
    overflow: hidden;
    transition: max-height 0.5s ease;
}

.half-list-container.expanded {
    max-height: 1000px;
}

.button-grid {
    display: flex;
    flex-wrap: wrap;
}
.header-search{
    margin: 0;
    padding: 10px 0;
}
.filter-button {
    background-color: #f1f5f9;
    padding: 6px 12px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
}

.filter-button.selected {
    background-color: #0f172a;
    color: white;
}

.gradient-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(to top, white, rgba(255, 255, 255, 0));
    pointer-events: none;
}

.read-more-btn {
    background-color: #446EDE;
    color: white;
    padding: 6px 20px;
    border-radius: 25px;
    border: none;
    margin: auto;
    display: block;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    transition: background 0.3s;
}

.read-more-btn:hover {
    background-color: #446EDE;
}
</style>