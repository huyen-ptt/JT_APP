export function initFCM(email) {
  if (!window.FirebasePlugin) {
    console.warn("FCM plugin not available");
    return;
  }

  // Lấy FCM token
  window.FirebasePlugin.getToken(function (token) {
    console.log("📱 FCM Token:", token);

    // Gửi token + email về backend
    fetch(`${import.meta.env.VITE_API_URI}/api/Notifications/SaveFcmToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        fcmToken: token
      })
    }).then(response => {
      console.log("✅ Token saved:", response.status);
    }).catch(error => {
      console.error("❌ Gửi token lỗi:", error);
    });

  }, function (error) {
    console.error("❌ Lỗi khi lấy token:", error);
  });

  // Nhận notification
  window.FirebasePlugin.onMessageReceived(function (notification) {
    console.log("📩 Notification nhận được:", notification);
    if (notification.message) {
      alert(`🔔 ${notification.title}\n${notification.body}`);
    }
  }, function (error) {
    console.error("❌ Lỗi khi nhận notification:", error);
  });
}
