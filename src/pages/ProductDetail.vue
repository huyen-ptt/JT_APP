<template>
    <div>
        <div v-if="!productDetail">
            <div class="p-2">
                <Skeleton height="240px" borderRadius="12px" class="mb-4" />

                <!-- Tiêu đề -->
                <Skeleton width="90%" height="24px" class="mb-2" />
                <Skeleton width="60%" height="20px" class="mb-2" />

                <!-- Địa điểm + đã đặt -->
                <div class="flex items-center space-x-2 mb-2">
                    <Skeleton width="20px" height="20px" shape="circle" class="mb-1" />
                    <Skeleton width="120px" height="16px" />
                </div>

                <!-- Đánh giá -->
                <div class="flex items-center space-x-2 mb-4">
                    <Skeleton width="16px" height="16px" shape="circle" class="mb-1" />
                    <Skeleton width="40px" height="16px" />
                </div>

                <!-- Tabs -->
                <div class="flex space-x-4 mb-4">
                    <Skeleton width="100px" height="30px" borderRadius="8px" class="mb-1" />
                    <Skeleton width="100px" height="30px" borderRadius="8px" class="mb-1" />
                    <Skeleton width="140px" height="30px" borderRadius="8px" class="mb-1" />
                </div>

                <!-- Mô tả ngắn -->
                <Skeleton width="100%" height="16px" class="mb-1" />
                <Skeleton width="80%" height="16px" class="mb-1" />
                <Skeleton width="60%" height="16px" class="mb-4" />

                <!-- Giá + nút -->
                <div class="flex items-center justify-between mt-6">
                    <div>
                        <Skeleton width="100px" height="20px" class="mb-1" />
                        <Skeleton width="80px" height="18px" class="mb-1" />
                    </div>
                    <Skeleton width="120px" height="40px" borderRadius="8px" class="mb-1" />
                </div>
            </div>
        </div>
        <div class="product-containerr" v-else>
            <!-- Main image -->
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="product-slider position-relative">
                            <swiper :modules="[Autoplay, Navigation, Pagination]" :slides-per-view="1" :loop="true"
                                :autoplay="{ delay: 3000 }" :navigation="true" :pagination="{
                                    el: '.swiper-pagination',
                                    type: 'fraction',
                                }" class="mySwiper">
                                <swiper-slide v-for="(image, index) in productDetail.gallary || []" :key="index">
                                    <img :src="helper.getImageCMS(image)" class="d-block w-100" 
                                        style="height: 220px; object-fit: cover" />
                                </swiper-slide>

                                <!-- Hiển thị số đếm dạng 1/5 -->
                                <div class="swiper-pagination fraction-pagination"></div>
                            </swiper>
                        </div>
                        <div class="position-absolute start-0 translate-middle-y p-3 icon">
                            <button class="back-button-product" @click="$router.go(-1)">
                                <i class="fas fa-arrow-left" style="color: white"></i>
                            </button>
                        </div>
                        <div class="position-absolute end-0 translate-middle-y p-3 icon">
                            <router-link :to="`/cart`">
                                <img height="30" src="/images/shopping-cart-w.png" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Title section -->
            <div class="p-3">
                <div class="title-detail">{{ productDetail.title }}</div>
                <div class="d-flex align-items-center mt-1 dia-chi-product justify-content-between">
                    <div>
                        <i class="fas fa-map-marker-alt location-dot"></i>
                        <span>{{ productDetail.location }} | {{ productDetail.totalSale }}
                            {{ $t("BOOKED") }}
                        </span>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span class="rating-value">{{
                            productDetail.rateAVG?.toFixed(2)
                            }}</span>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0">
                <ul className="nav nav-tabs custom-tabs justify-content-center mr-3 ml-3" id="productTabs"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active custom-tab-link" id="description-tab" data-bs-toggle="tab"
                            data-bs-target="#description" type="button" role="tab" aria-controls="description"
                            aria-selected="false">
                            {{ $t("DESCRIPTION") }}
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link custom-tab-link" id="product-detail-tab" data-bs-toggle="tab"
                            data-bs-target="#product-detail" type="button" role="tab" aria-controls="product-detail"
                            aria-selected="true">
                            {{ $t("PRODUCT_DETAIL") }}
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link custom-tab-link" id="terms-tab" data-bs-toggle="tab"
                            data-bs-target="#terms" type="button" role="tab" aria-controls="terms"
                            aria-selected="false">
                            {{ $t("TERM_AND_CONDITIONS") }}
                        </button>
                    </li>
                </ul>

                <div className="tab-content custom-tab-content" id="productTabsContent">
                    <div className="tab-pane fade  pt-3 px-3" id="product-detail" role="tabpanel"
                        aria-labelledby="product-detail-tab">
                        <p className="mb-3 custom-paragraph" v-html="productDetail.content"></p>
                    </div>
                    <div className="tab-pane fade p-3 show active" id="description" role="tabpanel"
                        aria-labelledby="description-tab">
                        <p className="mb-3 custom-paragraph" v-html="productDetail.description"></p>
                    </div>
                    <div className="tab-pane fade p-3" id="terms" role="tabpanel" aria-labelledby="terms-tab">
                        <p className="mb-3 custom-paragraph" v-for="n in productDetail.policies" :key="n.tieuDe"
                            v-html="n.noiDung"></p>
                    </div>
                </div>
            </div>
            <!-- Ha Noi Station -->
            <div class="border-top p-3">
                <div class="-flex justify-content-between align-items-center">
                    <h2 class="title-map">{{ productDetail.location }}</h2>
                </div>
                <div>
                    <div class="position-relative h-100">
                        <div className="position-relative mt-3" style="height: 200px">
                            <iframe :src="productDetail.locationIframe" width="100%" height="100%"
                                allowFullScreen="{false}" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid p-3 review-product border-bottom">
                <!-- Rating Header -->
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex align-items-start gap-4">
                        <h2 class="display-6 fw-bold mb-0 so-review">
                            {{ productDetail.rateAVG?.toFixed(1) }}
                        </h2>
                        <div class="d-flex text-warning" style="padding: 3px 0;">
                            <i v-for="n in Math.floor(productDetail.rateAVG)" :key="n" class="fas fa-star"
                                style="font-size: 21px"></i>
                            <i v-if="productDetail.rateAVG % 1 >= 0.5" class="fas fa-star-half-alt"
                                style="font-size: 21px"></i>
                        </div>
                    </div>

                    <a href="#" class="text-primary text-decoration-none view-all">
                        {{ $t("VIEW_All") }}
                    </a>
                </div>

                <div class="review-container">
                    <!-- Review Quote -->
                    <div class="nd-rv" v-for="r in productDetail.reviews" :key="r">
                        <div class="mb-3 border-bottom">
                            <div class="position-relative d-flex pb-3">
                                <div>
                                    <img class="rounded-circle" width="20" src="/images/phay1.png" />
                                </div>
                                <div>
                                    <p class="ms-4 text-rv" style="font-size: 13px" v-html="r.isExpanded ? r.content : r.content?.slice(0, 50) + '...'
                                        "></p>
                                    <a v-if="r.content?.length > 100" href="#" class="ms-4 read-more-pr"
                                        style="font-size: 12px" @click.prevent="toggleReadMore(r)">
                                        {{ r.isExpanded ? $t("READ_LESS") : $t("READ_MORE") }}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- User Profile -->
                        <div class="d-flex align-items-center gap-2 mb-2">
                            <!-- <img src="/images/10.jpg" alt="Tanaka Yuki" class="rounded-circle" width="40"
                            height="40" /> -->
                            <img class="rounded-circle" width="40" height="40" v-if="r.avatar" :src="r.avatar" />
                            <img class="rounded-circle" width="40" height="40" v-else src="/images/icon-user.png" />
                            <div>
                                <p class="mb-0 name-rv">{{ r.userName }}</p>
                                <div class="d-flex text-warning bao-sao">
                                    <i class="fas fa-star" v-for="i in r.startNumber" style="font-size: 11px"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recently-container p-4">
                <div class="recently-header">
                    <h2 class="promo-title">{{ $t("YOU_MIGHT_ALSO_LIKE") }}</h2>
                </div>

                <ClientOnly>
                    <swiper :modules="[Autoplay, Pagination]" :slides-per-view="1.5" :space-between="16"
                        class="recently-carousel">
                        <swiper-slide v-for="product in productDetail.productSameZones" :key="product.productId"
                            class="card-like tour-card1 mb-3">
                            <RouterLink :to="`/detail-product/${product.productId}`" class="tour-card1">
                                <img :src="helper.getImageCMS(product.avatar)" alt="Inter Sweet Love"
                                    class="tour-image" />
                                <div class="tour-content">
                                    <h3 class="tour-title">{{ product.title }}</h3>
                                    <div class="tour-location tour-price">
                                        <div>
                                            <span class="tour-booked">{{ product.totalSale }} {{ $t("BOOKED") }}</span>
                                        </div>
                                        <div class="rating">
                                            <i class="fas fa-star"></i>
                                            <span class="rating-value">{{
                                                product.rate.toFixed(1)
                                                }}</span>
                                        </div>
                                    </div>
                                    <div class="tour-price">
                                        <div class="linee-h">
                                            <span class="price-text">{{ $t("PRICE_FROM") }}</span>
                                            <span class="price-value">VND {{ product.price.toLocaleString() }}</span>
                                            <span class="me-1"></span>
                                            <div v-if="currentfCurrency.code !== 'VND'"> <span class="me-1"></span>
                                                <span class="menu-text"><span class="me-1 menu-text">~
                                                        {{ currentfCurrency.code }}</span>{{
                                                            (product.price / currentfCurrency.exchange)
                                                                .toFixed(1)
                                                                .toLocaleString("en-US")
                                                        }}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </RouterLink>
                        </swiper-slide>
                    </swiper>
                </ClientOnly>
            </div>
            <div class="bottom-menu menu-search d-flex">
                <div class="">
                    <div class="price-usd">{{ $t("PRICE_FROM") }}</div>
                    <div class="don-vi align-items-center" id="clear-all">
                        VND {{ productDetail.price.toLocaleString() }}
                    </div>
                    <div class="price-usd">
                        ~ {{ currentfCurrency.code }}
                        {{
                            currentfCurrency.code === 'VND'
                                ? productDetail.price.toLocaleString()
                                : new Intl.NumberFormat('en-US', {
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 1
                                }).format(productDetail.price / currentfCurrency.exchange)
                        }}
                    </div>
                </div>
                <div class="d-flex">
                    <div class="gio-hang-pr" @click="onClickBuyNowParent()">
                        <img width="24" src="/images/shopping-cart.png" />
                    </div>
                    <a>
                        <button label="Show" @click="onClickBuyNowParent()" class="search-button" id="search">
                            {{ $t("BUY_NOW") }}
                        </button></a>
                    <Dialog v-model:visible="visibleDrawerPackageList" modal class="modal-order"
                        :style="{ width: '50vw' }" style="height: 100%; max-height: 100%; border-radius: 0"
                        :breakpoints="{ '1199px': '75vw', '575px': '100vw' }">
                        <div id="app" class="app-container">
                            <!-- Header -->
                            <div class="d-flex justify-content-between align-items-center">
                                <button class="reset-btn-booking" @click="resetSelection">
                                    <i class="fas fa-redo-alt"></i> {{ $t("RESET_SELECTION") }}
                                </button>
                            </div>

                            <!-- Main Content -->
                            <div class="content-wrapper-booking p-3">
                                <!-- Ticket cards with accordion -->
                                <div v-for="(p, index) in payItems" :key="index" class="ticket-card-booking mb-3">
                                    <div class="news-title-blogg mb-1">
                                        {{ p.currentPackage.title }}
                                    </div>
                                    <div class="see-detail-booking mb-2" @click="visibleBottom = true">
                                        {{ $t("VIEW_DETAIL") }}
                                        <i class="fa-solid fa-chevron-down"></i>
                                        <Drawer v-model:visible="visibleBottom" :header="$t('detail')" position="bottom"
                                            style="height: auto" class="bo-goc so-luong-mua so-luong-mua1">
                                            <div class="container detail-see pb-4">
                                                <div class="tour-card-see-detail">
                                                    <h2 class="tour-title-see-detail">
                                                        {{ p.currentPackage.title }}
                                                    </h2>

                                                    <!-- <div class="price-text-see-detail pb-3">
                                                    <span class="me-1">{{ $t("PRICE_FROM") }}</span>
                                                    <span class="price-value-booking"><span class="me-1">{{
                                                        currentfCurrency.code
                                                            }}</span>{{
                                                                (
                                                                    p.currentPackage.price /
                                                                    currentfCurrency.exchange
                                                                )
                                                                    .toFixed(1)
                                                                    .toLocaleString("en-US")
                                                            }}</span>
                                                </div> -->

                                                    <p class="dia-chi-product" v-html="p.currentPackage.description">
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="bottom-menu menu-search bo-goc" @click="visibleBottom = false">
                                                <router-link to="" class="btn-search">
                                                    <button class="search-button btn-search" id="search">
                                                        {{ $t("OK") }}
                                                    </button></router-link>
                                            </div>
                                        </Drawer>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="price-booking">
                                            <div class="d-flex gap-2 align-items-center">
                                                <span class="tour-booked"> {{ $t("PRICE_FROM") }} </span><span
                                                    class="price-value-booking">VND {{
                                                        p.currentPackage.price.toLocaleString() }}</span>
                                            </div>
                                            <div class="packages-count-booking">
                                                ~ {{ currentfCurrency.code }}
                                                {{
                                                    new Intl.NumberFormat('en-US', {
                                                        minimumFractionDigits: 1,
                                                        maximumFractionDigits: 1
                                                    }).format(p.currentPackage.price / currentfCurrency.exchange)
                                                }}
                                            </div>

                                        </div>
                                        <button class="book-btn-booking" @click="onClickBookPackage(p)">
                                            {{ p.isActive ? $t("CLOSE") : $t("BOOK") }}
                                        </button>
                                    </div>

                                    <!-- Accordion content - appears when expanded -->
                                    <div v-if="p.isActive" class="booking-accordion-content mt-3 border-top">
                                        <Accordion :value="p.currentAccordionStep">
                                            <AccordionPanel :value="0" class="modal-lich1">
                                                <div class="lichh">
                                                    <AccordionHeader class="mb-2"
                                                        style="width: 100%; color: rgb(3, 41, 76); padding: 0">
                                                        <div class="date-card-title-booking1">
                                                            <span v-if="!p.currentSelectedDate">{{
                                                                $t("Selected_Date")
                                                                }}</span>
                                                            <span v-else>{{ $t("Selected_Date") }}: <br />
                                                                <div class="chose-option">
                                                                    {{
                                                                        helper.formatISODate(p.currentSelectedDate)
                                                                    }}
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </AccordionHeader>
                                                    <AccordionContent>
                                                        <div class="calendar-nav-container-booking">
                                                            <button class="calendar-nav-booking" @click="prevMonth(p)">
                                                                <i class="fas fa-chevron-left"></i>
                                                            </button>
                                                            <div class="calendar-month-header-booking">
                                                                {{ p.calendar.currentMonth }}/{{
                                                                    p.calendar.currentYear
                                                                }}
                                                            </div>
                                                            <button class="calendar-nav-booking" @click="nextMonth(p)">
                                                                <i class="fas fa-chevron-right"></i>
                                                            </button>
                                                        </div>

                                                        <div class="calendar-grid-booking">
                                                            <div class="calendar-day-header-booking" v-for="day in [
                                                                'Mon',
                                                                'Tue',
                                                                'Wed',
                                                                'Thu',
                                                                'Fri',
                                                                'Sat',
                                                                'Sun',
                                                            ]" :key="day">
                                                                {{ day }}
                                                            </div>
                                                            <div v-for="(d, index) in p.calendar.items" :key="d"
                                                                class="calendar-day-booking" :class="{
                                                                    canClick: d.canClick,
                                                                    dateActive: d.isActive,
                                                                }" @click="onChoosenDate(p, index)">
                                                                <span v-if="d.day == -1"> </span>
                                                                <span v-else>{{ d.day }}</span>
                                                                <!-- {{ day.day }} -->
                                                            </div>
                                                        </div>
                                                    </AccordionContent>
                                                </div>
                                            </AccordionPanel>
                                            <AccordionPanel :value="1" class="modal-lich1">
                                                <div class="lichh">
                                                    <AccordionHeader class="mb-2"
                                                        style="width: 100%; color: rgb(3, 41, 76); padding: 0">
                                                        <div class="date-card-title-booking1">
                                                            <span v-if="!p.currentChoosenOptions">{{
                                                                $t("Option")
                                                                }}</span>
                                                            <span v-else> {{ $t("Option") }} <br /> </span>
                                                            <div class="chose-option" v-if="p.currentChoosenOptions">
                                                                {{
                                                                    p.currentChoosenOptions
                                                                        .map((item) => item.name)
                                                                        .join(", ")
                                                                }}
                                                            </div>
                                                        </div>
                                                    </AccordionHeader>

                                                    <AccordionContent v-for="option in p.currentListOptions"
                                                        :key="option">
                                                        <div class="section-title-booking pb-2">
                                                            {{ option.zoneParent.name }}
                                                        </div>
                                                        <div class="option-btn-booking1"
                                                            v-for="child in option.zoneChilds" :key="child"
                                                            @click="onSelectedOptionItem(p, child)" :class="{
                                                                optionActive: child.isActive,
                                                                optionDisable: child.isDisable,
                                                            }">
                                                            {{ child.name }}
                                                        </div>
                                                    </AccordionContent>
                                                </div>
                                            </AccordionPanel>
                                            <AccordionPanel :value="2" class="modal-lich1">
                                                <div class="lichh">
                                                    <AccordionHeader class="mb-2"
                                                        style="width: 100%; color: rgb(3, 41, 76); padding: 0">
                                                        <div class="section-title-booking">
                                                            {{ $t("Guest") }}<br />
                                                            <div v-if="p.currentPackage.unit" class="chose-option">
                                                                {{ p.currentPackage.unit }}: {{ p.choosenNguoiLon }}
                                                            </div>
                                                            <div v-else class="chose-option">
                                                                <span v-if="p.choosenNguoiLon">{{ $t("Adult") }}: {{
                                                                    p.choosenNguoiLon }}</span>
                                                                <span v-if="p.choosenTreEm"> | {{ $t("Child") }}: {{
                                                                    p.choosenTreEm }}</span>
                                                            </div>
                                                        </div>
                                                    </AccordionHeader>
                                                    <AccordionContent>
                                                        <div class="guest-dropdown-booking mt-2">
                                                            <div>
                                                                <div class="guest-item-booking border-bottom">
                                                                    <div class="">
                                                                        <div
                                                                            class="price-item-so-luong d-flex justify-content-between align-items-center">
                                                                            <div v-if="
                                                                                p.selectedPriceByDate
                                                                                    ?.priceEachNguoiLon > 0
                                                                            ">
                                                                                <div class="price-label-so-luong">
                                                                                    {{ p.currentPackage.unit || $t("Adult") }}
                                                                                </div>
                                                                                <div class="price-amount-so-luong">
                                                                                    VND
                                                                                    {{
                                                                                        p.selectedPriceByDate?.priceEachNguoiLon.toLocaleString()
                                                                                    }}
                                                                                </div>
                                                                                <div class="price-text">
                                                                                    ~ {{ currentfCurrency.code }}
                                                                                    {{
                                                                                        (
                                                                                            p.selectedPriceByDate
                                                                                                ?.priceEachNguoiLon /
                                                                                            currentfCurrency.exchange
                                                                                        )
                                                                                            .toFixed(1)
                                                                                            .toLocaleString("en-US")
                                                                                    }}
                                                                                </div>
                                                                            </div>

                                                                            <div class="quantity-controls-so-luong">
                                                                                <button class="quantity-btn-so-luong"
                                                                                    @click="decreaseNguoiLon(p)">
                                                                                    −
                                                                                </button>
                                                                                <span
                                                                                    class="quantity-display-so-luong">{{
                                                                                        p.choosenNguoiLon
                                                                                    }}</span>
                                                                                <button class="quantity-btn-so-luong"
                                                                                    @click="increaseNguoiLon(p)">
                                                                                    +
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="">
                                                                        <div class="price-item-so-luong d-flex justify-content-between align-items-center"
                                                                            v-if="
                                                                                p.selectedPriceByDate?.priceEachTreEm > 0
                                                                            ">
                                                                            <div>
                                                                                <div class="price-label-so-luong">
                                                                                    {{ $t("Child") }}
                                                                                </div>
                                                                                <div class="price-amount-so-luong">
                                                                                    VND
                                                                                    {{
                                                                                        p.selectedPriceByDate?.priceEachTreEm.toLocaleString()
                                                                                    }}
                                                                                </div>
                                                                                <div class="price-text">
                                                                                    ~ {{ currentfCurrency.code }}
                                                                                    {{
                                                                                        (
                                                                                            p.selectedPriceByDate
                                                                                                ?.priceEachTreEm /
                                                                                            currentfCurrency.exchange
                                                                                        )
                                                                                            .toFixed(1)
                                                                                            .toLocaleString("en-US")
                                                                                    }}
                                                                                </div>
                                                                            </div>

                                                                            <div class="quantity-controls-so-luong">
                                                                                <button class="quantity-btn-so-luong"
                                                                                    @click="decreaseTreEm(p)">
                                                                                    −
                                                                                </button>
                                                                                <span
                                                                                    class="quantity-display-so-luong">{{
                                                                                        p.choosenTreEm
                                                                                    }}</span>
                                                                                <button class="quantity-btn-so-luong"
                                                                                    @click="increaseTreEm(p)">
                                                                                    +
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </AccordionContent>
                                                </div>
                                            </AccordionPanel>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>

                            <!-- Footer -->
                            <div class="app-footer-booking">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <div class="packages-count-booking">
                                            {{ productDetail.productChilds.length }}
                                            {{ $t("PACKAGES") }}
                                        </div>
                                        <div class="total-price-booking">
                                            VND {{ totalPrice.toLocaleString() }}
                                        </div>
                                        <div class="packages-count-booking">
                                            ~ {{ currentfCurrency.code }}
                                            {{
                                                new Intl.NumberFormat('en-US', {
                                                    minimumFractionDigits: 1,
                                                    maximumFractionDigits: 1
                                                }).format(totalPrice / currentfCurrency.exchange)
                                            }}
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center">
                                        <div class="cart-icon-booking" @click="onAddToCart()"
                                            :disabled="countPayItems === 0">
                                            <img width="48" src="/images/shopping-cong.png" />
                                        </div>
                                        <button class="buy-btn-booking px-4" @click="buyNow"
                                            :disabled="countPayItems === 0">
                                            {{ $t("BUY_NOW") }} ({{ countPayItems }})
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Spinner toàn màn hình -->
                        <div class="fullscreen-loading" v-if="loadingPriceOption">
                            <ProgressSpinner style="width: 60px; height: 60px" strokeWidth="6" fill="transparent"
                                animationDuration="0.8s" aria-label="Custom ProgressSpinner" />
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Dialog from "primevue/dialog";
import Drawer from "primevue/drawer";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
    ref,
    onBeforeMount,
    computed,
    onMounted,
    onUnmounted,
    watch,
} from "vue";
import { useProduct } from "../composables/product";
import { useOptionProduct } from "../composables/optionProduct";

