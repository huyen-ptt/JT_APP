import Swal from "sweetalert2";
import { App } from "@capacitor/app";
import { useI18n } from "vue-i18n";


export async function checkAppVersion() {
  const { t } = useI18n();

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URI}/api/App/GetVersion`);
    if (!res.ok) throw new Error("Không lấy được version từ server");

    const data = await res.json();
    const serverVersion = data.version;
    const isForceUpdate = data.isForceUpdate;
    const updateUrl = data.updateUrl;

    const localVersion = import.meta.env.VITE_APP_VERSION;

    console.log("👉 Phiên bản server:", serverVersion);
    console.log("👉 Phiên bản local :", localVersion);

    if (serverVersion !== localVersion) {
      // Mở popup thông báo
      await Swal.fire({
        icon: "warning",
        title: t("FORCE_UPDATE"),
        confirmButtonText: t("OK"),
        allowOutsideClick: false,
        allowEscapeKey: false,
        width: 340,
      });

      // Sau khi bấm OK -> thoát app
      await App.exitApp();
    } else {
      // console.log(t("up_to_date"));
    }
  } catch (err) {
    console.error("❌ Lỗi kiểm tra version:", err);
  }
}

