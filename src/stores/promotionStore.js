// Example using Composition API
import { defineStore } from "pinia";
import { ref } from "vue";


export const usePromotionStore = defineStore(
  "promotions",
  () => {
    const promotions = ref([]);
    const onAddPromotions = (data) => {
        if(promotions.value.length == 0){
            promotions.value.push(data)
        }else{
            let checker = promotions.value.find(item => item.zoneId == data.zoneId);
            if(!checker){
                promotions.value.push(data)
            }
        }

    }
    
    return { promotions, onAddPromotions };
  },
  {
    persist: {
      enabled: true, // Bật chế độ lưu trạng thái
      storage: localStorage, // Hoặc sử dụng sessionStorage nếu muốn lưu tạm thời
    },
  }
);
