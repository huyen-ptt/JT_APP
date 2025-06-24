import { PushNotifications } from '@capacitor/push-notifications'
import { getCurrentInstance } from 'vue'

export function initFCM(email) {
    const router = getCurrentInstance()?.appContext.config.globalProperties.$globalRouter
    if (!router) {
        console.warn("❌ Không tìm thấy router global, push không hoạt động.")
    }

    // Yêu cầu quyền nhận notification
    PushNotifications.requestPermissions().then(result => {
        if (result.receive === 'granted') {
            // Đăng ký để lấy token
            PushNotifications.register();
        }
    });

    // Nhận FCM token
    PushNotifications.addListener('registration', (token) => {
        console.log("📱 FCM Token:", token.value);

        // Gửi token + email về backend
        fetch(`${import.meta.env.VITE_API_URI}/api/Notifications/SaveFcmToken`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                fcmToken: token.value
            })
        }).then(response => {
            console.log("✅ Token saved:", response.status);
        }).catch(error => {
            console.error("❌ Gửi token lỗi:", error);
        });
    });

    // Lỗi khi đăng ký token
    PushNotifications.addListener('registrationError', (error) => {
        console.error("❌ Lỗi khi lấy token:", error);
    });

    // Khi nhận được thông báo
    PushNotifications.addListener('pushNotificationReceived', (notification) => {
        console.log("📩 Notification nhận được:", notification);
        alert(`🔔 ${notification.title}\n${notification.body}`);
    });

    // Khi user click vào notification (foreground/background)
    PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
        console.log("🔍 Clicked notification:", notification);

        const route = notification.notification?.data?.route;
        router.push('/notification');

        // if (route && router) {
        //     router.push(route); // ví dụ: /orders
        // } else if (router) {
        //     router.push('/notification');
        // }
    });
}
