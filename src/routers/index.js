import { createWebHistory, createRouter } from "vue-router";
import Home from '@/pages/Home.vue';
import Search from '@/pages/Search.vue';
import Product from '@/pages/Product.vue';
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
        path: "/product",
        name: "Product",
        component: Product,
    },
    {
        path: "/detail-product",
        name: "ProductDetail",
        component: ProductDetail,
    },
    {
        path: "/list-search",
        name: "ListSearch",
        component: ListSearch,
    },
    {
        path: "/destination",
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
        path: "/promotion-detail",
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
        path: "/forgot",
        name: "ForgotPassword",
        component: ForgotPassword,
    },
    {
        path: "/successpw",
        name: "SuccessPword",
        component: SuccessPword,
    },
    {
        path: "/successpw",
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
        path: "/checkoutsuccess",
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
        path: "/orderdetail",
        name: "OrderDetail",  
        component: OrderDetail,
    },
  
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
});

export default router;