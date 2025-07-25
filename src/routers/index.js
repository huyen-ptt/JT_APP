import { createWebHistory, createRouter } from "vue-router";
import Home from '@/pages/Home.vue';
import Search from '@/pages/Search.vue';
import ListResults from '@/pages/ListResults.vue';
import ProductDetail from '@/pages/ProductDetail.vue';
import ListSearch from '@/pages/ListSearch.vue';
import Destination from '@/pages/Destination.vue';
import ForgotPassword from '@/pages/ForgotPassword.vue';
import Booking from '@/pages/Booking.vue';
import Promotion from '@/pages/Promotion.vue';
import PromotionDetail from '@/pages/PromotionDetail.vue';
import Blog from '@/pages/Blog.vue';
import BlogDetail from '@/pages/BlogDetail.vue';
import SignIn from '@/pages/SignIn.vue';
import SignUp from '@/pages/SignUp.vue';
import SuccessPword from '@/pages/SuccessPword.vue';
import Account from '@/pages/Account.vue';
import UpdatePw from '@/pages/UpdatePw.vue';
import Languages from '@/pages/Languages.vue';
import Currency from '@/pages/Currency.vue';
import Cart from '@/pages/Cart.vue';
import Checkout from '@/pages/Checkout.vue';
import CheckoutSuccess from '@/pages/CheckoutSuccess.vue';
import Introduce from '@/pages/Introduce.vue';
import Contact from '@/pages/Contact.vue';
import Faqs from '@/pages/Faqs.vue';
import BecomePartner from '@/pages/Become-a-partner.vue';
import MyOrder from '@/pages/MyOrder.vue';
import OrderDetail from '@/pages/OrderDetail.vue';
import csdk from '@/pages/csdk.vue';
import Onboarding from '@/pages/Onboarding.vue';
import OnboardingT1 from '@/pages/OnboardingT1.vue';
import ChatBox from '@/pages/ChatBox.vue';
import LanguagesOnboading from '@/pages/LanguagesOnboading.vue';
import  Notification from '@/pages/Notification.vue';


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
    {
        path: "/list-results",
        name: "ListResults",
        component: ListResults,
    },
    {
        path: "/detail-product/:id",
        name: "ProductDetail",
        component: ProductDetail,
    },
    {
        path: "/list-search",
        name: "ListSearch",
        component: ListSearch,
    },
    {
        path: "/destination/:id",
        name: "Destination",
        component: Destination,
    },
    {
        path: "/booking",
        name: "Booking",
        component: Booking,
    },
    {
        path: "/promotion",
        name: "Promotion",
        component: Promotion,
    },
    {
        path: "/promotion-detail/:id",
        name: "PromotionDetail",
        component: PromotionDetail,
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
    },
    {
        path: "/blog-detail/:id",
        name: "BlogDetail",
        component: BlogDetail,
    },
    {
        path: "/signin",
        name: "SignIn",
        component: SignIn,
    },
    {
        path: "/sign-up",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
    },
    {
        path: "/successpw",
        name: "SuccessPword",
        component: SuccessPword,
    },
    {
        path: "/account",
        name: "Account",
        component: Account,
    },
    {
        path: "/updatepw",
        name: "UpdatePw",
        component: UpdatePw,
    },
    {
        path: "/languages",
        name: "Languages",
        component: Languages,
    },
    {
        path: "/languagesonboading",
        name: "LanguagesOnboading",
        component: LanguagesOnboading,
    },
    {
        path: "/currency",
        name: "Currency",
        component: Currency,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
    },
    {
        path: "/confirm/payment/success",
        name: "CheckoutSuccess",
        component: CheckoutSuccess,
    },
    {
        path: "/introduce",
        name: "Introduce",
        component: Introduce,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/faqs",
        name: "Faqs",
        component: Faqs,
    },
    {
        path: "/becomeapartner",
        name: "BecomePartner",
        component: BecomePartner,
    },
    {
        path: "/myorder",
        name: "MyOrder",
        component: MyOrder,
    },
    {
        path: "/orderdetail/:id/:code",
        name: "OrderDetail",
        component: OrderDetail,
    },
    {
        path: "/csdk",
        name: "csdk",
        component: csdk,
    },
    {
        path: "/onboarding",
        name: "Onboarding",
        component: Onboarding,
    },
    {
        path: "/onboarding1",
        name: "OnboardingT1",
        component: OnboardingT1,
    },
    {
        path: "/chat",
        name: "ChatBox",
        component: ChatBox,
    },
     {
        path: "/notification",
        name: "Notification",
        component: Notification,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
     scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 }
  }
});
router.beforeEach((to, from, next) => {
  const hasSeen = localStorage.getItem('hasSeenOnboarding') === 'true'

  if (!hasSeen) {
    if (to.path !== '/languagesonboading' && to.path !== '/onboarding1') {
      // Truy cập đầu tiên thì luôn đưa về trang chọn ngôn ngữ
      return next('/languagesonboading')
    }

    // Đã ở onboarding flow thì cho đi tiếp
    return next()
  }

//   // Đã xem rồi, mà vẫn vào lại onboarding => redirect về home
//   if (hasSeen && (to.path === '/languagesonboading' || to.path === '/onboarding1')) {
//     return next('/')
//   }

  // Bình thường
  return next()
})
export default router;