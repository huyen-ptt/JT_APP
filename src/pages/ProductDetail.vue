<template>
    <div class="product-containerr" v-if="productDetail">
        <!-- Main image -->
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="product-slider position-relative">
                        <swiper :modules="[Autoplay, Navigation, Pagination]" :slides-per-view="1" :loop="true"
                            :autoplay="{ delay: 3000 }" :navigation="true" :pagination="{ clickable: true }"
                            class="mySwiper">
                            <swiper-slide v-for="(image, index) in productDetail.gallary" :key="index">
                                <img :src="helper.getImageCMS(image)" class="d-block w-100"
                                    style="height: 280px; object-fit: cover;">
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="position-absolute start-0 translate-middle-y p-3 icon">
                        <button class="back-button-product" @click="$router.go(-1)">
                            <i class="fas fa-arrow-left" style="color: white;"></i>
                        </button>
                    </div>
                    <div class="position-absolute end-0 translate-middle-y p-3 icon">
                        <img height="30" src="../assets/images/shopping-cart-w.png" />
                    </div>
                </div>

                <!-- <div class="carousel-item">
                    <img src="../assets/images/img11.jpg" alt="Fansipan Temple Complex" class="d-block w-100"
                        style="height: 280px; object-fit: cover;">
                    <div class="position-absolute start-0 translate-middle-y p-3 icon">
                        <button class="back-button-product">
                            <i class="fas fa-arrow-left" style="color: white;"></i>
                        </button>
                    </div>
                    <div class="position-absolute end-0 translate-middle-y p-3 icon">
                        <img height="30" src="../assets/images/shopping-cart-w.png" />
                    </div>
                </div> -->
            </div>

            <!-- Controls -->
            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> -->
        </div>

        <!-- Title section -->
        <div class="p-3">
            <div class=" title-detail">{{ productDetail.title }}</div>
            <div class="d-flex align-items-center mt-1 dia-chi-product justify-content-between">
                <div> <i class="fas fa-map-marker-alt location-dot"></i>
                    <span>{{ productDetail.location }} | {{ productDetail.totalSale }} {{ $t('BOOKED') }}
                    </span>
                </div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span class="rating-value">{{ productDetail.rateAVG.toFixed(2) }}</span>
                </div>

            </div>
        </div>

        <div className="container-fluid p-0">
            <ul className="nav nav-tabs custom-tabs justify-content-center" id="productTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active custom-tab-link" id="product-detail-tab" data-bs-toggle="tab"
                        data-bs-target="#product-detail" type="button" role="tab" aria-controls="product-detail"
                        aria-selected="true">
                        {{ $t('PRODUCT_DETAIL') }}
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custom-tab-link" id="description-tab" data-bs-toggle="tab"
                        data-bs-target="#description" type="button" role="tab" aria-controls="description"
                        aria-selected="false">
                        {{ $t('DESCRIPTION') }}
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custom-tab-link" id="terms-tab" data-bs-toggle="tab"
                        data-bs-target="#terms" type="button" role="tab" aria-controls="terms" aria-selected="false">
                        {{ $t('TERM_AND_CONDITIONS') }}
                    </button>
                </li>
            </ul>

            <div className="tab-content custom-tab-content" id="productTabsContent">
                <div className="tab-pane fade show active p-3" id="product-detail" role="tabpanel"
                    aria-labelledby="product-detail-tab">
                    <p className="mb-3 custom-paragraph" v-html="productDetail.content"></p>


                </div>
                <div className="tab-pane fade p-3" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <p className="mb-3 custom-paragraph" v-html="productDetail.description">

                    </p>

                </div>
                <div className="tab-pane fade p-3" id="terms" role="tabpanel" aria-labelledby="terms-tab">

                    <p className="mb-3 custom-paragraph" v-for="n in productDetail.policies" :key="n.tieuDe"
                        v-html="n.noiDung">

                    </p>
                </div>
            </div>
        </div>
        <!-- Ha Noi Station -->
        <div class="border-top p-3">
            <div class="-flex justify-content-between align-items-center">
                <h2 class="title-map">{{ productDetail.location }}</h2>
                <!-- <i class="fas fa-chevron-down" style="font-size: 20px;"></i> -->
            </div>
            <div>
                <div class="position-relative h-100">
                    <div className="position-relative mt-3" style="height: 300px;">
                        <iframe :src="productDetail.locationIframe" width="100%" height="100%" allowFullScreen={false}
                            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                </div>
            </div>
        </div>
        <div class="container-fluid p-4 review-product">
            <!-- Rating Header -->
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="d-flex align-items-center gap-4">
                    <h2 class="display-6 fw-bold mb-0 so-review">{{ productDetail.rateAVG.toFixed(1) }}</h2>
                    <div class="d-flex text-warning">
                        <i v-for="n in Math.floor(productDetail.rateAVG)" :key="n" class="fas fa-star"
                            style="font-size: 24px;"></i>
                        <i v-if="productDetail.rateAVG % 1 >= 0.5" class="fas fa-star-half-alt"
                            style="font-size: 24px;"></i>
                    </div>
                </div>

                <a href="#" class="text-primary text-decoration-none view-all">
                    {{ $t('VIEW_All') }}
                </a>
            </div>

            <div class="review-container">
                <!-- Review Quote -->
                <div class="nd-rv" v-for="r in productDetail.reviews" :key="r">
                    <div class="mb-4 border-bottom">
                        <div class="position-relative d-flex pb-3">
                            <div>
                                <img class="rounded-circle" width="20" src="../assets/images/phay.png" />


                            </div>
                            <div>
                                <p class="ms-4 mb-1 text-rv" style="font-size: 14px;"
                                    v-html="r.isExpanded ? r.content : (r.content?.slice(0, 50) + '...')"></p>
                                <a v-if="r.content?.length > 100" href="#" class="ms-4 read-more-pr"
                                    style="font-size: 14px;" @click.prevent="toggleReadMore(r)">
                                    {{ r.isExpanded ? $t('READ_LESS') : $t('READ_MORE') }}
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- User Profile -->
                    <div class="d-flex align-items-center gap-2 mb-4">
                        <!-- <img src="../assets/images/10.jpg" alt="Tanaka Yuki" class="rounded-circle" width="40"
                            height="40" /> -->
                        <img class="rounded-circle" width="40" height="40" v-if="r.avatar" :src="r.avatar" />
                        <img class="rounded-circle" width="40" height="40" v-else
                            src="../assets/images/icon-user.png" />
                        <div>
                            <p class="mb-0 name-rv">{{ r.userName }}</p>
                            <div class="d-flex text-warning bao-sao">
                                <i class="fas fa-star" v-for="i in r.startNumber" style="font-size: 14px;"></i>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        <div class="recently-container p-4">
            <div class="recently-header">
                <h2 class="promo-title"> {{ $t('YOU_MIGHT_ALSO_LIKE') }}</h2>

            </div>

            <div class="recently-carousel">
                <!-- Tour Card 1 -->
                <div class="tour-card">
                    <img src="../assets/images/anh-1.png" alt="Inter Sweet Love" class="tour-image">
                    <div class="tour-content">
                        <h3 class="tour-title">Day tour | 3.5 Hours explore Hanoi Street food</h3>
                        <div class="tour-location tour-price">
                            <div>
                                <i class="fas fa-map-marker-alt location-dot"></i>
                                <span class="dia-diem">Ha Noi</span>
                                <span class="tour-booked">40 Booked</span>
                            </div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-value">4.5</span>
                            </div>
                        </div>
                        <div class="tour-price">
                            <div>
                                <span class="price-text">From</span>
                                <span class="price-value">~ USD 34</span>
                            </div>

                        </div>
                        <div class="bieu-tuong-gg">

                            <div class="flight-icon">
                                -50%
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tour Card 2 -->
                <div class="tour-card">
                    <img src="../assets/images/2.png" alt="Inter Sweet Love" class="tour-image">
                    <div class="tour-content">
                        <h3 class="tour-title">Day tour | 3.5 Hours explore Hanoi Street food</h3>
                        <div class="tour-location tour-price">
                            <div>
                                <i class="fas fa-map-marker-alt location-dot"></i>
                                <span class="dia-diem">Ha Noi</span>
                                <span class="tour-booked">40 Booked</span>
                            </div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-value">4.5</span>
                            </div>
                        </div>
                        <div class="tour-price">
                            <div>
                                <span class="price-text">From</span>
                                <span class="price-value">~ USD 34</span>
                            </div>

                        </div>
                        <div class="bieu-tuong">

                            <div class="flight-icon">
                                <img src="../assets/images/airplane.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tour-card">
                    <img src="../assets/images/8.png" alt="Inter Sweet Love" class="tour-image">
                    <div class="tour-content">
                        <h3 class="tour-title">Day tour | 3.5 Hours explore Hanoi Street food</h3>
                        <div class="tour-location tour-price">
                            <div>
                                <i class="fas fa-map-marker-alt location-dot"></i>
                                <span class="dia-diem">Ha Noi</span>
                                <span class="tour-booked">40 Booked</span>
                            </div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span class="rating-value">4.5</span>
                            </div>
                        </div>
                        <div class="tour-price">
                            <div>
                                <span class="price-text">From</span>
                                <span class="price-value">~ USD 34</span>
                            </div>

                        </div>
                        <div class="bieu-tuong">

                            <div class="flight-icon">
                                <img src="../assets/images/airplane.png" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div class="bottom-menu menu-search d-flex ">
            <div class="d-flex">
                <div class="don-vi align-items-center" id="clear-all">USD</div>
                <div class="price-pr">---</div>
            </div>
            <div class="d-flex">
                <div class="gio-hang-pr">
                    <img src="../assets/images/shopping-cart.png" />
                </div>
                <router-link> <button label="Show" @click="visible = true" class="search-button" id="search">
                        {{ $t('BUY_NOW') }}
                    </button></router-link>
                <Dialog v-model:visible="visible" modal maximizable class="modal-order" :style="{ width: '50vw' }"
                    :breakpoints="{ '1199px': '75vw', '575px': '100vw' }">
                    <div id="app" class="app-container">
                        <!-- Header -->
                        <div class="d-flex justify-content-between align-items-center p-3">

                            <button class="reset-btn-booking" @click="resetSelection">
                                <i class="fas fa-redo-alt"></i> Reset Selection
                            </button>
                        </div>

                        <!-- Main Content -->
                        <div class="content-wrapper-booking p-3">
                            <!-- Ticket cards with accordion -->
                            <div v-for="(ticket, index) in productDetail.productChilds" :key="index"
                                class="ticket-card-booking p-4 mb-3">
                                <div class="news-title-blogg mb-2">{{ ticket.title }}</div>
                                <div class="see-detail-booking mb-2" @click="visibleBottom = true">
                                    See detail <i class="fa-solid fa-chevron-down"></i>
                                    <Drawer v-model:visible="visibleBottom" header="Detail" position="bottom"
                                        style="height: auto" class="bo-goc so-luong-mua">
                                        <div class="container detail-see pb-4">
                                            <div class="tour-card-see-detail">
                                                <h2 class="tour-title-see-detail">{{ ticket.title }}</h2>

                                                <div class="price-text-see-detail pb-3">
                                                    <span class="me-1">From</span> <span
                                                        class="price-value-booking"><span class="me-1">USD</span>{{
                                                            (ticket.price / currentfCurrency.exchange)
                                                                .toFixed(1)
                                                                .toLocaleString("en-US")
                                                        }}</span>
                                                </div>

                                                <p class="dia-chi-product" v-html="ticket.description">

                                                </p>

                                            </div>
                                        </div>
                                        <div class="bottom-menu menu-search bo-goc " @click="visibleBottom = false">
                                            <router-link to="" class="btn-search "> <button
                                                    class="search-button btn-search" id="search">
                                                    OK
                                                </button></router-link>
                                        </div>
                                    </Drawer>
                                </div>
                                <div class="d-flex justify-content-between align-items-center  pb-3 border-bottom">
                                    <div class="price-booking">
                                        From <span class="price-value-booking"> {{ ticket.price.toLocaleString()
                                            }}</span>
                                        <div class="packages-count-booking">~ USD {{
                                            (ticket.price / currentfCurrency.exchange)
                                                .toFixed(1)
                                                .toLocaleString("en-US")
                                        }}</div>

                                    </div>
                                    <button class="book-btn-booking"
                                        @click="toggleBookingAccordion(ticket)">Book</button>
                                </div>

                                <!-- Accordion content - appears when expanded -->
                                <div v-if="ticket.isActive" class="booking-accordion-content mt-3">
                                    <!-- Date Selection Card -->
                                    <div class="date-card-booking">
                                        <div class="date-card-title-booking">Select Date</div>
                                        <div class="calendar-nav-container-booking">
                                            <button class="calendar-nav-booking" @click="prevMonth">
                                                <i class="fas fa-chevron-left"></i>
                                            </button>
                                            <div class="calendar-month-header-booking">{{ currentMonth }}/{{ currentYear
                                            }}</div>
                                            <button class="calendar-nav-booking" @click="nextMonth">
                                                <i class="fas fa-chevron-right"></i>
                                            </button>
                                        </div>

                                        <div class="calendar-grid-booking">
                                            <div class="calendar-day-header-booking"
                                                v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                                                :key="day">
                                                {{ day }}
                                            </div>
                                            <div v-for="n in firstDayOfMonth" :key="'empty-' + n"></div>
                                            <div v-for="day in daysInMonth" :key="day" class="calendar-day-booking"
                                                :class="{ selected: isSelectedDate(day, index), disabled: isDisabledDate(day) }"
                                                @click="selectDate(day, index)">
                                                {{ day }}
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Option Selection - Đã chuyển thành dropdown -->
                                    <!-- <div class="section-item-booking">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="section-title-booking">Option</div>
                                            <div>
                                                <a href="#" class="add-btn-booking"
                                                    @click.prevent="toggleOptionDropdown(index)"
                                                    v-if="!ticket.selectedOption">
                                                    Add Option
                                                </a>
                                                <div v-else class="selected-option-display"
                                                    @click="toggleOptionDropdown(index)">
                                                    {{ ticket.selectedOption === 'over-week' ? 'Over the week' :
                                                        'Weekends and holidays'
                                                    }}
                                                    <i class="fas fa-chevron-down ml-2"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div v-if="ticket.showOptionDropdown" class="option-dropdown-booking mt-2">
                                            <div class="option-btn-container-booking">
                                                <button class="option-btn-booking"
                                                    :class="{ 'selected': tempSelectedOption === 'over-week' }"
                                                    @click="selectTempOption('over-week')">
                                                    Over the week
                                                </button>
                                                <button class="option-btn-booking"
                                                    :class="{ 'selected': tempSelectedOption === 'weekends' }"
                                                    @click="selectTempOption('weekends')">
                                                    Weekends and holidays
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="section-item-booking">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="section-title-booking">Guest</div>
                                            <a href="#" class="add-btn-booking"
                                                @click.prevent="toggleGuestDropdown(index)">
                                                Add Guest
                                            </a>
                                        </div>
                                        <div v-if="ticket.guestSelected" class="selected-guest-display mt-2"
                                            @click="toggleGuestDropdown(index)">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <div v-if="ticket.guests.adult > 0">Adult: {{ ticket.guests.adult }}
                                                    </div>
                                                    <div v-if="ticket.guests.child > 0">Child: {{ ticket.guests.child }}
                                                    </div>
                                                </div>
                                                <i class="fas fa-chevron-down"></i>
                                            </div>
                                        </div>

                                        <div v-if="ticket.showGuestDropdown" class="guest-dropdown-booking mt-2">
                                            <div>
                                                <div class="guest-item-booking border-bottom">
                                                    <div class="">

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

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div> -->

                                    <Accordion value="0">

                                        <AccordionPanel value="1">
                                            <div>
                                                <AccordionHeader class="" style="width: 89%;">
                                                    Option
                                                </AccordionHeader>
                                                <AccordionContent  v-for="option in currentProductOptions" :key="option">
                                                    <div class="section-title-booking pb-2">{{ option.zoneParent.name }}
                                                    </div>
                                                    <div class="option-btn-booking1" v-for="child in option.zoneChilds"
                                                        :key="child">
                                                        {{ child.name }}
                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </AccordionPanel>
                                        <!-- <AccordionPanel value="2">
                                            <div  v-for="option in currentProductOptions" :key="option">
                                                <AccordionHeader>
                                                    <div class="section-title-booking">Guest
                                                    </div>
                                                </AccordionHeader>
                                                <AccordionContent>
                                                    <div class="guest-dropdown-booking mt-2">
                                                        <div>
                                                            <div v-for="child in option.combinations" :key="child"
                                                                class="guest-item-booking border-bottom">
                                                                <div class="">
                                                                    <div
                                                                        class="price-item-so-luong d-flex justify-content-between align-items-center">
                                                                        <div v-if="child.priceEachNguoiLon">
                                                                            <div class="price-label-so-luong">Adult
                                                                            </div>
                                                                            <div class="price-amount-so-luong">VND {{
                                                                                child.priceEachNguoiLon.toLocaleString()
                                                                                }}
                                                                            </div>
                                                                            <div class="price-text">~USD {{
                                                                                (child.priceEachNguoiLon /
                                                                                    currentfCurrency.exchange)
                                                                                    .toFixed(1)
                                                                                    .toLocaleString("en-US")
                                                                                }}
                                                                            </div>
                                                                        </div>

                                                                        <div class="quantity-controls-so-luong">
                                                                            <button class="quantity-btn-so-luong"
                                                                                @click="decreaseNguoiLon(child)">−</button>
                                                                            <span class="quantity-display-so-luong">{{
                                                                                child.minimumNguoiLon }}</span>
                                                                            <button class="quantity-btn-so-luong"
                                                                                @click="increaseNguoiLon(child)">+</button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div class="">
                                                                    <div
                                                                        class="price-item-so-luong d-flex justify-content-between align-items-center">
                                                                        <div v-if="child.priceEachTreEm">
                                                                            <div class="price-label-so-luong">Child
                                                                            </div>
                                                                            <div class="price-amount-so-luong">VND {{
                                                                                child.priceEachTreEm.toLocaleString() }}
                                                                            </div>
                                                                            <div class="price-text">~USD {{
                                                                                (child.priceEachTreEm /
                                                                                    currentfCurrency.exchange)
                                                                                    .toFixed(1)
                                                                                    .toLocaleString("en-US")
                                                                                }}
                                                                            </div>
                                                                        </div>

                                                                        <div class="quantity-controls-so-luong">
                                                                            <button class="quantity-btn-so-luong"
                                                                                @click="decreaseQuantity(child)">−</button>
                                                                            <span class="quantity-display-so-luong">{{
                                                                                child.minimumTreEm }}</span>
                                                                            <button class="quantity-btn-so-luong"
                                                                                @click="increaseQuantity(child)">+</button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </AccordionPanel> -->
                                    </Accordion>

                                </div>



                            </div>
                        </div>

                        <!-- Footer -->
                        <div class="app-footer-booking">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <div class="packages-count-booking">{{ productDetail.productChilds.length }}
                                        packages</div>
                                    <div class="total-price-booking">USD {{ totalPrice }}</div>
                                    <div class="packages-count-booking">~ USD 24</div>

                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="cart-icon-booking">
                                        <img src="../assets/images/shopping-cong.png">
                                    </div>
                                    <button class="buy-btn-booking px-4" @click="buyNow">Buy Now ({{ selectedCount
                                    }})</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>

    </div>

