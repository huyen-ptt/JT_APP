// Example using Composition API
import { defineStore } from "pinia";
import { ref } from "vue";


export const useCurrencyStore = defineStore(
  "fCurrency",
  () => {
    const fCurrency = ref({ name: 'US Dollar', code: 'USD', symbol: '$', flagUrl: 'https://flagcdn.com/w40/us.png', exchange: 25200 });
    
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
