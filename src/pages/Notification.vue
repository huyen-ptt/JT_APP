<template>

    <HeaderTitle :title="$t('THONG_BAO')"></HeaderTitle>

    <div class="notifications-list-tb">
        <div class="notification-item-tb border-bottom">
            <div class="notification-icon-tb">📋</div>
            <div class="notification-content-tb">
                <div class="notification-title-tb">MYPARTNER THÔNG BÁO</div>
                <div class="notification-text-tb">myPartner thay đổi về nội dung xuất hóa đơn bắt đầu từ ngày
                    01/06/2025!</div>
                <div class="notification-time-tb">19:00 26/05</div>
            </div>
            <button class="star-btn-tb">☆</button>
        </div>

        <div class="notification-item-tb border-bottom promo-item-tb">
            <div class="notification-icon-tb">🏨</div>
            <div class="notification-content-tb">
                <div class="notification-title-tb">Radisson Blu Resort Cam Ranh</div>
                <div class="notification-text-tb">Ưu đãi chỉ từ 2.524.000đ/phòng/đêm và miễn phí hàng loạt dịch vụ khi
                    đặt phòng tại khách sạn. Chốt deal ngay hôm nay!</div>
                <div class="notification-time-tb">18:30 26/05</div>
            </div>
            <button class="star-btn-tb">☆</button>
        </div>

        <div class="notification-item-tb border-bottom travel-item-tb">
            <div class="notification-icon-tb">🏖️</div>
            <div class="notification-content-tb">
                <div class="notification-title-tb">Hồ Tràm Beach Boutique Resort & Spa</div>
                <div class="notification-text-tb">Ưu đãi đặc biệt chỉ từ 1.751.000đ/ 2 khách/đêm - Bao gồm ăn sáng, VAT
                    và nhiều tiện ích miễn phí (trừ Pool Villa)!</div>
                <div class="notification-time-tb">17:45 25/05</div>
            </div>
            <button class="star-btn-tb">☆</button>
        </div>

        <div class="notification-item-tb border-bottom travel-item-tb">
            <div class="notification-icon-tb">🦩</div>
            <div class="notification-content-tb">
                <div class="notification-title-tb">Flamingo Resort Đại Lải</div>
                <div class="notification-text-tb">Ưu đãi miễn phí năng hàng phòng và các dịch vụ cao cấp tại Flamingo
                    Resort Đại Lải. Đặt phòng ngay hôm nay!</div>
                <div class="notification-time-tb">16:30 22/05</div>
            </div>
            <button class="star-btn-tb">☆</button>
        </div>

        <div class="notification-item-tb border-bottom travel-item-tb">
            <div class="notification-icon-tb">🏖️</div>
            <div class="notification-content-tb">
                <div class="notification-title-tb">Hồ Tràm Beach Boutique Resort & Spa</div>
                <div class="notification-text-tb">Ưu đãi đặc biệt chỉ từ 1.751.000đ/ 2 khách/đêm - Bao gồm ăn sáng, VAT
                    và nhiều tiện ích miễn phí (trừ Pool Villa)!</div>
                <div class="notification-time-tb">17:45 25/05</div>
            </div>
            <button class="star-btn-tb">☆</button>
        </div>

    </div>
    <Footer></Footer>

</template>
<script setup>
import { ref, onBeforeMount, onMounted, computed, onUnmounted } from "vue";

import HeaderTitle from '../components/HeaderTitle.vue';
import { useAuthStore } from '../stores/authStore';
import { useI18n } from 'vue-i18n'
import { useHelper } from "../composables/helper";
import { RouterLink, useRouter } from 'vue-router'
import { useAuth } from '../composables/auth';
const { locale, t } = useI18n();


const authComposable = useAuth();
import Footer from "@/components/Footer.vue";

const router = useRouter()
const authStore = useAuthStore();
const currentAuth = computed(() => authStore.auth);



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
.notifications-list-tb{
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