<template>
    <div class="promotion-bao news-details">
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
                                        class="img-fluid rounded-4" />
                                </div>
                                <div class="promotion-details">
                                    <div>
                                        <div>
                                            <h5 class="promotion-title-lon">
                                                {{ blogDetail.title }}
                                            </h5>
                                            <p v-html="blogDetail.description"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-table-of-content" v-html="blogDetail.indexing"></div>
                                <div class="blog-content-detail" v-html="blogDetail.body"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Carousel Indicators -->
                </div>
            </div>
            <div class="detail-blog p-3">
                <div class="recently-header">
                    <h2 class="promo-title">{{ $t("related_blog") }}</h2>
                    <a href="/blog" class="view-all"> {{ $t("VIEW_All") }}</a>
                </div>

                <div class="news-card-blogg" v-for="(item, index) in blogDetail.blogSameZone" :key="index">
                    <div class="news-image-blogg">
                        <img :src="helper.getImageCMS(item.avatar)" :alt="item.alt" />
                    </div>
                    <div class="news-content-blogg">
                        <h3 class="news-title-blogg">{{ item.title }}</h3>
                        <p class="news-description-blogg" v-html="item.description"></p>
                        <div class="news-meta-blogg">
                            <span class="news-date-blogg">{{ helper.formatISODate(item.createdDate) }}</span>
                            <a :href="'/blog-detail/' + item.id" class="news-link-blogg">
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
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>
<script setup>
import Footer from "@/components/Footer.vue";
import { ref, onMounted, onBeforeMount, computed, watch } from "vue";
import { useRoute } from "vue-router";
import HeaderTitle from "../components/HeaderTitle.vue";

import { useBlogDetail } from "../composables/blogDetail";
import { useHelper } from "../composables/helper";

const helper = useHelper();
const blogDetailComposable = useBlogDetail();
const blogDetail = ref(null);

// onMounted(async () => {
//     blogDetail.value = await blogDetailComposable.getBlogInfomationDetail();
//     console.log(blogDetail.value);
// });
onBeforeMount(async () => {
    blogDetail.value = await blogDetailComposable.getBlogInfomationDetail();
    console.log(blogDetail.value);
});
</script>
