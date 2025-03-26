<template>
    <div class="container forgot-password-container">
        <div class="top-bar-product p-4 bg-white title">
            <button class="back-button-product" @click="$router.go(-1)">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title-product">Currency Settings</h1>
            <button class="cart-button-product">
                &nbsp;
            </button>
        </div>
        <div class="currency-container">
            <div class="search-box">
                <i class="search-icon fas fa-search"></i>
                <input class="input-login" type="text" placeholder="Search currency " v-model="searchQuery">
            </div>

            <div class="currency-list">
                <div v-for="currency in filteredCurrencies" :key="currency.code" class="currency-item"  :class="{ visible: selectedCurrency === currency.code }"
                    @click="selectedCurrency = currency.code">
                    <div class="currency-info">
                        <img :src="currency.flagUrl" :alt="currency.name" class="currency-flag">
                        <span class="title145">{{ currency.name }}</span>
                    </div>
                    <div class="d-flex align-items-center"  :class="{ visible: selectedCurrency === currency.code }">
                        <span class="add-btn-booking me-3">{{ currency.code }}</span>
                        <i class="currency-check fas fa-check"  :class="{ visible: selectedCurrency === currency.code }"
                           ></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-menu menu-search bo-goc gap-3">
            <router-link to="" class="btn-search cancle"> <button class="search-button btn-search" id="search">
                    Cancel
                </button></router-link>
            <router-link to="" class="btn-search "> <button class="search-button btn-search" id="search">
                    Save
                </button></router-link>
        </div>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue';

// Données réactives avec ref
const searchQuery = ref('');
const selectedCurrency = ref('USD');

// Liste des devises
const currencies = ref([
    { name: 'Euro', code: 'EUR', flagUrl: 'https://flagcdn.com/w40/eu.png' },
    { name: 'British Pound', code: 'GBP', flagUrl: 'https://flagcdn.com/w40/gb.png' },
    { name: 'Canadian Dollar', code: 'CAD', flagUrl: 'https://flagcdn.com/w40/ca.png' },
    { name: 'Australian Dollar', code: 'AUD', flagUrl: 'https://flagcdn.com/w40/au.png' },
    { name: 'US Dollar', code: 'USD', flagUrl: 'https://flagcdn.com/w40/us.png' },
    { name: 'Japanese Yen', code: 'JPY', flagUrl: 'https://flagcdn.com/w40/jp.png' },
    { name: 'Vietnam', code: 'INR', flagUrl: 'https://flagcdn.com/w40/vn.png' },
    { name: 'New Zealand Dollar', code: 'NZD', flagUrl: 'https://flagcdn.com/w40/nz.png' },
    { name: 'Vietnam', code: 'VND', flagUrl: 'https://flagcdn.com/w40/vn.png' },
    { name: 'South African Rand', code: 'ZAR', flagUrl: 'https://flagcdn.com/w40/za.png' },
    { name: 'Russian Ruble', code: 'RUB', flagUrl: 'https://flagcdn.com/w40/ru.png' },
    { name: 'Bulgarian Lev', code: 'BGN', flagUrl: 'https://flagcdn.com/w40/bg.png' }
]);

// Computed property pour filtrer les devises
const filteredCurrencies = computed(() => {
    if (!searchQuery.value) return currencies.value;
    const query = searchQuery.value.toLowerCase();
    return currencies.value.filter(currency =>
        currency.name.toLowerCase().includes(query) ||
        currency.code.toLowerCase().includes(query)
    );
});
</script>