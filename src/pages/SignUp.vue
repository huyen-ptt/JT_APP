<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center p-4 signin">
    <div class="w-100" style="max-width: 400px;">
      <div class="text-center text-white mb-8">
        <h1 class="title-sign">Sign Up</h1>
        <p class="des pb-4">Login in to join Joysme and discover the sweetness of joy</p>
      </div>

      <div class="login bg-white p-4 shadow-lg">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="mb-3">
            <label for="email" class="form-label title-con">Email Address</label>
            <input id="email" type="email" placeholder="Your email address" v-model="email"
              class="form-control rounded-3 input-login" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label title-con">Phone number</label>
            <input id="phone" type="number" placeholder="Your phone number" class="form-control rounded-3 input-login"
              required />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label title-con">Password</label>
            <div class="position-relative">
              <input id="password" :type="showPassword ? 'text' : 'password'" placeholder="Your password"
                v-model="password" class="form-control rounded-3 input-login" required />

            </div>
            <div class="d-flex justify-content-end">
              <div class="form-check pt-4">
                <input class="form-check-input" type="checkbox" id="consentCheckbox">
                <label class="form-check-label consent-text title-con" for="consentCheckbox">
                  By selecting the checkbox, you agree to the
                  <a href="#" class="fogot-pass">Privacy Policy</a> &
                  <a href="#" class="fogot-pass">Terms & Conditions</a>
                </label>
              </div>
            </div>
          </div>

          <button type="submit" class="w-100 btn btn-lg btn-login">Sign Up</button>

          <div class="text-center text-muted small pt-3 input-login">
            Already have account? <router-link to="/signin" class="text-primary fw-medium fogot-pass">Sign
              In</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Reactive state for form fields
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const router = useRouter()

// Toggle password visibility
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// Handle form submission
const handleSubmit = () => {
  // Add login logic here (e.g., API call)
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  // Navigate to another route if needed
  router.push('/dashboard') // Example: navigate to the dashboard page
}
</script>

<style scoped>
/* Add any custom styling here */
</style>
