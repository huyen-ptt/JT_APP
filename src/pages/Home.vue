<template>
   <div class="header-bg">
      <div class="container bao-h">
         <div class="header-container">
            <div class="search-h d-flex justify-content-between align-items-center gap-1">
               <div class="logo-container">
                  <img src="../assets/images/new_logo 1.png" alt="JOY TIME" class="logo-img">
               </div>

               <!-- Search input -->
               <RouterLink to="/search" class="search-container none-line">
                  <i class="fas fa-search search-icon"></i>
                  <input type="text" class="search-input" :placeholder="$t('place_to_go')" v-model="searchTerm"
                     @keyup.enter="handleSearch" />
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

         <div class="service-icons mt-3 border-bottom" v-if="services.length > 0">
            <div class="service-item" v-for="(s, index) in first4Services" :key="index">
               <div class="icon-circle combo-icon">
                  <img class="icon-services" :src="helper.getImageCMS(s.icon)" />
               </div>
               <span class="service-text">{{ s.title }}</span>
            </div>
            <div class="service-item" @click="modalStore.open()">
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


               <swiper :modules="[Navigation]" :slides-per-view="3" :space-between="1" :loop="true"
                  :centered-slides="true" :round-lengths="true" :loop-additional-slides="30" :navigation="{
                     nextEl: '.swiper-button-next',
                     prevEl: '.swiper-button-prev',
                  }" class="swiper-container promo-carousel">
                  <swiper-slide v-for="(p, index) in promotions" :key="index">
                     <div class="promo-card">
                        <img :src="helper.getImageCMS(p.avatar)" :alt="p.title" />
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
            <div class="mt-4">
               <ul class="nav nav-tabs" id="tourTabs" role="tablist">
                  <li class="nav-item" role="presentation" v-for="r in listRegions">
                     <button class="nav-link tab-sp " :class="r.isActive == true ? 'active' : ''"
                        @click="onClickRegion(r)" type="button" role="tab">{{ r.name }}</button>
                  </li>
               </ul>
               <div class="tab-content mt-3" id="tourTabsContent">
                  <div class="tab-pane fade show active" id="tab1" role="tabpanel">
                     <div class="recently-carousel">
                        <ProductSearch v-for="p in listProductInRegion" :product="p"></ProductSearch>

                     </div>
                  </div>

               </div>
            </div>

         </div>
         <div class="recently-container">
            <div class="recently-header">
               <h2 class="promo-title">{{ $t('RECENTLY_VIEWED') }}</h2>
               <a href="#" class="view-all">{{ $t('VIEW_All') }}</a>

            </div>

            <div class="recently-carousel">
               <!-- Tour Card 1 -->
               <div class="tour-card">
                  <img src="../assets/images/anh-1.png" alt="Inter Sweet Love" class="tour-image">
                  <div class="tour-content">
                     <h3 class="tour-title">Day tour | 3.5 Hours explore Hanoi Street food</h3>
                     <div class="tour-location tour-price">
                        <div>
                           <i class="fas fa-map-marker-alt location-dot"></i>
                           <span class="dia-diem">Ha Noi</span>
                           <span class="tour-booked">40 Booked</span>
                        </div>
                        <div class="rating">
                           <i class="fas fa-star"></i>
                           <span class="rating-value">4.5</span>
                        </div>
                     </div>
                     <div class="tour-price">
                        <div>
                           <span class="price-text">From</span>
                           <span class="price-value">~ USD 34</span>
                        </div>

                     </div>
                     <div class="bieu-tuong-gg">

                        <div class="flight-icon">
                           -50%
                        </div>
                     </div>
                  </div>
               </div>

               <!-- Tour Card 2 -->
               <div class="tour-card">
                  <img src="../assets/images/2.png" alt="Inter Sweet Love" class="tour-image">
                  <div class="tour-content">
                     <h3 class="tour-title">Day tour | 3.5 Hours explore Hanoi Street food</h3>
                     <div class="tour-location tour-price">
                        <div>
                           <i class="fas fa-map-marker-alt location-dot"></i>
                           <span class="dia-diem">Ha Noi</span>
                           <span class="tour-booked">40 Booked</span>
                        </div>
                        <div class="rating">
                           <i class="fas fa-star"></i>
                           <span class="rating-value">4.5</span>
                        </div>
                     </div>
                     <div class="tour-price">
                        <div>
                           <span class="price-text">From</span>
                           <span class="price-value">~ USD 34</span>
                        </div>

                     </div>
                     <div class="bieu-tuong">

                        <div class="flight-icon">
                           <img src="../assets/images/airplane.png" />
                        </div>
                     </div>
                  </div>
               </div>

               <div class="tour-card">
                  <img src="../assets/images/8.png" alt="Inter Sweet Love" class="tour-image">
                  <div class="tour-content">
                     <h3 class="tour-title">Day tour | 3.5 Hours explore Hanoi Street food</h3>
                     <div class="tour-location tour-price">
                        <div>
                           <i class="fas fa-map-marker-alt location-dot"></i>
                           <span class="dia-diem">Ha Noi</span>
                           <span class="tour-booked">40 Booked</span>
                        </div>
                        <div class="rating">
                           <i class="fas fa-star"></i>
                           <span class="rating-value">4.5</span>
                        </div>
                     </div>
                     <div class="tour-price">
                        <div>
                           <span class="price-text">From</span>
                           <span class="price-value">~ USD 34</span>
                        </div>

                     </div>
                     <div class="bieu-tuong">

                        <div class="flight-icon">
                           <img src="../assets/images/airplane.png" />
                        </div>
                     </div>
                  </div>
               </div>


            </div>
         </div>
         <div class="container-destination">
            <h2 class="promo-title idea">{{ $t('IDEAL_DESTINATION') }}</h2>

            <div class="grid-destination">
               <div class="column">
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
               </div>

               <div class="column">
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
               </div>
            </div>
         </div>


         <!-- <div class="container-joytime">
            <div class="recently-header">
               <h2 class="promo-title">Travel with Joytime</h2>
               <a href="#" class="view-all">View All</a>

            </div>
            <div class="card-joytime">
               <img src="../assets/images/6.png" alt="Ha Noi" class="image-joytime">
               <div class="content-joytime">
                  <div class="location-joytime">
                     <div class="location-icon-joytime">
                        <i class="fas fa-map-marker-alt" style="color: #888;"></i>
                     </div>
                     <span class="location-name-joytime">Ha Noi</span>
                  </div>
                  <h3 class="journey-title-joytime">Ha Noi: A Journey Along t...</h3>
                  <p class="journey-description-joytime">Hue, one of Vietnam's most ancient and poetic cities, is ren
                  </p>
               </div>
            </div>

            <div class="card-joytime">
               <img src="../assets/images/7.png" alt="Hue" class="image-joytime">
               <div class="content-joytime">
                  <div class="location-joytime">
                     <div class="location-icon-joytime">
                        <i class="fas fa-map-marker-alt" style="color: #888;"></i>
                     </div>
                     <span class="location-name-joytime">Hue</span>
                  </div>
                  <h3 class="journey-title-joytime">Hue: A Journey Along the...</h3>
                  <p class="journey-description-joytime">Hue, one of Vietnam's most ancient and poetic cities, is ren...
                  </p>
               </div>
            </div>
         </div> -->
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
const modalStore = useModalStore();
const searchTerm = ref('')
const router = useRouter()