</template>
<script setup>
import Dialog from 'primevue/dialog';
import Drawer from 'primevue/drawer';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ref, onBeforeMount, computed, onMounted } from "vue";
import { useProduct } from "../composables/product";
import { useOptionProduct } from "../composables/optionProduct";

import { useHelper } from "../composables/helper";
import { useSeenStore } from "../stores/seenStore";
import { useCurrencyStore } from "../stores/currencyStore";
import axios from "axios";
const uri = import.meta.env.VITE_API_URI;

const currencyStore = useCurrencyStore();
const currentfCurrency = computed(() => currencyStore.fCurrency)
const visible = ref(false);
const productComposable = useProduct();
const helper = useHelper();
const productDetail = ref([])
const optionComposable = useOptionProduct()
const visibleBottom = ref(false);
const adultQuantity = ref(4);
const childQuantity = ref(0);
// const visibleBottom = ref(false);

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
const increaseNguoiLon = (child) => {
    child.minimumNguoiLon++; // Tăng giá trị
};

const decreaseNguoiLon = (child) => {
    // Kiểm tra nếu giá trị hiện tại lớn hơn 1
    if (child.minimumNguoiLon > 1) {
        // Giảm số lượng người lớn xuống 1
        child.minimumNguoiLon--;
    }
}
// Reactive state with ref
const tickets = ref([
    {
        name: 'SunWorld Fansipan Tickets | Combo Fansipan Combo Cable Car Tickets + Lunch Buffet',
        price: { currency: 'USD', value: 34.5 },
        details: 'This ticket includes entrance to SunWorld Fansipan and access to all basic attractions.',
        detailExpanded: false,
        bookingExpanded: false,
        selectedDate: null,
        selectedOption: null,
        guestSelected: false,
        guests: { adult: 0, child: 0 },
        // Thêm 2 thuộc tính mới cho dropdown
        showOptionDropdown: false,
        showGuestDropdown: false
    },
    {
        name: 'SunWorld Fansipan Car Tickets + Lunch Buffet',
        price: { currency: 'USD', value: 80.6 },
        details: 'Premium ticket with skip-the-line access and guided tour included.',
        detailExpanded: false,
        bookingExpanded: false,
        selectedDate: null,
        selectedOption: null,
        guestSelected: false,
        guests: { adult: 0, child: 0 },
        showOptionDropdown: false,
        showGuestDropdown: false
    },
    {
        name: 'Combo Cable Car Tickets + Lunch Buffet + Premium ticket',
        price: { currency: 'VND', value: 1200000 },
        details: null,
        detailExpanded: false,
        bookingExpanded: false,
        selectedDate: null,
        selectedOption: null,
        guestSelected: false,
        guests: { adult: 0, child: 0 },
        showOptionDropdown: false,
        showGuestDropdown: false
    }
]);

