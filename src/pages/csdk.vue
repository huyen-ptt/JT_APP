    <template>
        <div class="introduce">
            <HeaderTitle :title="$t('Policies_And_Terms')"></HeaderTitle>
            <div class="card  p-3">
                <Accordion value="0">
                    <AccordionPanel value="0" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="/images/message-question.png" alt="">
                                <div class="promo-title">{{ $t('Customer_Info_Privacy_Policy_CSDK') }}</div>
                            </div>
                        </AccordionHeader>
                        <AccordionContent>
                            <div class="dia-chi-product">
                                <div class="policy-section">
                                    <b class="section-title">{{ $t('PrivacyPolicy_Purpose_Title_CSDK') }}</b>
                                    <ul class="policy-list">
                                        <li>{{ $t('PrivacyPolicy_Purpose_Desc1_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Purpose_Desc2_CSDK') }}</li>
                                    </ul>
                                </div>

                                <div class="policy-section">
                                    <b class="section-title">{{ $t('PrivacyPolicy_Scope_Title_CSDK') }}</b>
                                    <ul class="policy-list">
                                        <li>{{ $t('PrivacyPolicy_Scope_List1_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Scope_List2_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Scope_List3_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Scope_List4_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Scope_List5_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Scope_List6_CSDK') }}</li>
                                    </ul>
                                </div>

                                <div class="policy-section">
                                    <b class="section-title">{{ $t('PrivacyPolicy_Storage_Title_CSDK') }}</b>
                                    <ul class="policy-list">
                                        <li>{{ $t('PrivacyPolicy_Storage_Desc_CSDK') }}</li>
                                    </ul>
                                </div>
                                <div class="policy-section">
                                    <b class="section-title">{{ $t('PrivacyPolicy_Access_Title_CSDK') }}</b>
                                    <ul class="policy-list">
                                        <li>{{ $t('PrivacyPolicy_Access_Desc_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Access_List1_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Access_List2_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Access_List3_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Access_List4_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Access_List5_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Access_List6_CSDK') }}</li>
                                    </ul>
                                </div>

                                <!-- Mục 5 (Thông tin liên hệ) -->
                                <div class="policy-section">
                                    <p class="contact-info">{{ $t('PrivacyPolicy_ContactInfo_Desc_CSDK') }}</p>
                                    <ul class="policy-list">
                                        <li>{{ $t('PrivacyPolicy_ContactInfo_Company_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_ContactInfo_TradeName_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_ContactInfo_Address_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_ContactInfo_Hotline_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_ContactInfo_Email_CSDK') }}</li>
                                    </ul>
                                </div>

                                <!-- Mục 6 -->
                                <div class="policy-section">
                                    <b class="section-title">{{ $t('PrivacyPolicy_Methods_Title_CSDK') }}</b>
                                    <ul class="policy-list">
                                        <li>{{ $t('PrivacyPolicy_Methods_List1_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Methods_List2_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Methods_List3_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Methods_List4_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Methods_Email_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Methods_Hotline_CSDK') }}</li>
                                    </ul>
                                </div>

                                <!-- Mục 7 -->
                                <div class="policy-section">
                                    <b class="section-title">{{ $t('PrivacyPolicy_Mechanism_Title_CSDK') }}</b>
                                    <ul class="policy-list">
                                        <li>{{ $t('PrivacyPolicy_Mechanism_List1_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Mechanism_List2_CSDK') }}</li>
                                    </ul>
                                </div>

                                <!-- Mục 8 -->
                                <div class="policy-section">
                                    <b class="section-title">{{ $t('PrivacyPolicy_Commitment_Title_CSDK') }}</b>
                                    <ul class="policy-list">
                                        <li>{{ $t('PrivacyPolicy_Commitment_List1_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Commitment_List2_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Commitment_List3_CSDK') }}</li>
                                        <li>{{ $t('PrivacyPolicy_Commitment_List4_CSDK') }}</li>
                                    </ul>
                                </div>
                            </div>

                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="1" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="/images/message-question.png" alt="">
                                <div class="promo-title">{{ $t('Payment_Method_Info_CSDK') }}</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <div class="dia-chi-product">
                                <p>{{ $t('Payment_OnlineMethod') }}</p>
                                <p>{{ $t('Payment_Currency') }}</p>
                                <p>{{ $t('Payment_Security') }}</p>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>

                    <AccordionPanel value="2" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="/images/message-question.png" alt="">
                                <div class="promo-title">{{ $t("Service_Delivery_Methods_CSDK") }}</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <div class="dia-chi-product">

                                <p><b>{{ $t('Delivery_1_Title') }}</b></p>
                                <p>{{ $t('Delivery_1_1') }}</p>
                                <p>{{ $t('Delivery_1_2') }}</p>

                                <p><b>{{ $t('Delivery_2_Title') }}</b></p>
                                <p>{{ $t('Delivery_2_1') }}</p>
                                <p>{{ $t('Delivery_2_2') }}</p>

                                <p><b>{{ $t('Delivery_3_Title') }}</b></p>
                                <p><b>{{ $t('Delivery_3_Electronic_Title') }}</b> {{ $t('Delivery_3_Electronic_Text') }}
                                </p>
                                <p><b>{{ $t('Delivery_3_InPerson_Title') }}</b> {{ $t('Delivery_3_InPerson_Text') }}</p>
                                <p><b>{{ $t('Delivery_3_Physical_Title') }}</b> {{ $t('Delivery_3_Physical_Text') }}</p>

                                <ul>
                                    <li>{{ $t('Delivery_3_Physical_Note1') }}</li>
                                    <li>{{ $t('Delivery_3_Physical_Note2') }}</li>
                                    <li>{{ $t('Delivery_3_Physical_Note3') }}</li>
                                </ul>

                                <p><b>{{ $t('Delivery_3_Home_Title') }}</b> {{ $t('Delivery_3_Home_Text') }}</p>
                                <p><b>{{ $t('Delivery_3_City_Title') }}</b> {{ $t('Delivery_3_City_Text') }}</p>
                                <p><b>{{ $t('Delivery_3_Suburban_Title') }}</b> {{ $t('Delivery_3_Suburban_Text') }}</p>
                                <p><b>{{ $t('Delivery_3_Other_Title') }}</b> {{ $t('Delivery_3_Other_Text') }}</p>

                                <p>{{ $t('Delivery_3_Express') }}</p>
                                <p><i>{{ $t('Delivery_3_DelayNote') }}</i></p>
                                <p><b>{{ $t('Delivery_Responsibility_Title') }}</b></p>
                                <p>{{ $t('Delivery_Responsibility_1') }}</p>
                                <p>{{ $t('Delivery_Responsibility_2') }}</p>
                                <p>{{ $t('Delivery_Responsibility_3') }}</p>

                                <p><b>{{ $t('Delivery_Notification_Title') }}</b></p>
                                <ul>
                                    <li>{{ $t('Delivery_Notification_1') }}</li>
                                    <li>{{ $t('Delivery_Notification_2') }}</li>
                                </ul>

                                <p><b>{{ $t('Post_Service_Support_Title') }}</b></p>
                                <ul>
                                    <li>{{ $t('Post_Service_Support_1') }}</li>
                                    <li>{{ $t('Post_Service_Support_2') }}</li>
                                </ul>

                                <p><b>{{ $t('Cancellation_Policy_Title') }}</b></p>
                                <ul>
                                    <li>{{ $t('Cancellation_Policy_1') }}</li>
                                    <li>{{ $t('Cancellation_Policy_2') }}</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>

                    <AccordionPanel value="3" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="/images/message-question.png" alt="">
                                <div class="promo-title">{{ $t('Inspection_Refund_Policy_CSDK') }}</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <div class="dia-chi-product">
                                 <p><b>{{ $t('service_inspection_title') }}</b></p>
                                <ul>
                                    <li>{{ $t('before_confirming_service') }}</li>
                                    <li>{{ $t('booking_and_services') }}</li>
                                    <li>{{ $t('check_information') }}</li>
                                </ul>

                                 <p><b>{{ $t('refund_conditions_title') }}</b></p>
                                <ul>
                                    <li>{{ $t('booking_conditions') }}</li>
                                    <li>{{ $t('non_refundable_notice') }}</li>
                                </ul>

                                 <p><b>{{ $t('refund_period_title') }}</b></p>
                                <ul> 
                                    <li>{{ $t('tour_refund_policy') }}</li>
                                    <li>{{ $t('airport_refund_policy') }}</li>
                                </ul>

                                 <p><b>{{ $t('refund_method_title') }}</b></p>
                                <ul>
                                    <li>{{ $t('refund_method_details') }}</li>
                                </ul>

                                 <p><b>{{ $t('refund_process_title') }}</b></p>
                                <ul>
                                    <li>{{ $t('refund_request_process') }}</li>
                                </ul>

                                 <p><b>{{ $t('exchange_policy_title') }}</b></p>
                                <ul>
                                    <li>{{ $t('exchange_policy_details') }}</li>
                                </ul>

                                 <p><b>{{ $t('warranty_policy_title') }}</b></p>
                                <ul>
                                    <li>{{ $t('warranty_policy_details') }}</li>
                                </ul>

                                 <p><b>{{ $t('contact_title') }}</b></p>
                                <ul>
                                    <li>{{ $t('contact_assistance') }}</li>
                                    <li>{{ $t('email_contact') }}</li>
                                    <li>{{ $t('hotline_contact') }}</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>

                </Accordion>
            </div>
            <Footer></Footer>
        </div>
    </template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import HeaderTitle from '../components/HeaderTitle.vue';
import Footer from "@/components/Footer.vue";

</script>
