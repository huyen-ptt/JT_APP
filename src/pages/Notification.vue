<template>
    <div class="notification-bao">
        <HeaderTitle :title="$t('THONG_BAO')"></HeaderTitle>

        <div v-if="currentAuth.id > 0">
            <div class="notifications-list-tb">
                <div class="notification-item-tb border-bottom" v-for="noti in notifications">
                    <div v-if="parseInt(noti.notificationBannerCode)">

                    </div>
                    <div v-else>
                        <div class="notification-icon-tb">
                            <span v-if="noti.notificationBannerCode === 'NOTI_APP_NEW_ORDER'">🏨</span>
                            <span v-if="noti.notificationBannerCode === 'NOTI_APP_CONFIRM_ORDER'">🏨</span>
                            <span v-if="noti.notificationBannerCode === 'NOTI_APP_COMPLETE_ORDER'">🏨</span>
                            <span v-if="noti.notificationBannerCode === 'NOTI_APP_PENDING_CANCEL_ORDER'">🏨</span>
                            <span v-if="noti.notificationBannerCode === 'NOTI_APP_CANCELED_ORDER'">🏨</span>
                        </div>
                        <div class="notification-content-tb">
                            <div class="notification-title-tb">
                                <span>{{ $t(noti.notificationBannerCode) }}</span>
                            </div>
                            <div class="notification-text-tb">
                                <span>{{ $t(`${noti.notificationBannerCode}_DESCRIPTION`) }} {{ noti.orderCode }}</span>
                            </div>
                            <div class="notification-time-tb">{{ noti.creationTime }}</div>
                        </div>
                        <button class="star-btn-tb" v-if="!noti.isReaded">☆</button>
                        <button class="star-btn-tb" v-else></button>
                    </div>

                </div>

                <!-- <div class="notification-item-tb border-bottom promo-item-tb">
                <div class="notification-icon-tb">🏨</div>
                <div class="notification-content-tb">
                    <div class="notification-title-tb">Radisson Blu Resort Cam Ranh</div>
                    <div class="notification-text-tb">Ưu đãi chỉ từ 2.524.000đ/phòng/đêm và miễn phí hàng loạt dịch vụ
                        khi
                        đặt phòng tại khách sạn. Chốt deal ngay hôm nay!</div>
                    <div class="notification-time-tb">18:30 26/05</div>
                </div>
                <button class="star-btn-tb">☆</button>
            </div>

            <div class="notification-item-tb border-bottom travel-item-tb">
                <div class="notification-icon-tb">🏖️</div>
                <div class="notification-content-tb">
                    <div class="notification-title-tb">Hồ Tràm Beach Boutique Resort & Spa</div>
                    <div class="notification-text-tb">Ưu đãi đặc biệt chỉ từ 1.751.000đ/ 2 khách/đêm - Bao gồm ăn sáng,
                        VAT
                        và nhiều tiện ích miễn phí (trừ Pool Villa)!</div>
                    <div class="notification-time-tb">17:45 25/05</div>
                </div>
                <button class="star-btn-tb">☆</button>
            </div>

            <div class="notification-item-tb border-bottom travel-item-tb">
                <div class="notification-icon-tb">🦩</div>
                <div class="notification-content-tb">
                    <div class="notification-title-tb">Flamingo Resort Đại Lải</div>
                    <div class="notification-text-tb">Ưu đãi miễn phí năng hàng phòng và các dịch vụ cao cấp tại
                        Flamingo
                        Resort Đại Lải. Đặt phòng ngay hôm nay!</div>
                    <div class="notification-time-tb">16:30 22/05</div>
                </div>
                <button class="star-btn-tb">☆</button>
            </div>

            <div class="notification-item-tb border-bottom travel-item-tb">
                <div class="notification-icon-tb">🏖️</div>
                <div class="notification-content-tb">
                    <div class="notification-title-tb">Hồ Tràm Beach Boutique Resort & Spa</div>
                    <div class="notification-text-tb">Ưu đãi đặc biệt chỉ từ 1.751.000đ/ 2 khách/đêm - Bao gồm ăn sáng,
                        VAT
                        và nhiều tiện ích miễn phí (trừ Pool Villa)!</div>
                    <div class="notification-time-tb">17:45 25/05</div>
                </div>
                <button class="star-btn-tb">☆</button>
            </div> -->

            </div>
        </div>
        <div v-else>
            {{ $t('PLEASE_LOGIN_FOR_SEE_NOTIFICATION') }}
        </div>

        <Footer></Footer>
    </div>



