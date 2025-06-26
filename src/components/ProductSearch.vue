<template>

    <RouterLink :to="`/detail-product/${product.productId}`" class="tour-card1" v-if="product && !onLoading">
        <img :src="helper.getImageCMS(product.avatar)" class="tour-image">
        <div class="tour-content">
            <h3 class="tour-title">{{ product.title }}</h3>
            <div class="tour-location tour-price">
                <div>
                    <span class="tour-booked">{{ product.viewCount }} {{ $t('BOOKED') }}</span>
                </div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span class="rating-value">{{ parseFloat(product.rate).toFixed(1) }}</span>
                </div>
            </div>
            <div class="tour-price">
                <div class="linee-h">
                    <span class="price-text">{{ $t('PRICE_FROM') }}</span>
                    <span class="price-value">VND {{ product.price.toLocaleString("en-US", { useGrouping: true })
                    }}</span>
                    <div v-if="currentfCurrency.code !== 'VND'"> <span class="me-1"></span> <span
                            class="menu-text"><span class="me-1 menu-text">~
                                {{ currentfCurrency.code }}</span>{{
                                    (product.price / currentfCurrency.exchange)
                                        .toFixed(1)
                                        .toLocaleString("en-US")
                                }}</span></div>
                    <!-- <span class="price-as-currency"></span> -->
                </div>

            </div>
            <div class="bieu-tuong" v-if="product.iconCornerTag || product.textCornerTag"
                :style="product.colorCornerTag ? { backgroundColor: product.colorCornerTag } : '#67c7c5'">

                <div class="flight-icon">
                    <img :src="helper.getImageCMS(product.iconCornerTag)" v-if="product.iconCornerTag" />
                    <span class="text-corner-tag">{{ product.textCornerTag }}</span>
                </div>
            </div>
        </div>
    </RouterLink>

</template>
<script setup>
import { ref, onBeforeMount, computed, onMounted } from "vue";
import { useCurrencyStore } from "../stores/currencyStore";
import { useHelper } from '../composables/helper';

const currencyStore = useCurrencyStore();
const currentfCurrency = computed(() => currencyStore.fCurrency)

const helper = useHelper();

//1. Khai bao cho toi 1 prop ten la product de toi truyen vao tu component cha
const props = defineProps({
    // Prop 'name' kiểu String và là bắt buộc
    product: {
        type: Object,
        required: true,
    }
});
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
    height: 255px;
    position: relative;
}

.tour-image {
    width: 100%;
    height: 110px;
    object-fit: cover;
    border-radius: 8px;
}

.tour-title {
    font-size: 14px;
    font-weight: 600;
    color: #03294C;
    margin-bottom: 4px;
}

.card {
    margin-bottom: 0;
}
</style>