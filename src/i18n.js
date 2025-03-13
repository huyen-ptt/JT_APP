import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Welcome to our application!',
    greet: 'Hello, {name}!',
    clear_all: "Clear All",
    search: "Search",
    budget: "Budget",
    place_to_go: "Place to go...",
    home: "Home",
    promotion: "Promotion",
    service: "Service",
    blog: "Blog",
    account: "Account",
    VIEW_DETAIL: "View detail",
    TRAVEL_SUPPORT: "Travel Support",
    LATEST_NEWS: "Latest News"
  },
  vi: {
    welcome: 'Chào mừng bạn đến với ứng dụng của chúng tôi!',
    greet: 'Xin chào, {name}!',
    clear_all: "Xóa tất cả",
    search: "Tìm kiếm",
    budget: "Lọc theo ngân sách",
    place_to_go: "Nơi bạn muốn đến...",

    home: "Trang chủ",
    promotion: "Khuyến mãi",
    service: "Dịch vụ",
    blog: "Blog",
    account: "Tài khoản",
    VIEW_DETAIL: "Xem chi tiết",
    TRAVEL_SUPPORT: "Hỗ trợ du lịch",
    LATEST_NEWS: "Tin tức mới nhất"




  },
  ko: {
    welcome: "우리 애플리케이션에 오신 것을 환영합니다!",
    greet: "안녕하세요, {name}!",
    clear_all: "모두 지우기",
    search: "검색",
    budget: "예산",
    place_to_go: "갈 곳...",
    home: "홈",
    promotion: "프로모션",
    service: "서비스",
    blog: "블로그",
    account: "계정",
    VIEW_DETAIL: "상세 보기",
    TRAVEL_SUPPORT: "여행 지원",
    LATEST_NEWS: "최신 뉴스"
  },
  zh: {
    welcome: "欢迎来到我们的应用程序!",
    greet: "你好, {name}!",
    clear_all: "清除全部",
    search: "搜索",
    budget: "预算",
    place_to_go: "想去的地方...",
    home: "首页",
    promotion: "促销",
    service: "服务",
    blog: "博客",
    account: "账户",
    VIEW_DETAIL: "查看详情",
    TRAVEL_SUPPORT: "旅行支持",
    LATEST_NEWS: "最新消息"
  }
}

const i18n = createI18n({
  legacy: false, // Tắt chế độ cũ (options API)
  locale: 'en',  // Ngôn ngữ mặc định
  messages,      // Các thông điệp ngôn ngữ
})

export default i18n
