<template>
    <div class="forgot-password-container">

        <HeaderTitle :title="$t('Forgot_Password')"></HeaderTitle>


        <div class="form-container m-3">
            <h1 class="form-title">{{ $t('Reset_Title_ForgotOp') }}</h1>

            <div class="mb-3">
                <label class="form-label title-con">{{ $t('Email_Label_ForgotOp') }}</label>
                <input type="email" class="form-control input-login" :placeholder="$t('Email_Placeholder_ForgotOp')">
            </div>

            <button type="submit" class="btn btn-continue">{{ $t('Continue_Button_ForgotOp') }}</button>

            <p class="form-title pt-3">{{ $t('Reset_Notice_ForgotOp') }}</p>
        </div>

        <Footer></Footer>

    </div>

</template>
<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';
import Footer from "@/components/Footer.vue";

</script>
<style scoped>
.form-container {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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