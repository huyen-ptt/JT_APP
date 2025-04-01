// Example using Composition API
import { defineStore } from "pinia";
import { ref } from "vue";


export const useCartStore = defineStore(
  "carts",
  () => {
    const carts = ref([]);
    const onAddCart = (cartItem) => {
      cartItem = JSON.parse(JSON.stringify(cartItem))
        let checker = true;
        carts.value.forEach(element => {
            if(element.parentId == cartItem.productId && element.productChildId == cartItem.productChildId && element.choosenDate == cartItem.choosenDate && element.combination.id == cartItem.combination.id){
                console.log('TRUNG GIO HANG')
                checker = false;
            }
        })
        if(checker){
          carts.value.push(cartItem);
        }
      
    };
    const onMinusCart = (cartIndex) => {
        carts.value.splice(cartIndex,1)
    }
    const onRemoveCart = () => {
      carts.value = [];
    }
    return { carts, onAddCart, onMinusCart, onRemoveCart };
  },
  {
    persist: {
        enabled: true, // Bật chế độ lưu trạng thái
        storage: localStorage, // Hoặc sử dụng sessionStorage nếu muốn lưu tạm thời
    },
  }
);
