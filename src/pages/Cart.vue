<template>
    <div>

        <HeaderTitle :title="$t('cart')"></HeaderTitle>

        <div class="body-cart">
            <div class="select-all-container d-flex align-items-center">
                <input type="checkbox" class="custom-checkbox form-check-input" id="selectAll">
                <label class="select-all-text mb-0" for="selectAll">{{ $t('select_all') }}</label>
            </div>
            <div class="p-3">
                <div class="d-flex justify-content-center align-items-center">
                    <div class="checkbox-container me-2">
                        <input type="checkbox" class="custom-checkbox form-check-input" id="selectItem">
                    </div>
                    <div class="news-card-blogg border">

                        <div class="pe-3">
                            <img src="../assets/images/img11.jpg" alt="Da Nang ancient town" class="img-cart" />
                        </div>
                        <div class="news-content-blogg">
                            <h3 class="news-title-blogg">What to Do in Da Nang in 2 What to Do in Da Nang</h3>
                            <p class="news-description-cart">Do not worry if you only have limited time in Da Nang,
                                we
                                suggest...</p>
                            <div class="news-meta-blogg">
                                <div class="">
                                    <div class="d-flex flex-column">
                                        <!-- Guest Select -->
                                        <div class="guest-select mb-2" @click="visibleBottom = true">
                                            04 Guest
                                            <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                            <Drawer v-model:visible="visibleBottom" header="Select quantity"
                                                position="bottom" style="height: auto" class="bo-goc so-luong-mua">
                                                <div class="quantity-selector-so-luong">

                                                    <!-- Adult Section -->
                                                    <div
                                                        class="price-item-so-luong d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <div class="price-label-so-luong">Adult</div>
                                                            <div class="price-amount-so-luong">VND 320,000</div>
                                                            <div class="price-text">~USD 41.2/Unit</div>
                                                        </div>
                                                        <div class="quantity-controls-so-luong">
                                                            <button class="quantity-btn-so-luong"
                                                                @click="updateQuantity('adult', -1)"
                                                                :disabled="adultQuantity === 0">−</button>
                                                            <span class="quantity-display-so-luong">{{ adultQuantity
                                                                }}</span>
                                                            <button class="quantity-btn-so-luong"
                                                                @click="updateQuantity('adult', 1)">+</button>
                                                        </div>
                                                    </div>

                                                    <!-- Child Section -->
                                                    <div
                                                        class="price-item-so-luong d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <div class="price-label-so-luong">Child</div>
                                                            <div class="price-amount-so-luong">VND 320,000</div>
                                                            <div class="price-text">~USD 27.2/Unit</div>
                                                        </div>
                                                        <div class="quantity-controls-so-luong">
                                                            <button class="quantity-btn-so-luong"
                                                                @click="updateQuantity('child', -1)"
                                                                :disabled="childQuantity === 0">−</button>
                                                            <span class="quantity-display-so-luong">{{ childQuantity
                                                                }}</span>
                                                            <button class="quantity-btn-so-luong"
                                                                @click="updateQuantity('child', 1)">+</button>
                                                        </div>

                                                    </div>
                                                    <div class="gap-3 d-flex pt-4 pb-2">
                                                        <router-link to="" class="btn-search cancle"> <button
                                                                class="search-button btn-search" id="search">
                                                                Cancel
                                                            </button></router-link>
                                                        <router-link to="" class="btn-search "> <button
                                                                class="search-button btn-search" id="search">
                                                                Confirm
                                                            </button></router-link>
                                                    </div>
                                                </div>
                                            </Drawer>
                                        </div>

                                        <!-- Price Information -->
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p class="price-vnd">VND 1,200,000</p>
                                                <p class="price-usd">~ USD 34</p>
                                            </div>

                                            <!-- Delete Button -->

                                        </div>

                                    </div>

                                </div>
                                <button class="delete-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="checkbox-container me-2">
                        <input type="checkbox" class="custom-checkbox form-check-input" id="selectItem">
                    </div>
                    <div class="news-card-blogg border">

                        <div class="pe-3">
                            <img src="../assets/images/3.png" alt="Da Nang ancient town" class="img-cart" />
                        </div>
                        <div class="news-content-blogg">
                            <h3 class="news-title-blogg">What to Do in Da Nang in 2 What to Do in Da Nang</h3>
                            <p class="news-description-cart">Do not worry if you only have limited time in Da Nang,
                                we
                                suggest...</p>
                            <div class="news-meta-blogg">
                                <div class="">
                                    <div class="d-flex flex-column">
                                        <!-- Guest Select -->
                                        <div class="guest-select mb-2">
                                            04 Guest
                                            <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>

                                        <!-- Price Information -->
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p class="price-vnd">VND 1,200,000</p>
                                                <p class="price-usd">~ USD 34</p>
                                            </div>

                                            <!-- Delete Button -->

                                        </div>

                                    </div>

                                </div>
                                <button class="delete-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="checkbox-container me-2">
                        <input type="checkbox" class="custom-checkbox form-check-input" id="selectItem">
                    </div>
                    <div class="news-card-blogg border">

                        <div class="pe-3">
                            <img src="../assets/images/img11.jpg" alt="Da Nang ancient town" class="img-cart" />
                        </div>
                        <div class="news-content-blogg">
                            <h3 class="news-title-blogg">What to Do in Da Nang in 2 What to Do in Da Nang</h3>
                            <p class="news-description-cart">Do not worry if you only have limited time in Da Nang,
                                we
                                suggest...</p>
                            <div class="news-meta-blogg">
                                <div class="">
                                    <div class="d-flex flex-column">
                                        <!-- Guest Select -->
                                        <div class="guest-select mb-2">
                                            04 Guest
                                            <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>

                                        <!-- Price Information -->
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p class="price-vnd">VND 1,200,000</p>
                                                <p class="price-usd">~ USD 34</p>
                                            </div>

                                            <!-- Delete Button -->

                                        </div>

                                    </div>

                                </div>
                                <button class="delete-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="checkbox-container me-2">
                        <input type="checkbox" class="custom-checkbox form-check-input" id="selectItem">
                    </div>
                    <div class="news-card-blogg border">

                        <div class="pe-3">
                            <img src="../assets/images/7.png" alt="Da Nang ancient town" class="img-cart" />
                        </div>
                        <div class="news-content-blogg">
                            <h3 class="news-title-blogg">What to Do in Da Nang in 2 What to Do in Da Nang</h3>
                            <p class="news-description-cart">Do not worry if you only have limited time in Da Nang,
                                we
                                suggest...</p>
                            <div class="news-meta-blogg">
                                <div class="">
                                    <div class="d-flex flex-column">
                                        <!-- Guest Select -->
                                        <div class="guest-select mb-2">
                                            04 Guest
                                            <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>

                                        <!-- Price Information -->
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p class="price-vnd">VND 1,200,000</p>
                                                <p class="price-usd">~ USD 34</p>
                                            </div>

                                            <!-- Delete Button -->

                                        </div>

                                    </div>

                                </div>
                                <button class="delete-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="checkbox-container me-2">
                        <input type="checkbox" class="custom-checkbox form-check-input" id="selectItem">
                    </div>
                    <div class="news-card-blogg border">

                        <div class="pe-3">
                            <img src="../assets/images/8.png" alt="Da Nang ancient town" class="img-cart" />
                        </div>
                        <div class="news-content-blogg">
                            <h3 class="news-title-blogg">What to Do in Da Nang in 2 What to Do in Da Nang</h3>
                            <p class="news-description-cart">Do not worry if you only have limited time in Da Nang,
                                we
                                suggest...</p>
                            <div class="news-meta-blogg">
                                <div class="">
                                    <div class="d-flex flex-column">
                                        <!-- Guest Select -->
                                        <div class="guest-select mb-2">
                                            04 Guest
                                            <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>

                                        <!-- Price Information -->
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p class="price-vnd">VND 1,200,000</p>
                                                <p class="price-usd">~ USD 34</p>
                                            </div>

                                            <!-- Delete Button -->

                                        </div>

                                    </div>

                                </div>
                                <button class="delete-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
        <div class="bottom-menu menu-search d-flex bo-goc">
            <div class="d-flex">
                <div class="don-vi align-items-center" id="clear-all">USD 64.6</div>
            </div>
            <div class="d-flex">

                <router-link to="/checkout"> <button class="search-button" id="search">
                    {{ $t('completed_order') }}
                    </button></router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import HeaderTitle from '../components/HeaderTitle.vue';
import Drawer from 'primevue/drawer';
const visibleBottom = ref(false);
const adultQuantity = ref(4);
const childQuantity = ref(0);

// Function to update quantities
const updateQuantity = (type, change) => {
    if (type === 'adult') {
        const newQuantity = adultQuantity.value + change;
        if (newQuantity >= 0) {
            adultQuantity.value = newQuantity;
        }
    } else if (type === 'child') {
        const newQuantity = childQuantity.value + change;
        if (newQuantity >= 0) {
            childQuantity.value = newQuantity;
        }
    }
};
</script>
<style></style>