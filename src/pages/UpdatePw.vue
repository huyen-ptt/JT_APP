<template>
    <div class=" forgot-password-container">
        <HeaderTitle :title="$t('UPDATE_PASSWORD_ACCOUNT')"></HeaderTitle>
        <div class="container">
            <div class="form-container">

                <div class="mb-3">
                    <label class="form-label title-con">{{ $t('Current_Password_Label_UD') }}</label>
                    <input type="password" class="form-control input-login" v-model="oldPassword"
                        :placeholder="$t('Current_Password_Placeholder_UD')" />
                        <small class="error-message" v-if="totalValid == false && !oldPassword">{{$t('CONFIRM_PASSWORD_REQUIRED')}}</small>
                </div>

                <div class="mb-3">
                    <label class="form-label title-con">{{ $t('New_Password_Label_UD') }}</label>
                    <input type="password" class="form-control input-login" v-model="password"
                        :placeholder="$t('New_Password_Placeholder_UD')" />
                        <small class="error-message" v-if="totalValid == false && !password">{{$t('CONFIRM_PASSWORD_REQUIRED')}}</small>
                </div>

                <div class="mb-3">
                    <label class="form-label title-con">{{ $t('Confirm_Password_Label_UD') }}</label>
                    <input type="password" class="form-control input-login" v-model="confirmPassword"
                        :placeholder="$t('Confirm_Password_Placeholder_UD')" />
                    <small class="error-message" v-if="totalValid == false && !confirmPassword">{{$t('CONFIRM_PASSWORD_REQUIRED')}}</small>
                    <small class="error-message" v-if="totalValid == false && password !== confirmPassword && confirmPassword">{{$t('CONFIRM_PASSWORD_MUST_SAME_PASSWORD')}}</small>
                </div>

            </div>

            <div class="bottom-menu menu-search bo-goc">
                <a @click="onChangePassword()" class="btn-search">
                    <button class="search-button btn-search" id="search">
                        {{ $t('Update_Password_Button_UD') }}
                    </button>
                </a>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref, onBeforeMount, onMounted, computed, onUnmounted } from "vue";

import HeaderTitle from '../components/HeaderTitle.vue';
import { useAuthStore } from '../stores/authStore';
import { useI18n } from 'vue-i18n'
import { useHelper } from "../composables/helper";
import { RouterLink, useRouter } from 'vue-router'
import { useAuth } from '../composables/auth';
const { locale, t } = useI18n();


const authComposable = useAuth();

const router = useRouter()
const authStore = useAuthStore();
const currentAuth = computed(() => authStore.auth);


const oldPassword = ref('');
const password = ref('');
const confirmPassword = ref('');

const totalValid = ref(true);

const onValidate = () => {
    if(!oldPassword.value) totalValid.value = false;
    if(!password.value) totalValid.value = false;
    if(!confirmPassword.value) totalValid.value = false;

    totalValid.value = true;
}

const onChangePassword = async () => {
    onValidate();
    if(totalValid.value){
        let data = {
            email: currentAuth.value.email,
            password: password.value,
            oldPassword: oldPassword.value

        }
        const response = await authComposable.onChangePassword(data);
        if(response){
            if(response.data.status == 'success'){
                alert(t(`CHANGE_PASSWORD_SUCCESS!`))
                router.push(`/account`)
            }
            
        }
    }
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