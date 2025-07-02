import axios from "axios";
import { useI18n } from 'vue-i18n';
import { useSeenStore } from '@/stores/seenStore';
import { computed } from 'vue';
import { useRoute } from 'vue-router'

export const useDestination = () => {
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

    const getZoneById = async () => {
        const url = `${uri}/api/Zones/GetZoneDetailMinifyById`;
        let data = {
            zoneId: id.value,
            cultureCode: _cultureCode,
        };
        const response = await axios.post(url, data);
        if (response) {
            return response

        }
    }










    return { getZoneById }
}
