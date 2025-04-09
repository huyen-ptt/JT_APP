<template>
    <div class="forgot-password-container">

        <HeaderTitle :title="$t('Currency_Settings')"></HeaderTitle>

        <div class="currency-container">
            <div class="search-box">
                <i class="search-icon fas fa-search"></i>
                <input class="input-login" type="text" placeholder="Search currency " v-model="searchQuery">
            </div>

            <div class="currency-list">
                <div v-for="currency in filteredCurrencies" :key="currency.code" class="currency-item"
                    :class="{ visible: selectedCurrency.code === currency.code }" @click="onSelectCurrentcy(currency)">
                    <div class="currency-info">
                        <img :src="currency.flagUrl" :alt="currency.name" class="currency-flag">
                        <span class="title145">{{ currency.name }}</span>
                    </div>
                    <div class="d-flex align-items-center" :class="{ visible: selectedCurrency.code === currency.code }">
                        <span class="add-btn-booking me-3">{{ currency.code }}</span>
                        <i class="currency-check fas fa-check"
                            :class="{ visible: selectedCurrency.code === currency.code }"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-menu menu-search bo-goc gap-3">
            <router-link to="/account" class="btn-search cancle"> <button class="search-button btn-search" id="search">
                    Cancel
                </button></router-link>
            <router-link to="/account" class="btn-search "> <button class="search-button btn-search" id="search">
                    Save
                </button></router-link>
        </div>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import HeaderTitle from '../components/HeaderTitle.vue';
import {useCurrencyStore} from '../stores/currencyStore';


const currencyStore = useCurrencyStore();

// Données réactives avec ref
const searchQuery = ref('');
const selectedCurrency = computed(() => currencyStore.fCurrency);


// Liste des devises
const currencies = ref([
    { name: 'Euro', code: 'EUR', symbol: '€', flagUrl: 'https://flagcdn.com/w40/eu.png', exchange: 25000 },
    { name: 'British Pound', code: 'GBP', symbol: '£', flagUrl: 'https://flagcdn.com/w40/gb.png', exchange: 30000 },
    { name: 'Canadian Dollar', code: 'CAD', symbol: 'C$', flagUrl: 'https://flagcdn.com/w40/ca.png', exchange: 18000 },
    { name: 'Australian Dollar', code: 'AUD', symbol: 'A$', flagUrl: 'https://flagcdn.com/w40/au.png', exchange: 17000 },
    { name: 'US Dollar', code: 'USD', symbol: '$', flagUrl: 'https://flagcdn.com/w40/us.png', exchange: 25200 },
    { name: 'Japanese Yen', code: 'JPY', symbol: '¥', flagUrl: 'https://flagcdn.com/w40/jp.png', exchange: 200 },
    { name: 'Indian Rupee', code: 'INR', symbol: '₹', flagUrl: 'https://flagcdn.com/w40/in.png', exchange: 300 },
    { name: 'New Zealand Dollar', code: 'NZD', symbol: 'NZ$', flagUrl: 'https://flagcdn.com/w40/nz.png', exchange: 16000 },
    { name: 'Vietnamese Dong', code: 'VND', symbol: '₫', flagUrl: 'https://flagcdn.com/w40/vn.png', exchange: 1 },
    { name: 'South African Rand', code: 'ZAR', symbol: 'R', flagUrl: 'https://flagcdn.com/w40/za.png', exchange: 1500 },
    { name: 'Russian Ruble', code: 'RUB', symbol: '₽', flagUrl: 'https://flagcdn.com/w40/ru.png', exchange: 300 },
    { name: 'Bulgarian Lev', code: 'BGN', symbol: 'лв', flagUrl: 'https://flagcdn.com/w40/bg.png', exchange: 12000 }
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

const onSelectCurrentcy = (currency) => {
    currencyStore.onChangefCurrency(currency);
}
</script>