// Vẫn giữ các biến này nhưng sẽ không sử dụng chúng làm modal nữa
const showOptionModal = ref(false);
const showGuestModal = ref(false);
const tempSelectedOption = ref(null);
const tempGuests = ref({ adult: 0, child: 0 });
const currentMonth = ref(3);
const currentYear = ref(2025);
const daysInMonth = ref(31);
const firstDayOfMonth = ref(1); // Assuming March 1st, 2025 is a Saturday (6)
const activeTicketIndex = ref(null);

// Computed properties
const selectedCount = computed(() => {
    return tickets.value.filter(ticket =>
        ticket.selectedDate && ticket.selectedOption && ticket.guestSelected).length;
});
const increaseQuantity = (child) => {
    child.minimumTreEm++; // Tăng giá trị
};

const decreaseQuantity = (child) => {
    if (child.minimumTreEm > 0) {
        child.minimumTreEm--; // Giảm giá trị nhưng không âm
    }
};
const totalPrice = computed(() => {
    let total = 0;
    tickets.value.forEach(ticket => {
        if (ticket.selectedDate && ticket.selectedOption && ticket.guestSelected) {
            const basePrice = ticket.price.value;
            const adultPrice = ticket.guests.adult * 112;
            const childPrice = ticket.guests.child * 78;

            // Convert to USD if needed
            if (ticket.price.currency === 'VND') {
                total += (basePrice / 24000) + adultPrice + childPrice;
            } else {
                total += basePrice + adultPrice + childPrice;
            }
        }
    });
    return total.toFixed(2);
});


