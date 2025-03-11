import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Welcome to our application!',
    greet: 'Hello, {name}!',
  },
  vi: {
    welcome: 'Chào mừng bạn đến với ứng dụng của chúng tôi!',
    greet: 'Xin chào, {name}!',
  },
}

const i18n = createI18n({
  legacy: false, // Tắt chế độ cũ (options API)
  locale: 'en',  // Ngôn ngữ mặc định
  messages,      // Các thông điệp ngôn ngữ
})

export default i18n
