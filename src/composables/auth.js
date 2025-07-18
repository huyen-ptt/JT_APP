/*
const url = `${uri}/api/Auth/GetOrdersByCustomerId`;
        const data = {
            customerId: currentAuth.value.id,
            cultureCode: _cultureCode
        }
*/

import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useAuthStore } from "../stores/authStore";
// const seenStore = useSeenStore();

export const useAuth = () => {
    const route = useRoute();
    const uri = import.meta.env.VITE_API_URI;

    let _cultureCode = "";

    const { locale } = useI18n();
    const currentLanguage = locale.value;

    switch (currentLanguage) {
        case "en":
            _cultureCode = "en-US";
            break;
        case "vi":
            _cultureCode = "vi-VN";
            break;
        case "zh":
            _cultureCode = "zh-CN";
            break;
        case "ko":
            _cultureCode = "ko-KR";
            break;
        case 'ru':
            _cultureCode = 'ru-RU';
            break;
    }

    const onLogin = async (data) => {
        const url = `${uri}/api/Auth/DoLogin`;
        const response = await axios.post(url, data);
        if (response) {
            return response;
        }
    };
    const onLogout = async (data) => { };
    const onChangePassword = async (data) => {
        const url = `${uri}/api/Auth/ChangePassword`;
        const response = await axios.post(url, data);
        if (response) {
            return response;
        }
    };

    const onSignUp = async (data) => {
        const url = `${uri}/api/Auth/DoSignUp`;
        const response = await axios.post(url, data);
        if (response) {
            return response;
        }
    };
    const DeleteAccount = async (data) => {
        const url = `${uri}/api/Auth/DeleteAccount`;
        const response = await axios.post(url, data);
        if (response) {
            return response;
        }
    };
    const onForgotPassword = async (data) => {
        var dataSubmit = { ...data, culture_code: _cultureCode }
        const url = `${uri}/api/Auth/ForgotPassword`;
        const response = await axios.post(url, dataSubmit);
        if (response) {
            return response;
        }
    };

    return { onLogin, onLogout, onChangePassword, onSignUp, onForgotPassword, DeleteAccount };
};
