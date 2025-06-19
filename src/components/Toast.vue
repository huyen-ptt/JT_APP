<!-- components/ReusableToast.vue -->
<script setup>
import Swal from 'sweetalert2';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: 'success', // 'success', 'error', 'info', 'warning'
  },
  timer: {
    type: Number,
    default: 2000,
  },
  position: {
    type: String,
    default: 'center',
  },
});

// Detect if custom styling should be applied
const isTopEnd = props.position === 'top-end';

Swal.fire({
  draggable: true,
  toast: true,
  position: props.position,
  icon: props.icon,
  title: props.message,
  showConfirmButton: false,
  timer: props.timer,
  timerProgressBar: true,
  customClass: isTopEnd
    ? {
        popup: 'custom-toast-popup',
        title: 'custom-toast-title',
        icon: 'custom-toast-icon',
      }
    : {}, // No custom class if not top-end
  buttonsStyling: !isTopEnd, // Turn off styling only if custom
});
</script>

<template>
  <!-- Component không render gì, chỉ dùng để gọi toast -->
</template>

<style scoped>
.custom-toast-popup {
  background-color: #fff;
  color: #202124;
  border-radius: 12px;
  padding: 0.5rem 0.75rem; /* nhỏ hơn */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', sans-serif;
  max-width: 200px; /* tùy chọn giới hạn chiều ngang */
}

.custom-toast-title {
  font-size: 14px; /* nhỏ hơn */
  font-weight: 500;
}

.custom-toast-icon {
  font-size: 16px; /* nếu dùng icon font */
  width: 1.25rem; /* nếu icon là SVG, điều chỉnh kích thước */
  height: 1.25rem;
  color: #1a73e8;
}
</style>
