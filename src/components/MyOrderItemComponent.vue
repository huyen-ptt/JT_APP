<template>
    <div>
        <div class="order-header-myorder" @click="onRedirectOrderDetail(order)">
            <div>
                <div class="title-1477"># {{ order.orderCode }}</div>
                <div class="results-count-product">Ordered on {{
                    helper.formatISODate(order.createdDate) }}</div>
            </div>
            <div class="date-box-myorder">
                <div>
                    <div class="service-text">{{
                        helper.formatDateToDateString(order.metaData.choosenDate)?.month }}</div>
                    <div class="recently-title">{{
                        helper.formatDateToDateString(order.metaData.choosenDate)?.day }}</div>
                </div>
            </div>
            <div class="chevron-myorder">›</div>

        </div>

        <div class="order-details-myorder">
            <img :src="helper.getImageCMS(order.productParentAvatar)" alt="Ninh Binh tour" class="tour-image-myorder">
            <div class="tour-info-myorder">
                <div class="tour-title-myorder">{{ order.metaData.bookingParentName }}</div>
                <div class="tour-description-myorder">{{ order.metaData.bookingName }}</div>
            </div>
        </div>

    </div>

    <div class="order-footer-myorder">
        <div class="total-amount-myorder">
            <div class="amount-label-myorder">Total amount</div>
            <div class="price-myorder">VND {{ order.metaData.totalPrice.toLocaleString() }}</div>
        </div>
        <button class="support-button-myorder">Contact support</button>
    </div>
</template>
<script setup>
import { ref, onBeforeMount, computed, onMounted, watch, toRef } from "vue";
import DatePicker from 'primevue/datepicker';
import { useI18n } from 'vue-i18n'
import Select from 'primevue/select';
import { useHelper } from "../composables/helper";
import { RouterLink, useRouter } from 'vue-router'

const helper = useHelper()
const { locale, t } = useI18n();
const router = useRouter()

const props = defineProps({
    order: Object,
})

const onRedirectOrderDetail = (order) => {
    const redirectUrl = `/orderdetail/${order.orderDetailId}/${order.orderCode}`;
    router.push(redirectUrl);
}

</script>