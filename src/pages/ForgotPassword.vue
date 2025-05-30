<template>
    <div class="forgot-password-container">
        <HeaderTitle :title="$t('Forgot_Password')" />

        <div class="form-container m-3">
            <h1 class="form-title">{{ $t('Reset_Title_ForgotOp') }}</h1>

            <!-- Email Input -->
            <div class="mb-3">
                <label class="form-label title-con">{{ $t('Email_Label_ForgotOp') }}</label>
                <input v-model="email" type="email" class="form-control input-login"
                    :placeholder="$t('Email_Placeholder_ForgotOp')" />
                <div v-if="submitted && emailError" class="text-danger small mt-1">
                    {{ emailError }}
                </div>
            </div>

            <button type="submit" class="btn btn-continue" @click="onSubmit">
                {{ $t('Continue_Button_ForgotOp') }}
            </button>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HeaderTitle from '../components/HeaderTitle.vue'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()

const email = ref('')
const emailError = ref('')
const submitted = ref(false)

const onSubmit = () => {
    submitted.value = true
    emailError.value = ''

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email.value) {
        emailError.value = t('EMAIL_REQUIRED')
        return
    }

    if (!emailRegex.test(email.value)) {
        emailError.value = t('EMAIL_INVALID')
        return
    }

    // ✅ Nếu hợp lệ → chuyển trang
    router.push('/successpw')
}
</script>

<style scoped>
.form-container {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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