const toggleBookingAccordion = async (ticket) => {

    ticket.isActive = !ticket.isActive;
    console.log(ticket, 'tk')
    await onLoadOption(ticket.productId);

};
let currentConvertedZoneList = ref([]);
let currentCombinations = ref([]);
let avalibleCombinations = ref([]);
let currentProductOptions = ref([]);
const onLoadOption = async (id) => {
    const response = await optionComposable.onLoadPriceOption(id);
    if (response && response.data) {
        const options = response.data;
        if (options.length > 0) {
            const _first = options[0];
            if (_first && _first.combinations) {
                _first.combinations.forEach((v) => {
                    let _zoneList = v.zoneList.split(",").map(Number);
                    avalibleCombinations.value.push(_zoneList);
                });
            }
        }

        currentProductOptions.value = options.map(r => ({
            ...r,
            isSelected: false,
            isFirstLoad: true
        }));

        if (currentProductOptions.value.length > 0) {
            const _first = currentProductOptions.value[0];
            const combinations = _first.combinations || [];

            currentConvertedZoneList.value = combinations.map(element => {
                element.convertedZoneList = element.zoneList.split(",").map(Number);
                return element.convertedZoneList;
            });

            currentCombinations.value = combinations;
        }

        currentProductOptions.value.forEach((element) => {
            if (element.zoneChilds) {
                element.zoneChilds.forEach((c) => {
                    c.bgDisable = false;
                });
            }
        });
        // console.log(currentProductOptions.value, 'jsdf')

    }
}
// Thêm hàm mới để xử lý dropdown Option
const toggleOptionDropdown = (index) => {
    // Đóng tất cả các dropdown khác
    productDetail.productChilds.value.forEach((ticket, i) => {
        if (i !== index) {
            ticket.showOptionDropdown = false;
            ticket.showGuestDropdown = false;
        } else {
            // Đóng guest dropdown của ticket hiện tại
            ticket.showGuestDropdown = false;
        }
    });

    // Toggle option dropdown của ticket này
    tickets.value[index].showOptionDropdown = !tickets.value[index].showOptionDropdown;

    // Cập nhật temporary option và active ticket index
    tempSelectedOption.value = tickets.value[index].selectedOption || 'over-week';
    activeTicketIndex.value = index;
};