import { useHelper } from "../composables/helper";
import { useSeenStore } from "../stores/seenStore";
import { useCurrencyStore } from "../stores/currencyStore";

import { usePayStore } from "../stores/payStore";
import { useCartStore } from "../stores/cartStore";
import axios from "axios";
import { RouterLink, useRouter, useRoute } from "vue-router";
import { StatusBar } from "@capacitor/status-bar";
import ProgressSpinner from "primevue/progressspinner";
import Skeleton from "primevue/skeleton";

const uri = import.meta.env.VITE_API_URI;

const currencyStore = useCurrencyStore();
const currentfCurrency = computed(() => currencyStore.fCurrency);

const seenStore = useSeenStore();
const cartStore = useCartStore();
const carts = computed(() => cartStore.carts);
const isLoading = ref(true);

const payStore = usePayStore();
const visible = ref(false);
const productComposable = useProduct();
const helper = useHelper();
const productDetail = ref(null);
const optionComposable = useOptionProduct();
const visibleBottom = ref(false);
const adultQuantity = ref(4);
const childQuantity = ref(0);
const router = useRouter();
const route = useRoute();
const loadingPriceOption = ref(false);
// const visibleBottom = ref(false);

// region Logic
// endRegion

// Vẫn giữ các biến này nhưng sẽ không sử dụng chúng làm modal nữa
const tempSelectedOption = ref(null);
const tempGuests = ref({ adult: 0, child: 0 });
const currentMonth = ref(3);
const currentYear = ref(2025);
const firstDayOfMonth = ref(1); // Assuming March 1st, 2025 is a Saturday (6)
const activeTicketIndex = ref(null);

