import { format } from 'date-fns';

export const useHelper = () => {
  const runtimeConfig = useRuntimeConfig();
  const uri = runtimeConfig.public.apiBaseUrl;
  const _cultureCode = 'vi-VN';

  // const getImageCMS = (url) => {
  //   return `${runtimeConfig.public.imageBaseUrl}${url}`
  // }
  const getImageCMS = (url) => {
    // Đảm bảo rằng ảnh có định dạng `.webp`
    const webpUrl = url.replace(/\.[^/.]+$/, ".webp");
    return `${runtimeConfig.public.imageBaseUrl}${webpUrl}`;
  }
  // const getImageThumbCMS = (url) => {
  //   return `${runtimeConfig.public.imageBaseUrlThumbnail}${url}`
  // }
  const getImageThumbCMS = (url) => {
    // Đảm bảo rằng ảnh có định dạng `.webp`
    const webpUrl = url.replace(/\.[^/.]+$/, ".webp");
  return `${runtimeConfig.public.imageBaseUrl}${webpUrl}`;
  }
  const getCultureByCode = (cultures, code, isHtml) => {
    const finded = cultures.find(r => r.title == code)
      if (finded) {
        if (isHtml) {
          return finded.description;
        } else {
          return finded.description.replace(/<\/?[^>]+(>|$)/g, "");
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
      return format(new Date(date), 'dd/MM/yyyy HH:mm:ss');
    }
    
  }

  return { getImageCMS, getCultureByCode, formatNumberAsK, formatISODate, getImageThumbCMS }
}
