<template>
    <div class="forgot-password-container product-containerr">
        <HeaderTitle :title="$t('CONTACT_US_ACCOUNT')" />

        <div class="form-container m-3">
            <div>
                <div class="sz-big text-center">{{ $t('Joytime_CONTACT') }}</div>
                <h1 class="calendar-day-header-booking text-center">
                    {{ $t('Enter_Email_Reset_Password_CONTACT') }}
                </h1>
            </div>

            <div class="mb-3">
                <label class="form-label">
                    {{ $t('Name_CONTACT') }}<span class="required-mark">*</span>
                </label>
                <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }"
                    :placeholder="$t('Your_Name_CONTACT')" v-model="contact.name" @blur="validateField('name')" />
                <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
            </div>

            <div class="mb-3">
                <label class="form-label">
                    {{ $t('Email_CONTACT') }}<span class="required-mark">*</span>
                </label>
                <input type="email" class="form-control input-login" :class="{ 'is-invalid': errors.address }"
                    :placeholder="$t('Your_Email_CONTACT')" v-model="contact.address"
                    @blur="validateField('address')" />
                <div v-if="errors.address" class="invalid-feedback">{{ errors.address }}</div>
            </div>

            <div class="mb-3">
                <label class="form-label">
                    {{ $t('Phone_CONTACT') }}<span class="required-mark">*</span>
                </label>
                <input type="text" class="form-control" :class="{ 'is-invalid': errors.phone }"
                    :placeholder="$t('Your_Phone_CONTACT')" v-model="contact.phone" @blur="validateField('phone')" />
                <div v-if="errors.phone" class="invalid-feedback">{{ errors.phone }}</div>
            </div>

            <div class="mb-3">
                <label class="form-label">
                    {{ $t('Message_CONTACT') }}<span class="required-mark">*</span>
                </label>
                <textarea class="form-control" :class="{ 'is-invalid': errors.content }"
                    :placeholder="$t('Your_Message_CONTACT')" v-model="contact.content"
                    @blur="validateField('content')"></textarea>
                <div v-if="errors.content" class="invalid-feedback">{{ errors.content }}</div>
            </div>
        </div>

        <div class="bottom-menu menu-search bo-goc">
            <button class="search-button btn-search" :disabled="isSubmitting" @click="sendContactUs">
                {{ $t('Send_CONTACT') }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderTitle from '../components/HeaderTitle.vue';
import { useI18n } from 'vue-i18n'
import Swal from 'sweetalert2'

const { locale, t } = useI18n()



// Set culture code based on language
const currentLanguage = locale.value
let _cultureCode = ''
switch (currentLanguage) {
    case 'en': _cultureCode = 'en-US'; break
    case 'vi': _cultureCode = 'vi-VN'; break
    case 'zh': _cultureCode = 'zh-CN'; break
    case 'ko': _cultureCode = 'ko-KR'; break
    case 'ru': _cultureCode = 'ru-RU'; break
}

// Validation logic (giữ nguyên)
const validateRequired = (value) => {
    return value !== null && value !== undefined && value.trim() !== ''
}
const validatePhone = (phone) => /^[0-9]{10}$/.test(phone)
const validateEmail = (email) => /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)

const contact = ref({
    name: '',
    address: '',
    phone: '',
    content: ''
})

const errors = ref({
    name: '',
    address: '',
    phone: '',
    content: ''
})

const isSubmitting = ref(false)

const validateField = (field) => {
    errors.value[field] = ''
    switch (field) {
        case 'name':
            if (!validateRequired(contact.value.name)) errors.value.name = t('CONTACT_NAME_REQUIRED')
            break
        case 'phone':
            if (!validateRequired(contact.value.phone)) errors.value.phone = t('CONTACT_PHONE_INVALID')
            break
        case 'address':
            if (!validateRequired(contact.value.address)) {
                errors.value.address = t('CONTACT_EMAIL_REQUIRED')
            } else if (!validateEmail(contact.value.address)) {
                errors.value.address = t('CONTACT_EMAIL_INVALID')
            }
            break
        case 'content':
            if (!validateRequired(contact.value.content)) errors.value.content = t('CONTACT_MESSAGE_REQUIRED')
            break
    }
}

const validateForm = () => {
    validateField('name')
    validateField('address')
    validateField('phone')
    validateField('content')
    return !Object.values(errors.value).some(e => e !== '')
}
const uri = import.meta.env.VITE_API_URI;

const sendContactUs = async () => {
    if (!validateForm()) return

    try {
        isSubmitting.value = true
        const response = await fetch(`${uri}/api/PageContact/CreateServiceTicket`, {
            method: 'POST',
            body: JSON.stringify({
                ...contact.value,
                cultureCode: _cultureCode
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        const result = await response.json()

        if (result) {
            await Swal.fire({
                title: t('SUCCESS_CONTACT_TITLE'),
                // text: t('SUCCESS_CONTACT_DESC'),
                icon: 'success',
                 customClass: {
                title: 'swal2-small-title'
            }

            })
            window.location.reload()
        } else {
            throw new Error()
        }
    } catch {
        await Swal.fire({
            title: t('ERROR_CONTACT_TITLE'),
            icon: 'error',
             customClass: {
                title: 'swal2-small-title'
            }
        })
    } finally {
        isSubmitting.value = false
    }
}
</script>
<style scoped>
.form-label {
    font-size: 14px;
    color: #8A929E;
    margin-bottom: 6px;
}

.required-mark {
    color: #dc3545;
    margin-left: 2px;
}

.form-select,
.form-control {
    background-color: #F5F7FA;
    border: 1px solid #EDF1F7;
    border-radius: 15px !important;
    font-size: 14px;
    padding: 10px 12px;
    font-weight: 400;
    color: #8A929E;
}

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