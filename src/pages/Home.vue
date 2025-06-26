<template>
   <div class="header-bg">
      <div class="container bao-h">
         <div class="header-container">
            <div class="search-h d-flex justify-content-between align-items-center" style="gap:12px">
               <div class="logo-container">
                  <img src="/images/1234.png" width="40" alt="JOY TIME" class="logo-img">
               </div>
               <RouterLink class="search-box-container" :to="`/search`" style="text-decoration: none;">
                  <!-- <div class="search-box-items"></div> -->
                  <img src="/images/search-normal.png" style="object-fit: cover; width: 16px;">
                  <span style="color: #8A929E; font-size: 14px;">{{ $t('place_to_go') }}</span>
               </RouterLink>
               <!-- Icons on the right -->
               <div class="icons-container gap-2 d-flex ">
                  <RouterLink to="/cart">
                     <img class="icon-cart" src="/images/shopping-cart-031.png" alt="Cart" />
                  </RouterLink>
                  <RouterLink to="/notification"> 
                     <img class="icon-cart" src="/images/tbb.png" alt="Cart" />
                  </RouterLink>
                  <!-- <img class="icon-cart " src="/images/Icon.png" /> -->
               </div>
            </div>
         </div>
         <div class="row row-cols-5 mt-4" v-if="onLoadServices">
            <div class="col s__col__item" v-for="index in 5" :key="index">
               <div class="icon-circle combo-icon flex items-center justify-center mb-2">
                  <Skeleton shape="circle" size="48px" />
               </div>
               <Skeleton width="60px" height="12px" />
            </div>
         </div>
         <div class="row row-cols-5 mt-4">
            <div class="col s__col__item" v-for="(s, index) in first4Services" :key="index">
               <a @click="onChooseService(s)" class="icon-circle combo-icon">
                  <img class="icon-services" :src="helper.getImageCMS(s.icon)" />
               </a>
               <span class="service-text">{{ s.title }}</span>
            </div>
            <div class="col s__col__item" @click="modalStore.open()">
               <div class="icon-circle all-icon">
                  <img class="icon-services" height="22" src="/images/Frame1.png" />

               </div>
               <span class="service-text">{{ $t('ALL') }}</span>
            </div>
         </div>

         <div class="mb-promotion">
            <div class="mb-container">
               <div class="promo-header">
                  <h2 class="promo-title">{{ $t('PROMOTION') }}</h2>
               </div>
               <ClientOnly>
                  <swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :loop="true" :autoplay="{
                     delay: 5000,
                     disableOnInteraction: false
                  }" :pagination="{ clickable: true }" class="promo-carousel" style="padding-bottom: 40px;">
                     <swiper-slide v-for="(p, index) in promotions" :key="index" v-if="!onLoadPromotions">
                        <RouterLink :to="`/promotion-detail/${p.id}`">
                           <img :src="helper.getImageCMS(p.avatar)" width="100%" class="img-ho" :alt="p.title" />
                        </RouterLink>
                     </swiper-slide>

                     <swiper-slide v-for="index in 5" :key="`skeleton-${index}`" v-if="onLoadPromotions">
                        <div class="">
                           <Skeleton height="160px" width="350px" borderRadius="12px" />
                        </div>
                     </swiper-slide>
                  </swiper>

               </ClientOnly>
            </div>
         </div>


         <div class="recently-container">
            <div class="recently-header">
               <h2 class="promo-title">{{ $t('TOP_TRENDS') }}</h2>
               <!-- <router-link to="/list-results" class="view-all"> {{ $t('VIEW_All') }}</router-link> -->
               <a @click="handleSearch('TOP_TRENDS')" class="view-all">
                  {{ $t('VIEW_All') }}
               </a>
            </div>
            <div class="">
               <ul class="nav nav-tabs pb-2" id="tourTabs" role="tablist" v-if="!onLoadRegions">

                  <li class="nav-item" role="presentation" v-for="r in listRegions">
                     <button class="nav-link tab-sp " :class="r.isActive == true ? 'active' : ''"
                        @click="onClickRegion(r)" type="button" role="tab">{{ r.name }}</button>
                  </li>
               </ul>
               <ul class="nav nav-tabs" id="tourTabs" role="tablist" v-if="onLoadRegions">

                  <li class="nav-item" role="presentation" v-for="r in 4" :key="r">
                     <Skeleton width="80px" height="32px" borderRadius="999px" />
                  </li>
               </ul>

               <ClientOnly>
                  <swiper :modules="[Autoplay, Pagination]" :slides-per-view="2" :loop="true" :space-between="10"
                     :autoplay="{
                        delay: 5000,
                        disableOnInteraction: false
                     }" :pagination="{ clickable: true }" style="padding-bottom: 40px;">
                     <!-- Nếu đang load: hiện skeleton -->
                     <swiper-slide v-if="onLoadingRegion" v-for="index in 2" :key="`skeleton-${index}`">
                        <ProductHomeSkeleton />
                     </swiper-slide>

                     <!-- Nếu đã load: hiện sản phẩm -->
                     <swiper-slide v-else v-for="(p, index) in listProductInRegion" :key="index">
                        <ProductSearch :product="p" />
                     </swiper-slide>
                  </swiper>
               </ClientOnly>
            </div>
         </div>
         <div class="recently-container mb-3" v-if="currentSeen.length > 0">
            <div class="recently-header">
               <h2 class="promo-title">{{ $t('RECENTLY_VIEWED') }}</h2>
               <a @click="handleSearch('RECENTLY_VIEWED')" class="view-all">
                  {{ $t('VIEW_All') }}
               </a>
            </div>
            <ClientOnly>
               <swiper :modules="[Autoplay, Pagination]" :slides-per-view="2" :space-between="16"
                  :pagination="{ clickable: true }" class="recently-carousel" style="padding-bottom: 40px;">
                  <swiper-slide v-for="product in currentSeen.slice(-5)" :key="product.productId">
                     <RouterLink :to="`/detail-product/${product.productId}`" class="tour-card1">
                        <img :src="helper.getImageCMS(product.avatar)" alt="Inter Sweet Love" class="tour-image">
                        <div class="tour-content">
                           <h3 class="tour-title">{{ product.title }}</h3>
                           <div class="tour-location tour-price">
                              <div>
                                 <span class="tour-booked">{{ product.totalSale }} {{ $t('BOOKED') }}</span>
                              </div>
                              <div class="rating">
                                 <i class="fas fa-star"></i>
                                 <span class="rating-value">{{ product.rate.toFixed(1) }}</span>
                              </div>
                           </div>
                           <div class="tour-price">
                              <div class="linee-h">
                                 <span class="price-text">{{ $t('PRICE_FROM') }}</span>
                                 <span class="price-value">VND {{ product.price.toLocaleString() }}</span>
                                 <span class="me-1"></span>
                                 <div v-if="currentfCurrency.code !== 'VND'"> <span class="me-1"></span> <span
                                       class="menu-text"><span class="me-1 menu-text">~
                                          {{ currentfCurrency.code }}</span>{{
                                             (product.price / currentfCurrency.exchange)
                                                .toFixed(1)
                                                .toLocaleString("en-US")
                                       }}</span></div>
                              </div>
                           </div>
                        </div>
                     </RouterLink>
                  </swiper-slide>
               </swiper>
            </ClientOnly>
         </div>
         <div class="container-destination">
            <h2 class="promo-title idea">{{ $t('IDEAL_DESTINATION') }}</h2>

            <div class="grid-destination">
               <!-- CỘT TRÁI -->
               <div class="column">
                  <template v-if="!onLoadDestinations">
                     <div v-for="(d, index) in first4DiemDen.filter((_, i) => i % 2 === 0)" :key="'col1-' + index"
                        :class="`card-destination des${index + 1}`">
                        <RouterLink :to="`/destination/${d.id}`">
                           <img :src="helper.getImageCMS(d.avatar)" :alt="d.title" class="image-destination">
                           <div class="location-destination">
                              <i class="fas fa-map-marker-alt icon-destination"></i>
                              <span>{{ d.title }}</span>
                           </div>
                        </RouterLink>
                     </div>
                  </template>
                  <template v-else>
                     <div v-for="index in 2" :key="'col1-skeleton-' + index" :class="`card-destination`"
                        style="margin-bottom: 10px;">
                        <div class="image-container mb-2">
                           <Skeleton height="120px" borderRadius="12px" />
                        </div>
                     </div>
                  </template>
               </div>
               <!-- CỘT PHẢI -->
               <div class="column">
                  <template v-if="!onLoadDestinations">
                     <div v-for="(d, index) in first4DiemDen.filter((_, i) => i % 2 !== 0)" :key="'col2-' + index"
                        :class="`card-destination des${index + 3}`">
                        <RouterLink :to="`/destination/${d.id}`">
                           <img :src="helper.getImageCMS(d.avatar)" :alt="d.title" class="image-destination">
                           <div class="location-destination">
                              <i class="fas fa-map-marker-alt icon-destination"></i>
                              <span>{{ d.title }}</span>
                           </div>
                        </RouterLink>
                     </div>
                  </template>
                  <template v-else>
                     <div v-for="index in 2" :key="'col2-skeleton-' + index" :class="`card-destination`"
                        style="margin-bottom: 10px;">
                        <div class="image-container mb-2">
                           <Skeleton height="120px" borderRadius="12px" />
                        </div>
                     </div>
                  </template>
               </div>
            </div>
         </div>
         <div class="mt-3 text-center">
            <RouterLink to="/csdk" class="csdk">{{ $t('Policies_And_Terms') }}</RouterLink>
         </div>
         <!-- Điểm vô hình dùng để kích hoạt hiện logo -->

         <div class="logo-end pt-2">
            <img src="/images/lot.png" width="80" alt="JOY TIME" class="logo-img" />
         </div>

         <Footer></Footer>
         <div class="floating-icons">
            <!-- Robot Icon -->
            <div class="icon-container">
               <RouterLink to="/chat" class="floating-icon icon-robot">
                  <img width="26" src="/images/robot1.png">
               </RouterLink>
            </div>
            <!-- Map Icon with connector dot -->
            <!-- <div class="icon-container">
               <div class="floating-icon icon-robot  ban-do">
                  <img src="/images/map.png">
               </div>
            </div> -->
         </div>
      </div>
   </div>