</template>
<script setup>
import { ref, onBeforeMount, onMounted, computed, onUnmounted } from "vue";
import HeaderTitle from '../components/HeaderTitle.vue';
import { useAuthStore } from '../stores/authStore';
import { useI18n } from 'vue-i18n'
import { useHelper } from "../composables/helper";
import { RouterLink, useRouter } from 'vue-router'
import { useAuth } from '../composables/auth';
import { useNotification } from "../composables/notification";
import Footer from "@/components/Footer.vue";
const { locale, t } = useI18n();


const authComposable = useAuth();
const notificationComposable = useNotification();


const router = useRouter()
const authStore = useAuthStore();
const currentAuth = computed(() => authStore.auth);
const notifications = ref([]);



onMounted(async () => {

    if (currentAuth.value.id > 0) {
        const response = await notificationComposable.getNotificationsByEmail(currentAuth.value.email);
        console.log(response)
        if (response) {
            notifications.value = response.data;
        }
    }
})


</script>
<style scoped>
.header-tb {
    background-color: white;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-left-tb {
    display: flex;
    align-items: center;
}

.back-btn-tb {
    background: none;
    border: none;
    font-size: 18px;
    color: #007AFF;
    margin-right: 16px;
    cursor: pointer;
}

.title-tb {
    font-size: 18px;
    font-weight: 600;
    color: #333;
}

.header-right-tb {
    display: flex;
    gap: 16px;
}

.icon-btn-tb {
    background: none;
    border: none;
    font-size: 20px;
    color: #007AFF;
    cursor: pointer;
}

.filter-section-tb {
    background-color: white;
    padding: 12px 16px;
    border-bottom: 1px solid #e0e0e0;
}

.notifications-list-tb {
    padding-bottom: 60px;
}

.filter-row-tb {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.checkbox-container-tb {
    display: flex;
    align-items: center;
    gap: 8px;
}

.checkbox-tb {
    width: 18px;
    height: 18px;
    accent-color: #007AFF;
}

.select-all-tb {
    color: #666;
    font-size: 14px;
}

.dropdown-tb {
    background: none;
    border: none;
    color: #007AFF;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
}



.notification-item-tb {
    background-color: white;
    margin: 8px 0;
    padding: 16px;
    display: flex;
    gap: 12px;

}

.notification-icon-tb {
    width: 24px;
    height: 24px;
    background-color: #007AFF;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    flex-shrink: 0;
}

.notification-content-tb {
    flex: 1;
}

.notification-title-tb {
    font-weight: 600;
    color: #333;
    margin-bottom: 4px;
    font-size: 14px;
}

.notification-text-tb {
    color: #666;
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 8px;
}

.notification-time-tb {
    color: #999;
    font-size: 12px;
}

.star-btn-tb {
    background: none;
    border: none;
    color: #ccc;
    font-size: 20px;
    cursor: pointer;
    flex-shrink: 0;
}

.star-btn-tb:hover {
    color: #ffb400;
}

.promo-item-tb .notification-icon-tb {
    background-color: #34C759;
}

.travel-item-tb .notification-icon-tb {
    background-color: #FF9500;
}

.order-item-tb .notification-icon-tb {
    background-color: #FF3B30;
}
</style>