<template>
    <div class="forgot-password-container">
        <HeaderTitle :title="$t('Languages')"></HeaderTitle>

        <div class="container">
            <div class="language-container">
                <div v-for="language in languages" :key="language" class="language-option"
                    :class="{ selected: selectedLanguage === language }" @click="selectLanguage(language)">
                    <div class="language-name">{{ language }}</div>
                    <div class="check-circle"></div>
                </div>
            </div>
        </div>

        <div class="bottom-menu menu-search bo-goc gap-3">
            <router-link to="" class="btn-search cancle"> <button class="search-button btn-search" id="search">
                {{ $t('CANCEL_ACCOUNT') }}
                </button></router-link>
            <router-link to="" class="btn-search "> <button class="search-button btn-search" id="search">
                {{ $t('Save_CURRENCY') }}

                </button></router-link>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import HeaderTitle from '../components/HeaderTitle.vue';

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
<style scoped></style>