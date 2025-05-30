<template>
    <div>
        <HeaderTitle :title="$t('My_Order')"></HeaderTitle>
        <div class="container-fluid p-0">
            <ul class="nav nav-tabs custom-tabs justify-content-center m-3" id="productTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link ac custom-tab-link" :class="v === 1 ? 'active' : ''" id="product-detail-tab"
                        data-bs-toggle="tab" data-bs-target="#product-detail" type="button" role="tab"
                        aria-controls="product-detail" aria-selected="true">
                        {{ $t('Tab_NewlyCreated_MyOrder') }}
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link custom-tab-link" id="description-tab" data-bs-toggle="tab"
                        :class="v === 2 ? 'active' : ''" data-bs-target="#description" type="button" role="tab"
                        aria-controls="description" aria-selected="false">
                        {{ $t('Tab_Ready_MyOrder') }}
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link custom-tab-link" id="terms-tab" data-bs-toggle="tab"
                        :class="v === 3 ? 'active' : ''" data-bs-target="#terms" type="button" role="tab"
                        aria-controls="terms" aria-selected="false">
                        {{ $t('Tab_Used_MyOrder') }}
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link custom-tab-link" id="pending" data-bs-toggle="tab"
                        :class="v === 4 ? 'active' : ''" data-bs-target="#cancel" type="button" role="tab"
                        aria-controls="terms" aria-selected="false">
                        {{ $t('Tab_PendingCancelled_MyOrder') }}
                    </button>
                </li>
            </ul>

            <div class="tab-content custom-tab-content list-orderrs" id="productTabsContent">
                <div class="tab-pane fade p-3" :class="v === 1 ? 'show active' : ''" id="product-detail" role="tabpanel"
                    aria-labelledby="product-detail-tab">
                    <div class="order-card-myorder position-relative mb-3" v-for="order in pendingOrder">
                        <MyOrderItemComponent :order="order"></MyOrderItemComponent>
                    </div>

                </div>
                <div class="tab-pane fade p-3" id="description" :class="v === 2 ? 'show active' : ''" role="tabpanel"
                    aria-labelledby="description-tab">
                    <div class="order-card-myorder position-relative mb-3" v-for="order in onReadyOrder">
                        <MyOrderItemComponent :order="order"></MyOrderItemComponent>
                    </div>
                </div>
                <div class="tab-pane fade p-3" id="terms" role="tabpanel" aria-labelledby="terms-tab"
                    :class="v === 3 ? 'show active' : ''">


                    <div class="order-card-myorder position-relative mb-3" v-for="order in completeOrder">
                        <MyOrderItemComponent :order="order"></MyOrderItemComponent>
                    </div>
                </div>
                <div class="tab-pane fade p-3" id="cancel" role="tabpanel" aria-labelledby="pending"
                    :class="v === 4 ? 'show active' : ''">

                    <div class="order-card-myorder position-relative mb-3" v-for="order in cancelOrder">
                        <MyOrderItemComponent :order="order"></MyOrderItemComponent>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>

    </div>
</template>
<script setup>
import { ref, onBeforeMount, onMounted, computed } from "vue";
import { useI18n } from 'vue-i18n'
import Footer from "@/components/Footer.vue";
import { RouterLink, useRouter, useRoute } from 'vue-router'
import HeaderTitle from '../components/HeaderTitle.vue';
import MyOrderItemComponent from "../components/MyOrderItemComponent.vue";
import { useAuthStore } from '../stores/authStore';

import { useUser } from '../composables/user';
import { useHelper } from "../composables/helper";
const userComposable = useUser();
const helper = useHelper()
const authStore = useAuthStore()
const auth = computed(() => authStore.auth);

const route = useRoute();

const v = computed(() => parseInt(route.query.v));




const router = useRouter()

const allOrders = ref([])
const pendingOrder = ref([])
const onReadyOrder = ref([])
const completeOrder = ref([])
const cancelOrder = ref([])

const onGetAllOrders = async () => {
    ///api/Auth/GetOrdersByCustomerId
    ////console.log(currentAuth.value)
    if (auth.value) {
        const data = {
            customerId: auth.value.id,
        }
        try {
            const response = await userComposable.onGetAllOrders(data);
            if (response.data) {
                console.log(response.data)
                ////console.log(response.data.value)
                allOrders.value = response.data;
                allOrders.value.forEach(element => {
                    element.metaData = JSON.parse(element.metaData)
                    if (element.activeStatus == "TAO_MOI") {
                        pendingOrder.value.push(element)
                    }
                    if (element.activeStatus == "CHAP_NHAN_DICH_VU") {
                        onReadyOrder.value.push(element)
                    }
                    if (element.activeStatus == "DA_SU_DUNG_DICH_VU") {
                        completeOrder.value.push(element)
                    }
                    if (element.activeStatus == "TU_CHOI_DICH_VU" || "YEU_CAU_HUY" == element.activeStatus || "DA_HUY" == element.activeStatus) {
                        cancelOrder.value.push(element)
                    }
                    element.isHaveNewMessage = false;
                })


                console.log(pendingOrder.value, onReadyOrder.value, completeOrder.value, cancelOrder.value);
            }
        } catch (err) {

        }
    }

}


onMounted(async () => {
    await onGetAllOrders();
})




</script>
<style scoped>
.custom-tabs {
    border-bottom: none;
}

.custom-tab-link {
    color: #8A929E;
    border: none;
    padding: 8px;
    font-size: 14px;
}

.nav-tabs .nav-link {

    padding: 6px 6px;


}

.nav-tabs .nav-link.active {
    background-color: unset !important;
    color: unset !important;
}

.custom-tab-link.active {
    color: #03294C !important;
    border-bottom: 2px solid #03294C !important;
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