<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center p-4 signin">
    <div class="w-100" style="max-width: 400px;">
      <div class="text-center text-white mb-8">
        <h1 class="title-sign">{{ $t('title_login') }}</h1>
        <p class="des pb-4">{{ $t('description_login') }}</p>
      </div>

      <div class="login bg-white p-4 shadow-lg">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="mb-2">
            <label for="email" class="form-label title-con">{{ $t('emailLabel_login') }}</label>
            <input
              id="email"
              type="email"
              :placeholder="$t('emailPlaceholder_login')"
              v-model="email"
              class="form-control rounded-3 input-login"
              required
            />
          </div>

          <div class="mb-2">
            <label for="password" class="form-label title-con">{{ $t('passwordLabel_login') }}</label>
            <div class="position-relative">
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                :placeholder="$t('passwordPlaceholder_login')"
                v-model="password"
                class="form-control rounded-3 input-login"
                required
              />
            </div>
            <div class="d-flex justify-content-end">
              <router-link to="/forgot-password" class="small fogot-pass">{{ $t('forgotPassword_login') }}</router-link>
            </div>
          </div>

          <button type="submit" class="w-100 btn btn-lg btn-login">{{ $t('loginButton_login') }}</button>

          <div class="text-center text-muted small pt-3 input-login">
            {{ $t('noAccount_login') }} 
            <router-link to="/sign-up" class="text-primary fw-medium fogot-pass">{{ $t('signUp_login') }}</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuth } from '../composables/auth'
  import { useAuthStore } from '../stores/authStore';
  

  const authComposable = useAuth();
  // Reactive state for form fields
  const email = ref('')
  const password = ref('')
  const showPassword = ref(false)
  
  const router = useRouter()
  const authStore = useAuthStore()
  const auth = computed(() => authStore.auth);

  
  // Toggle password visibility
  const togglePassword = () => {
    showPassword.value = !showPassword.value
  }
  
  // Handle form submission
  const handleSubmit = async () => {
    const data = {
      email: email.value,
      password: password.value,
    };
    const response = await authComposable.onLogin(data);
    if(response){
      console.log(response.data);
      alert('DANG NHAP THANH CONG!');
      authStore.onChangeAuth(response.data);
      router.push('/account') // Example: navigate to the dashboard page
      // router.push('/account') // Example: navigate to the dashboard page
    }
    
  }
  </script>
  
  <style scoped>
  /* Add any custom styling here */
  </style>
  