import { defineStore } from "pinia";
import { ref } from "vue";
// import { connectToNotificationHub, disconnectNotificationHub } from "@/utils/notification-socket"; // sửa path nếu khác
import { initFCM } from "@/fcm";


export const useAuthStore = defineStore(
  "auth",
  () => {
    const auth = ref({ id: 0, email: "", firstName: "", lastName: "", country: "", phoneNumber: "", isNewUser: true, pcname: "", avatar: "" });

    const onChangeAuth = (authItem) => {
      auth.value = authItem;
      if (authItem.email) {
        initFCM(authItem.email);

        // connectToNotificationHub(authItem.email);
      }
    }
    const onRemoveAuth = () => {
      auth.value = { id: 0, email: "", firstName: "", lastName: "", country: "", phoneNumber: "", isNewUser: true, pcname: "", avatar: "" }
    }
    return { auth, onChangeAuth, onRemoveAuth };
  },
  {
    persist: {
      enabled: true, // Bật chế độ lưu trạng thái
      storage: localStorage, // Hoặc sử dụng sessionStorage nếu muốn lưu tạm thời
    },
  }
);