// import { format } from 'date-fns';
import { format } from 'date-fns';

export const useHelper = () => {
  const uri = import.meta.env.VITE_IMAGE_BASE_URL;
  const _cultureCode = 'vi-VN';

  // const getImageCMS = (url) => {
  //   return `${runtimeConfig.public.imageBaseUrl}${url}`
  // }
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
    if(date){
      return format(new Date(date), 'dd/MM/yyyy');
    }
    
  }
  const getWeatherIcon = (weatherCode, isDay) => {
    const weatherArray = [
      {
        code: 0,
        iconDay: "http://openweathermap.org/img/wn/01d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/01n@2x.png"
      },
      {
        code: 1,
        iconDay: "http://openweathermap.org/img/wn/01d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/01n@2x.png"
      },
      {
        code: 2,
        iconDay: "http://openweathermap.org/img/wn/02d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/02n@2x.png"
      },
      {
        code: 3,
        iconDay: "http://openweathermap.org/img/wn/03d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/03n@2x.png"
      },
      {
        code: 45,
        iconDay: "http://openweathermap.org/img/wn/50d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/50n@2x.png"
      },
      {
        code: 48,
        iconDay: "http://openweathermap.org/img/wn/50d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/50n@2x.png"
      },
      {
        code: 51,
        iconDay: "http://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 53,
        iconDay: "http://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 55,
        iconDay: "http://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 56,
        iconDay: "http://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 57,
        iconDay: "http://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 61,
        iconDay: "http://openweathermap.org/img/wn/10d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/10n@2x.png"
      },
      {
        code: 63,
        iconDay: "http://openweathermap.org/img/wn/10d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/10n@2x.png"
      },
      {
        code: 65,
        iconDay: "http://openweathermap.org/img/wn/10d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/10n@2x.png"
      },
      {
        code: 66,
        iconDay: "http://openweathermap.org/img/wn/10d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/10n@2x.png"
      },
      {
        code: 67,
        iconDay: "http://openweathermap.org/img/wn/10d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/10n@2x.png"
      },
      {
        code: 71,
        iconDay: "http://openweathermap.org/img/wn/13d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/13n@2x.png"
      },
      {
        code: 73,
        iconDay: "http://openweathermap.org/img/wn/13d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/13n@2x.png"
      },
      {
        code: 75,
        iconDay: "http://openweathermap.org/img/wn/13d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/13n@2x.png"
      },
      {
        code: 77,
        iconDay: "http://openweathermap.org/img/wn/13d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/13n@2x.png"
      },
      {
        code: 80,
        iconDay: "http://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 81,
        iconDay: "http://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 82,
        iconDay: "http://openweathermap.org/img/wn/09d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/09n@2x.png"
      },
      {
        code: 85,
        iconDay: "http://openweathermap.org/img/wn/13d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/13n@2x.png"
      },
      {
        code: 86,
        iconDay: "http://openweathermap.org/img/wn/13d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/13n@2x.png"
      },
      {
        code: 95,
        iconDay: "http://openweathermap.org/img/wn/11d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/11n@2x.png"
      },
      {
        code: 96,
        iconDay: "http://openweathermap.org/img/wn/11d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/11n@2x.png"
      },
      {
        code: 99,
        iconDay: "http://openweathermap.org/img/wn/11d@2x.png",
        iconNight: "http://openweathermap.org/img/wn/11n@2x.png"
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

  return { getImageCMS, getCultureByCode, formatNumberAsK, formatISODate, getImageThumbCMS, getWeatherIcon, convertDateString }
}
