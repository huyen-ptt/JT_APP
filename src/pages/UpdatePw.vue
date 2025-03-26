<template>
    <div class="container forgot-password-container">
        <div class="top-bar-product p-4 bg-white title">
            <button class="back-button-product" @click="$router.go(-1)">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title-product">Update Password</h1>
            <button class="cart-button-product">&nbsp;</button>
        </div>

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

</template>
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