<template>
   <div class="header-bg">
      <div class="container bao-h">
         <div class="header-container">
            <div class="search-h d-flex justify-content-between align-items-center" style="gap:12px">
               <div class="logo-container">
                  <img src="../assets/images/new_logo 1.png" alt="JOY TIME" class="logo-img">
               </div>
               <RouterLink class="search-box-container" :to="`/search`" style="text-decoration: none;">
                  <div class="search-box-items"></div>
                  <i class="fas fa-search search-icon"></i>
                  <span style="color: #8A929E;">{{ $t('place_to_go') }}</span>
               </RouterLink>
               <!-- Icons on the right -->
               <div class="icons-container gap-2 d-flex ">
                  <RouterLink to="/cart">
                     <img class="icon-cart" src="../assets/images/shopping-cart.png" alt="Cart" />
                  </RouterLink>
                  <img class="icon-cart " src="../assets/images/Icon.png" />
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
               <a  @click="onChooseService(s)" class="icon-circle combo-icon">
                  <img class="icon-services" :src="helper.getImageCMS(s.icon)" />
               </a>
               <span class="service-text">{{ s.title }}</span>
            </div>
            <div class="col s__col__item" @click="modalStore.open()">
               <div class="icon-circle all-icon">
                  <img class="icon-services" src="../assets/images/Frame.png" />

               </div>
               <span class="service-text">{{ $t('ALL') }}</span>
            </div>
         </div>

         <div class="mb-promotion">
            <div class="mb-container">
               <div class="promo-header">
                  <h2 class="promo-title">{{ $t('PROMOTION') }}</h2>
               </div>
               <swiper :modules="[Navigation]" :slides-per-view="5" :space-between="1" :loop="true"
                  :centered-slides="true" :round-lengths="true" :loop-additional-slides="30" :navigation="{
                     nextEl: '.swiper-button-next',
                     prevEl: '.swiper-button-prev',
                  }" class="swiper-container promo-carousel">
                  <swiper-slide v-for="(p, index) in promotions" :key="index" v-if="!onLoadPromotions">
                     <div class="promo-card">
                        <img :src="helper.getImageCMS(p.avatar)" :alt="p.title" />
                     </div>
                  </swiper-slide>
                  <swiper-slide v-for="(p, index) in 5" :key="index" v-if="onLoadPromotions">
                     <div class="promo-card">
                        <Skeleton height="160px" borderRadius="12px" />
                     </div>
                  </swiper-slide>
               </swiper>
               <div class="swiper-button-prev"></div>
               <div class="swiper-button-next"></div>
            </div>
         </div>


         <div class="recently-container">
            <div class="recently-header">
               <h2 class="promo-title">{{ $t('TOP_TRENDS') }}</h2>
               <a href="/" class="view-all"> {{ $t('VIEW_All') }}</a>

            </div>
            <div class="">
               <ul class="nav nav-tabs" id="tourTabs" role="tablist" v-if="!onLoadRegions">

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
               <div class="tab-content mt-3" id="tourTabsContent">
                  <div class="tab-pane fade show active" id="tab1" role="tabpanel">
                     <div class="recently-carousel" v-if="!onLoadingRegion">
                        <ProductSearch v-for="p in listProductInRegion" :product="p">
                        </ProductSearch>

                     </div>
                     <div class="recently-carousel" v-else>
                        <ProductHomeSkeleton v-for="index in 2" :key="index"></ProductHomeSkeleton>
                     </div>
                  </div>

               </div>
            </div>

         </div>
         <div class="recently-container mb-3" v-if="currentSeen.length > 0">
            <div class="recently-header">
               <h2 class="promo-title">{{ $t('RECENTLY_VIEWED') }}</h2>
               <a href="#" class="view-all">{{ $t('VIEW_All') }}</a>

            </div>

            <div class="recently-carousel">
               <!-- Tour Card 1 -->
               <RouterLink :to="`/detail-product/${product.productId}`" class="tour-card"
                  v-for="product in currentSeen">
                  <img :src="helper.getImageCMS(product.avatar)" alt="Inter Sweet Love" class="tour-image">
                  <div class="tour-content">
                     <h3 class="tour-title">{{ product.title }}</h3>
                     <div class="tour-location tour-price">
                        <div>
                           <i class="fas fa-map-marker-alt location-dot"></i>
                           <span class="dia-diem">{{ product.zoneName }}</span>
                           <span class="tour-booked">{{ product.totalSale }} Booked</span>
                        </div>
                        <div class="rating">
                           <i class="fas fa-star"></i>
                           <span class="rating-value">{{ product.rate }}</span>
                        </div>
                     </div>
                     <div class="tour-price">
                        <div>
                           <span class="price-text">From</span>
                           <span class="price-value">VND {{ product.price.toLocaleString() }}</span>
                        </div>

                     </div>
                     <!-- <div class="bieu-tuong-gg">

                        <div class="flight-icon">
                           -50%
                        </div>
                     </div> -->
                  </div>
               </RouterLink>


            </div>
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
                     <div v-for="index in 2" :key="'col1-skeleton-' + index"
                        :class="`card-destination`" style="margin-bottom: 10px;">
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
                     <div v-for="index in 2" :key="'col2-skeleton-' + index"
                        :class="`card-destination`" style="margin-bottom: 10px;">
                        <div class="image-container mb-2">
                           <Skeleton height="120px" borderRadius="12px" />
                        </div>
                       
                     </div>
                  </template>
               </div>
            </div>
         </div>

         <Footer></Footer>

         <div class="floating-icons">
            <!-- Robot Icon -->
            <div class="icon-container">
               <div class="floating-icon icon-robot">
                  <img src="../assets/images/robot.png">
               </div>
            </div>


            <!-- Map Icon with connector dot -->
            <div class="icon-container">
               <div class="floating-icon icon-robot  ban-do">
                  <img src="../assets/images/map.png">
               </div>
            </div>
         </div>

      </div>
   </div>
</template>
<script setup>
import { ref, onBeforeMount, onMounted, computed } from "vue";
import Footer from "@/components/Footer.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
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
import { useSearchStore } from "../stores/searchStore";

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

const handleSearch = () => {
   // Chuyển hướng đến trang /search với query parameter
   router.push({
      path: '/search',
      query: searchTerm.value ? { q: searchTerm.value } : {}
   })
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




   // console.log(currentSeenArray.value)


   // blogs.value = await homeComposable.getBlogsHomePage();



   // console.log(first4DiemDen.value, 'first4DiemDen.value')





})

onMounted(async () => {
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
   transform: scale(0.8);


}

.swiper-slide.swiper-slide-active {
   transform: scale(0.95);
   z-index: 999;
}


/* fix giao dien app */
.search-box-container {
   display: flex;
   gap: 10px;
   padding: 10px 15px;
   align-items: baseline;
   border-radius: 10px;
   width: 100%;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   /* nhẹ nhàng, tinh tế */
}

.s__col__item {
   text-align: center;
}
</style>
