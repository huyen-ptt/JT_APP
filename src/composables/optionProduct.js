import axios from "axios";
import { useI18n } from 'vue-i18n';
import { useSeenStore } from '@/stores/seenStore';
import { computed } from 'vue';
import { useRoute } from 'vue-router'

export const useOptionProduct = () => {
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

    const id = computed(() => route.params.id);
    console.log(id.value);

    const onLoadPriceOption = async (id) => {
        const url = `${uri}/api/PageProduct/GetProductPriceOptions`;

        let data = {
            id: id,
            cultureCode: _cultureCode,
        };
        const response = await axios.post(url, data);
        if (response) {
            return response

        }
    }
    // const onLoadPriceOption = async (id) => {
    //     try {
    //         const url = `${uri}/api/PageProduct/GetProductPriceOptions`;
    //         const data = { id: id.value, cultureCode: _cultureCode };
    //         const response = await axios.post(url, data);

    //         if (response && response.data) {
    //             const options = response.data;

    //             if (options.length > 0) {
    //                 const _first = options[0];
    //                 if (_first && _first.combinations) {
    //                     _first.combinations.forEach((v) => {
    //                         let _zoneList = v.zoneList.split(",").map(Number);
    //                         avalibleCombinations.value.push(_zoneList);
    //                     });
    //                 }
    //             }

    //             currentProductOptions.value = options.map(r => ({
    //                 ...r,
    //                 isSelected: false,
    //                 isFirstLoad: true
    //             }));

    //             if (currentProductOptions.value.length > 0) {
    //                 const _first = currentProductOptions.value[0];
    //                 const combinations = _first.combinations || [];

    //                 currentConvertedZoneList.value = combinations.map(element => {
    //                     element.convertedZoneList = element.zoneList.split(",").map(Number);
    //                     return element.convertedZoneList;
    //                 });

    //                 currentCombinations.value = combinations;
    //             }

    //             currentProductOptions.value.forEach((element) => {
    //                 if (element.zoneChilds) {
    //                     element.zoneChilds.forEach((c) => {
    //                         c.bgDisable = false;
    //                     });
    //                 }
    //             });
    //         }
    //     } catch (error) {
    //         console.error("Error loading price options:", error);
    //     }
    // };


    return { onLoadPriceOption }
}
