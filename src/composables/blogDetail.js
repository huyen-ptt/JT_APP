export const useBlogDetail = () => {
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

  const getBlogInfomationDetail = async () => {
    const url = `${uri}/api/PageArticles/GetBlogDetailById`;
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
        let detail = response.data.value;
        return detail;
      }
      await navigateTo(localePath('/blogs'));
      return null;

    } catch (err) {
      console.error('Error fetching banners:', err);
      await navigateTo(localePath('/blogs'));
      return null;
    }
  }
  const getBlogParentZone = async (parentChoosen) => {
    let type = 2; // 2 la zone bai viet
    if (_cultureCode) {
      const url = `${uri}/api/Zones/GetZoneByType`;
      const data = { type: type, cultureCode: _cultureCode };
      try {
        const response = await useFetch(url, {
          method: 'post',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
        if (response.data.value) {
          let _response = response.data.value.filter(r => r.parentId > 0);

          let _lv1 = _response.filter(r => r.level == 1);
          _lv1.forEach(element => {
            element.cssActive = false
            element.childs = [];
            _response.forEach(r => {
              if (r.parentId == element.id) {
                element.childs.push(r)
              }
            })
          });
          const _returnData = {
            all: _response,
            lv1: _lv1
          }
          // console.log(_returnData)
          return _returnData;
        }
      } catch (err) {
        console.error('Error fetching banners:', err);
        throw err;  // Rethrow to let handling be done by `useAsyncData`
      }
    }

  }

  return { getBlogInfomationDetail, getBlogParentZone }
}
