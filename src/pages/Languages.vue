<template>
    <div class="container forgot-password-container">
        <div class="top-bar-product p-4 bg-white title">
            <button class="back-button-product" @click="$router.go(-1)">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title-product">Languages</h1>
            <button class="cart-button-product">
&nbsp;
            </button>
        </div>
        <div class="language-container">
            <div v-for="language in languages" :key="language" class="language-option"
                :class="{ selected: selectedLanguage === language }" @click="selectLanguage(language)">
                <div class="language-name">{{ language }}</div>
                <div class="check-circle"></div>
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
import { ref } from 'vue';

// Les variables et fonctions sont directement exposées au template
// sans avoir besoin d'un return
const languages = [
    'Indonesia',
    'Malaysia',
    'English',
    'Singapore',
    'Japan',
    'Thai Lan',
    'Viet nam'
];

// Déclaration ref comme une variable
const selectedLanguage = ref('English');

// Fonction déclarée directement
const selectLanguage = (language) => {
    selectedLanguage.value = language;
}
</script>
<style scoped>

</style>