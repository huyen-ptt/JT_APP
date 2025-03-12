import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Welcome to our application!',
    greet: 'Hello, {name}!',
    clear_all: "Clear All",
    search: "Search",
    budget: "Budget",
    place_to_go: "Place to go..."
  },
  vi: {
    welcome: 'Chào mừng bạn đến với ứng dụng của chúng tôi!',
    greet: 'Xin chào, {name}!',
    clear_all: "Xóa tất cả",
    search: "Tìm kiếm",
    budget: "Lọc theo ngân sách",
    place_to_go: "Nơi bạn muốn đến..."


  },
  ko: {
    welcome: "우리 애플리케이션에 오신 것을 환영합니다!",
    greet: "안녕하세요, {name}!",
    clear_all: "모두 지우기",
    search: "검색",
    budget: "예산",
    place_to_go: "갈 곳..."
  },
  zh: {
    welcome: "欢迎来到我们的应用程序!",
    greet: "你好, {name}!",
    clear_all: "清除全部",
    search: "搜索",
    budget: "预算",
    place_to_go: "想去的地方..."
  }
}

const i18n = createI18n({
  legacy: false, // Tắt chế độ cũ (options API)
  locale: 'en',  // Ngôn ngữ mặc định
  messages,      // Các thông điệp ngôn ngữ
})

export default i18n
