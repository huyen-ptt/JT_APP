<template>

    <div class="container p-0" style="max-width: 480px;">
        <!-- Header -->
        <div class="top-bar-product p-4 bg-white title">
            <button class="back-button-product">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title-product">{{ $t('SETTING_ACCOUNT') }}</h1>
            <button class="cart-button-product"></button>
        </div>

        <!-- Profile Section -->
        <div class="px-3 mt-3 infomation-profile">
            <div class="profile-card d-flex align-items-center">
                <div class="profile-img me-3">
                    <i class="fas fa-user text-primary"></i>
                </div>
                <div>
                    <h6 class="mb-0 name">John Doe</h6>
                    <small class="email-me">azure@gmail.com</small>
                </div>
            </div>

            <!-- Order Section -->
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="m-0 promo-title">{{ $t('MY_ORDER_ACCOUNT') }}</h6>
                <small class="news-link-blogg">{{ $t('VIEW_HISTORY_ACCOUNT') }}</small>
            </div>

            <div class="order-card">
                <div class="order-icons">
                    <div class="order-icon">
                        <div class="icon-circle">
                            <img src="../assets/images/Layer_1.png">
                        </div>
                        <span class="service-text">{{ $t('NEW_ACCOUNT') }}</span>
                    </div>
                    <div class="order-icon">
                        <div class="icon-circle">
                            <img src="../assets/images/Vector.png">
                        </div>
                        <span class="service-text">{{ $t('READY_ACCOUNT') }}</span>
                    </div>
                    <div class="order-icon">
                        <div class="icon-circle">
                            <img src="../assets/images/user.png">
                        </div>
                        <span class="service-text">{{ $t('USED_ACCOUNT') }}</span>
                    </div>
                    <div class="order-icon">
                        <div class="icon-circle">
                            <img src="../assets/images/pendding.png">
                        </div>
                        <span class="service-text">{{ $t('PENDING_ACCOUNT') }}</span>
                    </div>
                </div>
            </div>

            <!-- Settings Section -->
            <h6 class="promo-title pb-3">{{ $t('SETTING_ACCOUNT') }}</h6>
            <div class="settings-card">
                <div class="settings-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="../assets/images/password-check.png" />
                        </div>
                        <span class="title145">{{ $t('UPDATE_PASSWORD_ACCOUNT') }}</span>
                    </div>
                    <i class="fas fa-chevron-right "></i>
                </div>
                <div class="settings-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="../assets/images/language-circle.png" />
                        </div>
                        <span class="title145">{{ $t('LANGUAGES_ACCOUNT') }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="see-detail-booking me-2">English</span>
                        <i class="fas fa-chevron-right "></i>
                    </div>
                </div>
                <div class="settings-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="../assets/images/money-send.png" />
                        </div>
                        <span class="title145">{{ $t('CURRENCY_ACCOUNT') }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="see-detail-booking me-2">USD</span>
                        <i class="fas fa-chevron-right "></i>
                    </div>
                </div>
            </div>

            <!-- About us Section -->
            <h6 class="promo-title pb-3">{{ $t('ABOUT_US_ACCOUNT') }}</h6>
            <div class="about-card">
                <div class="about-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="../assets/images/book.png" />
                        </div>
                        <span class="title145">{{ $t('ABOUT_US_ACCOUNT') }}</span>
                    </div>
                    <i class="fas fa-chevron-right "></i>
                </div>
                <div class="about-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="../assets/images/call-calling.png" />
                        </div>
                        <span class="title145">{{ $t('CONTACT_US_ACCOUNT') }}</span>
                    </div>
                    <i class="fas fa-chevron-right "></i>
                </div>
                <div class="about-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <img src="../assets/images/re.png" />
                        </div>
                        <span class="title145">{{ $t('FAQS_ACCOUNT') }}</span>
                    </div>
                    <i class="fas fa-chevron-right "></i>
                </div>
                <div class="about-item">
                    <div class="d-flex align-items-center">
                        <div class="icon-circle me-3">
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </div>
                        <span @click="visible = true" class="title145">{{ $t('LOGOUT_ACCOUNT') }}</span>
                        <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }" class="modal-logout1">
                            <div class="logout-dialog-logoutt">
                                <div class="text-center back-icon-logoutt">
                                    <img src="../assets/images/logout.png">
                                </div>
                                <h2 class="promotion-title-lon text-center">{{ $t('LOGOUT_ACCOUNT') }}</h2>
                                <p class="dia-chi-product text-center pb-3">{{ $t('CONFIRM_SIGN_OUT_ACCOUNT') }}</p>
                                <div class="buttons-container-logoutt">
                                    <button class="btn btn-cancel-logoutt" @click="visible = false">{{
                                        $t('CANCEL_ACCOUNT') }}</button>
                                    <button class="btn btn-logout-logoutt">{{ $t('LOG_OUT_ACCOUNT') }}</button>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                    <i class="fas fa-chevron-right "></i>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>


</template>
<script setup>
import { ref } from "vue";
import Footer from "@/components/Footer.vue"
import Drawer from 'primevue/drawer';
const visibleBottom = ref(false);
import { RouterLink, useRouter } from 'vue-router'
import Dialog from 'primevue/dialog';
const visible = ref(false);
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
    padding: 25px 15px;
    margin-bottom: 20px;
}

.order-card {
    background-color: white;
    border-radius: 12px;
    padding: 15px 23px;
    margin-bottom: 20px;
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
    padding: 15px;
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
</style>