// Thêm hàm mới để xử lý dropdown Guest
const toggleGuestDropdown = (index) => {
    // Đóng tất cả các dropdown khác
    tickets.value.forEach((ticket, i) => {
        if (i !== index) {
            ticket.showOptionDropdown = false;
            ticket.showGuestDropdown = false;
        } else {
            // Đóng option dropdown của ticket hiện tại
            ticket.showOptionDropdown = false;
        }
    });

    // Toggle guest dropdown của ticket này
    tickets.value[index].showGuestDropdown = !tickets.value[index].showGuestDropdown;

    // Cập nhật temporary guests và active ticket index
    tempGuests.value = {
        adult: tickets.value[index].guests.adult || 0,
        child: tickets.value[index].guests.child || 0
    };
    activeTicketIndex.value = index;
};

const resetSelection = () => {
    tickets.value.forEach(ticket => {
        ticket.bookingExpanded = false;
        ticket.selectedDate = null;
        ticket.selectedOption = null;
        ticket.guestSelected = false;
        ticket.guests = { adult: 0, child: 0 };
        // Reset các dropdown
        ticket.showOptionDropdown = false;
        ticket.showGuestDropdown = false;
    });
};

const nextMonth = () => {
    currentMonth.value++;
    if (currentMonth.value > 12) {
        currentMonth.value = 1;
        currentYear.value++;
    }
    updateCalendar();
};

