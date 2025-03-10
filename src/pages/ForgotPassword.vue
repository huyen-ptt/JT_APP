<template>
    <div class="container forgot-password-container">
        <div class="top-bar-product p-4 bg-white title">
            <button class="back-button-product">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title-product">Forgot Password</h1>
            <button class="cart-button-product">

            </button>
        </div>

        <div class="form-container">
            <h1 class="form-title">Enter the email to reset password</h1>

            <div class="mb-3">
                <label class="form-label title-con">Email Address</label>
                <input type="email" class="form-control input-login" placeholder="Your email address">
            </div>

            <button type="submit" class="btn btn-continue">Continue</button>

            <p class="form-title pt-3">A reset link will be sent to your email address</p>
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