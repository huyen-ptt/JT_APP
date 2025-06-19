import axios from "axios";
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router'
import { useSeenStore } from '@/stores/seenStore';
import { computed } from 'vue';

export const usePromotion = () => {
  const route = useRoute();
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
  // Giả sử chúng ta muốn lấy userId và postId từ route
  const alias = computed(() => route.params.alias);
  const id = computed(() => route.params.id);

  const getPromotionDetailByZoneId = async () => {
    const url = `${uri}/api/PagePromotion/GetPromotionDetailByZoneId`;
    const data = { promotionId: parseInt(id.value), cultureCode: _cultureCode };
    try {
      const response = await axios.post(url, data);
      if (response.data) {
        console.log(response.data);
        return response.data;
      }
    } catch (err) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }
  }
  const getProductInPromotions = async (selectedZones) => {
    const url = `${uri}/api/PagePromotion/GetPorductInPromotionByZoneUrl`
    if (selectedZones.length == 0) {
      // selectedZones.push(_first.value);
      // selectedZones.push(_second.value);
    }
    let keywords = [];
    

    const data = {
      keywords: keywords,
      selectedZones: selectedZones,
      cultureCode: _cultureCode,
      pageIndex: 1,
      pageSize: 12,
      startPrice: 0,
      endPrice: 20000000,
      sortBy: "TOP_BOOKING"
    }
    try {
      // const data = { id: id, cultureCode: _cultureCode }
      //console.log(selectedZones)
      const response = await axios.post(url, data)
      if (response.data) {
        console.log(response.data.value)
        return response.data
      }
    } catch (err) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }
  }
  const checkValuePromotionCodeByProductId = async(data) => {
    const url = `${uri}/api/PagePromotion/CheckValuePromotionCodeByProductId`
    try {
      const respone = await axios.post(url, data);
      if(respone.data){
        return respone.data
      }
    } catch (error) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }
  }
  return { getPromotionDetailByZoneId, getProductInPromotions, checkValuePromotionCodeByProductId }
}
