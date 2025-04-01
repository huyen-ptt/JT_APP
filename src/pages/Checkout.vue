<template>
    <div>
        <HeaderTitle :title="$t('PAGE_TITLE_CHECKOUT')"></HeaderTitle>
        <div class="top-bar-product p-4 bg-white title">
            <button class="back-button-product">
                <i class="fas fa-arrow-left" @click="$router.go(-1)"></i>
            </button>
            <h1 class="page-title-product">Checking Your Order</h1>
            <button class="cart-button-product">
                &nbsp;
            </button>
        </div>
        <div class="card">
            <Accordion value="0">
                <AccordionPanel class="mb-3" value="0">
                    <AccordionHeader>
                        <div class="promo-title pb-1">Payment Summary</div>
                    </AccordionHeader>
                    <AccordionContent>
                        <div class="container py-2">
                            <div class="bao-tourr" v-for="pay in pays">
                                <div class="p-3 ">
                                    <!-- Header -->
                                    <div class="d-flex gap-3 mb-4">
                                        <img :src="helper.getImageCMS(pay.avatar)" alt="Tour food" class="tour-image">
                                        <div>
                                            <div class="service-date">Service date: {{ pay.choosenDate }}</div>

                                            <h2 class="news-title-blogg">{{ pay.bookingParentName }}
                                            </h2>
                                            <div class="service-date pb-3 border-bottom">{{ pay.bookingName }}</div>

                                            <div v-if="pay.unit">
                                                <div class="price-info" v-if="pay.numberOfAldut > 0">
                                                    <span class="ad">{{ pay.unit }} x {{ pay.numberOfAldut }}</span>
                                                    <span class="price-amount">VND {{ (pay.numberOfAldut *
                                                        pay.combination.priceEachNguoiLon).toLocaleString() }}</span>
                                                </div>
                                            </div>
                                            <div v-else>
                                                <div class="price-info" v-if="pay.numberOfAldut > 0">
                                                    <span class="ad">Adults x {{ pay.numberOfAldut }}</span>
                                                    <span class="price-amount">VND {{ (pay.numberOfAldut *
                                                        pay.combination.priceEachNguoiLon).toLocaleString() }}</span>
                                                </div>
                                                <div class="price-info" v-if="pay.numberOfChildrend > 0">
                                                    <span class="ad">Child x {{ pay.numberOfChildrend }}</span>
                                                    <span class="price-amount">VND {{ (pay.numberOfChildrend *
                                                        pay.combination.priceEachTreEm).toLocaleString() }}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <!-- Tour Specifications -->
                                    <div class="tour-specs">
                                        <div class="spec-row" v-for="option in pay.currentPickOption">
                                            <span class="spec-label">{{ option.parentGroupName }}</span>
                                            <span class="spec-value">{{ option.pickItemName }}</span>
                                        </div>

                                    </div>

                                    <!-- Promotion Section -->
                                    <div class="promotion-section  border-top pt-3">
                                        <h3 class="promo-title pb-3">Promotion</h3>
                                        <div class="promo-input-group">
                                            <input type="text" class="promo-input input-login"
                                                placeholder="Enter promo code">
                                            <button class="use-code-btn">Use Code</button>
                                        </div>
                                    </div>
                                    <!-- <FastTrack /> -->
                                    <Accordion v-for="noteGroup in pay.productBookingNoteGroups">
                                        <AccordionPanel value="4">
                                            <AccordionHeader class="p-0">
                                                <div class="service-details">
                                                    <h3 class="promo-title pb-1">{{ noteGroup.zoneParentName }}<span
                                                            class="text-danger"> *</span>
                                                    </h3>
                                                    <p class="results-count-product">Please provide your desired service
                                                        details<br> to
                                                        confirm payment for your order</p>
                                                </div>
                                            </AccordionHeader>
                                            <AccordionContent class="p-0 servies-det">
                                                <div class="">
                                                    <div class="booking-form">
                                                        <div class="" v-for="note in noteGroup.noteList">
                                                            <NoteInputBoxComponent :info="note"
                                                                :trigger="triggerValidateNote"
                                                                v-if="note.bookingNoteType === 'textarea'">
                                                            </NoteInputBoxComponent>
                                                            <NoteRadioButtonComponent :info="note"
                                                                :trigger="triggerValidateNote"
                                                                v-if="note.bookingNoteType === 'radio'">
                                                            </NoteRadioButtonComponent>
                                                            <NoteTimeComponent :info="note" :date="pay.choosenDate"
                                                                :trigger="triggerValidateNote"
                                                                v-if="note.bookingNoteType === 'datetime-local'">
                                                            </NoteTimeComponent>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionPanel>
                                    </Accordion>

                                    <!-- Order Total -->

                                </div>
                                <div class="order-total border-top">
                                    <span class="total-label">Order Total</span>
                                    <span class="total-amount">VND {{ ((pay.numberOfAldut *
                                        pay.combination.priceEachNguoiLon) + (pay.numberOfChildrend *
                                            pay.combination.priceEachTreEm)).toLocaleString() }}</span>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel class="mb-3" value="1">
                    <AccordionHeader>
                        <div>
                            <div class="promo-title pb-1">Customer Infomation</div>
                            <div class="results-count-product">Please provide your desired service
                                details<br> to
                                confirm payment for your order</div>
                        </div>
                    </AccordionHeader>
                    <AccordionContent>
                        <form>
                            <!-- Name Fields -->
                            <div class="row mb-3">
                                <div class="col-6">
                                    <label class="form-label">
                                        First Name<span class="required-mark">*</span>
                                    </label>
                                    <input type="text" v-model="auth.firstName" class="form-control"
                                        placeholder="Your First Name">
                                    <div class="error-message" v-if="triggerValidateAuth && auth.firstName == ''">
                                        <small>{{ $t('ERRPR_MISSING_AUTH_FIRSTNAME') }}</small>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <label class="form-label">
                                        Family Name<span class="required-mark">*</span>
                                    </label>
                                    <input type="text" v-model="auth.lastName" class="form-control"
                                        placeholder="Your Family Name">
                                    <div class="error-message" v-if="triggerValidateAuth && auth.lastName == ''">
                                        <small>{{ $t('ERRPR_MISSING_AUTH_LASTNAME') }}</small>
                                    </div>
                                </div>
                            </div>

                            <!-- Nationality -->
                            <div class="mb-3">
                                <label class="form-label">
                                    Nationality<span class="required-mark">*</span>
                                </label>
                                <Select v-model="auth.country" :options="countries" id="country_1" optionLabel="name"
                                    optionValue="code" :placeholder="$t('NATIONALITY')" filter
                                    :filterPlaceholder="$t('NATIONALITY')" class="form-select"
                                    :emptyFilterMessage="$t('NO_RESULTS_FOUND')"></Select>
                                <div class="error-message" v-if="triggerValidateAuth && auth.country == ''">
                                    <small>{{ $t('ERRPR_MISSING_AUTH_COUNTRY') }}</small>
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="mb-3">
                                <label class="form-label">
                                    Email<span class="required-mark">*</span>
                                </label>
                                <input type="email" v-model="auth.email" class="form-control"
                                    placeholder="Your email address">
                                <div class="error-message"
                                    v-if="triggerValidateAuth && (!auth.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(auth.email))">
                                    <small>{{ $t('ERRPR_MISSING_AUTH_EMAIL') }}</small>
                                </div>
                            </div>

                            <!-- Phone Number -->
                            <div class="mb-3">
                                <label class="form-label">
                                    Phone number<span class="required-mark">*</span>
                                </label>
                                <input type="tel" v-model="auth.phoneNumber" class="form-control col-7"
                                    placeholder="Enter your phone number">
                                <div class="error-message"
                                    v-if="triggerValidateAuth && (!auth.phoneNumber || !/^(\+?\d{9,15})$/.test(auth.phoneNumber))">
                                    <small>{{ $t('ERRPR_MISSING_AUTH_PHONENO') }}</small>
                                </div>
                            </div>

                            <!-- Stay in touch -->
                            <div class="mb-3">
                                <label class="price-value">Stay in touch</label>
                                <p class="text-muted small mb-2">Will you use a different phone number when traveling?
                                </p>
                                <div class="radio-group">
                                    <label class="radio-button active">
                                        <input type="radio" name="stayInTouch" value="Yes"
                                            v-model="orderNote.useDiffrenceNumber">
                                        Yes
                                    </label>
                                    <label class="radio-button">
                                        <input type="radio" name="stayInTouch" value="No"
                                            v-model="orderNote.useDiffrenceNumber">
                                        No
                                    </label>
                                </div>
                            </div>

                            <!-- OTT App -->
                            <div class="mb-3">
                                <label class="form-label">Which App can we contact you through?</label>
                                <select class="form-select" v-model="orderNote.useAppContact">
                                    <option disabled>OTT App</option>
                                    <option v-for="app in ottApps" :value="app">{{ app }}</option>
                                </select>
                            </div>

                            <!-- Account Name -->
                            <div class="mb-3">
                                <label class="form-label">Account name on the OTT App</label>
                                <input type="text" class="form-control" placeholder="Your account name"
                                    v-model="orderNote.useAppContactValue">
                            </div>
                        </form>
                    </AccordionContent>
                </AccordionPanel>

            </Accordion>
            <div class="rounded shadow-sm">
                <!-- Note Section -->
                <div class="mb-4  p-3 bg-white">
                    <h2 class="promo-title pb-2">Note & Other Request</h2>
                    <textarea class="form-control" rows="3" placeholder="Note"
                        v-model="orderNote.noteSpecial"></textarea>
                </div>

                <!-- Payment Method Section -->
                <div class="mb-4 bg-white p-3">
                    <h2 class="promo-title  pb-2">Payment Method</h2>
                    <p class="tour-location">
                        Please enter your promotion code to receive a discount for your order
                    </p>

                    <div class="payment-options">
                        <button class="payment-option active">
                            <svg class="payment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg>
                            <span class="payment-label">Credit/Debit Card</span>
                        </button>

                        <button class="payment-option">
                            <svg class="payment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="3" y1="9" x2="21" y2="9"></line>
                                <path d="M8 13h.01"></path>
                                <path d="M12 13h.01"></path>
                                <path d="M16 13h.01"></path>
                            </svg>
                            <span class="payment-label">ATM Card/Bank Ac...</span>
                        </button>
                    </div>
                </div>

                <!-- Order Summary -->
                <div class="bg-white p-3">
                    <div class="results-count-product summary-row">
                        <span>Subtotal</span>
                        <span>VND 1,200,000</span>
                    </div>
                    <div class="results-count-product summary-row">
                        <span>Discount</span>
                        <span class="discount-amount">-VND 240,000</span>
                    </div>
                    <div class="total-row price-value">
                        <span>ORDER TOTAL</span>
                        <span>VND 960,000</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="bottom-menu menu-search d-flex bo-goc">
            <div class="">
                <div class="don-vi" id="clear-all">VND 960,000</div>
                <div class="price-text">~USD 41.2</div>
            </div>
            <div class="d-flex">
                <button class="search-button" @click="onRequestPay()" id="search">
                    Completed Order
                </button>

            </div>
        </div>
    </div>
