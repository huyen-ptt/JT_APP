<template>
    <div class="forgot-password-container">
  
        <HeaderTitle :title="$t('CONTACT_US_ACCOUNT')"></HeaderTitle>


        <div class="form-container m-3">
            <div>
                <div class="sz-big text-center">Joytime</div>
                <h1 class="calendar-day-header-booking text-center">Enter the email to reset password</h1>
            </div>

            <div class="mb-3">
                <label class="form-label">
                    Name<span class="required-mark">*</span>
                </label>
                <input type="text" class="form-control" placeholder="Your Name">

            </div>
            <div class="mb-3">
                <label class="form-label">
                    Email<span class="required-mark">*</span>
                </label>
                <input type="email" class="form-control input-login" placeholder="Your email">
            </div>
            <div class="mb-3">
                <label class="form-label">
                    Phone<span class="required-mark">*</span>
                </label>
                <input type="text" class="form-control" placeholder="Your Phone">

            </div>
            <div class="mb-3">
                <label class="form-label">
                    Message<span class="required-mark">*</span>
                </label>
                <textarea type="text" class="form-control" placeholder="Your message"></textarea>

            </div>


        </div>
        <div class="bottom-menu menu-search bo-goc">
            <router-link to="" class="btn-search "> <button class="search-button btn-search" id="search">
                    Send
                </button></router-link>
        </div>
    </div>

</template>
<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';

</script>
<style scoped>
.form-label {
    font-size: 14px;
    color: #8A929E;
    margin-bottom: 6px;
}

.required-mark {
    color: #dc3545;
    margin-left: 2px;
}

.form-select,
.form-control {
    background-color: #F5F7FA;
    border: 1px solid #EDF1F7;
    border-radius: 15px !important;
    font-size: 14px;
    padding: 10px 12px;
    font-weight: 400;
    color: #8A929E;
}

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