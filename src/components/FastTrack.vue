<template>
    <Accordion>
        <AccordionPanel value="4">
            <AccordionHeader class="p-0">
                <div class="service-details">
                    <h3 class="promo-title pb-1">For Fast Track Service<span class="text-danger"> *</span>
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
                            <img src="../assets/images/edit-2.png" alt="" style="object-fit: contain;">
                        </div>

                        <!-- Time Selection -->
                        <div class="row mb-3">
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

                        <!-- Pick-up/Drop-off Location -->
                        <div class="mb-3">
                            <label class="form-label">
                                Pick-up/ Drop-off Location<span class="required-mark">*</span>
                            </label>
                            <input type="text" class="form-control" placeholder="Enter Pick-up/ Drop-off Location">
                        </div>

                        <!-- Location Type -->
                        <div class="mb-3">
                            <label class="form-label">
                                Pick-up/ Drop-off Location<span class="required-mark">*</span>
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

                        <!-- Flight Number -->
                        <div class="mb-3">
                            <label class="form-label">
                                Flight number<span class="required-mark">*</span>
                            </label>
                            <input type="text" class="form-control" placeholder="Flight number">
                            <div class="helper-text">
                                Please provide your flight number for your better
                                experience...
                            </div>
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionPanel>
    </Accordion>
</template>
