import axios from "axios";
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export const useAiBot = () => {
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
        case 'ru':
            _cultureCode = 'ru-RU';
            break;

    }

    const sendMessage = async (data) => {
        try {
            const url = "https://n8nauto.duckdns.org/webhook/af791356-2070-4d01-ac67-5ba7d166d575";
            const response = await axios.post(url, data);
            if (response) {
                return response;
            }
            else {
                return null;
            }
        } catch (error) {

        }
    }

    return { sendMessage }
}
