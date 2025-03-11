export const useArticles = () => {
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


  // Giả sử chúng ta muốn lấy userId và postId từ route
  const alias = computed(() => route.params.alias ?? "");
  const id = computed(() => route.params.id ?? 0);
  const index = computed(() => route.query.index);
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
          return _returnData;
        }
      } catch (err) {
        console.error('Error fetching banners:', err);
        throw err;  // Rethrow to let handling be done by `useAsyncData`
      }
    }

  }

  const getBlogsInZone = async () => {
    const type = 2 //2 la zone bai viet
    let pageIndex = 1;
    if (index.value) {
      pageIndex = index.value
    }
    // console.log(pageIndex)
    const url = `${uri}/api/PageArticles/GetBlogsInZone`;
    const data = {
      zoneId: id.value,
      cultureCode: _cultureCode,
      type: type,
      pageIndex: pageIndex,
      pageSize: 10,
      zoneUrl: alias.value
    };
    // //console.log(data)
    try {
      const response = await useFetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      if (response.data.value) {
        // console.log(response.data.value)
        return response.data.value;
      }
    } catch (err) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }
  }

  const getNewestBlogs = async () => {
    const type = 2 //2 la type bai viet noi dung
    let pageIndex = 1;

    const url = `${uri}/api/PageArticles/GetBlogsInZone`;
    const data = {
      zoneId: 0,
      cultureCode: _cultureCode,
      type: type,
      pageIndex: pageIndex,
      pageSize: 5,
      zoneUrl : ""
    };
    // //console.log(data)
    try {
      const response = await useFetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      if (response.data.value) {
        // console.log(response.data.value)
        let _response = [];
        _response.push(response.data.value.firstItem)

        response.data.value.nextThreeItem.forEach(v => {
          _response.push(v)
        })
        response.data.value.lastItems.forEach(v => {
          _response.push(v)
        })
        // let _resposne = [... response.data.value.firstItem, response.data.value.lastItem]

        return _response
      }
    } catch (err) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }
  }

  return { getBlogParentZone, getBlogsInZone, getNewestBlogs }
}
