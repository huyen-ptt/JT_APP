<template>
    <div>

        <HeaderTitle :title="$t('cart')"></HeaderTitle>

        <div class="body-cart">
            <div class="select-all-container d-flex align-items-center">
                <input type="checkbox" class="custom-checkbox form-check-input" id="selectAll" v-model="isSelectAllCart"
                    @change="onChangeCheckAllCart()">
                <label class="select-all-text mb-0" for="selectAll">{{ $t('select_all') }}</label>
            </div>
            <div class="p-3">
                <div class="d-flex justify-content-center align-items-center" v-for="(cart, index) in carts"
                    :key="index">
                    <div class="checkbox-container me-2">
                        <input type="checkbox" class="custom-checkbox form-check-input" v-model="cart.isCartChecked"
                            id="selectItem" :checked="cart.isCartChecked">
                    </div>
                    <div class="news-card-blogg border">

                        <div class="pe-3">
                            <img :src="helper.getImageCMS(cart.avatar)" alt="Da Nang ancient town" class="img-cart" />
                        </div>
                        <div class="news-content-blogg">
                            <h3 class="news-title-blogg">{{ cart.bookingParentName }}</h3>
                            <p class="news-description-cart">{{ cart.bookingName }}</p>
                            <div class="news-meta-blogg">
                                <div class="">
                                    <div class="d-flex flex-column">
                                        <!-- Guest Select -->
                                        <div class="guest-select mb-2" @click="cart.isOpenModalChangeQuantity = true">
                                            {{ cart.numberOfAldut + cart.numberOfChildrend }} Guest
                                            <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                            <Drawer v-model:visible="cart.isOpenModalChangeQuantity"
                                                header="Select quantity" position="bottom" style="height: auto"
                                                class="bo-goc so-luong-mua" :dismissable="false">
                                                <div class="quantity-selector-so-luong">

                                                    <!-- Adult Section -->
                                                    <div
                                                        class="price-item-so-luong d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <div class="price-label-so-luong">{{ cart.dvNguoiLong }}
                                                            </div>
                                                            <div class="price-amount-so-luong">VND {{
                                                                cart.combination.priceEachNguoiLon.toLocaleString() }}
                                                            </div>
                                                            <div class="price-text">~{{ fCurrency.code }} {{
                                                                (cart.combination.priceEachNguoiLon /
                                                                    fCurrency.exchange).toFixed(1) }}</div>
                                                        </div>
                                                        <div class="quantity-controls-so-luong">
                                                            <button class="quantity-btn-so-luong"
                                                                @click="cart.numberOfAldut--"
                                                                :disabled="cart.combination.minimumNguoiLon >= cart.numberOfAldut">−</button>
                                                            <span class="quantity-display-so-luong">{{
                                                                cart.numberOfAldut
                                                                }}</span>
                                                            <button class="quantity-btn-so-luong"
                                                                @click="cart.numberOfAldut++">+</button>
                                                        </div>
                                                    </div>

                                                    <!-- Child Section -->
                                                    <div class="price-item-so-luong d-flex justify-content-between align-items-center"
                                                        v-if="cart.combination.priceEachTreEm > 0">
                                                        <div>
                                                            <div class="price-label-so-luong">{{ cart.dvTreEm }}</div>
                                                            <div class="price-amount-so-luong">VND {{
                                                                cart.combination.priceEachTreEm.toLocaleString() }}
                                                            </div>
                                                            <div class="price-text">~{{ fCurrency.code }} {{
                                                                (cart.combination.priceEachNguoiLon /
                                                                    fCurrency.exchange).toFixed(1) }}</div>
                                                        </div>
                                                        <div class="quantity-controls-so-luong">
                                                            <button class="quantity-btn-so-luong"
                                                                @click="cart.numberOfChildrend--"
                                                                :disabled="cart.combination.minimumTreEm >= cart.numberOfChildrend">−</button>
                                                            <span class="quantity-display-so-luong">{{
                                                                cart.numberOfChildrend
                                                                }}</span>
                                                            <button class="quantity-btn-so-luong"
                                                                @click="cart.numberOfChildrend++">+</button>
                                                        </div>

                                                    </div>
                                                    <div class="gap-3 d-flex pt-4 pb-2">
                                                        <!-- <router-link to="" class="btn-search cancle"> <button
                                                                class="search-button btn-search" id="search">
                                                                Cancel
                                                            </button></router-link> -->
                                                        <router-link to="" class="btn-search "
                                                            @click="cart.isOpenModalChangeQuantity = false"> <button
                                                                class="search-button btn-search" id="search">
                                                                {{ $t('CART_CHANGE_QUANTITY_CONFIRM') }}
                                                            </button></router-link>
                                                    </div>
                                                </div>
                                            </Drawer>
                                        </div>

                                        <!-- Price Information -->
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p class="price-vnd">VND {{ cart.totalPrice.toLocaleString() }}</p>
                                                <p class="price-usd">~ {{ fCurrency.code }} {{ (cart.totalPrice /
                                                    fCurrency.exchange).toFixed(1) }}</p>
                                            </div>

                                            <!-- Delete Button -->

                                        </div>

                                    </div>

                                </div>
                                <button class="delete-btn" @click="onRemoveCart(index)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="bottom-menu menu-search d-flex bo-goc">
            <div>
                <div class="packages-count-booking">{{ countCartChecked }}
                    {{ $t('PACKAGES') }}</div>
                <div class="total-price-booking">VND {{ cartTotalPrice.toLocaleString() }}</div>
                <div class="packages-count-booking">~ {{ fCurrency.code }} {{ (cartTotalPrice /
                    fCurrency.exchange).toFixed(1).toLocaleString("enb-US") }}</div>

            </div>
            <div class="d-flex">

                <button class="search-button" id="search" :disabled="cartTotalPrice <= 0" @click="onCheckout()">
                    {{ $t('completed_order') }}
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import HeaderTitle from '../components/HeaderTitle.vue';
import Drawer from 'primevue/drawer';