</template>
<script setup>
// import FastTrack from '../components/FastTrack.vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';


import NoteCustomersComponent from '@/components/NoteCustomersComponent.vue'
import NoteInputBoxComponent from '@/components/NoteInputBoxComponent.vue'
import NoteRadioButtonComponent from '@/components/NoteRadioButtonComponent.vue'
import NoteTimeComponent from '@/components/NoteTimeComponent.vue'
import HeaderTitle from '../components/HeaderTitle.vue';

import { ref, onBeforeMount, computed, onMounted } from "vue";
import { useI18n } from 'vue-i18n'

import { useHelper } from "../composables/helper";
import { useCurrencyStore } from "../stores/currencyStore";
import { usePayStore } from '../stores/payStore';
import { useAuthStore } from '../stores/authStore';

import { usePay } from '../composables/pay';

import Select from 'primevue/select';
import { label } from '@primeuix/themes/aura/metergroup';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser';
import router from '../routers';
import { StatusBar } from '@capacitor/status-bar';


const currencyStore = useCurrencyStore();
const currentfCurrency = computed(() => currencyStore.fCurrency)
const payStore = usePayStore();
const authStore = useAuthStore()
const helper = useHelper();
const { locale, t } = useI18n();
const payComposable = usePay();



const pays = computed(() => payStore.pays);
const auth = computed(() => authStore.auth);
// console.log('currentPays',currentPays)
const countries = ref([
    { name: t("Vietnam"), code: 'VN' },
    { name: t("United_States"), code: 'US' },
    { name: t("China"), code: 'CN' },
    { name: t("Japan"), code: 'JP' },
    { name: t("South_Korea"), code: 'KR' },
    { name: t("Germany"), code: 'DE' },
    { name: t("France"), code: 'FR' },
    { name: t("United_Kingdom"), code: 'GB' },
    { name: t("Canada"), code: 'CA' },
    { name: t("Australia"), code: 'AU' },
    { name: t("India"), code: 'IN' },
    { name: t("Brazil"), code: 'BR' },
    { name: t("Russia"), code: 'RU' },
    { name: t("Mexico"), code: 'MX' },
    { name: t("Italy"), code: 'IT' },
    { name: t("Spain"), code: 'ES' },
    { name: t("Indonesia"), code: 'ID' },
    { name: t("Saudi_Arabia"), code: 'SA' },
    { name: t("Turkey"), code: 'TR' },
    { name: t("Argentina"), code: 'AR' },
    { name: t("Thailand"), code: 'TH' },
    { name: t("Philippines"), code: 'PH' },
    { name: t("Netherlands"), code: 'NL' },
    { name: t("Belgium"), code: 'BE' },
    { name: t("Sweden"), code: 'SE' },
    { name: t("Norway"), code: 'NO' },
    { name: t("Denmark"), code: 'DK' },
    { name: t("Finland"), code: 'FI' },
    { name: t("Austria"), code: 'AT' },
    { name: t("Switzerland"), code: 'CH' },
    { name: t("Czech_Republic"), code: 'CZ' },
    { name: t("Greece"), code: 'GR' },
    { name: t("Portugal"), code: 'PT' },
    { name: t("Ireland"), code: 'IE' },
    { name: t("Israel"), code: 'IL' },
    { name: t("South_Africa"), code: 'ZA' },
    { name: t("Egypt"), code: 'EG' },
    { name: t("Malaysia"), code: 'MY' },
    { name: t("Singapore"), code: 'SG' },
    { name: t("New_Zealand"), code: 'NZ' },
    { name: t("Colombia"), code: 'CO' },
    { name: t("Chile"), code: 'CL' },
    { name: t("Peru"), code: 'PE' },
    { name: t("Venezuela"), code: 'VE' },
    { name: t("Pakistan"), code: 'PK' },
    { name: t("Bangladesh"), code: 'BD' },
    { name: t("Nigeria"), code: 'NG' },
    { name: t("Kenya"), code: 'KE' },
    { name: t("Morocco"), code: 'MA' },
    { name: t("Algeria"), code: 'DZ' },
    { name: t("Iraq"), code: 'IQ' },
    { name: t("Kuwait"), code: 'KW' },
    { name: t("Qatar"), code: 'QA' },
    { name: t("Oman"), code: 'OM' },
    { name: t("Jordan"), code: 'JO' },
    { name: t("Ukraine"), code: 'UA' },
    { name: t("Serbia"), code: 'RS' },
    { name: t("Romania"), code: 'RO' },
    { name: t("Bulgaria"), code: 'BG' },
    { name: t("Slovakia"), code: 'SK' },
    { name: t("Hungary"), code: 'HU' },
    { name: t("Lithuania"), code: 'LT' },
    { name: t("Latvia"), code: 'LV' },
    { name: t("Estonia"), code: 'EE' },
    { name: t("Belarus"), code: 'BY' },
    { name: t("Moldova"), code: 'MD' },
    { name: t("Georgia"), code: 'GE' },
    { name: t("Armenia"), code: 'AM' },
    { name: t("Azerbaijan"), code: 'AZ' },
    { name: t("Cuba"), code: 'CU' },
    { name: t("Dominican_Republic"), code: 'DO' },
    { name: t("Honduras"), code: 'HN' },
    { name: t("Guatemala"), code: 'GT' },
    { name: t("El_Salvador"), code: 'SV' },
    { name: t("Costa_Rica"), code: 'CR' },
    { name: t("Panama"), code: 'PA' },
    { name: t("Paraguay"), code: 'PY' },
    { name: t("Uruguay"), code: 'UY' },
    { name: t("Czechia"), code: 'CZ' },
    { name: t("Kosovo"), code: 'XK' },
    { name: t("North_Macedonia"), code: 'MK' },
    { name: t("Vatican_City"), code: 'VA' },
    { name: t("Afghanistan"), code: 'AF' },
    { name: t("Albania"), code: 'AL' },
    { name: t("Cambodia"), code: 'KH' },
    { name: t("Iceland"), code: 'IS' },
    { name: t("Iran"), code: 'IR' },
    { name: t("Kazakhstan"), code: 'KZ' },
    { name: t("Laos"), code: 'LA' },
    { name: t("Luxembourg"), code: 'LU' },
    { name: t("Myanmar"), code: 'MM' },
    { name: t("Nepal"), code: 'NP' },
    { name: t("Poland"), code: 'PL' },
    { name: t("Slovenia"), code: 'SI' },
    { name: t("Tanzania"), code: 'TZ' },
    { name: t("Tunisia"), code: 'TN' },
    { name: t("United_Arab_Emirates"), code: 'AE' },
    { name: t("Uzbekistan"), code: 'UZ' },
    { name: t("Yemen"), code: 'YE' },
    { name: t("Zimbabwe"), code: 'ZW' },
]);

