import { defineStore } from "pinia";
import { ref } from "vue";


export const useAuthStore = defineStore(
  "auth",
  () => {
    const auth = ref({ id: 0, email: "", firstName: "", lastName: "", country: "", phoneNumber: "", isNewUser: true, pcname: "", avatar: "" });

    const onChangeAuth = (authItem) => {
      auth.value = authItem;
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