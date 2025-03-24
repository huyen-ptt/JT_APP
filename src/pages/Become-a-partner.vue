<template>
    <div class="top-bar-product p-4 bg-white title">
        <button class="back-button-product">
            <i class="fas fa-arrow-left"></i>
        </button>
        <h1 class="page-title-product">{{$t('become_a_partner')}}</h1>
        <button class="cart-button-product"></button>
    </div>
    <div class="form-baow m-3">
        <div class="sz-big text-center">{{$t('collaborate_with_us')}}</div>
        <h1 class="calendar-day-header-booking text-center pb-1">
            {{$t('achieve_enduring_values')}}<br>
            {{$t('email_us_at')}}
        </h1>
        <a class="text-center select-all-text d-block" href="mailto:partner@joytime.vn">partner@joytime.vn</a>
    </div>
    <div class="form-baow m-3">
        <div class="container-be py-4">
            <!-- Header Section -->
            <div class="row-be header-section-be">
                <div class="col-12-be">
                    <h1 class="promo-title pb-2">{{$t('enrich_trips_collaboration_tomorrow')}}</h1>
                    <p class="dia-chi-product">{{$t('promote_growth_experiential')}}</p>
                </div>
            </div>

            <!-- Customer Network Section -->
            <div class="row-be pt-4">
                <div class="col-md-6-be">
                    <h2 class="promo-title pb-2">{{$t('gain_access_broad_network')}}</h2>
                    <p class="dia-chi-product">{{$t('partners_reach_millions')}}</p>

                    <div class="so-lieu d-flex justify-content-center gap-3">
                        <div class="so-lieu border" style="width: 50%;">
                            <div class="stat-box-be">
                                <div class="d-flex  align-items-center">
                                    <div class="stat-icon-be">
                                        <img width="24" src="../assets/images/star.png" />
                                    </div>
                                    <p class="service-date">{{$t('satisfaction_rate')}}</p>
                                </div>
                                <div class="stat-content-be pt-2">
                                    <p class="sz-bigg">96%</p>
                                </div>
                            </div>
                        </div>
                        <div class="so-lieu border" style="width: 50%;">
                            <div class="stat-box-be">
                                <div class="d-flex align-items-center">
                                    <div class="stat-icon-be">
                                        <img width="24" src="../assets/images/element-equal.png" />
                                    </div>
                                    <p class="service-date">{{$t('wide_range_products')}}</p>
                                </div>
                                <div class="stat-content-be pt-2">
                                    <p class="sz-bigg">+10,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6-be">
                    <div class="image-container-be">
                        <img class="img-be" src="../assets/images/image-34.png" alt="{{$t('alt_people_discussing')}}">
                    </div>
                    <h2 class="promo-title pb-2">{{$t('build_travel_experiences')}}</h2>
                    <p class="dia-chi-product">{{$t('increase_income_guides')}}</p>
                </div>
            </div>

            <!-- Travel Experiences Section -->
            <div class="row-be">
                <div class="col-md-6-be">
                    <div class="image-container-be">
                        <img class="img-be" src="../assets/images/image-35.png" alt="{{$t('alt_person_mountain')}}">
                    </div>
                </div>
                <div class="col-md-6-be">
                    <h2 class="promo-title pb-2">{{$t('opportunities')}}</h2>
                    <p class="dia-chi-product">{{$t('comprehensive_ecosystem')}}</p>
                </div>
                <div class="col-md-6-be">
                    <h2 class="promo-title pb-2">{{$t('join_affiliate_program')}}</h2>
                    <p class="dia-chi-product">{{$t('earn_commissions')}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
