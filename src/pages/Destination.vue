<template>
    <div class="container bg-white pb-3">
        <!-- Header -->
        <div class="pb-4 pt-4 d-flex row border-bottom">
            <a href="#" class="text-dark me-3 col-3">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
            <h5 class="mb-0 col-6 title">Tp. Ho Chi Minh</h5>
            <div class="col-3"></div>
        </div>

        <!-- Main Image Slider -->
        <div class="pt-3">
            <img src="../assets/images/10.jpg" class="d-block w-100 img-des" alt="Ho Chi Minh City Night Scene">
        </div>



        <!-- Weather Section -->
        <div class="weather-section mt-3 mb-3 rounded-4">
            <div class="d-flex gap-3 text-center recently-carousel">
                <div class="du-bao">
                    <div class="weather-icon">
                        <img src="../assets/images/Partly-cloudy.png" />
                    </div>
                    <div class="temperature">27°C</div>
                    <div class="time-small">07:00</div>
                </div>
                <div class="du-bao">
                    <div class="weather-icon">
                        <img src="../assets/images/Partly-cloudy.png" />
                    </div>
                    <div class="temperature">18°C</div>
                    <div class="time-small">10:00</div>
                </div>
                <div class="du-bao">
                    <div class="weather-icon">
                        <img src="../assets/images/Partly-cloudy.png" />
                    </div>
                    <div class="temperature">20°C</div>
                    <div class="time-small">17:00</div>
                </div>
                <div class="du-bao">
                    <div class="weather-icon">
                        <img src="../assets/images/Partly-cloudy.png" />
                    </div>
                    <div class="temperature">26°C</div>
                    <div class="time-small">12:00</div>
                </div>
                <div class="du-bao">
                    <div class="weather-icon">
                        <img src="../assets/images/Partly-cloudy.png" />
                    </div>
                    <div class="temperature">27°C</div>
                    <div class="time-small">07:00</div>
                </div>
                <div class="du-bao">
                    <div class="weather-icon">
                        <img src="../assets/images/Partly-cloudy.png" />
                    </div>
                    <div class="temperature">18°C</div>
                    <div class="time-small">10:00</div>
                </div>

            </div>


        </div>

        <!-- Services Section -->
        <div class="mt-3">
            <div class="title">{{ $t('service') }}</div>
            <div class="service-icons">
                <div class="service-item" v-for="(s, index) in services" :key="index">
                    <div class="service-icon">
                        <img :src="helper.getImageCMS(s.icon)" alt="Combo">
                    </div>
                    <div class="service-name">{{ s.title }}</div>
                </div>

            </div>
        </div>

        <!-- Tips Section -->
        <div class="tips-section rounded-4">
            <div class="mb-3 title">{{ $t('tips') }}</div>
            <div class="small text-muted">
                Sai Gon, also known as Ho Chi Minh City, is a vibrant and diverse destination for travellers. The city
                is renowned for its blend of French colonial architecture and modern skyscrapers, creating a unique
                atmosphere that is both historic and dynamic. In Sai Gon, you can visit landmarks such as the
                Independence Palace, Notre-Dame Cathedral Basilica, and the Central Post Office, all of which hold
                historical importance. Additionally, Sai Gon is famous for its bustling street markets where you can
                enjoy a variety of street food and shop for local souvenirs. With its rich cultural heritage and
                diversity, Sai Gon promises to offer you fascinating experiences.
                historical importance. Additionally, Sai Gon is famous for its bustling street markets where you can
                enjoy a variety of street food and shop for local souvenirs. With its rich cultural heritage and
                diversity, Sai Gon promises to offer you fascinating experiences.
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import { useHome } from "../composables/home";
import { useHelper } from "@/composables/helper";
const helper = useHelper();
const homeComposable = useHome();
const services = ref([])

const destination = ref([])
onBeforeMount(async () => {
    // destination.value = await homeComposable.onOpenDestinationModal();
    services.value = await homeComposable.getZonesByTypeDichVu();

    console.log(destination.value, 'destination.value')

})


</script>
<style scoped>
.service-icons {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;
    padding-bottom: 10px;
    scrollbar-width: none !important;
}

.service-icons::-webkit-scrollbar {
    height: 6px;
}

.service-icon img {
    width: 29px;
    height: 23px;
}

.service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    text-align: center;
    width: 130px;
}

</style>