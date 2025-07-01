import axios from "axios";
import { ref } from "vue"
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
// const seenStore = useSeenStore();


export const useProduct = () => {
  const route = useRoute();
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
    case 'ru':
      _cultureCode = 'ru-RU';
      break;
  }


  // Giả sử chúng ta muốn lấy userId và postId từ route
  const alias = computed(() => route.params.alias);
  const id = computed(() => route.params.id);

  const getProductDetail = async (type) => {
    const url = `${uri}/api/PageProduct/GetProductDetailById`;
    const data = { id: parseInt(id.value), cultureCode: _cultureCode };
    console.log(data)
    try {
      const response = await axios.post(url, data)

      if (response.data) {

        let detail = response.data;
        // console.log(detail);
        let images = detail.avatarArray.split(',');
        if (images.length > 0) {
          detail.gallary = JSON.parse(JSON.stringify(images))
        }
        if (images.length > 0) {
          detail.firstImages = images[0];
        }
        if (images.length >= 3) {
          detail.nextTwoImages = images.splice(1, 2)
        }


        if (detail.thongTinTour) {
          detail.notes = JSON.parse(detail.thongTinTour)
        }
        if (detail.thuTucVisa) {
          detail.policies = JSON.parse(detail.thuTucVisa)
        }
        return detail;
      }
    } catch (err) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }
  }

  const onLoadLastSeen = async (data) => {
    const url = `${uri}/api/PageHome/GetProductLastSeen`
    try {
      const respone = await axios.post(url, data)
      if (respone.data) {
        return respone.data
      } else {
        console.log(err)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getProductOptionsPriceByDate = async (data) => {
    const url = `${uri}/api/PageProduct/GetProductOptionsPriceByDate`
    const respone = await axios.post(url, data);
    if (respone) {
      return respone;
    }
  }

  return { getProductDetail, onLoadLastSeen, getProductOptionsPriceByDate }
}
