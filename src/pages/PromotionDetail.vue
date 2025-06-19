<template>
    <div class="promotion-bao">

        <HeaderTitle :title="$t('PROMOTION_DETAIL')"></HeaderTitle>

        <div class="container" v-if="detail">
            <div class="">
                <!-- Carousel/Slider -->
                <div id="promotionCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <!-- Slide 1 -->
                        <div class="p-2">
                            <div class="">
                                <div class="promotion-image">
                                    <img :src="helper.getImageCMS(detail?.banner)" alt="Winter Deal 20% Off"
                                        class="img-fluid rounded-4">
                                </div>
                                <div class="promotion-details">
                                    <div>
                                        <div>
                                            <h5 class="promotion-title-lon">{{ detail?.name }}</h5>
                                            <div v-html="detail?.content"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Carousel Indicators -->

                </div>

            </div>
            <div class="recently-carousel prodcut-sp pt-4 pb-4">
                <ProductSearch v-for="p in products" :key="p.id" :product="p"></ProductSearch>


            </div>
        </div>
        <div class="bottom-menu menu-search">
            <button class="search-button btn-search" id="search" :disabled="isExpired"
                :style="{ backgroundColor: isExpired ? '#ccc' : '' }" @click="onCollectDiscountCode">
                {{ buttonText }}
            </button>
        </div>
    </div>

</template>
<script setup>


import { onBeforeMount, onMounted, ref, computed } from "vue";
import HeaderTitle from '../components/HeaderTitle.vue';
import Drawer from 'primevue/drawer';
const visibleBottom = ref(false);
import { RouterLink, useRouter } from 'vue-router'
import ProductSearch from "../components/ProductSearch.vue";
import { usePromotion } from "@/composables/promotion.js";
import { useHelper } from "@/composables/helper";
import { useI18n } from 'vue-i18n'
import { usePromotionStore } from "@/stores/promotionStore.js";
import Swal from 'sweetalert2'

const { t } = useI18n()  // ✅ Quan trọng
const promotionComposable = usePromotion();
const helper = useHelper();

const detail = ref(null);
const products = ref([]);

const promotionStore = usePromotionStore();
const currentPromotions = computed(() => promotionStore.promotions);
console.log(currentPromotions.value)


onMounted(async () => {
    detail.value = await promotionComposable.getPromotionDetailByZoneId();
    if (detail.value) {
        console.log(detail.url);
        let selectedZone = [];
        selectedZone.push(detail.value.url);
        products.value = await promotionComposable.getProductInPromotions(selectedZone);
    }

})
// ✅ Computed để kiểm tra hết hạn
const isExpired = computed(() => {
    if (!detail.value?.endingTime) return true

    const now = new Date()
    const ending = new Date(detail.value?.endingTime)
    return ending < now
})

const onCollectDiscountCode = () => {
    if (!isExpired.value) {
        let data = {
            zoneId: detail.value.id,
            discountCode: detail.value.discountCode,
            endingTime: detail.value.endingTime,
            name: detail.value.name
        }
        promotionStore.onAddPromotions(data);
        // ✅ Thông báo thành công bằng SweetAlert2
        Swal.fire({
            title: t('ADD_DISCOUNT_CODE_TITLE'),
            html: `${t('ADD_DISCOUNT_CODE_LABEL_LEFT')} <b>${detail.value.discountCode}</b> ${t('ADD_DISCOUNT_CODE_LABEL_RIGHT')}`,
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }
}

// ✅ Computed cho nội dung nút
const buttonText = computed(() => {
    console.log(isExpired.value)
    return isExpired.value ? t('Expired') : t('Button_Collect_Promotion')
})


</script>
<style scoped>
.prodcut-sp {
    /* padding: 30px 10px; */
    display: grid;
    grid-template-columns: auto auto;
}

.tour-card {
    width: unset;
    padding: 0;
}

.promotion-title {

    white-space: unset;
    overflow: hidden;
    text-overflow: unset;
    max-width: 100%;
}

.promotion-bao {
    padding-bottom: 70px;
}

.menu-search {
    padding: 16px 20px;
    align-items: center;
    border-radius: 15px 15px 0 0;

}

.tour-image {

    border-radius: 20px;
}
</style>