const orderNote = ref({
    noteSpecial: "",
    useAppContact: "",
    useAppContactValue: "",
    useDiffrenceNumber: ""
})

const ottApps = ref([
    'WhatsApp', 'Zalo', 'Kakao', 'Telegram'
])

const triggerValidateAuth = ref(false);

const onTriggerValidate = () => {
    pays.value.forEach(pay => {
        pay.productBookingNoteGroups.forEach(group => {
            group.noteList.forEach(note => {
                note.triggerValid = true;
            })
        })
    })
    triggerValidateAuth.value = true;
}

const checkValidateNote = () => {
    let checker = true;
    pays.value.forEach(pay => {
        pay.productBookingNoteGroups.forEach(group => {
            group.noteList.forEach(note => {
                if (!note.noteValue) {
                    checker = false;
                }
            })
        })
    })
    return checker;
}

const checkValidateAuth = () => {
    let checker = true;
    if (!auth.value.country) {
        checker = false;
    }
    if (!auth.value.email) {
        checker = false;
    }
    if (!auth.value.firstName) {
        checker = false;
    }
    if (!auth.value.lastName) {
        checker = false;
    }
    if (!auth.value.phoneNumber) {
        checker = false;
    }

    return checker;
}

const randomString = (length = 10) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}

const onRequestPay = async () => {
    onTriggerValidate();
    let validPayNotes = checkValidateNote();
    let validAuth = checkValidateAuth();
    console.log(validPayNotes, validAuth)
    if (validPayNotes == true && validAuth == true) {
        auth.value.pcname = randomString(10);
        let data = {
            pays: pays.value,
            auth: auth.value,
            orderCode: `APP_${randomString(8)}`,
            i18Code: locale.value,
            orderNotes: orderNote.value,
            paymentMethod: 'TEST_APP',
            sourceOrder: 'MOBILE_APP'

        }

        try {
            const response = await payComposable.onRequestOnepay(data);
            if (response && response.data.returnUrl) {

                // Ở cái hàm này, có cách nào phân biệt đang ở trên web hay đang ở trên app không? Nếu trên Web thì có thể xử lý kiểu khác, nếu trên APP thì xử lý kiểu vào webview như này
                StatusBar.setOverlaysWebView({ overlay: false });
                const browser = InAppBrowser.create(response.data.returnUrl, '_blank', {
                    location: 'no',        // ✅ Ẩn thanh địa chỉ URL
                    toolbar: 'yes',        // ✅ Hiện thanh toolbar (dưới statusbar)
                    toolbarcolor: '#ffffff', // ✅ Tuỳ chọn màu thanh
                    closebuttoncaption: 'Đóng', // 🛑 Android không hỗ trợ nhưng iOS có
                    hideurlbar: 'yes',     // ✅ Một số thiết bị Android sẽ ẩn hẳn URL
                });

                let returnPaymentUrl = "";
                // Bắt URL trước khi load
                browser.on('loadstart').subscribe(async (event) => {
                    const url = event.url;
                    console.log('🔗 Đang chuẩn bị load:', url);

                    // 👉 Nếu phát hiện redirect về deeplink hoặc 1 URL đặc biệt, bạn có thể xử lý:
                    if (url.startsWith(import.meta.env.VITE_API_URI)) {
                        returnPaymentUrl = url;
                        browser.close(); // đóng InAppBrowser
                        // alert('✅ Phát hiện deeplink redirect:', url);
                        // Bạn có thể parse `url` tại đây và gọi xử lý axios nếu cần
                        // Thực thi url 
                        try {
                            const response = await payComposable.onCreateOrderResponseOnepay(returnPaymentUrl);
                            if (response && response.data) {
                                console.log(response.data);
                                if (response.data.auth) {
                                    response.data.auth.isNewUser = false;
                                    authStore.opnChangeAuth = response.data.auth;

                                }
                                if (response.data.orderCode) {
                                    router.push('/confirm/payment/success');
                                }
                            }
                        } catch (error) {
                            alert(error) // Thanh toan that bai 1
                        }

                    }


                    // Hoặc chặn luôn không cho load tiếp (nâng cao – cần custom native)
                });

            }
        } catch (error) {
            alert(error);
        }
        finally {
            StatusBar.setOverlaysWebView({ overlay: true });
        }
    }
}