const homeComposable = useHome();
const productComposable = useProduct();


const helper = useHelper();

const handleSearch = () => {
   // Chuyển hướng đến trang /search với query parameter
   router.push({
      path: '/search',
      query: searchTerm.value ? { q: searchTerm.value } : {}
   })
}
localStorage.setItem('seen', JSON.stringify([946, 3886, 479, 623, 929, 562, 784, 1136, 4066, 2580, 1175, 531, 2370]));
const topTrends = ref([])
const services = ref([])
const promotions = ref([])
const first4Services = ref([])
const first4DiemDen = ref([])
const currentSeenArray = computed(() => seenStore.seen)
const blogs = ref([])
// const uri = ref(import.meta.VITE_API_URI)
const currentSeen = ref([])

const diemDen = ref([])

const listRegions = ref([])
const listProductInRegion = ref([])



const onClickRegion = async (region) => {
   //1: Loai bo tat ca true
   listRegions.value.forEach(r => {
      r.isActive = false;
   })
   //2: Gan hien tai  = true
   region.isActive = true;
   let regionId = region.id;

   listProductInRegion.value = await homeComposable.getListProductInRegion(regionId);


}

onBeforeMount(async () => {
   //Tuong duong ham created
   // Goi cac ham `Future`
   //Lay ra cac services tu API
   services.value = await homeComposable.getZonesByTypeDichVu();
   first4Services.value = JSON.parse(JSON.stringify(services.value)).slice(0, 4)
   console.log(currentSeenArray.value)
   promotions.value = await homeComposable.getZonesByTypeKhuyenMai();
   topTrends.value = await homeComposable.getProductsInRegion();
   diemDen.value = await homeComposable.getZonesByTypeDiemDen();
   first4DiemDen.value = JSON.parse(JSON.stringify(diemDen.value)).slice(0, 4)
   currentSeen.value = await productComposable.onLoadLastSeen(currentSeenArray.value);
   blogs.value = await homeComposable.getBlogsHomePage();

   listRegions.value = await homeComposable.getListOrRegions();
   console.log(first4DiemDen.value, 'first4DiemDen.value')

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
         listProductInRegion.value = await homeComposable.getListProductInRegion(_firstRegionId);

      }
   }



})

onMounted(async () => {
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
   margin-bottom: 4px;
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
</style>
