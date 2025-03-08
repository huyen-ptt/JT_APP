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
            <img class="d-flex icon-success pb-4" src="../assets/images/verify.png" />
            <div class="icon-success text-center title-sl">Password Reset Email Sent</div>
            <div class=" icon-success text-center dia-chi-product">Please check your email for password reset link.</div>
            <div class=" icon-success text-center dia-chi-product pb-4">This link is only valid for <b> 24 hours</b></div>

            <button type="submit" class="w-100 btn btn-lg btn-login">Sign In</button>


        </div>
    </div>

</template>
<script>
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