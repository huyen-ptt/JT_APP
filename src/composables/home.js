import axios from "axios";
import { useI18n } from 'vue-i18n';
import { useSeenStore } from "../stores/seenStore";
// import { useSeenStore } from '@/stores/seenStore'; 
import { computed } from 'vue';
import { useRoute } from 'vue-router'

export const useHome = () => {
  const route = useRoute();
  const uri = import.meta.env.VITE_API_URI;
  const seenStore = useSeenStore();
  const currentSeen = computed(() => seenStore.seen);
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

  const getBannerCodes = async () => {
    const url = `${uri}/api/BannerConfig/GetBannerConfigByCodes`;
    let _codes = ['HOME_BANNER',
      'HOME_PROMOTION',
      'HOME_REVIEW',
      'FOOTER_KHOI_2',
      'FOOTER_KHOI_3',
      'FOOTER_KHOI_4',
      'FOOTER_KHOI_1',
      'FOOTER_KHOI_1_ICON',
      'CULTURE_LAYOUT_FOOTER',
      'CULTURE_THAN_TRANG_HOME',
      'CULTURE_HEADER_HOME',
      'CULTURE_HOME_MB',
      'FOOTER_MB'
    ];

    const data = { codes: _codes, cultureCode: _cultureCode };

    try {
      const response = await useFetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      if (response.data.value) {
        //Banner
        let HOME_BANNER = null
        const _home_banner = response.data.value.find(r => r.bannerAdsCode === "HOME_BANNER");

        if (_home_banner) {
          HOME_BANNER = _home_banner.details[0];
        }
        //Promotion
        let HOME_PROMOTION = null;
        const _home_promotion = response.data.value.find(r => r.bannerAdsCode === "HOME_PROMOTION")

        if (_home_promotion) {
          HOME_PROMOTION = _home_promotion.details;
        }


        //Reivew
        let HOME_REVIEW = null;
        const _home_review = response.data.value.find(r => r.bannerAdsCode == "HOME_REVIEW")
        if (_home_review != null) {
          _home_review.details.forEach((element, index) => {
            const titleSplited = element.title.split('|')
            if (titleSplited.length > 0) {
              element.reviewName = titleSplited[0]
            }
            if (titleSplited.length > 1) {
              element.reviewCountry = titleSplited[1]
            }
            // ////console.log(element)
          })
          HOME_REVIEW = _home_review.details
        }
        //footer_khoi_2
        let FOOTER_KHOI_2 = null;
        const _footer_layout2 = response.data.value.find(r => r.bannerAdsCode == "FOOTER_KHOI_2");
        if (_footer_layout2) {
          FOOTER_KHOI_2 = _footer_layout2.details;
        }
        //footer_khoi_3
        let FOOTER_KHOI_3 = null;
        const _footer_khoi3 = response.data.value.find(r => r.bannerAdsCode == "FOOTER_KHOI_3");
        if (_footer_khoi3) {
          FOOTER_KHOI_3 = _footer_khoi3.details;
        }
        //footer_khoi_4
        let FOOTER_KHOI_4 = null;
        const _footer_khoi4 = response.data.value.find(r => r.bannerAdsCode == "FOOTER_KHOI_4");
        if (_footer_khoi4) {
          FOOTER_KHOI_4 = _footer_khoi4.details;
        }
        //footer_khoi_1
        let FOOTER_KHOI_1 = null;
        const _footer_khoi1 = response.data.value.find(r => r.bannerAdsCode == "FOOTER_KHOI_1");
        if (_footer_khoi1) {
          FOOTER_KHOI_1 = _footer_khoi1.details;
        }
        //footer_khoi_1_icon
        let FOOTER_KHOI_1_ICON = null;
        const _footer_khoi1_icon = response.data.value.find(r => r.bannerAdsCode == "FOOTER_KHOI_1_ICON");
        if (_footer_khoi1_icon) {
          FOOTER_KHOI_1_ICON = _footer_khoi1_icon.details;
        }

        //culture_layout_footer
        let CULTURE_LAYOUT_FOOTER = null;
        const _culture_footer = response.data.value.find(r => r.bannerAdsCode == "CULTURE_LAYOUT_FOOTER");
        if (_culture_footer) {
          CULTURE_LAYOUT_FOOTER = _culture_footer.details;

        }
        //culture_layout_than_trang
        let CULTURE_THAN_TRANG_HOME = null;
        const _culture_than_trang = response.data.value.find(r => r.bannerAdsCode == "CULTURE_THAN_TRANG_HOME");
        if (_culture_than_trang) {
          CULTURE_THAN_TRANG_HOME = _culture_than_trang.details;

        }
        //culture_layout_header
        let CULTURE_HEADER_HOME = null;
        const _culture_header = response.data.value.find(r => r.bannerAdsCode == "CULTURE_HEADER_HOME");
        if (_culture_header) {
          CULTURE_HEADER_HOME = _culture_header.details;

        }
        let CULTURE_HOME_MB = null;
        const _culture_home_mb = response.data.value.find(r => r.bannerAdsCode == "CULTURE_HOME_MB");
        if (_culture_home_mb) {
          CULTURE_HOME_MB = _culture_home_mb.details;

        }
        //footer_mb

        let FOOTER_MB = null;
        const _footer_mb = response.data.value.find(r => r.bannerAdsCode == "FOOTER_MB")
        if (_footer_mb != null) {
          _footer_mb.details.forEach((element, index) => {
            const titleSplited = element.title.split('|')
            if (titleSplited.length > 0) {
              element.FooterName = titleSplited[0]
            }
            if (titleSplited.length > 1) {
              element.FooterIcon = titleSplited[1]
            }
            // ////console.log(element)
          })
          FOOTER_MB = _footer_mb.details
        }
        const banners = {
          HOME_BANNER: HOME_BANNER,
          HOME_PROMOTION: HOME_PROMOTION,
          HOME_REVIEW: HOME_REVIEW,
          FOOTER_KHOI_1: FOOTER_KHOI_1,
          FOOTER_KHOI_1_ICON: FOOTER_KHOI_1_ICON,
          FOOTER_KHOI_2: FOOTER_KHOI_2,
          FOOTER_KHOI_3: FOOTER_KHOI_3,
          FOOTER_KHOI_4: FOOTER_KHOI_4,
          CULTURE_LAYOUT_FOOTER: CULTURE_LAYOUT_FOOTER,
          CULTURE_THAN_TRANG_HOME: CULTURE_THAN_TRANG_HOME,
          CULTURE_HEADER_HOME: CULTURE_HEADER_HOME,
          CULTURE_HOME_MB: CULTURE_HOME_MB,
          FOOTER_MB: FOOTER_MB


        }
        return banners;
      } else {
        throw new Error('Failed to fetch banners');
      }
    } catch (err) {
      console.error('Error fetching banners:', err);
      throw err;  // Rethrow to let handling be done by `useAsyncData`
    }
  }

  const getZonesByTypeDichVu = async () => {
    let type = 1;
    if (_cultureCode) {
      const url = `${uri}/api/Zones/GetZoneByType`;
      const data = { type: type, cultureCode: _cultureCode };
      try {
        const response = await axios.post(url, data)
        if (response.data) {
          let _response = response.data.filter(r => r.parentId > 0 && r.level == 1);
          return _response;
        }
      } catch (err) {
        console.error('Error fetching banners:', err);
        throw err;  // Rethrow to let handling be done by `useAsyncData`
      }
    }

  }

  const getZonesByTypeDiemDen = async () => {
    let type = 5;
    if (_cultureCode) {
      const url = `${uri}/api/Zones/GetZoneByType`;
      const data = { type: type, cultureCode: _cultureCode };
      try {
        const response = await axios.post(url, data)

        if (response.data) {
          let _response = response.data.filter(r => r.parentId > 0);
          _response.forEach(element => {
            if (element.mapCroods) {
              let splited = element.mapCroods.split(',');
              if (splited.length == 3) {
                element.xPosition = parseFloat(splited[0])
                element.yPosition = parseFloat(splited[1])
                element.radius = parseFloat(splited[2])
              }
            }
          })
          // console.log(_response)
          return _response
        }
      } catch (err) {
        console.error('Error fetching banners:', err);
        throw err;  // Rethrow to let handling be done by `useAsyncData`
      }
    }

  }
  const getZonesByTypeKhuyenMai = async () => {
    let type = 8;
    if (_cultureCode) {
      const url = `${uri}/api/Zones/GetZoneByType`;
      const data = { type: type, cultureCode: _cultureCode };
      try {
        const response = await axios.post(url, data)
        if (response.data) {
          let _response = response.data.filter(r => r.parentId > 0);
          _response.forEach(element => {
            if (element.mapCroods) {
              let splited = element.mapCroods.split(',');
              if (splited.length == 3) {
                element.xPosition = parseFloat(splited[0])
                element.yPosition = parseFloat(splited[1])
                element.radius = parseFloat(splited[2])
              }
            }
          })
          // console.log(_response)
          return _response
        }
      } catch (err) {
        console.error('Error fetching banners:', err);
        throw err;  // Rethrow to let handling be done by `useAsyncData`
      }
    }

  }
  const getProductsInRegion = async () => {
    if (_cultureCode) {
      const url = `${uri}/api/PageHome/GetProductsInRegion`;
      const data = { cultureCode: _cultureCode };
      try {
        const response = await axios.post(url, data)
        if (response.data) {

          return response.data.filter(r => r.region.parentId > 0);
        }
      } catch (err) {
        console.error('Error fetching banners:', err);
        throw err;  // Rethrow to let handling be done by `useAsyncData`
      }
    }

  }
  const getProductsLastSeen = async () => {
    const url = `${uri}/api/PageHome/GetProductLastSeen`;

    // console.log(currentSeen.value);
    if (currentSeen.value) {
      const data = {
        ids: currentSeen.value,
        cultureCode: _cultureCode
      }
      try {
        const response = await axios.post(url, data)

        if (response.data) {
          // console.log(response.data.value);
          return response.data;
        }
      } catch (err) {

      }
    }

  }

  const getBlogsHomePage = async () => {
    let data = {
      cultureCode: _cultureCode
    }
    const url = `${uri}/api/PageHome/GetBlogsHomePage`;
    try {
      const response = await axios.post(url, data)

      if (response.data) {
        // console.log(response.data.value);
        return response.data;
      }
    } catch (err) {

    }
  }

  const getListOrRegions = async () => {
    let data = {
      parentId: 2431,
      cultureCode: _cultureCode
    }
    const url = `${uri}/api/AppHomes/GetListOfRegions`
    try {
      const response = await axios.post(url, data);
      if (response) {
        return response.data;
      }
    } catch (error) {

    }
  }
  const getListProductInRegion = async (regionId) => {
    let data = {
      regionId: regionId,
      cultureCode: _cultureCode
    }

    const url = `${uri}/api/AppHomes/GetListProductInRegion`
    try {
      const response = await axios.post(url, data);
      if (response) {
        return response.data;
      }
    } catch (error) {

    }
  }







  return { getBannerCodes, getZonesByTypeDichVu, getZonesByTypeDiemDen, getProductsInRegion, getProductsLastSeen, getBlogsHomePage, getZonesByTypeKhuyenMai, getListOrRegions, getListProductInRegion }
}