import { useCartStore } from "../stores/cartStore";
import { useCurrencyStore } from "../stores/currencyStore";
import { usePayStore } from "../stores/payStore";

import { useHelper } from '../composables/helper';
import { RouterLink, useRouter } from 'vue-router'


const currencyStore = useCurrencyStore();
const fCurrency = computed(() => currencyStore.fCurrency);
const helper = useHelper();
const payStore = usePayStore();
const router = useRouter();

const pays = computed(() => payStore.pays)

const cartsStore = useCartStore();
const isSelectAllCart = ref(true);
const carts = computed(() => {
    let _carts = cartsStore.carts
    _carts.forEach(_c => {
        _c.isCartChecked = true;
        if (!_c.isOpenModalChangeQuantity) {
            _c.isOpenModalChangeQuantity = false;
        }

        _c.totalPrice = _c.numberOfAldut * _c.combination.priceEachNguoiLon + _c.numberOfChildrend * _c.combination.priceEachTreEm
    })

    return _carts;
})

const onRemoveCart = (index) => {
    cartsStore.onMinusCart(index);
}
const cartTotalPrice = ref(0);
const countCartChecked = ref(0);



watch(carts.value, () => {
    cartTotalPrice.value = 0;
    countCartChecked.value = 0;
    carts.value.forEach(c => {
        if (c.isCartChecked) {
            cartTotalPrice.value += c.totalPrice
            countCartChecked.value++;
        }
    })

    if (countCartChecked.value < carts.value.length) {
        isSelectAllCart.value = false
    }
}, { deep: true })



const onChangeCheckAllCart = () => {
    carts.value.forEach(c => {
        c.isCartChecked = isSelectAllCart.value;
    });
}

const onCheckout = () => {
    let _pays = [];
    carts.value.forEach(c => {
        if(c.isCartChecked){
            _pays.push(c)
        }
    });
    payStore.onAddPays(_pays);
    router.push('/checkout')

    
}

onMounted(() => {
    carts.value.forEach(c => {
        if (c.isCartChecked) {
            cartTotalPrice.value += c.totalPrice
            countCartChecked.value++;
        }
    })
})






const visibleBottom = ref(false);
const adultQuantity = ref(4);
const childQuantity = ref(0);

// Function to update quantities
const updateQuantity = (type, change) => {
    if (type === 'adult') {
        const newQuantity = adultQuantity.value + change;
        if (newQuantity >= 0) {
            adultQuantity.value = newQuantity;
        }
    } else if (type === 'child') {
        const newQuantity = childQuantity.value + change;
        if (newQuantity >= 0) {
            childQuantity.value = newQuantity;
        }
    }
};
</script>
<style></style>