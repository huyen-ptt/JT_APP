import axios from "axios";
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router'
import { useSeenStore } from '@/stores/seenStore';
import { computed } from 'vue';

import { useSearchStore } from "../stores/searchStore";

export const useSearch = () => {
  const uri = import.meta.env.VITE_API_URI;

  let _cultureCode = '';

  const { locale } = useI18n();
  const currentLanguage = locale.value;
  const searchStore = useSearchStore();
  const currentSreach = computed(() => searchStore.search);


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

  const route = useRoute();

  const _first = computed(() => route.query.service);
  const _second = computed(() => route.query.destination);
  const _keyword = computed(() => route.query.keyword);

  // Giả sử chúng ta muốn lấy userId và postId từ route


  const getSearchableZone = async () => {
    const url = `${uri}/api/PageSearch/GetSearchableZone`;
    const data = {
      cultureCode: _cultureCode
    }
    try {
      const response = await axios.post(url, data)

      if (response.data) {
        let zoneList = []
        let $response = response.data
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
      selectedZones.push(_first.value);
      selectedZones.push(_second.value);
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
      const response = await axios.post(url, data)
      if (response.data) {
        // console.log(response.data.value)
        return response.data
      }
    } catch (err) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }

  }

  const onSearchProducts = async (pageIndex, pageSort) => {
    const url = `${uri}/api/PageSearch/GetProductByKeywords`;
    
    let keywords = [];
    if(currentSreach.value.keyword){
      keywords.push(currentSreach.value.keyword)
    }
    let searchItems = [];
    if(currentSreach.value.searchItems.length > 0){
      currentSreach.value.searchItems.forEach(r => {
        searchItems.push(r.url);
      })
    }


    const data = {
      keywords: keywords,
      selectedZones: searchItems,
      cultureCode: _cultureCode,
      pageIndex: pageIndex,
      pageSize: 12,
      startPrice: currentSreach.value.startBudget,
      endPrice: currentSreach.value.endBudget,
      sortBy: currentSreach.value.sortBy
    }
    try {
      // const data = { id: id, cultureCode: _cultureCode }
      //console.log(selectedZones)
      const response = await axios.post(url, data)
      if (response) {
        // console.log(response.data.value)
        return response.data
      }
    } catch (err) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }
  }

  return { getSearchableZone, getFilterdProducts, onSearchProducts }
}
