/*
const url = `${uri}/api/Auth/GetOrdersByCustomerId`;
        const data = {
            customerId: currentAuth.value.id,
            cultureCode: _cultureCode
        }
*/


import axios from "axios";
import { ref } from "vue"
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useAuthStore } from '../stores/authStore';
// const seenStore = useSeenStore();


export const useUser = () => {
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

    const onGetAllOrders = async (data) => {
        try {
            data.cultureCode = _cultureCode
            const url = `${uri}/api/Auth/GetOrdersByCustomerId`;
            const respone = axios.post(url, data);
            if (respone) {
                return respone;
            }
        } catch (error) {
            alert(error);
        }

    }

    const checkOrderByEmail = async (data) => {
        const url = `${uri}/api/Auth/CheckOrderDetailByEmail`;
        const response = await axios.post(url, data);
        if (response) {
            return response;
        }
    }

    const getOrderItemFullDetail = async (data) => {
        data.cultureCode = _cultureCode;
        const url = `${uri}/api/Auth/GetOrderItemFullDetail`
        const response = await axios.post(url, data);
        if (response) {
            return response;
        }
    }

    return { onGetAllOrders, checkOrderByEmail, getOrderItemFullDetail }
}
