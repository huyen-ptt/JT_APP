<template>
    <div class=" forgot-password-container">
        <HeaderTitle :title="$t('UPDATE_PASSWORD_ACCOUNT')"></HeaderTitle>
        <div class="container">
            <div class="form-container">

                <div class="mb-3">
                    <label class="form-label title-con">Current Password</label>
                    <input type="password" class="form-control input-login" placeholder="Current Password">
                </div>
                <div class="mb-3">
                    <label class="form-label title-con">Password
                    </label>
                    <input type="password" class="form-control input-login" placeholder="Password">
                </div>
                <div class="mb-3">
                    <label class="form-label title-con">Password Confirmation</label>
                    <input type="password" class="form-control input-login" placeholder="Password Confirmation">
                </div>

            </div>
            <div class="bottom-menu menu-search bo-goc">
                <router-link to="" class="btn-search "> <button class="search-button btn-search" id="search">
                        Update Password
                    </button></router-link>
            </div>
        </div>
    </div>

</template>
<script setup>
import HeaderTitle from '../components/HeaderTitle.vue';
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