// import { format } from 'date-fns';
import { format } from 'date-fns';
import { useI18n } from 'vue-i18n'

export const useHelper = () => {
  const uri = import.meta.env.VITE_IMAGE_BASE_URL;
  const { locale, t } = useI18n();

  const _cultureCode = 'vi-VN';

  // const getImageCMS = (url) => {
  //   return `${runtimeConfig.public.imageBaseUrl}${url}`
  // }

  const getPlatformInfo = () => {
    const ua = navigator.userAgent || '';
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    let androidVersion = 0;
    if (isAndroid) {
      const versionMatch = ua.match(/Android\s([\d.]+)/);
      androidVersion = versionMatch ? parseFloat(versionMatch[1]) : 0;
    }

    return {
      isAndroid,
      isIOS,
      androidVersion,
      isAndroid15Plus: isAndroid && androidVersion >= 15,
      isAndroidBelow14: isAndroid && androidVersion > 0 && androidVersion < 14,
    };
  }


  const getImageCMS = (url) => {
    // Đảm bảo rằng ảnh có định dạng `.webp`
    const webpUrl = url.replace(/\.[^/.]+$/, ".webp");
    return `${import.meta.env.VITE_IMAGE_BASE_URL}${webpUrl}`;
  }
  // const getImageThumbCMS = (url) => {
  //   return `${runtimeConfig.public.imageBaseUrlThumbnail}${url}`
  // }
  const getImageThumbCMS = (url) => {
    // Đảm bảo rằng ảnh có định dạng `.webp`
    const webpUrl = url.replace(/\.[^/.]+$/, ".webp");
    return `${import.meta.env.VITE_IMAGE_BASE_URL}${webpUrl}`;
  }
  const getCultureByCode = (cultures, code, isHtml) => {
    const finded = cultures.find(r => r.title == code)
    if (finded) {
      if (isHtml) {
        return finded.description;
      } else {
        if (finded && typeof finded.description === 'string') {
          return finded.description.replace(/<\/?[^>]+(>|$)/g, "");
        } else {
          // Handle the case where finded or finded.description is undefined or not a string
          // For example, return an empty string or a default message
          return "";
        }
      }
    }

  }
  const formatNumberAsK = (number) => {
    // Kiểm tra nếu số nhỏ hơn 1000, trả về số đó dưới dạng chuỗi
    if (number < 1000) {
      return number.toString();
    }

    // Nếu số lớn hơn hoặc bằng 1000, định dạng nó với 'k'
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  const formatISODate = (date) => {
    if (date) {
      return format(new Date(date), 'dd/MM/yyyy');
    }

  }

  const formatDateToDateString = (date) => {
    // Danh sách tháng tương ứng với i18n key
    const monthNames = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];

    // Tách chuỗi ngày/tháng/năm
    const [dayStr, monthStr, yearStr] = date.split('/');

    // Chuyển thành số nguyên
    const day = parseInt(dayStr, 10);
    const monthIndex = parseInt(monthStr, 10) - 1; // vì tháng trong JS là 0-11

    // Trả về object theo yêu cầu
    return {
      month: t(`${monthNames[monthIndex]}`),
      day: day
    };
  };

  const setStyleOrderStatus = (orderStatus) => {
    let result = {
      bgColor: '',
      borderColor: '',
      textColor: ''
    };

    switch (orderStatus) {
      case 'TAO_MOI':
        // Xanh da trời dịu
        result = {
          bgColor: '#e6f0fa',       // nền xanh dịu
          borderColor: '#90c6f0',   // viền xanh nhạt
          textColor: '#1976d2'      // chữ xanh đậm
        };
        break;

      case 'CHAP_NHAN_DICH_VU':
        // Xanh lá cây dịu
        result = {
          bgColor: '#e7f6e9',
          borderColor: '#9ddbb1',
          textColor: '#388e3c'
        };
        break;

      case 'DA_SU_DUNG_DICH_VU':
        // Cam dịu
        result = {
          bgColor: '#fff3e0',
          borderColor: '#ffcc80',
          textColor: '#ef6c00'
        };
        break;

      case 'TU_CHOI_DICH_VU':
      case 'YEU_CAU_HUY':
      case 'DA_HUY':
        // Đỏ dịu
        result = {
          bgColor: '#fdecea',
          borderColor: '#f5c6cb',
          textColor: '#c62828'
        };
        break;

      default:
        // Trạng thái không xác định
        result = {
          bgColor: '#f0f0f0',
          borderColor: '#cccccc',
          textColor: '#666666'
        };
        break;
    }

    return result;
  };

  // Output: { month: "t('SEP')", day: 3 }

  const getWeatherIcon = (weatherCode, isDay) => {
    const weatherArray = [
      {
        code: 0,
        iconDay: "https://openweathermap.org/img/wn/01d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/01n@2x.png"
      },
      {
        code: 1,
        iconDay: "https://openweathermap.org/img/wn/01d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/01n@2x.png"
      },
      {
        code: 2,
        iconDay: "https://openweathermap.org/img/wn/02d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/02n@2x.png"
      },
      {
        code: 3,
        iconDay: "https://openweathermap.org/img/wn/03d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/03n@2x.png"
      },
      {
        code: 45,
        iconDay: "https://openweathermap.org/img/wn/50d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/50n@2x.png"
      },
      {
        code: 48,
        iconDay: "https://openweathermap.org/img/wn/50d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/50n@2x.png"
      },
      {
        code: 51,
        iconDay: "https://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 53,
        iconDay: "https://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 55,
        iconDay: "https://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 56,
        iconDay: "https://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 57,
        iconDay: "https://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 61,
        iconDay: "https://openweathermap.org/img/wn/10d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/10n@2x.png"
      },
      {
        code: 63,
        iconDay: "https://openweathermap.org/img/wn/10d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/10n@2x.png"
      },
      {
        code: 65,
        iconDay: "https://openweathermap.org/img/wn/10d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/10n@2x.png"
      },
      {
        code: 66,
        iconDay: "https://openweathermap.org/img/wn/10d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/10n@2x.png"
      },
      {
        code: 67,
        iconDay: "https://openweathermap.org/img/wn/10d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/10n@2x.png"
      },
      {
        code: 71,
        iconDay: "https://openweathermap.org/img/wn/13d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/13n@2x.png"
      },
      {
        code: 73,
        iconDay: "https://openweathermap.org/img/wn/13d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/13n@2x.png"
      },
      {
        code: 75,
        iconDay: "https://openweathermap.org/img/wn/13d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/13n@2x.png"
      },
      {
        code: 77,
        iconDay: "https://openweathermap.org/img/wn/13d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/13n@2x.png"
      },
      {
        code: 80,
        iconDay: "https://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 81,
        iconDay: "https://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 82,
        iconDay: "https://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 85,
        iconDay: "https://openweathermap.org/img/wn/13d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/13n@2x.png"
      },
      {
        code: 86,
        iconDay: "https://openweathermap.org/img/wn/13d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/13n@2x.png"
      },
      {
        code: 95,
        iconDay: "https://openweathermap.org/img/wn/11d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/11n@2x.png"
      },
      {
        code: 96,
        iconDay: "https://openweathermap.org/img/wn/11d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/11n@2x.png"
      },
      {
        code: 99,
        iconDay: "https://openweathermap.org/img/wn/11d@2x.png",
        iconNight: "https://openweathermap.org/img/wn/11n@2x.png"
      }
    ];

    let response = weatherArray.find(r => r.code == weatherCode);
    if (response) {
      console.log(response);
      if (isDay > 0) {
        return response.iconDay;
      } else {
        return response.iconNight;
      }
    }
  }
  //   function convertDateString(dateString) {
  //     // Chuyển đổi chuỗi ngày tháng từ định dạng DD/MM/YYYY sang đối tượng Date
  //     const [day, month, year] = dateString.split('/');
  //     const date = new Date(`${year}-${month}-${day}`);

  //     // Định dạng lại chuỗi ngày tháng theo yêu cầu
  //     const options = { weekday: 'short', day: '2-digit' };
  //     return date.toLocaleDateString('en-US', options).replace(',', '');
  // }
  function convertDateString(dateString) {
    // Chuyển đổi chuỗi ngày tháng từ định dạng DD/MM/YYYY sang đối tượng Date
    const [year, month, day] = dateString.split('-');
    const date = new Date(`${year}-${month}-${day}`);

    // Định dạng lại chuỗi ngày tháng theo định dạng năm-tháng-ngày
    const options = { month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-CA', options); // 'en-CA' để định dạng YYYY-MM-DD
  }

  return { getImageCMS, getCultureByCode, formatNumberAsK, formatISODate, getImageThumbCMS, getWeatherIcon, convertDateString, formatDateToDateString, setStyleOrderStatus, getPlatformInfo }
}
