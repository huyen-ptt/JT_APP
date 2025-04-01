<template>
  <router-view/>
</template>
<script scope>
import { StatusBar } from '@capacitor/status-bar';
import { RouterLink, useRouter } from 'vue-router'

StatusBar.setOverlaysWebView({ overlay: true }); // Cho nội dung tràn lên StatusBar
StatusBar.setBackgroundColor({ color: 'transparent' }); // Làm trong suốt



import { App as CapacitorApp } from '@capacitor/app';
import axios from 'axios';

const router = useRouter(); // chỉ nếu dùng trong setup()


CapacitorApp.addListener('appUrlOpen', async (data) => {
  try {
    const url = new URL(data.url); // ví dụ: joytime://payment-result?vpc_Message=Success&...
    
    if (url.host === 'payment-result') {
      const params = {};
      for (const [key, value] of url.searchParams.entries()) {
        params[key] = value;
      }

      const orderInfo = params.vpc_OrderInfo;

      const res = await axios.get(`https://stagingapi.joytime.vn/api/PageOrder/ResultPaymentOnePayApp/en/${orderInfo}`, {
        params
      });

      console.log('✅ Thanh toán thành công:', res.data);

      // Chuyển sang trang hiển thị kết quả
      router.push({ name: 'PaymentResult', query: params });
    }
  } catch (err) {
    console.error('❌ Lỗi xử lý thanh toán:', err);
  }
});

</script>