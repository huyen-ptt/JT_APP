<template>
    <div class="forgot-password-container">
        <HeaderTitle :title="$t('Forgot_Password')"></HeaderTitle>
        <div class="container">
            <div class="form-container">
                <img class="d-flex icon-success pb-4" width="50" src="/images/verify.png" />
                <div class="icon-success text-center title-sl">
                    {{ $t('Password_Reset_Email_Sent_SS') }}
                </div>
                <div class="icon-success text-center dia-chi-product">
                    {{ $t('Password_Reset_Check_Email_SS') }}
                </div>
                <div class="icon-success text-center dia-chi-product pb-4" v-html="$t('Password_Reset_Valid_Time_SS')">
                </div>
                <router-link to="/signin"> <button type="submit" class="w-100 btn btn-lg btn-login">
                        {{ $t('Password_Reset_Sign_In_Button_SS') }}
                    </button></router-link>
            </div>
        </div>
    </div>

</template>
<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';

</script>
<style scoped>
/* 
.forgot-password-container {
     margin: 0 auto;
    padding: 20px;
} */
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