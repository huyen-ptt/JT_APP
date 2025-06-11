<template>
    <div class="bottom-menu">
        <RouterLink to="/" class="menu-item">
            <div class="menu-icon">
                <img class="home-icon" src="../assets/images/home-2.png" />
            </div>
            <span class="menu-text">{{ $t('home') }}</span>
        </RouterLink>

        <RouterLink to="/promotion" class="menu-item">
            <div class="menu-icon">
                <img class="promotion-icon" src="../assets/images/gift.png" />
            </div>
            <span class="menu-text">{{ $t('promotion') }}</span>
        </RouterLink>

        <div class="menu-item" @click="modalStore.open()">
            <div class="menu-icon">
                <img src="../assets/images/element-plus.png" />
            </div>
            <span class="menu-text">{{ $t('service') }}</span>
        </div>

        <RouterLink to="/blog" class="menu-item">
            <div class="menu-icon">
                <img class="blog-icon" src="../assets/images/document-text1.png" />
            </div>
            <span class="menu-text">{{ $t('blog') }}</span>
        </RouterLink>
        <RouterLink class="menu-item" to="/account">
            <div class="menu-icon">
                <img class="account-icon" src="../assets/images/user-square.png" />
            </div>
            <span class="menu-text">{{ $t('account') }}</span>
        </RouterLink>
        <div class="indicator"></div>
    </div>
    <Drawer v-model:visible="modalStore.visibleBottom" position="bottom" :modal="true" :dismissableMask="true"
        style="height: 50vh; border-radius: 25px 32px 0px 0;" class="mo-ser">
        <div class="footer-services">
            <div class="services-grid">
                <h2 class="se-title">{{ $t('service') }}</h2>
                <div class="container-fluid">
                    <div class="bao-sr">
                        <div class="row">
                            <ServiceFooter></ServiceFooter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Drawer>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import Drawer from 'primevue/drawer';
import ServiceFooter from "./ServiceFooter.vue";
import { useModalStore } from '@/stores/modalStore';
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore';
import { useUser } from '../composables/user';
import { useHelper } from "../composables/helper";
const router = useRouter();

const userComposable = useUser();
const helper = useHelper()
const authStore = useAuthStore()
const auth = computed(() => authStore.auth);


const modalStore = useModalStore();


// const onRedirectAccount = () => {
//     router.push('/account');
// }



// watch(() => modalStore.visibleBottom, (visible) => {
//   if (visible) {
//     document.body.style.overflow = 'hidden'
//   } else {
//     document.body.style.overflow = ''
//   }
// })

</script>
<style scoped>
.promotion-icon {
    content: url('../assets/images/gift.png');
}

.router-link-exact-active .promotion-icon {
    content: url('../assets/images/gift-active.png');
}

.home-icon {
    content: url('../assets/images/home-2.png');

}

.router-link-exact-active .home-icon {
    content: url('../assets/images/home.png');
}

.blog-icon {
    content: url('../assets/images/document-text1.png');

}

.router-link-exact-active .blog-icon {
    content: url('../assets/images/document-active.png');
}

.account-icon {
    content: url('../assets/images/user-square.png');

}

.router-link-exact-active .account-icon {
    content: url('../assets/images/user-square-active.png');
}
</style>