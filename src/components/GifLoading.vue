<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  width: 40px;
  height: 40px;
  border: 5px solid #ddd;
  border-top: 5px solid #3eaf7c; /* màu chính */
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: auto;
}


@keyframes spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
