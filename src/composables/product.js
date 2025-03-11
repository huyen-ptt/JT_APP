export const useProduct = () => {
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
  }


  // Giả sử chúng ta muốn lấy userId và postId từ route
  const alias = computed(() => route.params.alias);
  const id = computed(() => route.params.id);

  const getProductDetail = async (type) => {
    const url = `${uri}/api/PageProduct/GetProductDetailById`;
    const data = { id: parseInt(id.value), cultureCode: _cultureCode };
    console.log(data)
    try {
      const response = await useFetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      if (response.data.value) {



        const seenStore = useSeenStore();

        let detail = response.data.value;
        // console.log(detail);
        seenStore.onAddSeen(detail.id);
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

  return { getProductDetail }
}
