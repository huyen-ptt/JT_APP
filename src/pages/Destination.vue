<template>
    <div class="bg-white pb-3" v-if="currentDestinationSelected">
       
        <HeaderTitle :title="currentDestinationSelected?.name"></HeaderTitle>

        <!-- Main Image Slider -->
        <div class="container">
            <div class="">
                <img :src="helper.getImageCMS(currentDestinationSelected?.avatar)" class="d-block w-100 img-des"
                    alt="Ho Chi Minh City Night Scene">
            </div>



            <!-- Weather Section -->
            <div class="weather-section mt-3 mb-3 rounded-4">
                <div class="d-flex gap-3 text-center recently-carousel">
                    <div class="du-bao" v-for="db in currentDestinationSelected?.weatherData.weekWeatherData">
                        <div class="weather-icon">
                            <img width="50" :src="db.icon" />
                        </div>
                        <div class="temperature">{{ db.max }}°C</div>
                        <div class="time-small">{{ db.time }}</div>
                    </div>


                </div>


            </div>

            <!-- Services Section -->
            <div class="mt-4">
                <div class="title mb-1">{{ $t('service') }}</div>
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
                <div class="small text-muted" v-html="currentDestinationSelected.content">
                </div>
            </div>
        </div>
        <Footer></Footer>

    </div>

</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import Footer from "@/components/Footer.vue";
import { useHome } from "../composables/home";
import { useHelper } from "@/composables/helper";
import { useDestination } from "../composables/destination";
import axios from "axios";
import HeaderTitle from '../components/HeaderTitle.vue';

const helper = useHelper();
const homeComposable = useHome();
const destinationComposable = useDestination();
const services = ref([])
const currentDestinationSelected = ref(null);



const destination = ref([])


const onLoadDestination = async () => {
    const response = await destinationComposable.getZoneById();
    if (response) {
        currentDestinationSelected.value = response.data;
        if (currentDestinationSelected.value.googleMapCrood) {
            currentDestinationSelected.value.weatherData = null;
            let splited = currentDestinationSelected.value.googleMapCrood.split("-");
            if (splited.length == 2) {
                let latitude = splited[0];
                let longtitude = splited[1];

                //Goi API lay thong tin thoi tiet
                const urlApiWeatherData = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&current=apparent_temperature,is_day,weather_code&daily=weather_code,apparent_temperature_max,apparent_temperature_min&timezone=Asia%2FBangkok`;
                axios.get(urlApiWeatherData).then((response) => {
                    currentDestinationSelected.value.weatherData = response.data;
                    // console.log(currentDestinationSelected.value.weatherData);
                    if (currentDestinationSelected.value.weatherData) {
                        let weekWeatherData = [];
                        let numberOfDay =
                            currentDestinationSelected.value.weatherData.daily.time.length;
                        for (let i = 0; i < numberOfDay; i++) {
                            let d = {
                                weatherCode:
                                    currentDestinationSelected.value.weatherData.daily.weather_code[i],
                                time: helper.convertDateString(
                                    currentDestinationSelected.value.weatherData.daily.time[i]
                                ),
                                max:
                                    currentDestinationSelected.value.weatherData.daily
                                        .apparent_temperature_max[i],
                                min:
                                    currentDestinationSelected.value.weatherData.daily
                                        .apparent_temperature_min[i],
                                icon: helper.getWeatherIcon(
                                    currentDestinationSelected.value.weatherData.daily.weather_code[i],
                                    1
                                ),
                            };
                            weekWeatherData.push(d);
                        }
                        currentDestinationSelected.value.weatherData.weekWeatherData = weekWeatherData;
                    }
                });


                console.log(currentDestinationSelected.value);
            }
        }
    }
}


onBeforeMount(async () => {
    // destination.value = await homeComposable.onOpenDestinationModal();
    services.value = await homeComposable.getZonesByTypeDichVu();
    await onLoadDestination();


})


</script>
<style scoped>
.service-icons {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;
    padding-bottom: 16px;
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