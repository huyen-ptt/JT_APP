<template>
    <div>
        <div class="top-bar-product p-4 bg-white title">
            <button class="back-button-product">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title-product">Checking Your Order</h1>
            <button class="cart-button-product">

            </button>
        </div>
        <div class="card">
            <Accordion value="0">
                <AccordionPanel class="mb-3" value="0">
                    <AccordionHeader>
                        <div class="promo-title pb-1">Cart Summary</div>
                    </AccordionHeader>
                    <AccordionContent>
                        <div class="container py-2">
                            <div class="bao-tourr">
                                <div class="p-3 ">
                                    <!-- Header -->
                                    <div class="d-flex gap-3 mb-4">
                                        <img src="../assets/images/10.jpg" alt="Tour food" class="tour-image">
                                        <div>
                                            <div class="service-date">Service date: 25/2/2025</div>

                                            <h2 class="news-title-blogg">Day tour | 3.5 hour explore Ha Noi Day tour |
                                            </h2>
                                            <div class="service-date pb-3 border-bottom">Noi Bai Airport to Ha Noi city
                                                center</div>
                                            <div class="price-info">
                                                <span class="ad">Adults x2</span>
                                                <span class="price-amount">VND 780,000</span>
                                            </div>
                                            <div class="price-info">
                                                <span class="ad">Child x2</span>
                                                <span class="price-amount">VND 420,000</span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Tour Specifications -->
                                    <div class="tour-specs">
                                        <div class="spec-row">
                                            <span class="spec-label">Departure time</span>
                                            <span class="spec-value">17:30</span>
                                        </div>
                                        <div class="spec-row">
                                            <span class="spec-label">Tour option</span>
                                            <span class="spec-value">Private tour</span>
                                        </div>
                                        <div class="spec-row">
                                            <span class="spec-label">Group size</span>
                                            <span class="spec-value">Group of 2-3 guests</span>
                                        </div>
                                    </div>

                                    <!-- Promotion Section -->
                                    <div class="promotion-section  border-top pt-3">
                                        <h3 class="promo-title pb-3">Promotion</h3>
                                        <div class="promo-input-group">
                                            <input type="text" class="promo-input input-login"
                                                placeholder="Enter promo code">
                                            <button class="use-code-btn">Use Code</button>
                                        </div>
                                    </div>
                                    <!-- <FastTrack /> -->
                                    <Accordion>
                                        <AccordionPanel value="4">
                                            <AccordionHeader class="p-0">
                                                <div class="service-details">
                                                    <h3 class="promo-title pb-1">For Fast Track Service<span
                                                            class="text-danger"> *</span>
                                                    </h3>
                                                    <p class="results-count-product">Please provide your desired service
                                                        details<br> to
                                                        confirm payment for your order</p>
                                                </div>
                                            </AccordionHeader>
                                            <AccordionContent class="p-0 servies-det">
                                                <div class="">

                                                    <div class="booking-form">
                                                        <!-- Service Date -->
                                                        <div class="d-flex justify-content-between">
                                                            <div class="title145 pb-2">
                                                                Service date: 25/2/2025
                                                            </div>
                                                            <img src="../assets/images/edit-2.png" alt=""
                                                                style="object-fit: contain;">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label class="form-label">
                                                                Flight number<span class="required-mark">*</span>
                                                            </label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Flight number">
                                                        </div>
                                                        <div class="form-label">Please provide your flight number for
                                                            your better experience</div>

                                                        <!-- Time Selection -->
                                                        <div class="row pb-3 border-bottom">
                                                            <div class="col-6">
                                                                <label class="form-label title-con">
                                                                    Hour<span class="required-mark">*</span>
                                                                </label>
                                                                <select class="form-select">
                                                                    <option value="">Select hour</option>
                                                                    <!-- Add hours 00-23 -->
                                                                    <option value="00">00</option>
                                                                    <option value="01">01</option>
                                                                    <!-- ... other hours ... -->
                                                                </select>
                                                            </div>
                                                            <div class="col-6">
                                                                <label class="form-label">
                                                                    Minute<span class="required-mark">*</span>
                                                                </label>
                                                                <select class="form-select">
                                                                    <option value="">Select minute</option>
                                                                    <!-- Add minutes 00-59 -->
                                                                    <option value="00">00</option>
                                                                    <option value="15">15</option>
                                                                    <option value="30">30</option>
                                                                    <option value="45">45</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <Accordion class="mt-3">
                                                            <div class="title-1477 pb-2">Companion information</div>
                                                            <AccordionPanel class="customer1" value="5">
                                                                <AccordionHeader class="p-0">
                                                                    <div class="service-details">
                                                                        <div class="title145">Customer 1<span
                                                                                class="text-danger"> *</span>
                                                                        </div>

                                                                    </div>
                                                                </AccordionHeader>
                                                                <AccordionContent class="p-0 servies-det">
                                                                    <div class="row mb-3">
                                                                        <div class="col-6">
                                                                            <label class="form-label">First Name</label>
                                                                            <input type="text" class="form-control"
                                                                                placeholder="Your First Name">
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <label class="form-label">Family
                                                                                Name</label>
                                                                            <input type="text" class="form-control"
                                                                                placeholder="Your Family Name">
                                                                        </div>
                                                                    </div>

                                                                    <!-- Nationality and Birthday -->
                                                                    <div class="row mb-3">
                                                                        <div class="col-6">
                                                                            <label
                                                                                class="form-label">Nationality</label>
                                                                            <select class="form-select">
                                                                                <option value="">Nationality</option>
                                                                                <!-- Add nationality options -->
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <label class="form-label">Birthday</label>
                                                                            <div class="position-relative">
                                                                                <input type="text" class="form-control"
                                                                                    placeholder="Birthday">
                                                                                <svg class="calendar-icon"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="16" height="16"
                                                                                    viewBox="0 0 24 24" fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-width="2">
                                                                                    <rect x="3" y="4" width="18"
                                                                                        height="18" rx="2" ry="2">
                                                                                    </rect>
                                                                                    <line x1="16" y1="2" x2="16" y2="6">
                                                                                    </line>
                                                                                    <line x1="8" y1="2" x2="8" y2="6">
                                                                                    </line>
                                                                                    <line x1="3" y1="10" x2="21"
                                                                                        y2="10"></line>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <!-- Passport Number -->
                                                                    <div class="mb-3">
                                                                        <label class="form-label">Passport
                                                                            number</label>
                                                                        <input type="text" class="form-control"
                                                                            placeholder="Passport number">
                                                                    </div>
                                                                </AccordionContent>
                                                            </AccordionPanel>
                                                        </Accordion>

                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionPanel>
                                    </Accordion>
                                    <!-- Service Details -->
                                    <!-- <div class="service-details">
                                        <h3 class="promo-title pb-1">Service Detail<span class="text-danger"> *</span>
                                        </h3>
                                        <p class="results-count-product">Please provide your desired service details to
                                            confirm payment for your order</p>
                                    </div> -->
                                    <!-- <Accordion>
                                        <AccordionPanel value="4">
                                            <AccordionHeader class="p-0">
                                                <div class="service-details">
                                                    <h3 class="promo-title pb-1">Service Detail<span
                                                            class="text-danger"> *</span>
                                                    </h3>
                                                    <p class="results-count-product">Please provide your desired service
                                                        details<br> to
                                                        confirm payment for your order</p>
                                                </div>
                                            </AccordionHeader>
                                            <AccordionContent class="p-0 servies-det">
                                                <div class="">
                                                    <div class="booking-form">
                                                        <div class="d-flex justify-content-between">
                                                            <div class="title145 pb-2">
                                                                Service date: 25/2/2025
                                                            </div>
                                                            <img src="../assets/images/edit-2.png" alt=""
                                                                style="object-fit: contain;">
                                                        </div>

                                                        <div class="row mb-3">
                                                            <div class="col-6">
                                                                <label class="form-label title-con">
                                                                    Hour<span class="required-mark">*</span>
                                                                </label>
                                                                <select class="form-select">
                                                                    <option value="">Select hour</option>
                                                                    <option value="00">00</option>
                                                                    <option value="01">01</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-6">
                                                                <label class="form-label">
                                                                    Minute<span class="required-mark">*</span>
                                                                </label>
                                                                <select class="form-select">
                                                                    <option value="">Select minute</option>
                                                                    <option value="00">00</option>
                                                                    <option value="15">15</option>
                                                                    <option value="30">30</option>
                                                                    <option value="45">45</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class="mb-3">
                                                            <label class="form-label">
                                                                Pick-up/ Drop-off Location<span
                                                                    class="required-mark">*</span>
                                                            </label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Enter Pick-up/ Drop-off Location">
                                                        </div>

                                                        <div class="mb-3">
                                                            <label class="form-label">
                                                                Pick-up/ Drop-off Location<span
                                                                    class="required-mark">*</span>
                                                            </label>
                                                            <div class="radio-group">
                                                                <label class="radio-button active">
                                                                    <input type="radio" name="locationType" checked>
                                                                    International
                                                                </label>
                                                                <label class="radio-button">
                                                                    <input type="radio" name="locationType">
                                                                    Domestic
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="mb-3">
                                                            <label class="form-label">
                                                                Flight number<span class="required-mark">*</span>
                                                            </label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Flight number">
                                                            <div class="helper-text">
                                                                Please provide your flight number for your better
                                                                experience...
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionPanel>
                                    </Accordion> -->

                                    <!-- Order Total -->

                                </div>
                                <div class="order-total border-top">
                                    <span class="total-label">Order Total</span>
                                    <span class="total-amount">VND 1,200,000</span>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel class="mb-3" value="1">
                    <AccordionHeader>
                        <div>
                            <div class="promo-title pb-1">Customer Infomation</div>
                            <div class="results-count-product">Please provide your desired service
                                details<br> to
                                confirm payment for your order</div>
                        </div>
                    </AccordionHeader>
                    <AccordionContent>
                        <form>
                            <!-- Name Fields -->
                            <div class="row mb-3">
                                <div class="col-6">
                                    <label class="form-label">
                                        First Name<span class="required-mark">*</span>
                                    </label>
                                    <input type="text" class="form-control" placeholder="Your First Name">
                                </div>
                                <div class="col-6">
                                    <label class="form-label">
                                        Family Name<span class="required-mark">*</span>
                                    </label>
                                    <input type="text" class="form-control" placeholder="Your Family Name">
                                </div>
                            </div>

                            <!-- Nationality -->
                            <div class="mb-3">
                                <label class="form-label">
                                    Nationality<span class="required-mark">*</span>
                                </label>
                                <select class="form-select">
                                    <option value="">Nationality</option>
                                    <option value="VN">Vietnam</option>
                                    <!-- Add other nationalities -->
                                </select>
                            </div>

                            <!-- Email -->
                            <div class="mb-3">
                                <label class="form-label">
                                    Email<span class="required-mark">*</span>
                                </label>
                                <input type="email" class="form-control" placeholder="Your email address">
                            </div>

                            <!-- Phone Number -->
                            <div class="mb-3">
                                <label class="form-label">
                                    Phone number<span class="required-mark">*</span>
                                </label>
                                <input type="tel" class="form-control col-7" placeholder="Enter your phone number">

                                <!-- <div class="phone-input-group d-flex gap-2">
                        <div class="country-code col-3">
                            <select class="form-select">
                                <option value="+84">
                                    <img src="../assets/images/artwork.png" class="flag-icon" alt="VN"> +84
                                </option>
                              
                            </select>
                        </div>
                        <input type="tel" class="form-control col-7" placeholder="Enter your phone number">
                    </div> -->
                            </div>

                            <!-- Stay in touch -->
                            <div class="mb-3">
                                <label class="price-value">Stay in touch</label>
                                <p class="text-muted small mb-2">Will you use a different phone number when traveling?
                                </p>
                                <div class="radio-group">
                                    <label class="radio-button active">
                                        <input type="radio" name="stayInTouch" checked>
                                        Yes
                                    </label>
                                    <label class="radio-button">
                                        <input type="radio" name="stayInTouch">
                                        No
                                    </label>
                                </div>
                            </div>

                            <!-- OTT App -->
                            <div class="mb-3">
                                <label class="form-label">Which App can we contact you through?</label>
                                <select class="form-select">
                                    <option value="">OTT App</option>
                                    <option value="whatsapp">WhatsApp</option>
                                    <option value="viber">Viber</option>
                                    <option value="telegram">Telegram</option>
                                </select>
                            </div>

                            <!-- Account Name -->
                            <div class="mb-3">
                                <label class="form-label">Account name on the OTT App</label>
                                <input type="text" class="form-control" placeholder="Your account name">
                            </div>
                        </form>
                    </AccordionContent>
                </AccordionPanel>

            </Accordion>
            <div class="rounded shadow-sm">
                <!-- Note Section -->
                <div class="mb-4  p-3 bg-white">
                    <h2 class="promo-title pb-2">Note & Other Request</h2>
                    <textarea class="form-control" rows="3" placeholder="Note"></textarea>
                </div>

                <!-- Payment Method Section -->
                <div class="mb-4 bg-white p-3">
                    <h2 class="promo-title  pb-2">Payment Method</h2>
                    <p class="tour-location">
                        Please enter your promotion code to receive a discount for your order
                    </p>

                    <div class="payment-options">
                        <button class="payment-option active">
                            <svg class="payment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg>
                            <span class="payment-label">Credit/Debit Card</span>
                        </button>

                        <button class="payment-option">
                            <svg class="payment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="3" y1="9" x2="21" y2="9"></line>
                                <path d="M8 13h.01"></path>
                                <path d="M12 13h.01"></path>
                                <path d="M16 13h.01"></path>
                            </svg>
                            <span class="payment-label">ATM Card/Bank Ac...</span>
                        </button>
                    </div>
                </div>

                <!-- Order Summary -->
                <div class="bg-white p-3">
                    <div class="results-count-product summary-row">
                        <span>Subtotal</span>
                        <span>VND 1,200,000</span>
                    </div>
                    <div class="results-count-product summary-row">
                        <span>Discount</span>
                        <span class="discount-amount">-VND 240,000</span>
                    </div>
                    <div class="total-row price-value">
                        <span>ORDER TOTAL</span>
                        <span>VND 960,000</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="bottom-menu menu-search d-flex bo-goc">
            <div class="">
                <div class="don-vi" id="clear-all">VND 960,000</div>
                <div class="price-text">~USD 41.2</div>
            </div>
            <div class="d-flex">

                <router-link to="/booking"> <button class="search-button" id="search">
                        Completed Order
                    </button></router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