// import FastTrack from '../components/FastTrack.vue';
</script>
<style scoped>
.tour-image {
    width: 100px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
}

.booking-form {
    /* max-width: 500px; */
    /* padding: 20px; */
}

.form-label {
    font-size: 14px;
    color: #8A929E;
    margin-bottom: 6px;
}

.required-mark {
    color: #dc3545;
    margin-left: 2px;
}

.form-select,
.form-control {
    background-color: #F5F7FA;
    border: 1px solid #EDF1F7;
    border-radius: 15px;
    font-size: 14px;
    padding: 10px 12px;
    font-weight: 400;
    color: #8A929E;
}

.service-date {
    font-size: 14px;
    color: #333;
    margin-bottom: 16px;
}

.radio-group {
    display: flex;
    gap: 16px;
    margin: 10px 0;
    justify-content: space-between;

}

.radio-button {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border: 1px solid #8A929E;
    border-radius: 12px;
    cursor: pointer;
    width: 47%;
    transition: all 0.2s;
}

/* .radio-button.active {
    border-color: #8A929E;
} */

.radio-button input[type="radio"] {
    margin-right: 8px;
}

.helper-text {
    font-size: 12px;
    color: #8A929E;
    margin-top: 4px;
    font-weight: 400;
}

.form-control,
.form-select {
    background-color: #f8f9fa;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    padding: 10px 12px;
}

.section-title {
    font-size: 18px;
    font-weight: 600;
    color: #0a2463;
    margin-bottom: 20px;
}

.companion-section {
    background-color: #f8f9fa;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 16px;
}

.customer-dropdown {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.customer-dropdown-text {
    font-size: 16px;
    color: #333;
}


.calendar-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    pointer-events: none;
}

.dropdown-icon {
    width: 20px;
    height: 20px;
    color: #666;
}
</style>