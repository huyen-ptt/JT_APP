<template>
   <div class="header-bg">
      <div class="container bao-h">
         <div class="header-container">
            <!-- <div>{{ $t('welcome') }}</div> -->
            <div class="search-h d-flex justify-content-between align-items-center gap-1">
               <!-- Logo JOY TIME -->
               <div class="logo-container">
                  <img src="../assets/images/new_logo 1.png" alt="JOY TIME" class="logo-img">
               </div>

               <!-- Search input -->
               <div class="search-container">
                  <i class="fas fa-search search-icon"></i>
                  <input type="text" class="search-input" placeholder="Place to go..." v-model="searchTerm"
                     @keyup.enter="handleSearch" />
               </div>

               <!-- Icons on the right -->
               <div class="icons-container gap-2 d-flex ">
                  <img class="icon-cart " src="../assets/images/shopping-cart.png" />
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
            <div class="service-item" @click="visibleBottom = true">
               <div class="icon-circle all-icon">
                  <img class="icon-services" src="../assets/images/Frame.png" />

               </div>
               <span class="service-text">All</span>
            </div>
         </div>
         <div class="mb-promotion">
            <div class="mb-container">
               <div class="promo-header">
                  <h2 class="promo-title">Promotion</h2>
                  <!-- <a href="#" class="view-all">View All</a> -->
               </div>

               <div class="promo-carousel">
                  <!-- Promotion Card 1: Winter Deal -->
                  <div class="promo-card" v-for="(p, index) in promotions" :key="index">
                     <img :src="helper.getImageCMS(p.avatar)" :alt="p.title" />
                  </div>


               </div>
            </div>
         </div>

         <div class="recently-container" v-for="(t, index) in topTrends" :key="index">
            <div class="recently-header">
               <h2 class="promo-title">{{ t.region.name }}</h2>
               <a href="#" class="view-all">View All</a>

            </div>
            <div class="mt-4">
               <ul class="nav nav-tabs" id="tourTabs" role="tablist">
                  <li class="nav-item" role="presentation">
                     <button class="nav-link tab-sp active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1"
                        type="button" role="tab">Hà Nội</button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <button class="nav-link tab-sp" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2"
                        type="button" role="tab">Hồ Chí Minh</button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <button class="nav-link tab-sp" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3"
                        type="button" role="tab">Đà Nẵng</button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <button class="nav-link tab-sp" id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4"
                        type="button" role="tab">Phú Quốc</button>
                  </li>
               </ul>
               <div class="tab-content mt-3" id="tourTabsContent">
                  <div class="tab-pane fade show active" id="tab1" role="tabpanel">
                     <div class="recently-carousel">
                        <RouterLink to="/detail-product" class="tour-card">
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
                        </RouterLink>
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
                           <img src="../assets/images/6.png" alt="Inter Sweet Love" class="tour-image">
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
                  <div class="tab-pane fade" id="tab2" role="tabpanel">
                     <div class="recently-carousel">
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
                  <div class="tab-pane fade" id="tab3" role="tabpanel">
                     <div class="recently-carousel">
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
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="tab-pane fade" id="tab4" role="tabpanel">
                     <div class="recently-carousel">
                        <div class="tour-card">
                           <img src="../assets/images/6.png" alt="Inter Sweet Love" class="tour-image">
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
               </div>
            </div>

         </div>
         <div class="recently-container">
            <div class="recently-header">
               <h2 class="promo-title">Recently Viewed</h2>
               <a href="#" class="view-all">View All</a>

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
            <h2 class="promo-title idea">Ideal Destination</h2>

            <div class="">
               <!-- Hà Nội -->
               <RouterLink to="/destination" v-if="diemDen.length > 0" class="grid-destination">
                  <div v-for="(d, index) in first4DiemDen" :key="index" class="card-destination des1">
                     <img :src="helper.getImageCMS(d.avatar)" :alt="d.title" class="image-destination">
                     <div class="location-destination">
                        <i class="fas fa-map-marker-alt icon-destination"></i>
                        <span>{{ d.title }}</span>
                     </div>
                  </div>


               </RouterLink>

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
         <div class="bottom-menu">
            <div class="menu-item">
               <div class="menu-icon">
                  <i class="fas fa-home"></i>
               </div>
               <span class="menu-text">Home</span>
            </div>

            <RouterLink to="/promotion" class="menu-item">
               <div class="menu-icon">
                  <img src="../assets/images/gift.png" />
               </div>
               <span class="menu-text">Promotion</span>
            </RouterLink>

            <div class="menu-item" @click="visibleBottom = true">
               <div class="menu-icon">
                  <img src="../assets/images/element-plus.png" />

               </div>
               <span class="menu-text">Service</span>
            </div>

            <div class="menu-item">
               <div class="menu-icon">
                  <img src="../assets/images/document-text.png" />

               </div>
               <span class="menu-text">Blog</span>
            </div>

            <div class="menu-item">
               <div class="menu-icon">
                  <img src="../assets/images/user-square.png" />

               </div>
               <span class="menu-text">Account</span>
            </div>

            <div class="indicator"></div>
         </div>
         <Drawer v-model:visible="visibleBottom" header="Bottom Drawer" position="bottom" style="height: auto">
            <div class="footer-services">
               <div class="services-grid">
                  <h2 class="se-title">Service</h2>

                  <div class="container-fluid">
                     <div class="bao-sr">
                        <div class="row">
                           <div class="col-3 service-item" style="width: 25%;" v-for="(s, index) in services"
                              :key="index">
                              <div class="service-icon">
                                 <img :src="helper.getImageCMS(s.icon)" alt="Combo">
                              </div>
                              <div class="service-name">{{ s.title }}</div>
                           </div>
                        </div>

                        <!-- <div class="col">
                           <div class="service-item">
                              <div class="service-icon">
                                 <img src="../assets/images/ticket.png" alt="Ticket">
                              </div>
                              <div class="service-name">Ticket</div>
                           </div>
                        </div>

                        <div class="col">
                           <div class="service-item">
                              <div class="service-icon">
                                 <img src="../assets/images/Sim.png" alt="Travel SIM">
                              </div>
                              <div class="service-name">Travel SIM</div>
                           </div>
                        </div>

                        <div class="col">
                           <div class="service-item">
                              <div class="service-icon">
                                 <img src="../assets/images/Plan.png" alt="Plan">
                              </div>
                              <div class="service-name">Plan</div>
                           </div>
                        </div> -->
                     </div>

                     <!-- <div class="row row-cols-4 g-0 bao-sr">
                        <div class="col">
                           <div class="service-item">
                              <div class="service-icon">
                                 <img src="../assets/images/s2.png" alt="Transportation">
                              </div>
                              <div class="service-name">Transportation</div>
                           </div>
                        </div>

                        <div class="col">
                           <div class="service-item">
                              <div class="service-icon">
                                 <img src="../assets/images/s3.png" alt="Souvenir">
                              </div>
                              <div class="service-name">Souvenir</div>
                           </div>
                        </div>

                        <div class="col">
                           <div class="service-item">
                              <div class="service-icon">
                                 <img src="../assets/images/s4.png" alt="Food">
                              </div>
                              <div class="service-name">Food</div>
                           </div>
                        </div>

                        <div class="col">
                           <div class="service-item">
                              <div class="service-icon">
                                 <img src="../assets/images/s5.png" alt="Tour">
                              </div>
                              <div class="service-name">Tour</div>
                           </div>
                        </div>
                     </div>

                     <div class="row row-cols-4 g-0 bao-sr">
                        <div class="col">
                           <div class="service-item">
                              <div class="service-icon">
                                 <img src="../assets/images/s6.png" alt="Fast Track">
                              </div>
                              <div class="service-name">Fast Track</div>
                           </div>
                        </div>

                        <div class="col">
                           <div class="service-item">
                              <div class="service-icon">
                                 <img src="../assets/images/s7.png" alt="Spa">
                              </div>
                              <div class="service-name">Spa</div>
                           </div>
                        </div>




                     </div> -->
                  </div>
               </div>
            </div>
         </Drawer>

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

   console.log(promotions.value)

})

onMounted(async () => {


})



</script>
<style scoped>
.search-container {
   padding: 15px 46px 15px 28px;
   margin-bottom: 0px;
}

.tour-card {
   flex: 0 0 auto;
   width: 230px;
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
</style>
