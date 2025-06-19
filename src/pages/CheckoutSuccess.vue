<template>
    <div class="forgot-password-container">
    <HeaderTitle :title="$t('Checking_Your_Order')"></HeaderTitle>

    <div class="nd-checkout">
        <div class="form-container">
            <img class="d-flex icon-success pb-4" src="/images/ss.png" />
            <div class="icon-success text-center title-sl">{{ $t('Thank_You_For_Your_Order') }}</div>
            <div class="icon-success text-center dia-chi-product pb-4">
                {{ $t('Please_Check_Your_Email') }}
            </div>
            <button type="button" class="w-100 btn btn-lg btn-login" @click="redirectMyOrder()">
                {{ $t('My_Order') }}
            </button>
        </div>
    </div>
</div>

</template>
<script setup>
import NoOrder from '../components/NoOrder.vue'
import { RouterLink, useRouter } from 'vue-router'
import HeaderTitle from '../components/HeaderTitle.vue';
const router = useRouter()

const redirectMyOrder = () => {
    router.push('/myorder')
}

</script>
<style scoped>
/* 
.forgot-password-container {
     margin: 0 auto;
    padding: 20px;
} */
.form-container {
    border-radius: 10px;
    padding: 20px;
}

.back-arrow {
    color: #333;
    font-size: 20px;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 15px;
}

.form-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    color: #03294C;

}


.form-control {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
}



.btn-continue {
    width: 100%;
    padding: 12px;
    background-color: #e7eaf4;
    border: none;
    border-radius: 8px;
    color: #B3BBC7;
    font-weight: 500;
}
</style>