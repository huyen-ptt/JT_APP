import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    Selected_Date: "Selected Date",
    Option: "Option",
    Guest: "Guest",
    become_a_partner: "Become a Partner",
    collaborate_with_us: "Collaborate with Us",
    achieve_enduring_values: "To achieve more enduring values,",
    email_us_at: "please email us at",
    enrich_trips_collaboration_tomorrow: "Enrich trips - Enrich collaboration - Enrich Tomorrow.",
    promote_growth_experiential: "Promote your growth and celebrate travelers' journeys through multicultural experiential interactions.",
    gain_access_broad_network: "Gain access to a broad network of customers",
    partners_reach_millions: "Partners on our platform can reach millions of potential customers seeking quality travel and accommodation services.",
    satisfaction_rate: "Satisfaction rate",
    wide_range_products: "Wide range of products",
    alt_people_discussing: "People discussing travel plans",
    build_travel_experiences: "Build your travel experiences",
    increase_income_guides: "Increase your income by sharing your valuable travel insights and helpful guides.",
    alt_person_mountain: "Person enjoying view from mountain",
    opportunities: "Opportunities",
    comprehensive_ecosystem: "We offer a comprehensive ecosystem of travel services with outstanding solutions to help your business grow.",
    join_affiliate_program: "Join our affiliate programme",
    earn_commissions: "You can earn attractive commissions for every booking made through your referral.",
    PRICE_FROM: "From",
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
    SHOP_NOW: "Shop now and enjoy our best deals with great discounts",
    DISCOUNT_APPLIED: "applied automatically to your items!",
    NO_ORDERS_YET: "No orders yet!",
    EXPLORE: "Explore",
    CLOSE: "Close",
    RESET_SELECTION: "Reset Selection",
    OK: "OK",
    PACKAGES: "Packages",
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
    IDEAL_DESTINATION: "Ideal Destination",
    NO_RESULTS: "No results matched",
    NO_ITEMS: "There is no item on this page, you can try to",
    TRY_ANOTHER_PAGE: "research at another page",
    SETTING_ACCOUNT: "Setting",
    MY_ORDER_ACCOUNT: "My order",
    VIEW_HISTORY_ACCOUNT: "View history",
    NEW_ACCOUNT: "New",
    READY_ACCOUNT: "Ready",
    USED_ACCOUNT: "Used",
    PENDING_ACCOUNT: "Pending",
    UPDATE_PASSWORD_ACCOUNT: "Update password",
    LANGUAGES_ACCOUNT: "Languages",
    CURRENCY_ACCOUNT: "Currency",
    ABOUT_US_ACCOUNT: "About us",
    CONTACT_US_ACCOUNT: "Contact Us",
    FAQS_ACCOUNT: "FAQs",
    LOGOUT_ACCOUNT: "Logout",
    LOG_OUT_ACCOUNT: "Log out",
    CONFIRM_SIGN_OUT_ACCOUNT: "Are you sure you want to sign out?",
    CANCEL_ACCOUNT: "Cancel",
    Adult: "Adult",
    Child: "Child",
    BOOK: "Book"

  },
  vi: {
    CLOSE: "Đóng",
    RESET_SELECTION: "Đặt lại lựa chọn",
    OK: "OK",
    PACKAGES: "Gói dịch vụ",
    Adult: "Người lớn",
    Child: "Trẻ em",
    Selected_Date: "Ngày đã chọn",
    Option: "Tùy chọn",
    Guest: "Khách",
    become_a_partner: "Trở thành đối tác",
    collaborate_with_us: "Hợp tác cùng chúng tôi",
    achieve_enduring_values: "Để đạt được những giá trị bền vững hơn,",
    email_us_at: "vui lòng gửi email cho chúng tôi tại",
    enrich_trips_collaboration_tomorrow: "Hành trình phong phú - Hợp tác phong phú - Tương lai phong phú.",
    promote_growth_experiential: "Thúc đẩy sự phát triển của bạn và cùng tôn vinh hành trình của du khách thông qua các trải nghiệm đa văn hóa.",
    gain_access_broad_network: "Tiếp cận mạng lưới khách hàng rộng lớn",
    partners_reach_millions: "Đối tác trên nền tảng của chúng tôi có thể tiếp cận hàng triệu khách hàng tiềm năng tìm kiếm dịch vụ du lịch và lưu trú chất lượng.",
    satisfaction_rate: "Tỷ lệ hài lòng",
    wide_range_products: "Danh mục sản phẩm đa dạng",
    alt_people_discussing: "Mọi người đang thảo luận về kế hoạch du lịch",
    build_travel_experiences: "Xây dựng trải nghiệm du lịch của bạn",
    increase_income_guides: "Tăng thu nhập của bạn bằng cách chia sẻ những kinh nghiệm du lịch quý giá và hướng dẫn hữu ích.",
    alt_person_mountain: "Người tận hưởng khung cảnh trên núi",
    opportunities: "Cơ hội",
    comprehensive_ecosystem: "Chúng tôi cung cấp hệ sinh thái du lịch toàn diện với các giải pháp nổi bật giúp doanh nghiệp của bạn phát triển.",
    join_affiliate_program: "Tham gia chương trình tiếp thị liên kết",
    earn_commissions: "Bạn có thể kiếm hoa hồng hấp dẫn cho mỗi lượt đặt chỗ thông qua giới thiệu của bạn.",
    tips: "Mẹo",
    PRICE_FROM: "Từ",
    NO_RESULTS: "Không có kết quả phù hợp",
    NO_ITEMS: "Không có mục nào trên trang này, bạn có thể thử",
    TRY_ANOTHER_PAGE: "tìm kiếm trên trang khác",
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
    BOOK: "Đặt",
    PRODUCT_DETAIL: "Chi tiết sản phẩm",
    DESCRIPTION: "Mô tả",
    TERM_AND_CONDITIONS: "Điều khoản và điều kiện",
    YOU_MIGHT_ALSO_LIKE: "Bạn có thể thích",
    BUY_NOW: "Mua ngay",
    ALL: "Tất cả",
    PROMOTION: "Khuyến mãi",
    TOP_TRENDS: "Xu hướng hàng đầu",
    RECENTLY_VIEWED: "Đã xem gần đây",
    IDEAL_DESTINATION: "Điểm đến lý tưởng",
    SHOP_NOW: "Mua sắm ngay và tận hưởng những ưu đãi tốt nhất với giảm giá tuyệt vời",
    DISCOUNT_APPLIED: "được áp dụng tự động cho sản phẩm của bạn!",
    NO_ORDERS_YET: "Chưa có đơn hàng nào!",
    EXPLORE: "Khám phá",
    SETTING_ACCOUNT: "Cài đặt",
    MY_ORDER_ACCOUNT: "Đơn hàng của tôi",
    VIEW_HISTORY_ACCOUNT: "Xem lịch sử",
    NEW_ACCOUNT: "Mới",
    READY_ACCOUNT: "Sẵn sàng",
    USED_ACCOUNT: "Đã sử dụng",
    PENDING_ACCOUNT: "Đang chờ",
    UPDATE_PASSWORD_ACCOUNT: "Cập nhật mật khẩu",
    LANGUAGES_ACCOUNT: "Ngôn ngữ",
    CURRENCY_ACCOUNT: "Tiền tệ",
    ABOUT_US_ACCOUNT: "Về chúng tôi",
    CONTACT_US_ACCOUNT: "Liên hệ",
    FAQS_ACCOUNT: "Câu hỏi thường gặp",
    LOGOUT_ACCOUNT: "Đăng xuất",
    LOG_OUT_ACCOUNT: "Đăng xuất",
    CONFIRM_SIGN_OUT_ACCOUNT: "Bạn có chắc chắn muốn đăng xuất không?",
    CANCEL_ACCOUNT: "Hủy"


  },
  ko: {
    tips: "팁",
    NO_RESULTS: "일치하는 결과가 없습니다",
    NO_ITEMS: "이 페이지에는 항목이 없습니다. 다음을 시도해 보세요.",
    TRY_ANOTHER_PAGE: "다른 페이지에서 검색",
    Adult: "성인",
    Child: "어린이",
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
    BOOK: "주문",
    PRODUCT_DETAIL: "제품 상세정보",
    DESCRIPTION: "설명",
    TERM_AND_CONDITIONS: "이용약관",
    YOU_MIGHT_ALSO_LIKE: "함께 보면 좋은 상품",
    BUY_NOW: "지금 구매하기",
    ALL: "전체",
    PROMOTION: "프로모션",
    TOP_TRENDS: "인기 트렌드",
    RECENTLY_VIEWED: "최근 본 항목",
    IDEAL_DESTINATION: "이상적인 여행지",
    SHOP_NOW: "지금 쇼핑하고 최고의 할인 혜택",
    DISCOUNT_APPLIED: "자동으로 적용받으세요!",
    NO_ORDERS_YET: "아직 주문이 없습니다!",
    EXPLORE: "탐색",
    PRICE_FROM: "부터",
    SETTING_ACCOUNT: "설정",
    MY_ORDER_ACCOUNT: "내 주문",
    VIEW_HISTORY_ACCOUNT: "기록 보기",
    NEW_ACCOUNT: "새로운",
    READY_ACCOUNT: "준비됨",
    USED_ACCOUNT: "사용됨",
    PENDING_ACCOUNT: "대기 중",
    UPDATE_PASSWORD_ACCOUNT: "비밀번호 업데이트",
    LANGUAGES_ACCOUNT: "언어",
    CURRENCY_ACCOUNT: "통화",
    ABOUT_US_ACCOUNT: "회사 소개",
    CONTACT_US_ACCOUNT: "문의하기",
    FAQS_ACCOUNT: "자주 묻는 질문",
    LOGOUT_ACCOUNT: "로그아웃",
    LOG_OUT_ACCOUNT: "로그아웃",
    CONFIRM_SIGN_OUT_ACCOUNT: "로그아웃 하시겠습니까?",
    CANCEL_ACCOUNT: "취소",
    become_a_partner: "파트너가 되세요",
    collaborate_with_us: "우리와 협력하세요",
    achieve_enduring_values: "더 지속 가능한 가치를 실현하기 위해,",
    email_us_at: "다음 이메일로 문의해 주세요:",
    enrich_trips_collaboration_tomorrow: "풍요로운 여행 - 풍요로운 협력 - 풍요로운 미래.",
    promote_growth_experiential: "다문화 체험을 통해 귀하의 성장을 촉진하고 여행자의 여정을 기념하세요.",
    gain_access_broad_network: "광범위한 고객 네트워크에 접근",
    partners_reach_millions: "우리 플랫폼의 파트너는 양질의 여행 및 숙박 서비스를 찾는 수백만 명의 잠재 고객에게 도달할 수 있습니다.",
    satisfaction_rate: "만족도",
    wide_range_products: "다양한 제품",
    alt_people_discussing: "여행 계획을 논의하는 사람들",
    build_travel_experiences: "여행 경험을 구축하세요",
    increase_income_guides: "소중한 여행 통찰력과 유용한 가이드를 공유하여 수입을 늘리세요.",
    alt_person_mountain: "산 경치를 즐기는 사람",
    opportunities: "기회",
    comprehensive_ecosystem: "우리는 귀하의 비즈니스 성장을 돕는 다양한 솔루션을 제공하는 종합적인 여행 생태계를 제공합니다.",
    join_affiliate_program: "제휴 프로그램에 가입하세요",
    earn_commissions: "귀하의 추천을 통해 이루어진 예약마다 매력적인 수수료를 받을 수 있습니다.",
    Selected_Date: "선택한 날짜",
    Option: "옵션",
    Guest: "손님",
    CLOSE: "닫기",
    RESET_SELECTION: "선택 초기화",
    OK: "확인",
    PACKAGES: "패키지"
  },
  zh: {
    CLOSE: "关闭",
    RESET_SELECTION: "重置选择",
    OK: "确定",
    PACKAGES: "套餐",
    Adult: "成人",
    Child: "儿童",
    Selected_Date: "选择的日期",
    Option: "选项",
    Guest: "客人",
    become_a_partner: "成为合作伙伴",
    collaborate_with_us: "与我们合作",
    achieve_enduring_values: "为了实现更持久的价值，",
    email_us_at: "请通过电子邮件联系我们：",
    enrich_trips_collaboration_tomorrow: "丰富旅行 - 丰富合作 - 丰富未来。",
    promote_growth_experiential: "促进您的成长，并通过多元文化体验互动来庆祝旅客的旅程。",
    gain_access_broad_network: "接触广泛的客户网络",
    partners_reach_millions: "我们的平台合作伙伴可以触及数百万寻求高质量旅游和住宿服务的潜在客户。",
    satisfaction_rate: "满意度",
    wide_range_products: "丰富的产品类别",
    alt_people_discussing: "人们在讨论旅行计划",
    build_travel_experiences: "建立您的旅行体验",
    increase_income_guides: "通过分享宝贵的旅行见解和实用指南来增加收入。",
    alt_person_mountain: "享受山景的人",
    opportunities: "机会",
    comprehensive_ecosystem: "我们提供完整的旅游生态系统，提供卓越的解决方案，帮助您的业务增长。",
    join_affiliate_program: "加入我们的联盟计划",
    earn_commissions: "通过您的推荐，每次成功预订您都可以获得丰厚的佣金。",
    NO_RESULTS: "没有匹配的结果",
    SETTING_ACCOUNT: "设置",
    BOOK: "下单",
    MY_ORDER_ACCOUNT: "我的订单",
    VIEW_HISTORY_ACCOUNT: "查看历史记录",
    NEW_ACCOUNT: "新建",
    READY_ACCOUNT: "已准备",
    USED_ACCOUNT: "已使用",
    PENDING_ACCOUNT: "待处理",
    UPDATE_PASSWORD_ACCOUNT: "更新密码",
    LANGUAGES_ACCOUNT: "语言",
    CURRENCY_ACCOUNT: "货币",
    ABOUT_US_ACCOUNT: "关于我们",
    CONTACT_US_ACCOUNT: "联系我们",
    FAQS_ACCOUNT: "常见问题",
    LOGOUT_ACCOUNT: "退出",
    LOG_OUT_ACCOUNT: "退出",
    CONFIRM_SIGN_OUT_ACCOUNT: "您确定要退出吗？",
    CANCEL_ACCOUNT: "取消",
    NO_ITEMS: "此页面上没有任何项目，您可以尝试",
    TRY_ANOTHER_PAGE: "在另一个页面搜索",
    tips: "提示",
    SHOP_NOW: "立即购物，享受我们的最佳优惠，超值折扣",
    DISCOUNT_APPLIED: "商品将自动应用！",
    NO_ORDERS_YET: "尚无订单！",
    EXPLORE: "探索",
    VIEW_ALL: "查看全部",
    welcome: "欢迎来到我们的应用程序!",
    greet: "你好, {name}!",
    clear_all: "清除全部",
    search: "搜索",
    budget: "预算",
    PRICE_FROM: "起",
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