// #Region Logic

const payItems = ref([]);

const currentBook = ref({
    currentPackage: null,
    currentListOptions: [],
    currentAvalibleCombination: [],
    currentSelectedCombination: [],
    isValidated: false,
    isActive: false,
    currentSelectedDate: null,
    calendar: {
        firstDayOfMonth: 1,
        daysInMonth: 31,
        currentMonth: 3,
        currentYear: 2025,
        items: [],
    },
    currentAccordionStep: 0,
    currentAvalibeSessionSelected: [],
    currentChoosenOptions: [],
    priceSelectedOptionByDate: [],
    selectedPriceByDate: null,
    combinations: [],
    minimunNguoiLon: 1,
    minimumTreEm: 0,
    choosenNguoiLon: 1,
    choosenTreEm: 0,
});
console.log(currentBook.value, "currentBook");
const visibleDrawerPackageList = ref(false);
const onClickBuyNowParent = () => {
    visibleDrawerPackageList.value = true;
    payItems.value = [];
    //Tao danh sach cac package
    if (productDetail.value) {
        productDetail.value.productChilds.forEach((r) => {
            let payItem = JSON.parse(JSON.stringify(currentBook.value));
            payItem.currentPackage = r;
            payItems.value.push(payItem);
        });
    }
};

//Ham xu ly khi bam nut book
const onClickBookPackage = async (p) => {
    p.isActive = !p.isActive;
    //Load option
    onLoadCelendar(p);
    await onLoadPackage(p);
    //Load lich
};

