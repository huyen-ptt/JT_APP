<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center p-4 signin">
    <div class="w-100" style="max-width: 400px;">
      <div class="text-center text-white mb-8">
        <h1 class="title-sign">{{ $t('title_dki') }}</h1>
        <p class="des pb-4">{{ $t('description_login') }}</p>
      </div>

      <div class="login bg-white p-4 shadow-lg">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="mb-3">
            <label for="email" class="form-label title-con">{{ $t('emailLabel_login') }}</label>
            <input id="email" type="email" :placeholder="$t('emailPlaceholder_login')" v-model="email"
              class="form-control rounded-3 input-login" required />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label title-con">{{ $t('phoneLabel_dki') }}</label>
            <input id="phone" type="number" :placeholder="$t('phonePlaceholder_dki')"
              class="form-control rounded-3 input-login" required />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label title-con">{{ $t('passwordLabel_login') }}</label>
            <div class="position-relative">
              <input id="password" :type="showPassword ? 'text' : 'password'"
                :placeholder="$t('passwordPlaceholder_login')" v-model="password"
                class="form-control rounded-3 input-login" required />
            </div>
            <div class="d-flex justify-content-end">
              <div class="form-check pt-4">
                <input class="form-check-input" type="checkbox" id="consentCheckbox">
                <label class="form-check-label consent-text title-con" for="consentCheckbox">
                  {{ $t('consentText_dki') }}
                  <RouterLink href="/csdk" class="fogot-pass">{{ $t('Policies_And_Terms') }}</RouterLink>
                </label>
              </div>
            </div>
          </div>

          <button type="submit" class="w-100 btn btn-lg btn-login">{{ $t('signupButton_dki') }}</button>

          <div class="text-center text-muted small pt-3 input-login">
            {{ $t('alreadyAccount_dki') }}
            <router-link to="/signin" class="text-primary fw-medium fogot-pass">{{ $t('title_login') }}</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/auth'
import { useAuthStore } from '../stores/authStore';

// Reactive state for form fields
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const router = useRouter()
const authStore = useAuthStore()
const authComposable = useAuth();

// Toggle password visibility
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// Handle form submission
const  handleSubmit = async () => {
  const data = {
    email: email.value,
  password: password.value,
  };
  try {
    const response = await authComposable.onSignUp(data);
    console.log("response ==>",response.data);
    router.push('/signin');
  } catch (error) {
    console.error('ERROR:', error);
  }
}
</script>

<style scoped>
.form-control {
    background-color: #f1f1f1 !important;

}
</style>
