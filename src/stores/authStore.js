import { defineStore } from "pinia";
import { ref } from "vue";


export const useAuthStore = defineStore(
  "auth",
  () => {
    const auth = ref({ id: 0, email: "" });

    const onChangeAuth = (authItem) => {
      auth.value = authItem;
    }
    const onRemoveAuth = () => {
      auth.value = { id: 0, email: "", firstName: "", lastName: "", country: "", phonePrefix: "", phoneNumber: "" }
    }
    return { auth, onChangeAuth, onRemoveAuth };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);