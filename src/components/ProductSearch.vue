  <template>
    <div class="tour-card" v-if="product">
        <img :src="helper.getImageCMS(product.avatar)" alt="Inter Sweet Love" class="tour-image">
        <div class="tour-content">
            <h3 class="tour-title">{{ product.title }}</h3>
            <div class="tour-location tour-price">
                <div>
                    <span class="tour-booked">{{ product.viewCount }} Booked</span>
                </div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span class="rating-value">{{ product.rate }}</span>
                </div>
            </div>
            <div class="tour-price">
                <div>
                    <span class="price-text">From</span>
                    <span class="price-value">VND {{ product.price.toLocaleString("en-US", { useGrouping: true }) }}</span>
                    <span class="price-as-currency"></span>
                </div>

            </div>
            <div class="bieu-tuong">

                <div class="flight-icon">
                    <img src="../assets/images/airplane.png" />
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>

import { useHelper } from '../composables/helper';

const helper = useHelper();

//1. Khai bao cho toi 1 prop ten la product de toi truyen vao tu component cha
const props = defineProps({
    // Prop 'name' kiểu String và là bắt buộc
    product: {
        type: Object,
        required: true,
    },
});
</script>
<style scoped>
.prodcut-sp {
    padding: 30px 10px;
    display: grid;
    grid-template-columns: auto auto;
}

.tour-card {
    width: unset;
    padding: 0;
    height: 260px;
    position: relative;
}

.tour-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
}

.tour-title {
    font-size: 12px;
    font-weight: 600;
    color: #03294C;
    margin-bottom: 4px;
}

.card {
    margin-bottom: 0;
}
</style>