<template>
    <div class="bottom-menu">
        <div class="menu-item">
            <div class="menu-icon">
                <i class="fas fa-home"></i>
            </div>
            <span class="menu-text">{{ $t('home') }}</span>
        </div>

        <RouterLink to="/promotion" class="menu-item">
            <div class="menu-icon">
                <img src="../assets/images/gift.png" />
            </div>
            <span class="menu-text">{{ $t('promotion') }}</span>
        </RouterLink>

        <div class="menu-item" @click="visibleBottom = true">
            <div class="menu-icon">
                <img src="../assets/images/element-plus.png" />
            </div>
            <span class="menu-text">{{ $t('service') }}</span>
        </div>

        <div class="menu-item">
            <div class="menu-icon">
                <img src="../assets/images/document-text1.png" />
            </div>
            <span class="menu-text">{{ $t('blog') }}</span>
        </div>

        <div class="menu-item">
            <div class="menu-icon">
                <img src="../assets/images/user-square.png" />
            </div>
            <span class="menu-text">{{ $t('account') }}</span>
        </div>

        <div class="indicator"></div>
    </div>
    <Drawer v-model:visible="visibleBottom" header="Bottom Drawer" position="bottom" style="height: auto">
        <div class="footer-services">
            <div class="services-grid">
                <h2 class="se-title">Service</h2>

                <div class="container-fluid">
                    <div class="bao-sr">
                        <div class="row">
                            <div class="col-3 service-item" style="width: 25%;" v-for="(s, index) in services"
                                :key="index">
                                <div class="service-icon">
                                    <img :src="helper.getImageCMS(s.icon)" alt="Combo">
                                </div>
                                <div class="service-name">{{ s.title }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Drawer>
</template>
<script setup>
import { useHome } from '@/composables/home.js'
import { onBeforeMount, ref } from "vue";
import { useHelper } from "@/composables/helper";
const helper = useHelper();
const homeComposable = useHome();
import Drawer from 'primevue/drawer';
const visibleBottom = ref(false);
const services = ref([])
onBeforeMount(async () => {
    services.value = await homeComposable.getZonesByTypeDichVu();

})
</script>