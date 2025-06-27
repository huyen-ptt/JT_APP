<template>
    <div class="container-fluid px-0">
        <!-- Search Header -->
        <div class="search-header d-flex align-items-center">
            <!-- Nút mũi tên quay lại -->
            <i class="fa-solid fa-arrow-left" @click="$router.go(-1)"></i>
            <div class="input-group">
                <input class="search-list form-control" v-model="searchTerm" type="text"
                    :placeholder="$t('place_to_go')" aria-label="Search" @keyup="onSearch()" />
                <!-- Dấu X để xóa input, luôn hiển thị khi có nội dung -->
                <button v-if="searchTerm" class="btn-close" type="button" aria-label="Clear"
                    @click="clearInput"></button>
            </div>
        </div>

        <!-- Food Items List -->
        <div class="food-list">
            <div class="title-list-search">{{ $t('RECENT_SEARCH_PRODUCT') }}</div>
            <div class="thanh-tt">
                <!-- Danh sách kết quả -->
                <div v-if="products.length > 0">
                    <div class="food-item d-flex align-items-center" v-for="p in products" :key="p.productId"
                        @click="onRedirectProductDetail(p)">
                        <img :src="helper.getImageCMS(p.avatar)" alt="Day Tour">
                        <p class="title-s">{{ p.title }}</p>
                    </div>
                </div>

                <!-- Hiển thị khi không có kết quả -->
                <div v-if="products.length === 0 && searchTerm" class="no-results">
                    <div class="container forgot-password-container">
                        <div class="">
                            <div class="form-container">
                                <img class="d-flex icon-success pb-4" width="100" src="/images/searchh2.png" />
                                <div class="icon-success text-center title-sl">{{ $t('NO_RESULTS') }}</div>
                                <div class=" icon-success text-center dia-chi-product  pb-4">{{ $t('NO_ITEMS') }}<br> {{
                                    $t('TRY_ANOTHER_PAGE') }}</div>
                                <RouterLink to="/list-results" type="submit" class="w-100 btn btn-lg btn-login">{{
                                    $t('EXPLORE') }}</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useSearchStore } from '@/stores/searchStore'
import { useSearch } from '@/composables/search'
import { useHelper } from '@/composables/helper'
import { RouterLink, useRouter } from 'vue-router'


const helper = useHelper();
const router = useRouter()

const searchStore = useSearchStore();
const currentSearch = computed(() => searchStore.search)

const searchComposable = useSearch();

const searchTerm = ref('');
let debounceTimeout = ref(null);

const products = ref([]);

// Hàm xóa input
const clearInput = () => {
    searchTerm.value = '';
};

const onSearch = async () => {
    if (debounceTimeout.value) clearTimeout(debounceTimeout.value);

    debounceTimeout.value = setTimeout(async () => {
        searchStore.onClearSearchItem();
        currentSearch.value.keyword = searchTerm.value;
        const response = await searchComposable.onSearchProducts(1);
        if (response) {
            products.value = response.products;
            console.log(products.value);
        }
    }, 300); // Chờ 300ms sau khi dừng gõ
};

const onRedirectProductDetail = (p) => {
    router.push(`/detail-product/${p.productId}`)
}

</script>

<style scoped>
.search-header {
    position: relative;
    /* Để đảm bảo các phần tử con có thể dùng position tuyệt đối */
}

.fa-arrow-left {
    position: absolute;
    left: 34px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 20px;
    z-index: 9;
    cursor: pointer;
    color: #333;
}

.input-group {
    margin-left: 40px;
    /* Đẩy phần input qua phải một chút để không che mất nút mũi tên */
}

.no-results {
    text-align: center;
    margin-top: 40px;
    font-size: 16px;
    color: #888;
}

.input-group {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}

.btn-close {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.thanh-tt {
    /* position: fixed;
    width: 100%;
    top: 0; */
}

.search-header {
    /* position: sticky; */
    /* top: 0; */
    /* background: white; */
    /* z-index: 1000; */
    padding: 12px 15px;
    /* border-bottom: 1px solid #eee;    */
}

.search-term {
    font-size: 16px;
    color: #333;
    margin: 0 15px;
    flex-grow: 1;
}

.food-item {
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.food-item img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    object-fit: cover;
    border-radius: 8px;
}

.food-item .title-s {
    font-size: 14px !important;
    font-weight: 500;
    color: #03294C;
    margin: 0;
}

.close-btn {
    border: none;
    background: none;
    padding: 5px;
}

.back-btn {
    border: none;
    background: none;
    padding: 5px;
}

.search-list {
    position: relative;
    flex: 1 1 auto;
    border-radius: 14px;
    width: 1%;
    min-width: 0;
    padding: 14px 53px;
}
</style>