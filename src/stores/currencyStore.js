// Example using Composition API
import { defineStore } from "pinia";
import { ref } from "vue";


export const useCurrencyStore = defineStore(
  "fCurrency",
  () => {
    const fCurrency = ref({code: 'USD', symbol: "$", exchange: 26000 });
    
    const onChangefCurrency = (item) => {
        fCurrency.value = item;
    }
    return { fCurrency, onChangefCurrency};
  },
  {
    persist: {
      enabled: true, // Bật chế độ lưu trạng thái
      storage: localStorage, // Hoặc sử dụng sessionStorage nếu muốn lưu tạm thời
    },
  }
);
