export const usePromotion = () => {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();
  const uri = runtimeConfig.public.apiBaseUrl;
  let _cultureCode = '';

  const { locale } = useI18n();
  const currentLanguage = locale.value;

  switch(currentLanguage){
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
    const data = {promotionId: parseInt(id.value), cultureCode: _cultureCode};
    try{
      const response = await useFetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      if(response.data.value){
        return response.data.value;
      }
    } catch (err) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }
  }

  return {getPromotionDetailByZoneId}
}
