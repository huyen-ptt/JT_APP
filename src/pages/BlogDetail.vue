<template>
    <div class="promotion-bao">
       
        <HeaderTitle :title="$t('News_Detail')"></HeaderTitle>

        <div class="">
            <div class="">
                <!-- Carousel/Slider -->
                <div id="promotionCarousel" class="carousel slide" data-bs-ride="carousel" v-if="blogDetail">
                    <div class="carousel-inner">
                        <!-- Slide 1 -->
                        <div class="bg-white p-3">
                            <div class="">
                                <div class="promotion-image">
                                    <img :src="helper.getImageCMS(blogDetail.avatar)" alt="Winter Deal 20% Off"
                                        class="img-fluid rounded-4">
                                </div>
                                <div class="promotion-details">
                                    <div>
                                        <div>
                                            <h5 class="promotion-title-lon">{{ blogDetail.title }}</h5>
                                            <p v-html="blogDetail.description"></p>
                                        </div>

                                    </div>
                                </div>
                                <div class="blog-table-of-content" v-html="blogDetail.indexing"></div>
                                <div class="blog-content-detail" v-html="blogDetail.body">

                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Carousel Indicators -->

                </div>

            </div>
            <div class="detail-blog p-3">
                <div class="recently-header">
                    <h2 class="promo-title">Related Blog</h2>
                    <a href="#" class="view-all">View All</a>

                </div>
                <div class="news-card-blogg">
                    <div class="news-image-blogg">
                        <img src="../assets/images/10.jpg" alt="Halong Bay" />
                    </div>
                    <div class="news-content-blogg">
                        <h3 class="news-title-blogg">How far is Halong Bay from...</h3>
                        <p class="news-description-blogg">If you're planning to visit Halong Bay from Da Nang,
                            you'll find that...</p>
                        <div class="news-meta-blogg">
                            <span class="news-date-blogg">21/02/2025</span>
                            <a href="#" class="news-link-blogg">
                                View detail
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="news-card-blogg">
                    <div class="news-image-blogg">
                        <img src="../assets/images/7.png" alt="Halong Bay cruise" />
                    </div>
                    <div class="news-content-blogg">
                        <h3 class="news-title-blogg">How far is Halong Bay from...</h3>
                        <p class="news-description-blogg">If you're planning to visit Halong Bay from Da Nang,
                            you'll find that...</p>
                        <div class="news-meta-blogg">
                            <span class="news-date-blogg">21/02/2025</span>
                            <a href="#" class="news-link-blogg">
                                View detail
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="news-card-blogg">
                    <div class="news-image-blogg">
                        <img src="../assets/images/img11.jpg" alt="Da Nang ancient town" />
                    </div>
                    <div class="news-content-blogg">
                        <h3 class="news-title-blogg">What to Do in Da Nang in 2 What to Do in Da Nang</h3>
                        <p class="news-description-blogg">Do not worry if you only have limited time in Da Nang,
                            we
                            suggest...</p>
                        <div class="news-meta-blogg">
                            <span class="news-date-blogg">21/02/2025</span>
                            <a href="#" class="news-link-blogg">
                                View detail
                                <div class="arrow-l">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import HeaderTitle from '../components/HeaderTitle.vue';

import { useBlogDetail } from '../composables/blogDetail';
import { useHelper } from '../composables/helper';


const helper = useHelper();
const blogDetailComposable = useBlogDetail();
const blogDetail = ref(null);

onMounted(async () => {
    blogDetail.value = await blogDetailComposable.getBlogInfomationDetail();
    console.log(blogDetail.value);
})



</script>