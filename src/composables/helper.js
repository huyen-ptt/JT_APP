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

  return { getImageCMS, getCultureByCode, formatNumberAsK, formatISODate, getImageThumbCMS }
}
