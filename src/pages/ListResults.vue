<template>
    <div class="container-big">
        <div class="search-header-product">
            <div class="top-bar-product">
                <button class="back-button-product" @click="$router.go(-1)">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h1 class="page-title-product">{{ $t('Product') }}</h1>
                <button class="cart-button-product">
                    <img class="icon-cart" src="../assets/images/shopping-cart.png" />
                </button>
            </div>

            <div class="d-flex align-items-center thanh-loc">
                <div class="khac" @click="onRedirectSearch">
                    <div class="filter">
                        <img src="../assets/images/Body.png" />
                        <span class="filter-counter-product">{{ listOfSearchTag.length }}</span>
                    </div>
                </div>
                <div class="filters-container-product">
                    <div class="filter-badge-product" v-for="l in listOfSearchTag" :key="l.id">
                        <span class="filter-text-product">{{ l.name }}</span>
                        <i class="fas fa-times remove-filter-product" @click="onRemoveSearchTag(l)"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="results-info-product">
            <div class="results-count-product">{{ total }} {{ $t('Results_Count_ProductResult', { count: total }) }}
            </div>
            <div class="card flex justify-center">
                <Select v-model="selectedOption" :options="sortOptions" optionLabel="name" optionValue="value"
                    :placeholder="$t('Select_Sort_Option_ProductResult')" class="w-full md:w-56 seclec-pr" />
            </div>
        </div>

        <div class="recently-carousel prodcut-sp">
            <ProductHomeSkeleton v-if="!listOfProducts || listOfProducts.length === 0" v-for="i in 4"
                :key="'skeleton-' + i" />

            <ProductSearch v-else v-for="p in listOfProducts" :key="p.id" :product="p" />
        </div>
        <div v-if="isLoadingMore" class="text-center py-4">
            <i class="pi pi-spinner pi-spin"></i> {{ $t('LOAD_MORE') }}
        </div>
        <Footer></Footer>


        <Drawer v-model:visible="visibleRight" class="filter-modal">
            <Filter />
        </Drawer>
    </div>
</template>

<script setup>
import { onMounted, ref, computed, watch, onUnmounted } from 'vue';
import Footer from "@/components/Footer.vue";
import { useRouter } from 'vue-router';
import Drawer from 'primevue/drawer';
import ProductHomeSkeleton from "../components/ProductHomeSkeleton.vue";

import Select from 'primevue/select';
import Filter from '../components/Filter.vue';
import ProductSearch from '../components/ProductSearch.vue';
import { useSearchStore } from '../stores/searchStore';
import { useSearch } from '../composables/search';
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n();

const router = useRouter();
const searchStore = useSearchStore();
const searchComposable = useSearch();

const listOfSearchTag = ref([]);
const listOfProducts = ref([]);
const pageIndex = ref(1);
const selectedOption = ref(null);
const visibleRight = ref(false);
const total = ref(0);
const sortOptions = ref([
    { name: t('SORT_TOP_VIEW'), value: 'TOP_VIEW' },
    { name: t('SORT_TOP_RATE'), value: 'TOP_RATE' },
    { name: t('SORT_TOP_BOOKING'), value: 'TOP_BOOKING' },
    { name: t('SORT_PRICE_LOW_TO_HIGH'), value: 'PRICE_LOW_TO_HIGH' }
]);
console.log(listOfProducts.value)

const onRemoveSearchTag = async (searchTag) => {
    searchStore.onRemoveSearchItem(searchTag);
    await onLoadListOfSearchTag();
};

const onLoadListOfSearchTag = async () => {
    listOfSearchTag.value = searchStore.search.searchItems;
    await onLoadListOfProducts();
};

const onLoadListOfProducts = async () => {
    const response = await searchComposable.onSearchProducts(pageIndex.value);
    listOfProducts.value = response.products;
    total.value = response.total;
};

const onRedirectSearch = () => {
    router.push('/search');
};

const sortProducts = async () => {
    if (selectedOption.value) {
        searchStore.onChangeSortBy(selectedOption.value)
        await onLoadListOfProducts();
    }

};


watch(selectedOption, sortProducts);

const isLoadingMore = ref(false); // tránh gọi trùng
const hasMore = ref(true); // để biết còn dữ liệu nữa không

const onScrollHandler = async () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    const threshold = fullHeight * (2 / 3);

    if (scrollY + windowHeight >= threshold && !isLoadingMore.value && hasMore.value) {
        isLoadingMore.value = true;
        pageIndex.value++;

        const response = await searchComposable.onSearchProducts(pageIndex.value);

        if (response.products.length === 0) {
            hasMore.value = false;
        } else {
            listOfProducts.value.push(...response.products);
            total.value = response.total;
        }

        isLoadingMore.value = false;
    }
};



onMounted(async () => {
    await onLoadListOfSearchTag();
    window.addEventListener('scroll', onScrollHandler);

});

onUnmounted(() => {
    window.removeEventListener('scroll', onScrollHandler);
});
</script>


<style scoped>
.prodcut-sp {
    padding: 12px 10px 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.tour-card {
    width: unset;
    padding: 0;
}

.bieu-tuong {
    position: absolute;
    top: 0;
    border-radius: 0px 0px 11px 11px;
    background: #F1F5FF;
    right: 10px;
    padding: 0px 10px 3px;
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

.card {
    margin-bottom: 0;
}
</style>
