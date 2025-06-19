// notification-socket.js
import * as signalR from "@microsoft/signalr";

let connection = null;

export function connectToNotificationHub(email, onMessage) {
  if (!email || connection) return;

  connection = new signalR.HubConnectionBuilder()
    .withUrl(`${import.meta.env.VITE_CMS_URI}/notificationhub?email=${encodeURIComponent(email)}`)
    .configureLogging(signalR.LogLevel.Information)
    .withAutomaticReconnect()
    .build();

  connection.on("ReceiveNotification", (message) => {
    onMessage?.(message);
  });

  connection.start()
    .then(() => console.log("✅ SignalR connected"))
    .catch((err) => {
      console.error("❌ SignalR error:", err);
      connection = null;
    });
}

export function disconnectNotificationHub() {
  if (connection) {
    connection.stop();
    connection = null;
  }
}
