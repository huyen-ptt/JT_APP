export const useServiceStatic = () => {
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

  const route = useRoute();

  const _first = computed(() => route.params.alias);
  const _second = computed(() => route.params.subalias);
  const _keyword = computed(() => route.query.keyword);

  // Giả sử chúng ta muốn lấy userId và postId từ route


  const getSearchableZone = async () => {
    const url = `${uri}/api/PageSearch/GetSearchableZone`;
    const data = {
      cultureCode: _cultureCode
    }
    try {
      const response = await useFetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      if (response.data.value) {
        let zoneList = []
        let $response = response.data.value
        if ($response) {
          let parentDiemDen = $response.find(r => r.type == 5 && (r.parentId == 0 || !r.parentId)) // 5 la type diem den
          let parentDanhMuc = $response.find(r => r.type == 1 && (r.parentId == 0 || !r.parentId)) // 1 la type dich vu
          let parentRegion = $response.find(r => r.type == 7 && (r.parentId == 0 || !r.parentId)) // 7 la type region
          if (parentDiemDen) {
            let childDiemDens = $response.filter(r => r.type == 5 && r.parentId == parentDiemDen.id)
            childDiemDens.forEach(r => r.isChecked = false);
            let _temp = {
              zoneParentName: parentDiemDen.name,
              zoneParentType: parentDiemDen.type,
              zoneChilds: childDiemDens
            }
            zoneList.push(_temp);
          }
          if (parentDanhMuc) {
            let childDanhMuc = $response.filter(r => r.type == 1 && r.parentId == parentDanhMuc.id)
            childDanhMuc.forEach(r => r.isChecked = false);
            let _temp = {
              zoneParentName: parentDanhMuc.name,
              zoneParentType: parentDanhMuc.type,
              zoneChilds: childDanhMuc
            }

            _temp.zoneChilds.forEach(t => {
              let childLevel1 = $response.filter(r => r.type == 1 && r.parentId == t.id);
              t.subZone = childLevel1;
            })
            zoneList.push(_temp);
          }
          if (parentRegion) {
            let childRegion = $response.filter(r => r.type == 7 && r.parentId == parentRegion.id)
            childRegion.forEach(r => r.isChecked = false);
            let _temp = {
              zoneParentName: parentRegion.name,
              zoneParentType: parentRegion.type,
              zoneChilds: childRegion
            }
            zoneList.push(_temp);
          }

          let selectedSearchItem = [];
          let selectedGoogleMapCrood = { lat: 21.0285, lng: 105.8542 }
          let selectedGoogleMapZoom = 7;
          zoneList.forEach((parent) => {
            if (parent.zoneChilds) {
              parent.zoneChilds.forEach(v => {
                if (v.url === _first.value || v.url === _second.value) {
                  v.isChecked = true
                  selectedSearchItem.push(v)
                  // //console.log(v)
                }

              })
            }

          })
          //Neu ma khong co 
          zoneList.forEach((parent) => {
            if (parent.zoneChilds) {
              parent.zoneChilds.forEach(v => {
                if (_first.value == v.url || _second.value == v.url) {
                  if (v.googleMapCrood) {
                    let googleMapCroodSplited = v.googleMapCrood.split('-');
                    if (googleMapCroodSplited.length == 2) {
                      selectedGoogleMapCrood = { lat: parseFloat(googleMapCroodSplited[0]), lng: parseFloat(googleMapCroodSplited[1]) };

                      selectedGoogleMapZoom = 12;
                    }

                  }
                }

              })
            }

          })

          console.log(selectedGoogleMapCrood, selectedGoogleMapZoom)
          return { ssrZoneList: zoneList, ssrSelectedSearchItem: selectedSearchItem, ssrSelectedGoogleMapCrood: selectedGoogleMapCrood, ssrSelectedGoogleMapZoom: selectedGoogleMapZoom }

        }
      }
    } catch (err) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }
  }

  const getFilterdProducts = async (selectedZones) => {
    //Che chao cai nay

    const url = `${uri}/api/PageSearch/GetProductByKeywords`;

    if (selectedZones.length == 0) {
      if (_second.value) {
        selectedZones.push(_second.value);

      } else {
        selectedZones.push(_first.value);
      }
    }
    let keywords = [];
    if (_keyword.value) {
      keywords.push(_keyword.value)
    }

    const data = {
      keywords: keywords,
      selectedZones: selectedZones,
      cultureCode: _cultureCode,
      pageIndex: 1,
      pageSize: 12,
      startPrice: 0,
      endPrice: 20000000,
      sortBy: "TOP_VIEW"
    }
    try {
      // const data = { id: id, cultureCode: _cultureCode }
      //console.log(selectedZones)
      const response = await useFetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

      })
      if (response.data.value) {
        // console.log(response.data.value)
        return response.data.value
      }
    } catch (err) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }

  }

  const getDestinationSubAlias = async () => {
    const url = `${uri}/api/PageServices/GetDestinationSubAlias`;
    let alias = _first.value;
    const data = {
      alias: alias,
      cultureCode: _cultureCode
    }
    try {
      const response = await useFetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

      })
      if (response.data.value) {
        // console.log(response.data.value)
        return response.data.value
      }
    } catch (error) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }
  }
  const getServiceFullDetail = async () => {
    const url = `${uri}/api/PageServices/GetServiceFullDetail`;
    let alias = _first.value;
    if (_second.value) {
      alias = _second.value;
    }
    const data = {
      alias: alias,
      cultureCode: _cultureCode
    }
    try {
      const response = await useFetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

      })
      if (response.data.value) {
        // console.log(response.data.value)
        let zoneDetail = response.data.value;

        if (zoneDetail.comments) {
          zoneDetail.comments = JSON.parse(zoneDetail.comments);
        } else {
          zoneDetail.comments = [];
        }
        if (zoneDetail.faqs) {
          zoneDetail.faqs = JSON.parse(zoneDetail.faqs);
        } else {
          zoneDetail.faqs = [];
        }

        if (zoneDetail.searchTags) {
          zoneDetail.searchTags = JSON.parse(zoneDetail.searchTags);
          if (zoneDetail.searchTags.length > 0) {
            zoneDetail.searchTags.forEach(r => {
              if (r.description) {
                r.tags = r.description.split(',')
              }
            })
          }
        } else {
          zoneDetail.searchTags = [];
        }
        return zoneDetail
      }
    } catch (error) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }
  }
  return { getSearchableZone, getFilterdProducts, getDestinationSubAlias, getServiceFullDetail }
}