// import FastTrack from '../components/FastTrack.vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
// import FastTrack from '../components/FastTrack.vue';
</script>
<style scoped>
.tour-image {
    width: 100px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
}

.booking-form {
    /* max-width: 500px; */
    /* padding: 20px; */
}

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
    border-radius: 15px;
    font-size: 14px;
    padding: 10px 12px;
    font-weight: 400;
    color: #8A929E;
}

.service-date {
    font-size: 14px;
    color: #333;
    margin-bottom: 16px;
}

.radio-group {
    display: flex;
    gap: 16px;
    margin: 10px 0;
    justify-content: space-between;

}

.radio-button {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border: 1px solid #8A929E;
    border-radius: 12px;
    cursor: pointer;
    width: 47%;
    transition: all 0.2s;
}

/* .radio-button.active {
    border-color: #8A929E;
} */

.radio-button input[type="radio"] {
    margin-right: 8px;
}

.helper-text {
    font-size: 12px;
    color: #8A929E;
    margin-top: 4px;
    font-weight: 400;
}

.form-control,
.form-select {
    background-color: #f8f9fa;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    padding: 10px 12px;
}

.section-title {
    font-size: 18px;
    font-weight: 600;
    color: #0a2463;
    margin-bottom: 20px;
}

.companion-section {
    background-color: #f8f9fa;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 16px;
}

.customer-dropdown {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.customer-dropdown-text {
    font-size: 16px;
    color: #333;
}


.calendar-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    pointer-events: none;
}

.dropdown-icon {
    width: 20px;
    height: 20px;
    color: #666;
}
</style>