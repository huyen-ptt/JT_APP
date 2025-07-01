import axios from "axios";
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
export const useSeo = () => {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();
  const uri = runtimeConfig.public.apiBaseUrl;
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
    case 'ru':
      _cultureCode = 'ru-RU';
      break;
  }

  const getDynamicSeo = async () => {
    try {
      const url = `${uri}/api/Seos/GetDynamicSiteMap`;
      const response = await useFetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
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

  return { getDynamicSeo }
}
