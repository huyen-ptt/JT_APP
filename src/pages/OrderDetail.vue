<template>
    <HeaderTitle :title="$t('My_Order')"></HeaderTitle>

    <div class="container-order-detail m-3" v-if="orderItemDetail">
        <div>


            <div class="card-order-detail border mb-3">
                <div class="card-header-order-detail">
                    <span class="title145">{{ $t('Order_Status_ORD') }}</span>
                    <span class="status-badge-order-detail" :style="{
                        backgroundColor: helper.setStyleOrderStatus(orderItemDetail.activeStatus).bgColor,
                        border: '1px solid ' + helper.setStyleOrderStatus(orderItemDetail.activeStatus).borderColor,
                        color: helper.setStyleOrderStatus(orderItemDetail.activeStatus).textColor,
                    }">
                        {{ $t(orderItemDetail.activeStatus) }}
                    </span>
                </div>

                <div class="order-info-order-detail px-3 py-3">
                    <div class="title145">{{ $t('Order_ID_ORD') }} <b>#{{ orderItemDetail.orderCode }}</b></div>
                    <div class="order-date-order-detail">{{ $t('Order_Date_ORD') }}: {{
                        helper.formatISODate(orderItemDetail.createdDate) }}</div>

                    <div class="customer-info-order-detail">
                        <div class="info-row-order-detail">
                            <div class="info-label-order-detail">{{ $t('Requestor_ORD') }}</div>
                            <div class="info-value-order-detail">{{ orderItemDetail.fullName }}</div>
                        </div>
                        <div class="info-row-order-detail">
                            <div class="info-label-order-detail">{{ $t('Email_ORD') }}</div>
                            <div class="info-value-order-detail">{{ orderItemDetail.email }}</div>
                        </div>
                        <div class="info-row-order-detail">
                            <div class="info-label-order-detail">{{ $t('Phone_Number_ORD') }}</div>
                            <div class="info-value-order-detail">{{ orderItemDetail.phoneNumber }}</div>
                        </div>
                    </div>
                </div>

                <div class="px-3 py-3">
                    <button class="action-button-order-detail mb-2">
                        <img class="pe-2" src="../assets/images/document-download.png" />
                        {{ $t('Download_ETicket_ORD') }}
                    </button>
                    <button class="action-button-order-detail">
                        <img class="pe-2" src="../assets/images/document-textt.png" />
                        {{ $t('Invoice_Info_ORD') }}
                    </button>
                </div>
            </div>

            <div class="card-order-detail border">
                <div>
                    <img :src="helper.getImageCMS(orderItemDetail.productParentAvatar)" alt="Tour"
                        class="tour-image-order-detail px-3 py-3">
                </div>
                <div class="tour-info-order-detail px-3">
                    <div class="border-bottom">
                        <div class="service-time-order-detail">{{ $t('Service_Time_ORD') }}: {{
                            helper.formatISODate(orderItemDetail.pickingDate) }}</div>
                        <div class="tour-title-order-detail">{{ orderItemDetail.productParentTitle }}</div>
                        <div class="tour-description-order-detail">{{ orderItemDetail.productChildTitle }}</div>
                    </div>

                    <div class="tour-details-order-detail">
                        <div class="detail-row-order-detail d-flex mb-2" style="justify-content: space-between;">
                            <div class="tour-description-order-detail m-0">{{ $t('Options_ORD') }}</div>
                            <div class="detail-value-order-detail">
                                <ul>
                                    <li v-for="option in orderItemDetail.metaData.currentPickOption">{{
                                        option.pickItemName }}</li>
                                </ul>
                            </div>
                        </div>

                        <div class="detail-row-order-detail d-flex" style="justify-content: space-between;">
                            <div class="tour-description-order-detail">{{ $t('Quantity_ORD') }}</div>
                            <div class="detail-value-order-detail">
                                <span>{{ orderItemDetail.unit ? orderItemDetail.unit : $t('ALDUT') }} x {{
                                    orderItemDetail.metaData.numberOfAldut }}</span>
                                <span v-if="orderItemDetail.metaData.numberOfChildrend > 0"> |
                                    {{ $t('CHILDREND') }} x {{ orderItemDetail.metaData.numberOfChildrend }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="detail-row-order-detail1 mt-3 ">
                    <div class="tour-description-order-detail total-amount-order-detail">{{ $t('Total_Amount_ORD') }}
                    </div>
                    <div class="detail-value-order-detail amount-value-order-detail">
                        VND {{ orderItemDetail.metaData.totalPrice.toLocaleString() }}
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <ul className="nav nav-tabs custom-tabs justify-content-center" id="productTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active custom-tab-link" id="product-detail-tab" data-bs-toggle="tab"
                            data-bs-target="#product-detail" type="button" role="tab" aria-controls="product-detail"
                            aria-selected="true">
                            {{ $t("Policy_ORDTAB") }}
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link custom-tab-link" id="description-tab" data-bs-toggle="tab"
                            data-bs-target="#description" type="button" role="tab" aria-controls="description"
                            aria-selected="false">
                            {{ $t("Note_ORDTAB") }}
                        </button>
                    </li>
                </ul>

                <div className="tab-content custom-tab-content my-r" id="productTabsContent">
                    <div className="tab-pane fade show active" id="product-detail" role="tabpanel"
                        aria-labelledby="product-detail-tab">
                        <div v-for="note in orderItemDetail.productParentThuTucVisa" v-html="note.noiDung"></div>
                    </div>
                    <div className="tab-pane fade p-3" id="description" role="tabpanel"
                        aria-labelledby="description-tab">
                        <div v-for="note in orderItemDetail.productThongTinTour" v-html="note.noiDung"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-menu menu-search bo-goc gap-3">
            <router-link to="" class="btn-search cancle">
                <button class="search-button btn-search" id="search">
                    {{ $t("Cancel_Order_ORD") }}
                </button>
            </router-link>
            <router-link to="" class="btn-search">
                <button class="search-button btn-search" id="search">
                    {{ $t("Contact_Support_ORD") }}
                </button>
            </router-link>
        </div>

    </div>
</template>
<script setup>
import { ref, onBeforeMount, onMounted, computed } from "vue";
import { useI18n } from 'vue-i18n'

import { RouterLink, useRouter, useRoute } from 'vue-router'
import HeaderTitle from '../components/HeaderTitle.vue';
import MyOrderItemComponent from "../components/MyOrderItemComponent.vue";
import { useAuthStore } from '../stores/authStore';

import { useUser } from '../composables/user';
import { useHelper } from "../composables/helper";
import axios from "axios";
const userComposable = useUser();
const helper = useHelper()
const authStore = useAuthStore()
const auth = computed(() => authStore.auth);
const router = useRouter()
const route = useRoute();

const orderItemDetail = ref(null);

const _id = computed(() => route.params?.id);
const _orderCode = computed(() => route.params?.code);
const validated = ref(false);

const checkOrderByEmail = async () => {
    if (auth.value) {
        const data = {
            customerEmail: auth.value.email,
            orderDetailId: parseInt(_id.value)
        }
        const response = await userComposable.checkOrderByEmail(data);
        if (response) {
            if (response.data.isAuthendicated) {
                validated.value = true;
                await getOrderItemFullDetail();
            }
        }
    }

}

const getOrderItemFullDetail = async () => {
    if (auth.value) {
        if (_id.value && _orderCode.value) {
            const data = {
                customerId: auth.value.id,
                orderCode: _orderCode.value,
                orderDetailId: _id.value
            }
            try {
                const response = await userComposable.getOrderItemFullDetail(data)
                if (response.data) {

                    orderItemDetail.value = response.data;
                    if (orderItemDetail.value.metaData) {
                        orderItemDetail.value.metaData = JSON.parse(orderItemDetail.value.metaData)
                    }
                    if (orderItemDetail.value.productParentThuTucVisa) {
                        orderItemDetail.value.productParentThuTucVisa = JSON.parse(orderItemDetail.value.productParentThuTucVisa)
                    }
                    if (orderItemDetail.value.productThongTinTour) {
                        orderItemDetail.value.productThongTinTour = JSON.parse(orderItemDetail.value.productThongTinTour)
                    }
                    console.log(orderItemDetail.value)
                }
            } catch (err) {

            }
        }



    }


}

onMounted(async () => {
    await checkOrderByEmail();
})

</script>

<style scoped>
.search-button {
    padding: 14px 24px;
    border-radius: 16px;
    border: none;
    background-color: #446EDE;
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.bo-goc .cancle button {
    background: white !important;
    border: 1px solid #03294C !important;
    color: #03294C !important;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    background-color: transparent !important;
    padding: 11px 23px;
    border-radius: 16px;
    align-items: center;
}

.custom-tabs {
    border-bottom: none;
}

.custom-tab-link {
    color: #8A929E;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
}

.custom-tab-link.active {
    color: #03294C;
    border-bottom: 2px solid #03294C;
    background-color: transparent;
    font-weight: 700;
}

.custom-tab-content {
    /* padding-top: 15px; */
}

.custom-paragraph {
    color: #8A929E;
    font-size: 14px;
    line-height: 1.5;
}

.nav-tabs .nav-link {
    border-radius: unset;
}

.nav-tabs .nav-link {
    background-color: unset;
}

iframe {
    border-radius: 25px;
}

.review-container {
    display: flex;
    width: 100%;
    overflow-x: auto;
    /* Allow horizontal scroll */
    max-width: 100%;
    /* Prevent it from overflowing */
    scrollbar-width: none;
}

/* Each review box */
.nd-rv {
    flex: 0 0 auto;
    /* Prevent reviews from shrinking or growing */
    width: 70%;
    /* This will make the first review take more than half the screen */
    margin-right: 20px;
    /* Add space between reviews */
}
</style>