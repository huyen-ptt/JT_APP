// Example using Composition API
import { defineStore } from "pinia";
import { ref } from "vue";


export const usePayStore = defineStore(
  "pays",
  () => {
    const pays = ref([]);
    const onAddPays = (payList) => {
        pays.value = payList
    };
    const onRemovePays = () => {
       pays.value = []
    }
    return { pays, onAddPays, onRemovePays };
  },
  {
    persist: {
        enabled: true, // Bật chế độ lưu trạng thái
        storage: localStorage, // Hoặc sử dụng sessionStorage nếu muốn lưu tạm thời
    },
  }
);
