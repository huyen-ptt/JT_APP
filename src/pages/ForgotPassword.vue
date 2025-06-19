<template>
    <div class="forgot-password-container">
        <HeaderTitle :title="$t('Forgot_Password')" />

        <div class="form-container m-3">
            <h1 class="form-title">{{ $t('Reset_Title_ForgotOp') }}</h1>

            <div class="mb-3">
                <label class="form-label title-con">{{ $t('Email_Label_ForgotOp') }}</label>
                <input v-model="email" type="email" class="form-control input-login"
                    :placeholder="$t('Email_Placeholder_ForgotOp')" />
                <div class="error-message" v-if="hasError">
                    <small>{{ $t(errorKey) }}</small>
                </div> 
            </div>

            <button type="submit" class="btn btn-continue" @click="onSubmit">
                {{ $t('Continue_Button_ForgotOp') }}
            </button>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import HeaderTitle from '../components/HeaderTitle.vue';
import Footer from '@/components/Footer.vue';
import { useI18n } from 'vue-i18n';
import { useAuth } from '../composables/auth';

const { t } = useI18n();
const router = useRouter();
const authComposable = useAuth();
const email = ref('');
const errorKey = ref('');
const hasError = ref(false);

const onSubmit = async () => {
    hasError.value = false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value) {
        errorKey.value = 'EMAIL_REQUIRED';
        hasError.value = true;  
        return;
    }

    if (!emailRegex.test(email.value)) {
        errorKey.value = 'EMAIL_INVALID';
        hasError.value = true;
        return;
    }

    // Nếu hợp lệ → gửi request
    try {
        const data = { email: email.value };
        const response = await authComposable.onForgotPassword(data);
        console.log("response ==>", response.data);
        router.push('/successpw');
    } catch (error) {
        errorKey.value = 'EMAIL_NOT_FOUND';
        hasError.value = true;
    }
};
</script>


<style scoped>
.form-container {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.btn:hover {
    background-color: #446EDE !important;
    color: #FFFFFF !important; 
}
.back-arrow {
    color: #333;
    font-size: 20px;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 15px;
}

.form-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    color: #03294C;
}


.form-control {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
}
.btn-continue {
    width: 100%;
    padding: 12px;
    background-color: #e7eaf4;
    border: none;
    border-radius: 8px;
    color: #B3BBC7;
    font-weight: 500;
}
</style>