const prevMonth = () => {
    currentMonth.value--;
    if (currentMonth.value < 1) {
        currentMonth.value = 12;
        currentYear.value--;
    }
    updateCalendar();
};

const updateCalendar = () => {
    // Get days in month
    daysInMonth.value = new Date(currentYear.value, currentMonth.value, 0).getDate();

    // Get first day of month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    let firstDay = new Date(currentYear.value, currentMonth.value - 1, 1).getDay();
    // Adjust for Monday as first day of week
    firstDayOfMonth.value = firstDay === 0 ? 6 : firstDay - 1;
};

const isSelectedDate = (day, ticketIndex) => {
    if (tickets.value[ticketIndex].selectedDate) {
        return tickets.value[ticketIndex].selectedDate.day === day &&
            tickets.value[ticketIndex].selectedDate.month === currentMonth.value &&
            tickets.value[ticketIndex].selectedDate.year === currentYear.value;
    }
    return false;
};

const isDisabledDate = (day) => {
    // Example: disable past dates
    const today = new Date();
    if (currentYear.value < today.getFullYear()) return true;
    if (currentYear.value === today.getFullYear() && currentMonth.value < today.getMonth() + 1) return true;
    if (currentYear.value === today.getFullYear() && currentMonth.value === today.getMonth() + 1 && day < today.getDate()) return true;
    return false;
};

