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
    LATEST_NEWS: "Latest News",
    READ_LESS: "Read less",
    tips: "Tips",

    READ_MORE: "Read more",
    VIEW_All: "View All",
    BOOKED: "Booked",
    PRODUCT_DETAIL: "Product detail",
    DESCRIPTION: "Description",
    TERM_AND_CONDITIONS: "Terms and conditions",
    YOU_MIGHT_ALSO_LIKE: "You might also like",
    BUY_NOW: "Buy Now",
    ALL: "All",
    PROMOTION: "Promotion",
    TOP_TRENDS: "Top Trends",
    RECENTLY_VIEWED: "Recently Viewed",
    IDEAL_DESTINATION: "Ideal Destination"

  },
  vi: {
    tips: "Mẹo",

    welcome: 'Chào mừng bạn đến với ứng dụng của chúng tôi!',
    greet: 'Xin chào, {name}!',
    clear_all: "Xóa tất cả",
    search: "Tìm kiếm",
    budget: "Lọc theo ngân sách",
    place_to_go: "Nơi bạn muốn đến...",
    VIEW_ALL: "Xem tất cả",
    home: "Trang chủ",
    promotion: "Khuyến mãi",
    service: "Dịch vụ",
    blog: "Blog",
    account: "Tài khoản",
    VIEW_DETAIL: "Xem chi tiết",
    TRAVEL_SUPPORT: "Hỗ trợ du lịch",
    LATEST_NEWS: "Tin tức mới nhất",
    READ_LESS: "Thu gọn",
    READ_MORE: "Xem thêm",
    BOOKED: "Đã đặt",
    PRODUCT_DETAIL: "Chi tiết sản phẩm",
    DESCRIPTION: "Mô tả",
    TERM_AND_CONDITIONS: "Điều khoản và điều kiện",
    YOU_MIGHT_ALSO_LIKE: "Bạn có thể thích",
    BUY_NOW: "Mua ngay",
    ALL: "Tất cả",
    PROMOTION: "Khuyến mãi",
    TOP_TRENDS: "Xu hướng hàng đầu",
    RECENTLY_VIEWED: "Đã xem gần đây",
    IDEAL_DESTINATION: "Điểm đến lý tưởng"



  },
  ko: {
    tips: "팁",

    welcome: "우리 애플리케이션에 오신 것을 환영합니다!",
    greet: "안녕하세요, {name}!",
    clear_all: "모두 지우기",
    search: "검색",
    VIEW_ALL: "전체 보기",
    budget: "예산",
    place_to_go: "갈 곳...",
    home: "홈",
    promotion: "프로모션",
    service: "서비스",
    blog: "블로그",
    account: "계정",
    VIEW_DETAIL: "상세 보기",
    TRAVEL_SUPPORT: "여행 지원",
    LATEST_NEWS: "최신 뉴스",
    READ_LESS: "간략히 보기", 
    READ_MORE: "더 보기",
    BOOKED: "예약됨",
    PRODUCT_DETAIL: "제품 상세정보",
    DESCRIPTION: "설명",
    TERM_AND_CONDITIONS: "이용약관",
    YOU_MIGHT_ALSO_LIKE: "함께 보면 좋은 상품",
    BUY_NOW: "지금 구매하기",
    ALL: "전체",
    PROMOTION: "프로모션",
    TOP_TRENDS: "인기 트렌드",
    RECENTLY_VIEWED: "최근 본 항목",
    IDEAL_DESTINATION: "이상적인 여행지"
  },
  zh: {
    tips: "提示",

    VIEW_ALL: "查看全部",
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
    READ_LESS: "收起",
    READ_MORE: "展开更多",
    account: "账户",
    VIEW_DETAIL: "查看详情",
    TRAVEL_SUPPORT: "旅行支持",
    LATEST_NEWS: "最新消息",
    BOOKED: "已预订",
    PRODUCT_DETAIL: "产品详情",
    DESCRIPTION: "描述",
    TERM_AND_CONDITIONS: "条款和条件",
    YOU_MIGHT_ALSO_LIKE: "你可能还喜欢",
    BUY_NOW: "立即购买",
    ALL: "全部",
    PROMOTION: "促销",
    TOP_TRENDS: "热门趋势",
    RECENTLY_VIEWED: "最近浏览",
    IDEAL_DESTINATION: "理想目的地"
  }
}

const i18n = createI18n({
  legacy: false, // Tắt chế độ cũ (options API)
  locale: 'en',  // Ngôn ngữ mặc định
  messages,      // Các thông điệp ngôn ngữ
})

export default i18n
