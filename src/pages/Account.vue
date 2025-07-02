<template>

    <div class="container p-0" style="max-width: 480px;">
        <!-- Header -->
        <HeaderTitle :title="$t('SETTING_ACCOUNT')" :uri="`/`"></HeaderTitle>

        <!-- Profile Section -->
        <div class="px-3 infomation-profile">
            <div class="profile-card d-flex align-items-center pt-2" v-if="auth.id > 0">
                <div class="profile-img me-3">
                    <i class="fas fa-user text-primary"></i>
                </div>
                <div>
                    <h6 class="mb-0 name">{{ `${auth.firstName ?? ""} ${auth.lastName ?? ""}` }}</h6>
                    <small class="email-me">{{ auth.email }}</small>
                </div>
            </div>
            <div v-else class="profile-card d-flex align-items-center">
                <div>
                    {{ $t('please') }} <RouterLink to="/signin">{{ $t('Login') }}</RouterLink> {{ $t('or') }}
                    <RouterLink to="/sign-up">{{ $t('SignUp') }}</RouterLink>
                </div>
            </div>

            <!-- Order Section -->
            <div class="d-flex justify-content-between align-items-center mb-2" v-if="auth.id > 0">
                <h6 class="m-0 promo-title">{{ $t('MY_ORDER_ACCOUNT') }}</h6>
                <small class="news-link-blogg" @click="onRedirectMyOrder(1)">{{ $t('VIEW_HISTORY_ACCOUNT') }}</small>
            </div>

            <div class="order-card" v-if="auth.id > 0">
                <div class="order-icons">
                    <div class="order-icon" @click="onRedirectMyOrder(1)">
                        <div class="icon-circle">
                            <img src="/images/Layer_12.png">
                        </div>
                        <span class="service-text">{{ $t('NEW_ACCOUNT') }}</span>
                    </div>
                    <div class="order-icon" @click="onRedirectMyOrder(2)">
                        <div class="icon-circle">
                            <img src="/images/Vector1.png">
                        </div>
                        <span class="service-text">{{ $t('READY_ACCOUNT') }}</span>
                    </div>
                    <div class="order-icon" @click="onRedirectMyOrder(3)">
                        <div class="icon-circle">
                            <img src="/images/user1.png">
                        </div>
                        <span class="service-text">{{ $t('USED_ACCOUNT') }}</span>
                    </div>
                    <div class="order-icon" @click="onRedirectMyOrder(4)">
                        <div class="icon-circle">
                            <img src="/images/Pendding1.png">
                        </div>
                        <span class="service-text">{{ $t('PENDING_ACCOUNT') }}</span>
                    </div>
                </div>
            </div>

            <!-- Settings Section -->
            <h6 class="promo-title">{{ $t('SETTING_ACCOUNT') }}</h6>
            <div class="settings-card">
                <div class="settings-item" v-if="auth.id > 0" @click="onRedirectUpdatePassword()">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="/images/password-check1.png" />
                        </div>
                        <span class="title145">{{ $t('UPDATE_PASSWORD_ACCOUNT') }}</span>
                    </div>
                    <i class="fas fa-chevron-right "></i>
                </div>
                <router-link to="/languages" class="settings-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="/images/language-circle.png" />
                        </div>
                        <span class="title145">{{ $t('LANGUAGES_ACCOUNT') }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="see-detail-booking me-2">{{ fLanguage.name }}</span>
                        <i class="fas fa-chevron-right "></i>
                    </div>
                </router-link>

                <router-link to="/currency" class="settings-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3"> 
                            <img src="/images/money-send.png" />
                        </div>
                        <span class="title145">{{ $t('CURRENCY_ACCOUNT') }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="see-detail-booking me-2">{{ fCurrency.code }}</span>
                        <i class="fas fa-chevron-right "></i>
                    </div>
                </router-link>
            </div>

            <!-- About us Section -->
            <h6 class="promo-title">{{ $t('ABOUT_US_ACCOUNT') }}</h6>
            <div class="about-card">
                <!-- <div class="about-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="/images/book.png" />  
                        </div>
                        <span class="title145">{{ $t('ABOUT_US_ACCOUNT') }}</span>
                    </div>
                      <i class="fas fa-chevron-right "></i>`
                </div> -->
                <router-link to="/introduce" class="about-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="/images/book.png" />
                        </div>
                        <span class="title145">{{ $t('ABOUT_US_ACCOUNT') }}</span>
                    </div>
                    <i class="fas fa-chevron-right "></i>
                </router-link>

                <router-link to="/contact" class="about-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="/images/call-calling1.png" />
                        </div>
                        <span class="title145">{{ $t('CONTACT_US_ACCOUNT') }}</span>
                    </div>
                    <i class="fas fa-chevron-right"></i>
                </router-link>

                <router-link to="/faqs" class="about-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="/images/message-question1.png" />
                        </div>
                        <span class="title145">{{ $t('FAQS_ACCOUNT') }}</span>
                    </div>
                    <i class="fas fa-chevron-right "></i>
                </router-link>

                <router-link to="/becomeapartner" class="about-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="/iconn-03.png" />
                        </div>
                        <span class="title145">{{ $t('become_a_partner') }}</span>
                    </div>
                    <i class="fas fa-chevron-right "></i>
                </router-link>
                <div class="about-item" v-if="auth.id > 0" @click="visible = true">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </div>
                        <span class="title145">{{ $t('LOGOUT_ACCOUNT') }}</span>
                        <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }" class="modal-logout1">
                            <div class="logout-dialog-logoutt">
                                <div class="text-center back-icon-logoutt">
                                    <img width="40" src="/images/logout.png">
                                </div>
                                <h2 class="promotion-title-lon text-center">{{ $t('LOGOUT_ACCOUNT') }}</h2>
                                <p class="dia-chi-product text-center pb-3">{{ $t('CONFIRM_SIGN_OUT_ACCOUNT') }}</p>
                                <div class="buttons-container-logoutt">
                                    <button class="btn btn-cancel-logoutt" @click="visible = false">{{
                                        $t('CANCEL_ACCOUNT') }}</button>
                                    <button class="btn btn-logout-logoutt" @click="onLogout()">{{ $t('LOG_OUT_ACCOUNT')
                                        }}</button>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                    <i class="fas fa-chevron-right "></i>
                </div>
                <div v-if="auth.id > 0" @click="visibleDeleteAcc = true" class="about-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="/iconn-02.png" />
                        </div>
                        <span class="title145" style="color: red;">{{ $t('DELETE_ACCOUNT') }}</span>
                    </div>
                    <Dialog v-model:visible="visibleDeleteAcc" modal :style="{ width: '25rem' }" class="modal-logout1">
                        <div class="logout-dialog-logoutt">

                            <h2 class="promotion-title-lon text-center">{{ $t('DELETE_ACCOUNT') }}</h2>
                            <p class="dia-chi-product text-center pb-3">{{ $t('CONFIRM_DELETE_ACCOUNT') }}</p>
                            <div class="buttons-container-logoutt">
                                <button class="btn btn-cancel-logoutt" @click="visibleDeleteAcc = false">{{
                                    $t('CANCEL_ACCOUNT')
                                    }}</button>
                                <button class="btn btn-logout-logoutt" @click="onDeleteAccount()">{{ $t('CONFIRM')
                                }}</button>
                            </div>
                        </div>
                    </Dialog>
                    <!-- <i class="fas fa-chevron-right " style="color: red;"></i> -->
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>


</template>
<script setup>
import { ref, computed } from "vue";
import Footer from "@/components/Footer.vue"
import HeaderTitle from '../components/HeaderTitle.vue';
import Drawer from 'primevue/drawer';
import { RouterLink, useRouter } from 'vue-router'
import Dialog from 'primevue/dialog';
import { useAuthStore } from '../stores/authStore';
import { useUser } from '../composables/user';
import { useHelper } from "../composables/helper";

import { useLanguageStore } from "../stores/languageStore";
import { useCurrencyStore } from "../stores/currencyStore";
import { useAuth } from "../composables/auth";


const router = useRouter();

const userComposable = useUser();
const helper = useHelper()
const authComposable = useAuth()
const authStore = useAuthStore()
const auth = computed(() => authStore.auth);

const visible = ref(false);
const visibleDeleteAcc = ref(false);

const visibleBottom = ref(false);

const languageStore = useLanguageStore();
const currencyStore = useCurrencyStore();

const fLanguage = computed(() => languageStore.language);
const fCurrency = computed(() => currencyStore.fCurrency)



const onRedirectMyOrder = (index) => {
    router.push('/myorder?v=' + index);
}

const onLogout = () => {
    authStore.onRemoveAuth();
}

const onRedirectUpdatePassword = () => {
    router.push('/updatepw')
}


const onDeleteAccount = () => {
    var data = {
        email: auth.value.email
    }
    console.log("auuuuuuuuuuuuuuuu", auth.value.email);

    authComposable.DeleteAccount(data).then(res => {
        console.log(res)
        visibleDeleteAcc.value = false
        authStore.onRemoveAuth();
    });
}
</script>
<style scoped>
.header {
    padding: 15px;
    background-color: white;
    border-bottom: 1px solid #eee;
}

.name {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #03294C;
    padding-bottom: 5px;

}

.email-me {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    color: #8A929E;

}

.profile-card {
    background-color: white;
    border-radius: 12px;
    /* padding: 10px 0; */
    margin-bottom: 20px;
}

.order-card {
    background-color: white;
    border-radius: 12px;
    padding: 1px 15px;
    margin-bottom: 10px;
}

.settings-card,
.about-card {
    background-color: white;
    border-radius: 12px;
    padding: 0;
    margin-bottom: 20px;
}

.settings-item,
.about-item {
    padding: 12px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.settings-item:last-child,
.about-item:last-child {
    border-bottom: none;
}

.section-title {
    margin-bottom: 10px;
    font-weight: bold;
    color: #222;
}

.profile-img {
    width: 64px;
    height: 64px;
    background-color: #F5F7FA;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-circle img {
    width: 35px;
}

.order-icons {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
}

.order-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
}

.icon-circle {

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -7px;

}

.icon-circle i {
    font-size: 24px;
}

.see-detail-booking {
    color: #0d6efd;
}

.icon-circle img {
    width: 24px;
}

a {
    text-decoration: none;
}
</style>