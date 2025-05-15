<template>
  <div class="pt-4">
    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="1"
      :allow-touch-move="true"
      :autoplay="false"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      class="swiper-container-ab"
    >
      <SwiperSlide>
        <img class="pb-4" src="../assets/images/abroad.png" alt="JOY TIME" />
        <h1 class="welcome text-center">Welcome to <span class="jt">Joytime</span></h1>
        <p class="add-btn-booking text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </SwiperSlide>

      <SwiperSlide>
        <img class="pb-4" src="../assets/images/abroad-2.png" alt="Slide 2" />
        <h1 class="welcome text-center">Discover with <span style="color:#f43f5e">ease</span></h1>
        <p class="add-btn-booking text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </SwiperSlide>

      <SwiperSlide>
        <img class="pb-4" src="../assets/images/abroad-3.png" alt="Slide 3" />
        <h1 class="welcome text-center">Enjoy <span class="jt">anywhere</span></h1>
        <p class="add-btn-booking text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </SwiperSlide>
    </Swiper>

    <!-- Footer -->
    <div class="onboarding-footer-ab">
      <div class="progress-indicator-ab">
        <div class="dots-ab">
          <span v-for="(dot, index) in 3" :key="index" :class="index === currentSlide ? 'active-dot-ab' : ''"></span>
        </div>
        <button class="skip-btn-ab pt-2" @click="skipAb">Skip</button>
      </div>

      <!-- Footer cho slide 0 & 1: vòng tròn -->
      <div class="next-button-ab" v-if="currentSlide < 2" @click="goNext">
        <svg class="progress-ring-ab" :key="ringKey" viewBox="0 0 120 120">
          <circle class="bg-ab" cx="60" cy="60" r="54" />
          <circle class="progress-ab" cx="60" cy="60" r="54" :style="{ strokeDashoffset: progressOffset }" />
        </svg>
        <div class="arrow-ab">➜</div>
      </div>

      <!-- Footer cho slide 2 -->
      <div class="get-start-wrapper-ab" v-else>
        <button class="get-start-btn-ab" @click="finish">Get Start</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const currentSlide = ref(0)
const totalLength = 339.29
const progressOffset = ref(totalLength)
const duration = 10000
const ringKey = ref(0)
let timer = null
let swiperInstance = null

function onSwiper(swiper) {
  swiperInstance = swiper
}

function onSlideChange(swiper) {
  currentSlide.value = swiper.activeIndex
}

function startAnimation() {
  progressOffset.value = totalLength
  ringKey.value++
  clearTimeout(timer)

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      progressOffset.value = 0
    })
  })

  timer = setTimeout(() => {
    goNext()
  }, duration)
}

function goNext() {
  if (swiperInstance && currentSlide.value < 2) {
    swiperInstance.slideNext()
  }
}

function skipAb() {
  if (swiperInstance) {
    swiperInstance.slideTo(2)
  }
}

function finish() {
  alert('✅ Xong onboarding!')
}

onMounted(() => {
  setTimeout(() => startAnimation(), 100)
})

watch(currentSlide, (val) => {
  clearTimeout(timer)
  if (val < 2) startAnimation()
})
</script>

<style scoped>
.onboarding-footer-ab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    /* margin-top: 32px; */
}

.progress-indicator-ab {
    align-items: center;
    gap: 12px;
}

.dots-ab span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #cfd6e1;
    display: inline-block;
    margin-right: 5px;
}

.dots-ab .active-dot-ab {
    background: #446EDE;
    width: 24px;
    border-radius: 20px;
}

.skip-btn-ab {
    background: none;
    border: none;
    color: #B3BBC7;
    font-size: 16px;
    cursor: pointer;
}

.next-button-ab {
    position: relative;
    width: 68px;
    height: 68px;
    cursor: pointer;
}

.progress-ring-ab {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
    position: absolute;
    top: 0;
    left: 0;
}

.progress-ring-ab circle {
    fill: none;
    stroke-width: 6;
    r: 54;
    cx: 60;
    cy: 60;
    transition: stroke-dashoffset 10s linear;
}

.bg-ab {
    stroke: #e5e7eb;
}

.progress-ab {
    stroke: #446EDE;
    stroke-dasharray: 339.29;
    stroke-dashoffset: 339.29;
}

.arrow-ab {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background: #446EDE;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.get-start-wrapper-ab {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
}

.get-start-btn-ab {
    background-color: #446EDE;
    color: white;
    border: none;  
    font-size: 14px;
    font-weight: 600;
    padding: 14px 24px;
    border-radius: 16px;
    cursor: pointer;
}
</style>