</template>
<script setup>
import { StatusBar, Style } from '@capacitor/status-bar';

import { ref, onBeforeMount, onMounted, computed, onUnmounted, nextTick } from "vue";
import Footer from "@/components/Footer.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
// Import TabView và TabPanel từ PrimeVue
import Drawer from 'primevue/drawer';
import { useSeenStore } from "../stores/seenStore";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
const visibleBottom = ref(false);
import { RouterLink, useRouter } from 'vue-router'
const seenStore = useSeenStore();
import { useHome } from '@/composables/home.js'
import { useProduct } from '@/composables/product.js'
import { useHelper } from "@/composables/helper";
import ProductSearch from "../components/ProductSearch.vue";
import { useModalStore } from '@/stores/modalStore';
import ProductHomeSkeleton from "../components/ProductHomeSkeleton.vue";
import Skeleton from 'primevue/skeleton';
import { useCurrencyStore } from "../stores/currencyStore";
import { hasSeenOnboarding } from '../utils/onboarding'
import { useSearchStore } from "../stores/searchStore";
const currencyStore = useCurrencyStore();
const currentfCurrency = computed(() => currencyStore.fCurrency)
// const seenStore = useSeenStore();
// const seen = computed(() => seenStore.seen);
// console.log(seen.value)
const modalStore = useModalStore();
const searchTerm = ref('')
const router = useRouter()

