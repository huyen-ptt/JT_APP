<template>
    <div class="forgot-password-container">
      
        <HeaderTitle :title="$t('Checking_Your_Order')"></HeaderTitle>

        <div class="nd-checkout">
            <div class="form-container">
                <img class="d-flex icon-success pb-4" src="../assets/images/ss.png" />
                <div class="icon-success text-center title-sl">Thank you for your order</div>
                <div class=" icon-success text-center dia-chi-product  pb-4">Please check you email inbox for<br> more
                    information</div>

                <button type="submit" class="w-100 btn btn-lg btn-login">My order</button>


            </div>
        </div>
        <!-- <NoOrder/> -->
    </div>

</template>
<script setup>
import NoOrder from '../components/NoOrder.vue'
import HeaderTitle from '../components/HeaderTitle.vue';

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