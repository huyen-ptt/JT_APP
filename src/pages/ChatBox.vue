<template>

    <div class="container p-0" style="max-width: 480px;">

        <div class="chat-container-chat">
            <!-- Header -->
            <div class="chat-header-chat">
                <button class="back-button-product">
                    <i class="fas fa-arrow-left" @click="$router.go(-1)"></i>
                </button>
                <div class="header-info-chat">
                    <div class="bot-avatar-chat"></div>
                    <div class="header-text-chat">
                        <div class="bot-name-chat">{{ $t('botName') }}</div>
                        <div class="status-chat d-flex align-items-center gap-1">
                            <div class="cham"></div>
                            <div>{{ $t('status') }}</div>
                        </div>
                    </div>
                </div>
                <!-- <div class="menu-button-chat">⋯</div> -->
                <!-- <img src="../assets/images/more.png" class="" /> -->
            </div>

            <!-- Messages Area -->
            <div class="chat-messages-chat">
                <div class="message-time-chat">Wed 8:21 AM</div>

                <div class="message-chat mb-3">
                    <div class="message-avatar-chat"></div>
                    <div class="message-content-chat">
                        <div class="message-bubble-chat">
                            Hello, I'm FitBot! 😊 I'm your personal sport assistant. How can I help you?
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end mb-3">
                    <button class="action-button-chat">Show me other options</button>

                </div>
                <div class="message-chat">
                    <div class="message-avatar-chat"></div>
                    <div class="message-content-chat">
                        <div class="message-bubble-chat">
                            Ok, how about these?
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end mb-3">
                    <button class="action-button-chat">Show me other options</button>

                </div>
                <div class="message-chat">
                    <div class="message-avatar-chat"></div>
                    <div class="message-content-chat">
                        <div class="message-bubble-chat">
                            Ok, how about these?
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end mb-3">
                    <button class="action-button-chat">Show me other options</button>

                </div>
                <div class="message-chat">
                    <div class="message-avatar-chat"></div>
                    <div class="message-content-chat">
                        <div class="message-bubble-chat">
                            Ok, how about these?
                        </div>
                    </div>
                </div>
                  <div class="message-chat">
                    <div class="message-avatar-chat"></div>
                    <div class="message-content-chat">
                        <div class="message-bubble-chat">
                            Ok, how about these?
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end mb-3">
                    <button class="action-button-chat">Show me other options</button>

                </div>
                <div class="message-chat">
                    <div class="message-avatar-chat"></div>
                    <div class="message-content-chat">
                        <div class="message-bubble-chat">
                            Ok, how about these?
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="suggestions-chat">
                <div class="example-1">
                    <div class="divider"></div>
                    <div class="content">{{ $t('suggestionsTitle') }}</div>
                    <div class="divider"></div>
                </div>

                <div class="suggestion-buttons-chat">
                    <button class="suggestion-button-chat">{{ $t('suggestion1') }}</button>
                    <button class="suggestion-button-chat">{{ $t('suggestion2') }}</button>
                    <button class="suggestion-button-chat">{{ $t('suggestion2') }}</button>
                </div>
            </div> -->

            <div class="chat-input-chat">
                <div class="input-container-chat">
                    <input type="text" class="text-input-chat" :placeholder="$t('inputPlaceholder')">
                    <!-- <img src="../assets/images/happy.png" /> -->
                </div>
                <button class="send-button-chat">
                    <img src="../assets/images/send-2.png" />
                </button>
            </div>
        </div>
        <!-- <Footer></Footer> -->
    </div>


</template>
<script setup>
import { ref, computed } from "vue";
import Footer from "@/components/Footer.vue"
import HeaderTitle from '../components/HeaderTitle.vue';
import Drawer from 'primevue/drawer';
import { RouterLink, useRouter } from 'vue-router'
import Dialog from 'primevue/dialog';
import { useAuthStore } from '../stores/authStore';
import { useUser } from '../composables/user';
import { useHelper } from "../composables/helper";

import { useLanguageStore } from "../stores/languageStore";
import { useCurrencyStore } from "../stores/currencyStore";


const router = useRouter();

const userComposable = useUser();
const helper = useHelper()
const authStore = useAuthStore()
const auth = computed(() => authStore.auth);

const visible = ref(false);
const visibleBottom = ref(false);

const languageStore = useLanguageStore();
const currencyStore = useCurrencyStore();

const fLanguage = computed(() => languageStore.language);
const fCurrency = computed(() => currencyStore.fCurrency)



const onRedirectMyOrder = (index) => {
    router.push('/myorder?v=' + index);
}

const onLogout = () => {
    authStore.onRemoveAuth();
}

const onRedirectUpdatePassword = () => {
    router.push('/updatepw')
}



</script>
<style scoped></style>