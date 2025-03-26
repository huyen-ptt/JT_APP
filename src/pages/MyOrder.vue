<template>
    <div>
        <div class="top-bar-product p-4 bg-white title border-bottom">
            <button class="back-button-product"  @click="$router.go(-1)">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title-product">My order</h1>
            <button class="cart-button-product">
&nbsp;
            </button>
        </div>
        <div className="container-fluid p-0">
            <ul className="nav nav-tabs custom-tabs justify-content-center" id="productTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active custom-tab-link" id="product-detail-tab" data-bs-toggle="tab"
                        data-bs-target="#product-detail" type="button" role="tab" aria-controls="product-detail"
                        aria-selected="true">
                        Newly created
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custom-tab-link" id="description-tab" data-bs-toggle="tab"
                        data-bs-target="#description" type="button" role="tab" aria-controls="description"
                        aria-selected="false">
                        Ready
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custom-tab-link" id="terms-tab" data-bs-toggle="tab"
                        data-bs-target="#terms" type="button" role="tab" aria-controls="terms" aria-selected="false">
                        Used
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link custom-tab-link" id="pending" data-bs-toggle="tab"
                        data-bs-target="#terms" type="button" role="tab" aria-controls="terms" aria-selected="false">
                        Pending/Cancelled
                    </button>
                </li>
            </ul>

            <div className="tab-content custom-tab-content" id="productTabsContent">
                <div className="tab-pane fade show active p-3" id="product-detail" role="tabpanel"
                    aria-labelledby="product-detail-tab">
                    <div class="order-card-myorder position-relative mb-3">
                        <div class="order-header-myorder">
                            <div>
                                <div class="title-1477">#JT_21677</div>
                                <div class="results-count-product">Ordered on 20/02/2025</div>
                            </div>
                            <div class="date-box-myorder">
                                <div>
                                    <div class="service-text">Mar</div>
                                    <div class="recently-title">16</div>
                                </div>
                            </div>
                            <div class="chevron-myorder">›</div>

                        </div>

                        <div class="order-details-myorder">
                            <img src="../assets/images/10.jpg" alt="Ninh Binh tour" class="tour-image-myorder">
                            <div class="tour-info-myorder">
                                <div class="tour-title-myorder">Day tour | Explore Ninh Binh Experience cycling Bai</div>
                                <div class="tour-description-myorder">Day tour in Ninh Binh | Experience cycling Bai
                                    Dinh - Day tour | Explore Ninh Binh</div>
                            </div>
                        </div>

                        <div class="order-footer-myorder">
                            <div class="total-amount-myorder">
                                <div class="amount-label-myorder">Total amount</div>
                                <div class="price-myorder">VND 1,200,000</div>
                            </div>
                            <button class="support-button-myorder">Contact support</button>
                        </div>
                    </div>
                    <div class="order-card-myorder position-relative mb-3">
                        <div class="order-header-myorder">
                            <div>
                                <div class="title-1477">#JT_21677</div>
                                <div class="results-count-product">Ordered on 20/02/2025</div>
                            </div>
                            <div class="date-box-myorder">
                                <div>
                                    <div class="service-text">Mar</div>
                                    <div class="recently-title">16</div>
                                </div>
                            </div>
                            <div class="chevron-myorder">›</div>

                        </div>

                        <div class="order-details-myorder">
                            <img src="../assets/images/8.png" alt="Ninh Binh tour" class="tour-image-myorder">
                            <div class="tour-info-myorder">
                                <div class="tour-title-myorder">Day tour | Explore Ninh Binh Experience cycling Bai</div>
                                <div class="tour-description-myorder">Day tour in Ninh Binh | Experience cycling Bai
                                    Dinh - Day tour | Explore Ninh Binh</div>
                            </div>
                        </div>

                        <div class="order-footer-myorder">
                            <div class="total-amount-myorder">
                                <div class="amount-label-myorder">Total amount</div>
                                <div class="price-myorder">VND 1,200,000</div>
                            </div>
                            <button class="support-button-myorder">Contact support</button>
                        </div>
                    </div>
                    <div class="order-card-myorder position-relative mb-3">
                        <div class="order-header-myorder">
                            <div>
                                <div class="title-1477">#JT_21677</div>
                                <div class="results-count-product">Ordered on 20/02/2025</div>
                            </div>
                            <div class="date-box-myorder">
                                <div>
                                    <div class="service-text">Mar</div>
                                    <div class="recently-title">16</div>
                                </div>
                            </div>
                            <div class="chevron-myorder">›</div>

                        </div>

                        <div class="order-details-myorder">
                            <img src="../assets/images/2.png" alt="Ninh Binh tour" class="tour-image-myorder">
                            <div class="tour-info-myorder">
                                <div class="tour-title-myorder">Day tour | Explore Ninh Binh Experience cycling Bai</div>
                                <div class="tour-description-myorder">Day tour in Ninh Binh | Experience cycling Bai
                                    Dinh - Day tour | Explore Ninh Binh</div>
                            </div>
                        </div>

                        <div class="order-footer-myorder">
                            <div class="total-amount-myorder">
                                <div class="amount-label-myorder">Total amount</div>
                                <div class="price-myorder">VND 1,200,000</div>
                            </div>
                            <button class="support-button-myorder">Contact support</button>
                        </div>
                    </div>
                    <div class="order-card-myorder position-relative mb-3">
                        <div class="order-header-myorder">
                            <div>
                                <div class="title-1477">#JT_21677</div>
                                <div class="results-count-product">Ordered on 20/02/2025</div>
                            </div>
                            <div class="date-box-myorder">
                                <div>
                                    <div class="service-text">Mar</div>
                                    <div class="recently-title">16</div>
                                </div>
                            </div>
                            <div class="chevron-myorder">›</div>

                        </div>

                        <div class="order-details-myorder">
                            <img src="../assets/images/7.png" alt="Ninh Binh tour" class="tour-image-myorder">
                            <div class="tour-info-myorder">
                                <div class="tour-title-myorder">Day tour | Explore Ninh Binh Experience cycling Bai</div>
                                <div class="tour-description-myorder">Day tour in Ninh Binh | Experience cycling Bai
                                    Dinh - Day tour | Explore Ninh Binh</div>
                            </div>
                        </div>

                        <div class="order-footer-myorder">
                            <div class="total-amount-myorder">
                                <div class="amount-label-myorder">Total amount</div>
                                <div class="price-myorder">VND 1,200,000</div>
                            </div>
                            <button class="support-button-myorder">Contact support</button>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade p-3" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <div class="order-card-myorder position-relative mb-3">
                        <div class="order-header-myorder">
                            <div>
                                <div class="title-1477">#JT_21677</div>
                                <div class="results-count-product">Ordered on 20/02/2025</div>
                            </div>
                            <div class="date-box-myorder">
                                <div>
                                    <div class="service-text">Mar</div>
                                    <div class="recently-title">16</div>
                                </div>
                            </div>
                            <div class="chevron-myorder">›</div>

                        </div>

                        <div class="order-details-myorder">
                            <img src="../assets/images/2.png" alt="Ninh Binh tour" class="tour-image-myorder">
                            <div class="tour-info-myorder">
                                <div class="tour-title-myorder">Day tour | Explore Ninh Binh Experience cycling Bai</div>
                                <div class="tour-description-myorder">Day tour in Ninh Binh | Experience cycling Bai
                                    Dinh - Day tour | Explore Ninh Binh</div>
                            </div>
                        </div>

                        <div class="order-footer-myorder">
                            <div class="total-amount-myorder">
                                <div class="amount-label-myorder">Total amount</div>
                                <div class="price-myorder">VND 1,200,000</div>
                            </div>
                            <button class="support-button-myorder">Contact support</button>
                        </div>
                    </div>
                    <div class="order-card-myorder position-relative mb-3">
                        <div class="order-header-myorder">
                            <div>
                                <div class="title-1477">#JT_21677</div>
                                <div class="results-count-product">Ordered on 20/02/2025</div>
                            </div>
                            <div class="date-box-myorder">
                                <div>
                                    <div class="service-text">Mar</div>
                                    <div class="recently-title">16</div>
                                </div>
                            </div>
                            <div class="chevron-myorder">›</div>

                        </div>

                        <div class="order-details-myorder">
                            <img src="../assets/images/7.png" alt="Ninh Binh tour" class="tour-image-myorder">
                            <div class="tour-info-myorder">
                                <div class="tour-title-myorder">Day tour | Explore Ninh Binh Experience cycling Bai</div>
                                <div class="tour-description-myorder">Day tour in Ninh Binh | Experience cycling Bai
                                    Dinh - Day tour | Explore Ninh Binh</div>
                            </div>
                        </div>

                        <div class="order-footer-myorder">
                            <div class="total-amount-myorder">
                                <div class="amount-label-myorder">Total amount</div>
                                <div class="price-myorder">VND 1,200,000</div>
                            </div>
                            <button class="support-button-myorder">Contact support</button>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade p-3" id="terms" role="tabpanel" aria-labelledby="terms-tab">

                    
                    <div class="order-card-myorder position-relative mb-3">
                        <div class="order-header-myorder">
                            <div>
                                <div class="title-1477">#JT_21677</div>
                                <div class="results-count-product">Ordered on 20/02/2025</div>
                            </div>
                            <div class="date-box-myorder">
                                <div>
                                    <div class="service-text">Mar</div>
                                    <div class="recently-title">16</div>
                                </div>
                            </div>
                            <div class="chevron-myorder">›</div>

                        </div>

                        <div class="order-details-myorder">
                            <img src="../assets/images/7.png" alt="Ninh Binh tour" class="tour-image-myorder">
                            <div class="tour-info-myorder">
                                <div class="tour-title-myorder">Day tour | Explore Ninh Binh Experience cycling Bai</div>
                                <div class="tour-description-myorder">Day tour in Ninh Binh | Experience cycling Bai
                                    Dinh - Day tour | Explore Ninh Binh</div>
                            </div>
                        </div>

                        <div class="order-footer-myorder">
                            <div class="total-amount-myorder">
                                <div class="amount-label-myorder">Total amount</div>
                                <div class="price-myorder">VND 1,200,000</div>
                            </div>
                            <button class="support-button-myorder">Contact support</button>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade p-3" id="terms" role="tabpanel" aria-labelledby="pending">

                    <div class="order-card-myorder position-relative mb-3">
                        <div class="order-header-myorder">
                            <div>
                                <div class="title-1477">#JT_21677</div>
                                <div class="results-count-product">Ordered on 20/02/2025</div>
                            </div>
                            <div class="date-box-myorder">
                                <div>
                                    <div class="service-text">Mar</div>
                                    <div class="recently-title">16</div>
                                </div>
                            </div>
                            <div class="chevron-myorder">›</div>

                        </div>

                        <div class="order-details-myorder">
                            <img src="../assets/images/2.png" alt="Ninh Binh tour" class="tour-image-myorder">
                            <div class="tour-info-myorder">
                                <div class="tour-title-myorder">Day tour | Explore Ninh Binh Experience cycling Bai</div>
                                <div class="tour-description-myorder">Day tour in Ninh Binh | Experience cycling Bai
                                    Dinh - Day tour | Explore Ninh Binh</div>
                            </div>
                        </div>

                        <div class="order-footer-myorder">
                            <div class="total-amount-myorder">
                                <div class="amount-label-myorder">Total amount</div>
                                <div class="price-myorder">VND 1,200,000</div>
                            </div>
                            <button class="support-button-myorder">Contact support</button>
                        </div>
                    </div>
                    <div class="order-card-myorder position-relative mb-3">
                        <div class="order-header-myorder">
                            <div>
                                <div class="title-1477">#JT_21677</div>
                                <div class="results-count-product">Ordered on 20/02/2025</div>
                            </div>
                            <div class="date-box-myorder">
                                <div>
                                    <div class="service-text">Mar</div>
                                    <div class="recently-title">16</div>
                                </div>
                            </div>
                            <div class="chevron-myorder">›</div>

                        </div>

                        <div class="order-details-myorder">
                            <img src="../assets/images/7.png" alt="Ninh Binh tour" class="tour-image-myorder">
                            <div class="tour-info-myorder">
                                <div class="tour-title-myorder">Day tour | Explore Ninh Binh Experience cycling Bai</div>
                                <div class="tour-description-myorder">Day tour in Ninh Binh | Experience cycling Bai
                                    Dinh - Day tour | Explore Ninh Binh</div>
                            </div>
                        </div>

                        <div class="order-footer-myorder">
                            <div class="total-amount-myorder">
                                <div class="amount-label-myorder">Total amount</div>
                                <div class="price-myorder">VND 1,200,000</div>
                            </div>
                            <button class="support-button-myorder">Contact support</button>
                        </div>
                    </div>
                </div>
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
</style>