<template>
    <div class="blog-container">
        <!-- <h1 class="text-center border-bottom fw-bold pb-4 bg-white title pt-4 mb-4">{{ $t('TRAVEL_SUPPORT') }}</h1> -->
        <HeaderTitle :title="$t('TRAVEL_SUPPORT')":uri="`/`"></HeaderTitle>

        <div class="card pt-2">
            <Tabs value="0">
                <TabList class="custom-tab-list" v-if="menuBlogs">
                    <Tab value="0" class="custom-tab">{{ $t('LATEST_NEWS') }}</Tab>
                    <Tab value="1" class="custom-tab" v-for="(a, index) in menuBlogs.lv1" :key="index">
                        {{ a.title }}
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel value="0" class="item-blog"> 
                        <div class="news-card-blogg" v-for="(b, index) in AllNewestBlog" :key="index">
                            <div class="news-image-blogg">
                                <img :src="helper.getImageCMS(b.avatar)" />
                            </div>
                             <div class="news-content-blogg">
                                <h3 class="news-title-blogg">{{ b.title }}</h3> 
                                <p class="news-description-blogg" v-html="b.description"></p>
                                <div class="news-meta-blogg">
                                    <span class="news-date-blogg">{{ helper.formatISODate(b.createdDate) }}</span>
                                    <RouterLink  class="news-link-blogg" :to="`/blog-detail/${b.id}`">
                                        <!-- :to="`/blog-detail/${b.id}-${b.url}.html`" -->
                                        {{ $t('VIEW_DETAIL') }}
                                        <div class="arrow-l">  
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>



                    </TabPanel>
                    <TabPanel value="1">
                        <div class="news-card-blogg" v-for="(b, index) in AllNewestBlog" :key="index">
                            <div class="news-image-blogg">
                                <img :src="helper.getImageCMS(b.avatar)" alt="Da Nang ancient town" />
                            </div>
                            <div class="news-content-blogg">
                                <h3 class="news-title-blogg">{{ b.title }}</h3>
                                <p class="news-description-blogg" v-html="b.description"></p>
                                <div class="news-meta-blogg">
                                    <span class="news-date-blogg">{{ helper.formatISODate(b.createdDate) }}</span>
                                    <a href="/blog-detail" class="news-link-blogg">
                                        {{ $t('VIEW_DETAIL') }}
                                        <div class="arrow-l">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                </TabPanels>
            </Tabs>
            <Footer></Footer>
        </div>
    </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import HeaderTitle from '../components/HeaderTitle.vue';

import Drawer from 'primevue/drawer';
const visibleBottom = ref(false);
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Footer from "@/components/Footer.vue";
import { useArticles } from '@/composables/articles.js'
import { useHelper } from "../composables/helper";
import { RouterLink } from "vue-router";
const articlesComposable = useArticles();
const menuBlogs = ref([])
const NewestBlog = ref([])
const AllNewestBlog = ref([]);
const helper = useHelper()

onBeforeMount(async () => {
    menuBlogs.value = await articlesComposable.getBlogParentZone();
    NewestBlog.value = await articlesComposable.getBlogsInZone();

    // Gộp firstItem (object) vào mảng cùng lastItems và nextThreeItem
    AllNewestBlog.value = [
        ...(NewestBlog.value.firstItem ? [NewestBlog.value.firstItem] : []),
        ...(NewestBlog.value.lastItems || []),
        ...(NewestBlog.value.nextThreeItem || [])
    ];

    console.log(AllNewestBlog.value, 'AllNewestBlog');
});
</script>
<style scoped>
.custom-tab-list {
    display: flex;
    /* border-bottom: 2px solid #ddd; */
    /* Add a border below the TabList */
}


/* Custom Tab Styles */
.custom-tab {
    padding: 10px 20px;
    border: 1px solid #ddd;
    border-radius: 20px;
    width: 48%;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    /* font-weight: bold; */
    transition: background-color 0.3s, color 0.3s;
}

/* Hover and active state styles for the tabs */

.card {

    margin-bottom: 0px;
} 
.custom-tab:active,
.custom-tab.ui-state-active {
    background-color: #007bff;
    color: #fff;
}

/* Optional: Customize the TabPanel's padding or borders */
.p-tabpanel {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 0 0 8px 8px;
    /* Rounded corners on bottom */
}
</style>