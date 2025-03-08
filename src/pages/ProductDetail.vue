<template>
    <div class="product-containerr">
        <!-- Main image -->
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <!-- Slide 1 -->
                <div class="carousel-item active">
                    <img src="../assets/images/10.jpg" alt="Fansipan Temple Complex" class="d-block w-100"
                        style="height: 280px; object-fit: cover;">
                    <div class="position-absolute start-0 translate-middle-y p-3 icon">
                        <button class="back-button-product">
                            <i class="fas fa-arrow-left" style="color: white;"></i>
                        </button>
                    </div>
                    <div class="position-absolute end-0 translate-middle-y p-3 icon">
                        <img height="30" src="../assets/images/shopping-cart-w.png" />
                    </div>
                </div>

                <div class="carousel-item">
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
                </div>
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
            <div class=" title-detail">Sunworld Fansipan Ticket</div>
            <div class="d-flex align-items-center mt-1 dia-chi-product justify-content-between">
                <div> <i class="fas fa-map-marker-alt location-dot"></i>
                    <span>Sapa Town | 40 Booked</span>
                </div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span class="rating-value">4.5</span>
                </div>

            </div>
        </div>

        <div className="container-fluid p-0">
            <ul className="nav nav-tabs custom-tabs justify-content-center" id="productTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active custom-tab-link" id="product-detail-tab" data-bs-toggle="tab"
                        data-bs-target="#product-detail" type="button" role="tab" aria-controls="product-detail"
                        aria-selected="true">
                        Product detail
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custom-tab-link" id="description-tab" data-bs-toggle="tab"
                        data-bs-target="#description" type="button" role="tab" aria-controls="description"
                        aria-selected="false">
                        Description
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custom-tab-link" id="terms-tab" data-bs-toggle="tab"
                        data-bs-target="#terms" type="button" role="tab" aria-controls="terms" aria-selected="false">
                        Term and conditions
                    </button>
                </li>
            </ul>

            <div className="tab-content custom-tab-content" id="productTabsContent">
                <div className="tab-pane fade show active p-3" id="product-detail" role="tabpanel"
                    aria-labelledby="product-detail-tab">
                    <p className="mb-3 custom-paragraph">
                        Conquer the highest peak in Vietnam effortlessly on an unforgettable cable car journey.
                    </p>
                    <p className="mb-3 custom-paragraph">
                        Enjoy the breathtaking scenery of Sapa's terraced rice fields and the pristine natural landscape
                        of
                        Fansipan.
                    </p>
                    <p className="mb-3 custom-paragraph">
                        Admire the majestic scenery of numerous temples and different spiritual landmarks from the main
                        peak. Pay
                        homage to the Spiritual Cultural Complex with its 12 impressive architectural structures.
                    </p>
                    <p className="mb-3 custom-paragraph">
                        Especially, the Great Amitabha Buddha statue holds the record for being located at the highest
                        altitude in
                        Asia, where the sacred Buddha relics are preserved.
                    </p>
                </div>
                <div className="tab-pane fade p-3" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <p className="mb-3 custom-paragraph">
                        Admire the majestic scenery of numerous temples and different spiritual landmarks from the main
                        peak. Pay
                        homage to the Spiritual Cultural Complex with its 12 impressive architectural structures.
                    </p>
                    <p className="mb-3 custom-paragraph">
                        Especially, the Great Amitabha Buddha statue holds the record for being located at the highest
                        altitude in
                        Asia, where the sacred Buddha relics are preserved.
                    </p>
                </div>
                <div className="tab-pane fade p-3" id="terms" role="tabpanel" aria-labelledby="terms-tab">

                    <p className="mb-3 custom-paragraph">
                        Especially, the Great Amitabha Buddha statue holds the record for being located at the highest
                        altitude in
                        Asia, where the sacred Buddha relics are preserved.
                    </p>
                </div>
            </div>
        </div>
        <!-- Ha Noi Station -->
        <div class="border-top p-3">
            <div class="-flex justify-content-between align-items-center">
                <h2 class="title-map">Ha Noi Station</h2>
                <!-- <i class="fas fa-chevron-down" style="font-size: 20px;"></i> -->
            </div>
            <div>
                <div class="position-relative h-100">
                    <div className="position-relative mt-3" style="height: 300px;">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14895.650269277523!2d105.84962223989592!3d21.042252458940154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb158a2305d%3A0x5c357d21c785ea3d!2zTG9uZyBCacOqbiwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1709644048409!5m2!1sen!2sus"
                            width="100%" height="100%" allowFullScreen={false} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                </div>
            </div>
        </div>
        <div class="container-fluid p-4 review-product">
            <!-- Rating Header -->
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="d-flex align-items-center gap-4">
                    <h2 class="display-6 fw-bold mb-0 so-review">4.5</h2>
                    <div class="d-flex text-warning">
                        <i class="fas fa-star" style="font-size: 24px;"></i>
                        <i class="fas fa-star" style="font-size: 24px;"></i>
                        <i class="fas fa-star" style="font-size: 24px;"></i>
                        <i class="fas fa-star" style="font-size: 24px;"></i>
                        <i class="fas fa-star-half-alt" style="font-size: 24px;"></i>
                    </div>
                </div>
                <a href="#" class="text-primary text-decoration-none view-all">
                    View All
                </a>
            </div>

            <div class="review-container">
                <!-- Review Quote -->
                <div class="nd-rv">
                    <div class="mb-4 border-bottom">
                        <div class="position-relative d-flex pb-3">
                            <img width="20" height="20" src="../assets/images/dau.png" />
                            <div>
                                <p class="ms-4 mb-1 text-rv" style="font-size: 14px;">
                                    There are many exciting options for our journey, and the interface is user-friendly
                                    and
                                    easy
                                    to...
                                </p>
                                <a href="#" class="ms-4 read-more-pr" style="font-size: 14px;">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- User Profile -->
                    <div class="d-flex align-items-center gap-2 mb-4">
                        <img src="../assets/images/10.jpg" alt="Tanaka Yuki" class="rounded-circle" width="40"
                            height="40" />
                        <div>
                            <p class="mb-0 name-rv">Tanaka Yuki</p>
                            <div class="d-flex text-warning bao-sao">
                                <i class="fas fa-star" style="font-size: 14px;"></i>
                                <i class="fas fa-star" style="font-size: 14px;"></i>
                                <i class="fas fa-star" style="font-size: 14px;"></i>
                                <i class="fas fa-star" style="font-size: 14px;"></i>
                                <i class="fas fa-star" style="font-size: 14px;"></i>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="nd-rv">
                    <div class="mb-4 border-bottom">
                        <div class="position-relative d-flex pb-3">
                            <img width="20" height="20" src="../assets/images/dau.png" />
                            <div>
                                <p class="ms-4 mb-1 text-rv" style="font-size: 14px;">
                                    There are many exciting options for our journey, and the interface is user-friendly
                                    and
                                    easy
                                    to...
                                </p>
                                <a href="#" class="ms-4 read-more-pr" style="font-size: 14px;">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- User Profile -->
                    <div class="d-flex align-items-center gap-2 mb-4">
                        <img src="../assets/images/8.png" alt="Tanaka Yuki" class="rounded-circle" width="40"
                            height="40" />
                        <div>
                            <p class="mb-0 name-rv">Tanaka Yuki</p>
                            <div class="d-flex text-warning bao-sao">
                                <i class="fas fa-star" style="font-size: 14px;"></i>
                                <i class="fas fa-star" style="font-size: 14px;"></i>
                                <i class="fas fa-star" style="font-size: 14px;"></i>
                                <i class="fas fa-star" style="font-size: 14px;"></i>
                                <i class="fas fa-star" style="font-size: 14px;"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div class="recently-container p-4">
            <div class="recently-header">
                <h2 class="promo-title">You might also like</h2>

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
                <router-link to="/booking"> <button class="search-button" id="search">
                        Buy Now
                    </button></router-link>
            </div>
        </div>

    </div>

</template>
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