const selectDate = (day, ticketIndex) => {
    if (!isDisabledDate(day)) {
        tickets.value[ticketIndex].selectedDate = {
            day: day,
            month: currentMonth.value,
            year: currentYear.value
        };
    }
};

const selectTempOption = (option) => {
    tempSelectedOption.value = option;
};


const buyNow = () => {
    // Implement checkout functionality
    console.log('Proceeding to checkout with', selectedCount.value, 'packages.');
    alert('Checkout with ' + selectedCount.value + ' packages for USD ' + totalPrice.value);
};

// Lifecycle hook
onMounted(() => {
    updateCalendar();
});
onBeforeMount(async () => {
    productDetail.value = await productComposable.getProductDetail();
    console.log(productDetail.value, "productDetail.value");
    await onLoadOption();
})
const toggleReadMore = (review) => {
    review.isExpanded = !review.isExpanded; // Đảo trạng thái mở rộng
};
</script>
<style scoped>
.custom-tabs {
    border-bottom: none;
}

.custom-tab-link {
    color: #8A929E;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
}

.custom-tab-link.active {
    color: #03294C;
    border-bottom: 2px solid #03294C;
    background-color: transparent;
    font-weight: 700;
}

.custom-tab-content {
    /* padding-top: 15px; */
}

.custom-paragraph {
    color: #8A929E;
    font-size: 14px;
    line-height: 1.5;
}

.nav-tabs .nav-link {
    border-radius: unset;
}

.nav-tabs .nav-link {
    background-color: unset;
}

iframe {
    border-radius: 25px;
}

.review-container {
    display: flex;
    width: 100%;
    overflow-x: auto;
    /* Allow horizontal scroll */
    max-width: 100%;
    /* Prevent it from overflowing */
    scrollbar-width: none;
}

/* Each review box */
.nd-rv {
    flex: 0 0 auto;
    /* Prevent reviews from shrinking or growing */
    width: 70%;
    /* This will make the first review take more than half the screen */
    margin-right: 20px;
    /* Add space between reviews */
}

.tour-card {
    flex: 0 0 auto;
    width: 230px;
    padding: 0;
    position: relative;
    border: 1px solid #EDF1F7;
    border-radius: 12px;
    overflow: hidden;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    background-color: white;
}
</style>