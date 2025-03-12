<template>
    <div class="container">
        <div class="header-search">
            <div class="close"><i class="fa-solid fa-xmark"></i></div>
        </div>
        <div class="search-container">
            <i class="fas fa-search search-icon"></i>
            <input type="text" class="search-input" :placeholder="$t('place_to_go')" @keyup.enter="handleSearch" />



        </div>
        <ComponentFilter />
       
        <div class="bottom-menu menu-search">
            <a class="clear-button" id="clear-all">{{ $t('clear_all') }}</a>
            <router-link to="/product"> <button class="search-button" id="search">
                    <i class="fas fa-search search-icon1"></i>
                    {{ $t('search') }}
                </button></router-link>
        </div>
    </div>
</template>
<script setup>
import {  ref } from 'vue';
import ComponentFilter from '../components/ComponentFilter.vue';

</script>
<style></style>