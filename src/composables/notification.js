import axios from "axios";
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
export const useNotification = () => {
  const route = useRoute();
  const apiUrl = import.meta.env.VITE_API_URI
  // const runtimeConfig = useRuntimeConfig();
  const uri = import.meta.env.VITE_API_URI;
  let _cultureCode = '';

  const { locale } = useI18n();
  const currentLanguage = locale.value;

  switch (currentLanguage) {
    case 'en':
      _cultureCode = 'en-US';
      break;
    case 'vi':
      _cultureCode = 'vi-VN';
      break;
    case 'zh':
      _cultureCode = 'zh-CN';
      break;
    case 'ko':
      _cultureCode = 'ko-KR';
      break;
  }


  const getNotificationsByEmail = async (email) => {
    try {
      let data = {
        email: email,
        index: 1,
        size: 1000
      }
      const url = `${uri}/api/Notifications/GetNotificationsByEmail`;
      const response = await axios.post(url, data)
      if (response) {
        return response;
      }
      else {
        return null;
      }

    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return { getNotificationsByEmail }
}
