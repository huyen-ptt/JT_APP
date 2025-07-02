<template>
    <div class="forgot-password-container">
        <HeaderTitle :title="$t('Languages')"></HeaderTitle>

        <div class="container">
            <div class="language-container">
                <div v-for="language in languages" :key="language" class="language-option"
                    :class="{ selected: currentLanguage.code === language.code }" @click="selectLanguage(language)">
                    <div class="language-name">{{ language.name }}</div>
                    <div class="check-circle"></div>
                </div>
            </div>
        </div>

        <div class="bottom-menu menu-search bo-goc gap-3">
            <router-link to="/account" class="btn-search cancle"> <button class="search-button btn-search" id="search">
                    {{ $t('CANCEL_ACCOUNT') }}
                </button></router-link>
            <router-link to="/account" class="btn-search"> <button class="search-button btn-search" id="search">
                    {{ $t('Save_CURRENCY') }}
                </button></router-link>
        </div>
    </div>

</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import HeaderTitle from '../components/HeaderTitle.vue';
import { useLanguageStore } from '../stores/languageStore.js'
import { useRouter } from 'vue-router'


const router = useRouter()



const languageStore = useLanguageStore();
const currentLanguage = computed(() => languageStore.language)

// Les variables et fonctions sont directement exposées au template
// sans avoir besoin d'un return

const languages = ref([
    {
        code: 'en-US',
        i18Code: 'en',
        name: 'English',
        flag: '/images/flags/en.svg'
    },
    {
        code: 'vi-VN',
        i18Code: 'vi',
        name: 'Tiếng Việt',
        flag: '/images/flags/vi.svg'
    },
    {
        code: 'ko-KR',
        i18Code: 'ko',
        name: '한국어',
        flag: '/images/flags/ko.svg'
    },
    {
        code: 'zh-CN',
        i18Code: 'zh',
        name: '中文',
        flag: '/images/flags/zh.svg'
    },
     {
        code: 'ru-RU',
        i18Code: 'ru',
        name: 'Русский',
        flag: '/images/flags/zh.svg'
    }
])

const selectedLanguage = ref({
    code: 'en-US',
    i18Code: 'en',
    name: 'English',
    flag: '/images/flags/en.svg'
});



// Déclaration ref comme une variable

// Fonction déclarée directement
const selectLanguage = (language) => {
    selectedLanguage.value = language;
    languageStore.changeLanguage(language);
}
</script>
<style scoped></style>