// Example using Composition API
import { defineStore } from "pinia";
import { ref } from "vue";


export const useSeenStore = defineStore(
  "seen",
  () => {
    const seen = ref([]);
    const onAddSeen = (id) => {
      if (seen.value.length == 0) {
        seen.value.push(id)
      } else {
        seen.value = seen.value.filter(item => item !== id);
        seen.value.unshift(id);
      }
    };
    return { seen, onAddSeen };
  },
  {
    persist: {
      enabled: true, // Bật chế độ lưu trạng thái
      storage: localStorage, // Hoặc sử dụng sessionStorage nếu muốn lưu tạm thời
    },
  }
);
