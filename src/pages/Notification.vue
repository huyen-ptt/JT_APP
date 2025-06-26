<template>

    <HeaderTitle :title="$t('THONG_BAO')"></HeaderTitle>

    <div v-if="currentAuth.id > 0" class="notifications-list-tb1">
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
                        <!-- <div class="notification-time-tb">{{ noti.creationTime }}</div> -->
                         <div class="notification-time-tb">{{helper.convertDateString(noti.creationTime)}}</div>
                    </div>
                    <button class="star-btn-tb" v-if="!noti.isReaded">☆</button>
                    <button class="star-btn-tb" v-else></button>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="text-center">
        {{ $t('PLEASE_LOGIN_TO_SEE_NOTIFICATION') }}
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
import { useNotification } from "../composables/notification";
const { locale, t } = useI18n();
const helper = useHelper()


const authComposable = useAuth();
const notificationComposable = useNotification();
import Footer from "@/components/Footer.vue";

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
.notifications-list-tb {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}
.notifications-list-tb1{
    padding-bottom: 60px;
}
.notification-item-tb {
  display: flex;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: background-color 0.2s;
  position: relative;
}

.notification-item-tb:hover {
  background-color: #f8f9fa;
}

.notification-icon-tb {
  font-size: 28px;
  margin-right: 12px;
  flex-shrink: 0;
  line-height: 1;
  margin-bottom: 6px;
}

.notification-content-tb {
  flex: 1;
}

.notification-title-tb span {
  font-weight: 600;
  font-size: 16px;
  color: #333;
  display: block;
}

.notification-text-tb span {
  font-size: 14px;
  color: #555;
  display: block;
  word-break: break-word;
}

.notification-time-tb {
  font-size: 12px;
  color: #999;
  /* margin-top: 8px; */
}

.star-btn-tb {
  background: none;
  border: none;
  font-size: 18px;
  color: #ccc;
  cursor: pointer;
  padding: 0 8px;
  position: absolute;
  right: 16px;
  top: 16px;
}

.star-btn-tb:hover {
  color: gold;
}

.star-btn-tb:focus {
  outline: none;
}

</style>