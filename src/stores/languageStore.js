// Example using Composition API
import { defineStore } from "pinia";
import { ref } from "vue";
import { useI18n } from 'vue-i18n';


export const useLanguageStore = defineStore(
  "language",
  () => {
    
    const { locale, setLocale } = useI18n();

    const language = ref({ code: 'en-US',i18Code: 'en', name: 'English', flag: '/images/flags/en.svg' });
    const changeLanguage = (lang) => {
      language.value = lang;
      const i18Code = lang.i18Code;
      // setLocale(i18Code)
      // alert(locale)
      // this.$i18n.locale = i18Code;
    };
    const loadDefaulLanguage = () => {
      if(language.value){

        const i18Code = language.value.i18Code;
        // setLocale(i18Code);
      }
      else{
        // setLocale('en');
      }

    }
    return { language, changeLanguage, loadDefaulLanguage };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
