import axios from "axios";
import { ref } from "vue"
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
// const seenStore = useSeenStore();


export const usePay = () => {
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
    }

    const onRequestOnepay = async (data) => {
        try {
            const url = `${uri}/api/PageOrder/ProcessPaymentOnePayApp`;
            const respone = axios.post(url, data);
            if (respone) {
                return respone;
            }
        } catch (error) {
            alert(error);
        }

    }

    const onCreateOrderResponseOnepay = async (url) => {
        try {
            const respone = axios.get(url);
            if(respone){
                return respone;
            }
        } catch (error) {
            alert(error);
        }
    }




    return { onRequestOnepay, onCreateOrderResponseOnepay }
}
