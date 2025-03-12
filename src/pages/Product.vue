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
            <div class="khac" @click="onRedirectSearch()">
                <div class="filter">
                    <img class="" src="../assets/images/Body.png" />
                    <span class="filter-counter-product">{{ listOfSearchTag.length }}</span>
                </div>
            </div>
            <div class="filters-container-product">

                <div class="filter-badge-product" v-for="l in listOfSearchTag">
                    <span class="filter-text-product">{{ l.name }}</span>
                    <i class="fas fa-times remove-filter-product" @click="onRemoveSearchTag(l)"></i>
                </div>

                <!-- <div class="filter-badge-product">
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
                </div> -->
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
        <ProductSearch v-for="p in listOfProducts" :product="p"></ProductSearch>
        
    </div>
    <Drawer v-model:visible="visibleRight" class="filter-modal">
        <Filter />
    </Drawer>

</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import Drawer from 'primevue/drawer';
import Select from 'primevue/select';
import Filter from '../components/Filter.vue';
import { useSearchStore } from '../stores/searchStore';
import { useSearch } from '../composables/search';
import ProductSearch from '../components/ProductSearch.vue';
import { useRouter } from 'vue-router'

const router = useRouter();
const searchComposable = useSearch();

const searchStore = useSearchStore();

const currentSearch = computed(() => searchStore.search);

const listOfSearchTag = ref([])

const listOfProducts = ref([])
const pageIndex = ref(1);

const onRemoveSearchTag = async (searchTag) => {
    searchStore.onRemoveSearchItem(searchTag);
    await onLoadListOfSearchTag();
}

const onLoadListOfSearchTag = async () => {
    listOfSearchTag.value = [];
    currentSearch.value.searchItems.forEach(r => {
        listOfSearchTag.value.push(r);
    })
    //Goi luon lay du lieu
    await onLoadListOfProducts();
}

const onLoadListOfProducts = async () => {
    const response = await searchComposable.onSearchProducts(pageIndex.value);
    listOfProducts.value = response.products
    console.log(listOfProducts.value);
}

const onRedirectSearch = () => {
    router.push('/search')
}

onMounted(async () => {
    await onLoadListOfSearchTag();
})



const selectedCity = ref();
const cities = ref([
    { name: 'Top view' },
    { name: 'Top rate' },
    { name: 'Top booking' },
    { name: 'Price low to high' },
]);
const visibleRight = ref(false);



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

.card {
    margin-bottom: 0;
}
</style>