// Example using Composition API
import { defineStore } from "pinia";
import { ref } from "vue";


export const useChatStore = defineStore(
  "chats",
  () => {
    const chats = ref([]);

    const onAddMessage = (chatMessage) => {
      chats.value.push(chatMessage);
    }
    const onClearChat = () => {
      chats.value = []
    }

    
    return { chats, onAddMessage, onClearChat };
  },
  {
    persist: {
        enabled: true, // Bật chế độ lưu trạng thái
        storage: localStorage, // Hoặc sử dụng sessionStorage nếu muốn lưu tạm thời
    },
  }
);