const homeComposable = useHome();
const productComposable = useProduct();
const searchStore = useSearchStore();


const helper = useHelper();

const handleSearch = (code) => {
   searchStore.onClearSearchItem();
   if (code == "TOP_TRENDS") {
      //1. Lay region active
      var affected = listRegions.value.find(r => r.isActive == true);
      if (affected) {
         searchStore.onAddSearchItem(affected);
         router.push('/list-results');
      }

   } else {
      const productIDs = currentSeen.value.map(item => item.productId)
      searchStore.onAddSearchItem({ lstId: productIDs, type: 99, name: "Recently Viewed" }); // Fix cuwngs giai thich tai sao lai fix nhu nay
   }

}

const onLoadProductInRegion = ref(true);
const onLoadServices = ref(true);
const onLoadRegions = ref(true);


const services = ref([])
const promotions = ref([])
const first4Services = ref([])
const first4DiemDen = ref([])
// const currentSeenArray = computed(() => seenStore.seen)
const blogs = ref([])
// const uri = ref(import.meta.VITE_API_URI)
const currentSeen = ref([])

const diemDen = ref([])

const listRegions = ref([])
const listProductInRegion = ref([])
const defaultProducts = ref({
   id: 0
})

const searchs = computed(() => searchStore.search);

const onChooseService = (s) => {
   searchStore.onClearSearchItem();
   searchStore.onAddSearchItem(s)
   modalStore.close();
   router.push('/list-results')
}

