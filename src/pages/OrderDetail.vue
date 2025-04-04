<template>
    <HeaderTitle :title="$t('My_Order')"></HeaderTitle>

    <div class="container-order-detail m-3">
        <div>


            <div class="card-order-detail border mb-3">
                <div class="card-header-order-detail">
                    <span class="title145">Order Status</span>
                    <span class="status-badge-order-detail">Newly created</span>
                </div>
                <div class="order-info-order-detail px-3 py-3">
                    <div class="title145">Order ID<b> #JT_21677</b> </div>
                    <div class="order-date-order-detail">Order Date: 20/02/2025 09:31</div>

                    <div class="customer-info-order-detail">
                        <div class="info-row-order-detail">
                            <div class="info-label-order-detail">Requestor</div>
                            <div class="info-value-order-detail">Jhung Minh</div>
                        </div>
                        <div class="info-row-order-detail">
                            <div class="info-label-order-detail">Email</div>
                            <div class="info-value-order-detail">Minh24197@gmail.com</div>
                        </div>
                        <div class="info-row-order-detail">
                            <div class="info-label-order-detail">Phone number</div>
                            <div class="info-value-order-detail">0345348096</div>
                        </div>
                    </div>
                </div>

                <div class="px-3 py-3">
                    <button class="action-button-order-detail mb-2">
                        <img class="pe-2" src="../assets/images/document-download.png" /> Download E-Ticket
                    </button>
                    <button class="action-button-order-detail">
                        <img class="pe-2" src="../assets/images/document-textt.png" /> Invoice Information
                    </button>
                </div>
            </div>

            <div class="card-order-detail border">
                <div><img src="../assets/images/10.jpg" alt="Ninh Binh Tour" class="tour-image-order-detail px-1 py-1">
                </div>
                <div class="tour-info-order-detail px-3">
                    <div class="border-bottom">
                        <div class="service-time-order-detail">Service time: 25/2/2025</div>
                        <div class="tour-title-order-detail">Day tour | Explore Ninh Binh departing Experience cycling
                            Bai Dinh</div>
                        <div class="tour-description-order-detail">Day tour in Ninh Binh | Experience
                            cycling Bai Dinh -
                            Trang
                            An</div>
                    </div>

                    <div class="tour-details-order-detail">
                        <div class="detail-row-order-detail d-flex mb-2" style="justify-content: space-between;">
                            <div class="tour-description-order-detail m-0">Option</div>
                            <div class="detail-value-order-detail">Limousine car</div>
                        </div>
                        <div class="detail-row-order-detail d-flex" style="justify-content: space-between;">
                            <div class="tour-description-order-detail">Quantity</div>
                            <div class="detail-value-order-detail">Adult x2 | Children x1</div>
                        </div>

                    </div>

                </div>
                <div class="detail-row-order-detail1 mt-3 ">
                    <div class="tour-description-order-detail total-amount-order-detail">Total amount</div>
                    <div class="detail-value-order-detail amount-value-order-detail">VND 860,000</div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <ul className="nav nav-tabs custom-tabs justify-content-center" id="productTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active custom-tab-link" id="product-detail-tab" data-bs-toggle="tab"
                            data-bs-target="#product-detail" type="button" role="tab" aria-controls="product-detail"
                            aria-selected="true">
                            Policy
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link custom-tab-link" id="description-tab" data-bs-toggle="tab"
                            data-bs-target="#description" type="button" role="tab" aria-controls="description"
                            aria-selected="false">
                            Note
                        </button>
                    </li>

                </ul>

                <div className="tab-content custom-tab-content my-r" id="productTabsContent">
                    <div className="tab-pane fade show active" id="product-detail" role="tabpanel"
                        aria-labelledby="product-detail-tab">
                        <div className="tab-pane fade show active" id="product-detail" role="tabpanel"
                            aria-labelledby="product-detail-tab">
                            <p className="mb-3 custom-paragraph mt-3">
                                Conquer the highest peak in Vietnam effortlessly on an unforgettable cable car journey.
                            </p>
                            <p className="mb-3 custom-paragraph">
                                Enjoy the breathtaking scenery of Sapa's terraced rice fields and the pristine natural
                                landscape
                                of
                                Fansipan.
                            </p>
                            <p className="mb-3 custom-paragraph">
                                Admire the majestic scenery of numerous temples and different spiritual landmarks from
                                the main
                                peak. Pay
                                homage to the Spiritual Cultural Complex with its 12 impressive architectural
                                structures.
                            </p>
                            <p className="mb-3 custom-paragraph">
                                Especially, the Great Amitabha Buddha statue holds the record for being located at the
                                highest
                                altitude in
                                Asia, where the sacred Buddha relics are preserved.
                            </p>
                        </div>
                    </div>
                    <div className="tab-pane fade p-3" id="description" role="tabpanel"
                        aria-labelledby="description-tab">
                        <p className="mb-3 custom-paragraph">
                            Enjoy the breathtaking scenery of Sapa's terraced rice fields and the pristine natural
                            landscape
                            of
                            Fansipan.
                        </p>
                        <p className="mb-3 custom-paragraph">
                            Admire the majestic scenery of numerous temples and different spiritual landmarks from the
                            main
                            peak. Pay
                            homage to the Spiritual Cultural Complex with its 12 impressive architectural structures.
                        </p>
                        <p className="mb-3 custom-paragraph">
                            Especially, the Great Amitabha Buddha statue holds the record for being located at the
                            highest
                            altitude in
                            Asia, where the sacred Buddha relics are preserved.
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="bottom-menu menu-search bo-goc gap-3">
            <router-link to="" class="btn-search cancle"> <button class="search-button btn-search" id="search">
                    Cancel Order
                </button></router-link>
            <router-link to="" class="btn-search "> <button class="search-button btn-search" id="search">
                    Contact Support
                </button></router-link>
        </div>
    </div>
</template>
<script setup>
import HeaderTitle from '../components/HeaderTitle.vue'; 
</script>
<style scoped>
.search-button {
    padding: 14px 24px;
    border-radius: 16px;
    border: none;
    background-color: #446EDE;
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.bo-goc .cancle button {
    background: white !important;
    border: 1px solid #03294C !important;
    color: #03294C !important;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    background-color: transparent !important;
    padding: 11px 23px;
    border-radius: 16px;
    align-items: center;
}

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