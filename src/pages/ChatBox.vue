<template>

    <div class="container p-0">

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
                <!-- <div class="menu-button-chat">⋯</div>
                <img src="../assets/images/more.png" class="" /> -->
            </div>

            <!-- Messages Area -->
            <div class="chat-messages-chat">
                <div v-for="c in chats">

                    <div class="d-flex justify-content-end ">
                        <button class="action-button-chat" v-html="marked(c.user.message)"></button>

                    </div>
                    <div class="message-chat mb-3" v-if="c.bot.message">
                        <div class="message-avatar-chat"></div>
                        <div class="message-content-chat">
                            <div class="message-bubble-chat" v-html="marked(c.bot.message)">
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>


            <div class="chat-input-chat">
                <div class="input-container-chat">
                    <input type="text" class="text-input-chat" :placeholder="$t('inputPlaceholder')"
                        v-model="chatInput">
                    <!-- <img src="../assets/images/happy.png" /> -->
                </div>
                <button class="send-button-chat" @click="onSendChat()" v-if="!loadingChat">
                    <img src="../assets/images/send-2.png" />
                </button>
                <ProgressSpinner style="width: 40px; height: 40px" strokeWidth="8" fill="transparent"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" v-else />
            </div>
        </div>
        <!-- <Footer></Footer> -->
    </div>


</template>
<script setup>
import { ref, computed, onMounted } from "vue";
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

import { useAiBot } from '../composables/aibot';
import { useChatStore } from "../stores/chatStore";
import { marked } from 'marked'

import ProgressSpinner from 'primevue/progressspinner';


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
const aiBotComposable = useAiBot();
const chatStore = useChatStore();
const loadingChat = ref(false);



const chats = computed(() => chatStore.chats);
const sessionId = ref('');
const chatItem = ref({
    user: {
        message: ""
    },
    bot: {
        message: ""
    }

});

const randomSessionId = (length = 12) => {
    let result = '';
    const digits = '0123456789';
    for (let i = 0; i < length; i++) {
        result += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    sessionId.value = result;
}


const chatInput = ref('');

const onSendChat = async () => {
    let item = JSON.parse(JSON.stringify(chatItem.value));
    item.user.message = chatInput.value;
    chatStore.onAddMessage(item);
    let data = {
        sessionId: sessionId.value,
        chatInput: item.user.message
    }
    loadingChat.value = true;
    const response = await aiBotComposable.sendMessage(data);
    chatInput.value = '';
    loadingChat.value = false;
    if (response && response.data) {
        let lastChat = chats.value[chats.value.length - 1];
        lastChat.bot.message = response.data.output;
    }

}


const onRedirectMyOrder = (index) => {
    router.push('/myorder?v=' + index);
}

const onLogout = () => {
    authStore.onRemoveAuth();
}

const onRedirectUpdatePassword = () => {
    router.push('/updatepw')
}

onMounted(() => {
    chatStore.onClearChat();
    randomSessionId();

})

</script>
<style scoped>
.chat-header-chat{
    position: fixed;
    top: 0;
    width: 100%;
}
</style>