const onClickRegion = async (region) => {
   //1: Loai bo tat ca true
   listRegions.value.forEach(r => {
      r.isActive = false;
   })
   //2: Gan hien tai  = true
   region.isActive = true;
   listRegions.value.forEach(r => {
      console.log(r)
   })
   let regionId = region.id;
   await onRequestProductsInRegion(regionId)
   // listProductInRegion.value = await homeComposable.getListProductInRegion(regionId);
}
const onRequestServices = async () => {
   try {
      onLoadServices.value = true
      services.value = await homeComposable.getZonesByTypeDichVu();
      services.value.forEach(r => {
         r.url = r.alias
         r.name = r.title
      })
      first4Services.value = JSON.parse(JSON.stringify(services.value)).slice(0, 4)
   } catch (error) {
      console.log(error);
   } finally {
      onLoadServices.value = false;
   }

}
const onRequestProductsInRegion = async (_firstRegionId) => {
   try {
      onLoadProductInRegion.value = true;
      listProductInRegion.value = await homeComposable.getListProductInRegion(_firstRegionId);
   } catch (error) {
      console.log(error)
   } finally {
      onLoadProductInRegion.value = false;
   }
}

const onRequestRegions = async () => {
   try {
      onLoadRegions.value = true;
      listRegions.value = await homeComposable.getListOrRegions();

      //Lay ra region dau tien de load san pham ban dau
      if (listRegions.value.length > 0) {
         for (let i = 0; i < listRegions.value.length; i++) {
            if (i == 0) {
               listRegions.value[i].isActive = true;
            }
            else {
               listRegions.value[i].isActive = false;
            }
         }
         console.log(listRegions.value);


         let _firstRegionId = listRegions.value[0].id;
         if (_firstRegionId > 0) {
            await onRequestProductsInRegion(_firstRegionId);
         }
      }

   } catch (error) {
      console.log(error)
   } finally {
      onLoadRegions.value = false;
   }
}

const onLoadPromotions = ref(true);
const onRequestPromotions = async () => {
   try {
      onLoadPromotions.value = true;
      promotions.value = await homeComposable.getZonesByTypeKhuyenMai();
   } catch (error) {
      console.log(error)
   } finally {
      onLoadPromotions.value = false;
   }

}

const onLoadDestinations = ref(true);
const onRequestLoadDestinations = async () => {
   try {
      onLoadDestinations.value = true;
      diemDen.value = await homeComposable.getZonesByTypeDiemDen();
      first4DiemDen.value = JSON.parse(JSON.stringify(diemDen.value)).slice(0, 4)
   } catch (error) {
      console.log(error);
   } finally {
      onLoadDestinations.value = false;
   }
}

onBeforeMount(async () => {
   //Tuong duong ham created
   // Goi cac ham `Future`
   //Lay ra cac services tu API




   console.log(currentSeen.value)


   // blogs.value = await homeComposable.getBlogsHomePage();



   // console.log(first4DiemDen.value, 'first4DiemDen.value')





})

onMounted(async () => {
   StatusBar.setOverlaysWebView({ overlay: true });
   await onRequestServices();
   await onRequestPromotions();
   await onRequestRegions();
   currentSeen.value = await homeComposable.getProductsLastSeen();
   await onRequestLoadDestinations();
})
</script>
<style scoped>
.search-container {
   padding: 15px 23px 15px 28px;
   margin-bottom: 0px;
}

.tour-card {
   flex: 0 0 auto;
   width: 48%;
   padding: 0;
   position: relative;
   border: 1px solid #EDF1F7;
   border-radius: 12px;
   overflow: hidden;
   /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
   background-color: white;
}

.tour-title {
   font-size: 14px;
   font-weight: 600;
   color: #03294C;
   /* margin-bottom: 4px; */
}



@keyframes fadeIn {
   from {
      opacity: 0;
      transform: translateY(12px);
   }

   to {
      opacity: 1;
      transform: translateY(0);
   }
}

.fa-star {
   width: 12px;
   height: 12px;
}

.service-item {
   display: flex;
   flex-direction: column;
   align-items: center;
   width: unset;
}

.swiper-container {
   position: relative;
   /* width: 90vw;
    height: 300px; */
}

.swiper-container>.swiper-slide__content {
   position: absolute;
   top: 0;
}

.swiper-slide {
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all 200ms linear;
   /* transform: scale(0.8); */


}

.swiper-slide.swiper-slide-active {
   /* transform: scale(0.95); */
   z-index: 999;
}

.tour-image {
   width: 100%;
   height: 110px;
   object-fit: cover;
   border-radius: 12px;
}

/* fix giao dien app */
.search-box-container {
   display: flex;
   gap: 10px;
   padding: 12px 16px;
   align-items: center;
   border-radius: 16px;
   width: 100%;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   /* nhẹ nhàng, tinh tế */
}

.s__col__item {
   text-align: center;
}
</style>