// Ham load lich

const onLoadCelendar = (p) => {
    let month = p.calendar.currentMonth;
    let year = p.calendar.currentYear;
    if (month && year) {
        const daysInMonth = new Date(year, month, 0).getDate();
        const firstDay = new Date(year, month - 1, 1).getDay(); // Ngày đầu tiên của tháng
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Đặt giờ của ngày hôm nay về 0 để so sánh ngày chính xác
        const result = [];

        // Xác định số ô trống cần thêm vào đầu tháng
        const emptyCells = firstDay === 0 ? 6 : firstDay - 1; // Chuyển sang định dạng VN (thứ hai là 1, chủ nhật là 7)

        // Thêm ngày trống từ tháng trước
        for (let i = 0; i < emptyCells; i++) {
            result.push({
                dayOfWeek: i + 1,
                day: -1,
                isPast: true,
                price: 0,
                isActive: false,
                canClick: false,
            });
        }

        // Thêm ngày của tháng hiện tại
        // Định dạng ngày theo YYYY-MM-DD

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month - 1, i);
            const dayOfWeek = (firstDay + i - 1) % 7; // Tính thứ cho ngày hiện tại
            date.setHours(0, 0, 0, 0); // Đặt giờ của ngày so sánh về 0
            const isPast = date < today; // Kiểm tra ngày có phải là quá khứ, chỗ này đang coi ngày hoomn nay cũng là quá khứ, sửa lại giúp tôi chỗ này cho lấy cả ngày hôm nay
            const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
                i
            ).padStart(2, "0")}T00:00:00`;
            result.push({
                dayOfWeek: dayOfWeek === 0 ? 7 : dayOfWeek, // Đảm bảo Chủ Nhật là 7
                day: i,
                isPast: isPast,
                price: 0,
                isActive: false,
                canClick: isPast ? false : true,
                formattedDate: formattedDate,
                priceEachNguoiLon: 0,
                priceEachTreEm: 0,
                priceEachNguoiGia: 0,
            });
        }
        p.calendar.items = result;
    }
};

// Ham xu ly khi chon 1 ngay
const onChoosenDate = async (p, index) => {
    if (p.calendar.items[index].canClick) {
        p.calendar.items.forEach((r) => {
            r.isActive = false;
        });

        p.calendar.items[index].isActive = true;
        p.currentSelectedDate = p.calendar.items[index].formattedDate;

        p.currentAccordionStep = 1;
    }

    await onLoadPriceForPayItem(p);
};

// ham load ra cac option cua package
const onLoadPackage = async (p) => {
    const response = await optionComposable.onLoadPriceOption(
        p.currentPackage.productId
    );
    if (response && response.data) {
        const options = response.data;
        p.currentListOptions = response.data;

        if (options.length > 0) {
            const _first = options[0];
            if (_first && _first.combinations) {
                _first.combinations.forEach((v) => {
                    let _zoneList = v.zoneList.split(",").map(Number);
                    p.currentAvalibleCombination.push(_zoneList);
                });
                p.combinations = _first.combinations;
            }
        }

        p.currentListOptions.forEach((r) => {
            r.zoneChilds.forEach((z) => {
                z.isActive = false;
                z.isDisable = false;
            });
        });
        console.log(p);
    }
};

// Ham load gia theo ngay
const onLoadPriceForPayItem = async (p) => {
    p.currentAccordionStep = 1; //  Reset bước để đảm bảo Accordion hoạt động lại
    let checker = true;
    //1. Phai chon ngay phu hop
    if (!p.currentSelectedDate) checker = false;
    //2. Phai chon duoc 1 option phu hop
    let arrTemp = [];

    p.currentChoosenOptions.forEach((choose) => {
        if (arrTemp.indexOf(choose.id) < 0) {
            arrTemp.push(choose.id);
        }
    });

    let checkHaiMangBangNhau = false;
    p.currentAvalibleCombination.forEach((avalible) => {
        if (areArraysEqual(avalible, arrTemp)) {
            checkHaiMangBangNhau = true;
            arrTemp = avalible;
        }
    });
    if (checkHaiMangBangNhau == false) checker = false;
    //Kiem tra neu checker la dung thi load du lieu
    if (checker) {
        //Goi API de get gia
        //Sap xep arrTemp theo thu tu tu nho den lon
        // arrTemp= arrTemp.sort((a, b) => a - b);
        let data = {
            id: p.currentPackage.productId,
            month: p.calendar.currentMonth,
            year: p.calendar.currentYear,
            combination: arrTemp.join(","),
        };
        loadingPriceOption.value = true;
        const response = await productComposable.getProductOptionsPriceByDate(data);
        loadingPriceOption.value = false;
        if (response) {
            p.priceSelectedOptionByDate = response.data;

            p.priceSelectedOptionByDate.forEach((r) => {
                if (r.date == p.currentSelectedDate) {
                    p.selectedPriceByDate = r;
                    p.currentAccordionStep = 2;

                    // Tinh minimum nguoi lon va tre em

                    p.combinations.forEach((r) => {
                        if (r.zoneList == arrTemp.join(",")) {
                            p.minimumNguoiLon = r.minimumNguoiLon;
                            p.minimumTreEm = r.minimumTreEm;

                            p.choosenNguoiLon = p.minimumNguoiLon;
                            p.choosenTreEm = p.minimumTreEm;
                        }
                    });
                }
            });
        }
    }
};

//Ham xu ly an vao mot optionItem
const onSelectedOptionItem = async (p, item) => {
    if (item.isActive == false) {
        if (item.isDisable == true) {
            p.currentListOptions.forEach((option) => {
                option.zoneChilds.forEach((zone) => {
                    zone.isActive = false;
                });
            });
            p.currentAvalibeSessionSelected = [];
            p.currentChoosenOptions = [];
        }
        p.currentChoosenOptions.push(item);
        item.isActive = true;
        onGetOptionAvalibleInCombinationInSession(p);
        onDisableOptionNotIncludeInAvalableArray(p);

        //Kiem tra xem cai currentOptionSelected no
    }
    await onLoadPriceForPayItem(p);
};

// Ham tang giam so luong nguoi lon tre em
const increaseNguoiLon = (p) => {
    p.choosenNguoiLon++;
};
const decreaseNguoiLon = (p) => {
    // Kiểm tra nếu giá trị hiện tại lớn hơn 1
    if (p.choosenNguoiLon > p.minimumNguoiLon) {
        p.choosenNguoiLon--;
    }
};
const increaseTreEm = (p) => {
    p.choosenTreEm++;
};
const decreaseTreEm = (p) => {
    // Kiểm tra nếu giá trị hiện tại lớn hơn 1
    if (p.choosenTreEm > p.minimumTreEm) {
        p.choosenTreEm--;
    }
};
// Sub: Ham xu ly merge option theo lua chon phu hop
const onGetOptionAvalibleInCombinationInSession = (p, item) => {
    // if (p.currentAvalibeSessionSelected.length <= 0) {
    //     let set = new Set();
    //     p.currentAvalibleCombination.forEach(avalible => {
    //         if (avalible.includes(item.id)) {
    //             avalible.forEach(id => set.add(id));
    //         }
    //     });
    //     p.currentAvalibeSessionSelected = Array.from(set);
    // }
    let set = new Set();

    // Lap qua cac phan tu cua
    p.currentAvalibleCombination.forEach((avalible) => {
        //Kiem tra tat ca cac phan tu cua temparr co nam trong mang avalible hay khong
        if (p.currentChoosenOptions.every((item) => avalible.includes(item.id))) {
            avalible.forEach((element) => {
                set.add(element);
            });
        }
    });

    p.currentAvalibeSessionSelected = Array.from(set);
};

//Sub: Ham xu ly khi kiem tra xem cac option khac co nam trong danh sach duoc cho khong
const onDisableOptionNotIncludeInAvalableArray = (p) => {
    p.currentListOptions.forEach((option) => {
        option.zoneChilds.forEach((zone) => {
            if (p.currentAvalibeSessionSelected.indexOf(zone.id) < 0) {
                zone.isDisable = true;
            } else {
                zone.isDisable = false;
            }
        });
    });
};

//Sub: hàm so sánh 2 mảng bằng nhau
const areArraysEqual = (a, b) => {
    if (a.length !== b.length) return false;

    const setA = new Set(a);
    const setB = new Set(b);

    if (setA.size !== setB.size) return false;

    return [...setA].every((item) => setB.has(item));
};

// Ham xu ly khi chon 1 selectedDate

// Ham validate du thong tin de goi database

// Ham tinh toan Total Price
const totalPrice = computed(() => {
    let _t = 0;
    payItems.value.forEach((pay) => {
        if (pay.selectedPriceByDate != null) {
            pay.totalPrice =
                pay.choosenNguoiLon * pay.selectedPriceByDate?.priceEachNguoiLon +
                pay.choosenTreEm * pay.selectedPriceByDate?.priceEachTreEm;
            _t += pay.totalPrice;
        }
    });
    return _t;
});
const countPayItems = computed(() => {
    let _c = 0;
    payItems.value.forEach((pay) => {
        if (pay.totalPrice) {
            _c++;
        }
    });
    return _c;
});
const payTemplate = ref({
    avatar: "",
    bookingName: "",
    bookingParentName: "",
    choosenDate: "",
    combination: [],
    couponType: 0,
    couponValue: 0,
    currentPickOption: [],
    discountSelected: {
        couponCode: "",
        couponDescription: "",
        couponPrice: 0,
    },
    discountTickets: [],
    dvNguoiLong: "",
    dvTreEm: "",
    numberOfAldut: 0,
    numberOfChildrend: 0,
    productBookingNoteGroups: [],
    productChildId: 0,
    productId: 0,
    totalPrice: 0,
    triggerWatch: true,
    unit: "",
    url: "",
});

const calculatePays = () => {
    let pays = [];
    payItems.value.forEach((pay) => {
        if (pay.totalPrice) {
            let data = JSON.parse(JSON.stringify(payTemplate.value));
            data.avatar = productDetail.value.avatar;
            data.bookingName = pay.currentPackage.title;
            data.bookingParentName = productDetail.value.title;
            data.choosenDate = helper.formatISODate(pay.currentSelectedDate);
            //Tim combination phu hop
            pay.combinations.forEach((com) => {
                if (com.zoneList == pay.selectedPriceByDate.zoneList) {
                    data.combination = com;
                }
            });
            //Tinh currentPickOption
            data.currentPickOption = [];
            pay.currentChoosenOptions.forEach((r) => {
                pay.currentListOptions.forEach((lo) => {
                    lo.zoneChilds.forEach((z) => {
                        // console.log(z.id, r.id);
                        if (z.id == r.id) {
                            let _i = {
                                parentGroup: lo.zoneParent.url,
                                parentGroupName: lo.zoneParent.name,
                                pickItem: z.id,
                                pickItemName: z.name,
                            };
                            // console.log(_i);
                            data.currentPickOption.push(_i);
                        }
                    });
                });
            });

            if (productDetail.value.unit) {
                data.dvNguoiLong = productDetail.value.unit;
            } else {
                data.dvNguoiLong = "Aldut";
                data.dvTreEm = "Child";
            }
            data.numberOfAldut = pay.choosenNguoiLon;
            data.numberOfChildrend = pay.choosenTreEm;
            data.productBookingNoteGroups =
                productDetail.value.productBookingNoteGroups;
            data.productBookingNoteGroups.forEach((b) => {
                (b.isValidNote = true),
                    b.noteList.forEach((n) => {
                        n.triggerValid = false;
                    });
            });
            data.productChildId = pay.currentPackage.productId;
            data.productId = productDetail.value.id;
            data.url = productDetail.value.url;

            pays.push(data);
        }
    });

    return pays;
};

const buyNow = () => {
    // console.log(payItems.value, productDetail.value)
    // convert pay object like API
    let pays = calculatePays();
    payStore.onAddPays(pays);
    router.push("/checkout");
};

const onAddToCart = () => {
    if (countPayItems.value > 0) {
        let pays = calculatePays();
        pays.forEach((p) => {
            cartStore.onAddCart(p);
        });

        router.push("/cart");
    }
};

// #endregion
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
    tickets.value[index].showOptionDropdown =
        !tickets.value[index].showOptionDropdown;

    // Cập nhật temporary option và active ticket index
    tempSelectedOption.value = tickets.value[index].selectedOption || "over-week";
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
    tickets.value[index].showGuestDropdown =
        !tickets.value[index].showGuestDropdown;

    // Cập nhật temporary guests và active ticket index
    tempGuests.value = {
        adult: tickets.value[index].guests.adult || 0,
        child: tickets.value[index].guests.child || 0,
    };
    activeTicketIndex.value = index;
};

const resetSelection = () => {
    onClickBuyNowParent();
};

const nextMonth = (p) => {
    p.calendar.currentMonth++;
    if (p.calendar.currentMonth > 12) {
        p.calendar.currentMonth = 1;
        p.calendar.currentYear++;
    }
    onLoadCelendar(p);
};

const prevMonth = (p) => {
    p.calendar.currentMonth--;
    if (p.calendar.currentMonth < 1) {
        p.calendar.currentMonth = 12;
        p.calendar.currentYear--;
    }
    onLoadCelendar(p);
};

const updateCalendar = (p) => {
    // Get days in month
    p.calendar.daysInMonth = new Date(
        p.calendar.currentYear,
        p.calendar.currentMonth,
        0
    ).getDate();

    // Get first day of month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    let firstDay = new Date(
        p.calendar.currentYear,
        p.calendar.currentMonth - 1,
        1
    ).getDay();
    // Adjust for Monday as first day of week
    p.calendar.firstDayOfMonth = firstDay === 0 ? 6 : firstDay - 1;
};

const isSelectedDate = (day, ticketIndex) => {
    if (tickets.value[ticketIndex].selectedDate) {
        return (
            tickets.value[ticketIndex].selectedDate.day === day &&
            tickets.value[ticketIndex].selectedDate.month === currentMonth.value &&
            tickets.value[ticketIndex].selectedDate.year === currentYear.value
        );
    }
    return false;
};

const isDisabledDate = (day) => {
    // Example: disable past dates
    const today = new Date();
    if (currentYear.value < today.getFullYear()) return true;
    if (
        currentYear.value === today.getFullYear() &&
        currentMonth.value < today.getMonth() + 1
    )
        return true;
    if (
        currentYear.value === today.getFullYear() &&
        currentMonth.value === today.getMonth() + 1 &&
        day < today.getDate()
    )
        return true;
    return false;
};

const selectDate = (day, ticketIndex) => {
    if (!isDisabledDate(day)) {
        tickets.value[ticketIndex].selectedDate = {
            day: day,
            month: currentMonth.value,
            year: currentYear.value,
        };
    }
};

const selectTempOption = (option) => {
    tempSelectedOption.value = option;
};

const onSelectedZoneChild = (child) => {
    console.log(child);
};

const setupCurrentDate = () => {
    const today = new Date();

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // từ 0 - 11
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay() + 1; // từ 0-6, cộng 1 nếu bạn muốn 1-7

    let df_calendar = {
        firstDayOfMonth: firstDayOfMonth,
        daysInMonth: daysInMonth,
        currentMonth: currentMonth,
        currentYear: currentYear,
        items: [],
    };
    currentBook.value.calendar = df_calendar;
    console.log(currentBook.value);
};
// Lifecycle hook
onMounted(async () => {
    setupCurrentDate();

    // StatusBar.setOverlaysWebView({ overlay: true }); // Cho nội dung tràn lên StatusBar
    // console.log(productDetail.value, "productDetail.value");
    // await onLoadPackage();
});

const loadProductDetail = async () => {
    productDetail.value = await productComposable.getProductDetail();
    seenStore.onAddSeen(productDetail.value.id);
};
onBeforeMount(async () => {
    loadProductDetail();
});

onUnmounted(() => {
    // StatusBar.setOverlaysWebView({ overlay: false }); // Khi thoát trang: trả statusbar về bình thường
});
watch(
    () => route.params.id,
    async (newId, oldId) => {
        if (newId !== oldId) {
            loadProductDetail();
        }
    }
);
const toggleReadMore = (review) => {
    review.isExpanded = !review.isExpanded; // Đảo trạng thái mở rộng
};
</script>
<style scoped>
.custom-tabs {
    border-bottom: none;
}

.custom-tab-link {
    color: #8a929e;
    border: none;
    padding: 10px 9px;
    font-size: 14px;
}

.custom-tab-link.active {
    color: #03294c !important;
    border-bottom: 2px solid #03294c !important;
    background-color: transparent;
    font-weight: 700;
}

.nav-tabs .nav-link.active {
    background-color: unset !important;
    color: unset !important;
}

.custom-tab-content {
    /* padding-top: 15px; */
}

.custom-paragraph {
    color: #575f6b;
    font-size: 14px;
    line-height: 1.5;
}

.nav-tabs .nav-link {
    border-radius: unset;
    font-weight: 500;
}

.nav-tabs .nav-link {
    background-color: unset;
}

iframe {
    border-radius: 25px;
}

.custom-tab-link.active {
    font-weight: 700;
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
    width: 76%;
    /* This will make the first review take more than half the screen */
    margin-right: 20px;
    /* Add space between reviews */
}

.tour-card {
    flex: 0 0 auto;
    width: 230px;
    padding: 0;
    position: relative;
    border: 1px solid #edf1f7;
    border-radius: 12px;
    overflow: hidden;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    background-color: white;
}

.dateActive {
    background-color: #03294c !important;
    color: white;
}

.optionActive {
    background-color: #03294c !important;
    color: white;
}

.don-vi {
    padding-right: 0;
    font-size: 19px;
}

.optionDisable {
    background-color: #ddd;
}

.reset-btn-booking {
    position: absolute;
top: 23px;
    right: 20px;
}

.fullscreen-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.6);
    /* nền mờ */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.news-title-blogg {
    font-weight: 600;
    color: #03294C;
    margin-bottom: 5px;
    font-size: 14px;
    text-overflow: unset;
    overflow: unset;
    display: -webkit-box;
    -webkit-line-clamp: unset;
    -webkit-box-orient: vertical;
}

.buy-btn-booking:disabled {
    background-color: #d6d6d6;
    color: #999;
    cursor: not-allowed;
}

</style>
