    <template>
        <div class="introduce" style="padding-bottom: 10px;">
            <HeaderTitle :title="$t('FAQS_ACCOUNT')"></HeaderTitle>
            <div class="card p-3">
                <Accordion value="0">
                    <AccordionPanel value="0" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="/images/message-question.png" alt="">
                                <div class="promo-title">{{ $t('Joytime_Account_Step_FAQ') }}</div>
                            </div>
                        </AccordionHeader>
                        <AccordionContent>
                            <div class="dia-chi-product">
                                <b>{{ $t('Register_Joytime_FAQ') }}</b>
                                <ul>
                                    <li>
                                        {{ $t('Visit_Joytime_FAQ') }}
                                        <a href="https://joytime.vn">https://joytime.vn</a>, {{ $t('Click_Sign_Up_FAQ')
                                        }}
                                    </li>
                                    <li>{{ $t('Enter_Email_Phone_Password_FAQ') }}</li>
                                    <li>{{ $t('Click_Agree_FAQ') }}</li>
                                    <li>{{ $t('Profile_Picture_Top_Right_FAQ') }}</li>
                                </ul>
                                <b>{{ $t('Change_Password_FAQ') }}</b>
                                <ul>
                                    <li>{{ $t('Login_Account_FAQ') }}</li>
                                    <li>{{ $t('Access_Account_Settings_FAQ') }}</li>
                                    <li>{{ $t('Enter_Current_New_Password_FAQ') }}</li>
                                    <li>{{ $t('Save_Changes_FAQ') }}</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="1" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="/images/message-question.png" alt="">
                                <div class="promo-title">{{ $t('Discover_And_Experience_FAQ') }}</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <div class="dia-chi-product">
                                <p><b>{{ $t('How_To_Book_FAQ') }}</b></p>
                                <p>{{ $t('Booking_Simple_FAQ') }}</p>
                                <ul>
                                    <li>{{ $t('Booking_Step_Visit_FAQ') }}</li>
                                    <li>{{ $t('Booking_Step_Browse_FAQ') }}</li>
                                    <li>{{ $t('Booking_Step_Select_FAQ') }}</li>
                                    <li>{{ $t('Booking_Step_Checkout_FAQ') }}</li>
                                </ul>

                                <p><b>{{ $t('Payment_Methods_FAQ') }}</b></p>
                                <p>{{ $t('Payment_Methods_Intro_FAQ') }}</p>
                                <ul>
                                    <li>{{ $t('Payment_Credit_Cards_FAQ') }}</li>
                                    <li>{{ $t('Payment_PayPal_FAQ') }}</li>
                                </ul>

                                <b>{{ $t('Multiple_Services_FAQ') }}</b>
                                <p>{{ $t('Multiple_Services_Answer_FAQ') }}</p>

                                <b>{{ $t('Is_Payment_Secure_FAQ') }}</b>
                                <p>{{ $t('Payment_Secure_Answer_FAQ') }}</p>

                                <b>{{ $t('Frequent_Traveler_Discounts_FAQ') }}</b>
                                <p>{{ $t('Discounts_Answer_FAQ') }}</p>

                                <b>{{ $t('Apply_Promo_Code_FAQ') }}</b>
                                <ul>
                                    <li>{{ $t('Promo_Select_Product_FAQ') }}</li>
                                    <li>{{ $t('Promo_Fill_Info_FAQ') }}</li>
                                    <li>{{ $t('Promo_Enter_Code_FAQ') }}</li>
                                    <li>{{ $t('Promo_Complete_Payment_FAQ') }}</li>
                                </ul>

                                <b>{{ $t('Currency_Conversion_FAQ') }}</b>
                                <ul>
                                    <li>{{ $t('Currency_Conversion_Options_FAQ') }}</li>
                                    <li>{{ $t('Currency_Conversion_Note_FAQ') }}</li>
                                    <li>{{ $t('Currency_Conversion_BankFees_FAQ') }}</li>
                                    <li>{{ $t('Currency_Conversion_Contact_FAQ') }}</li>
                                </ul>

                                <p>{{ $t('No_Joytime_Fee_FAQ') }}</p>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>

                    <AccordionPanel value="2" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="/images/message-question.png" alt="">
                                <div class="promo-title">{{ $t("Cancellation_Refunds_FAQ") }}</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <div class="dia-chi-product">
                                <p><b>{{ $t("Cancel_Modify_Booking_FAQ") }}</b></p>
                                <p>{{ $t("Cancel_Modify_Booking_Answer_FAQ") }}</p>
                                <ul>
                                    <li>{{ $t("Cancel_Policy_Detail_FAQ") }}</li>
                                    <li>{{ $t("Cancel_Contact_Support_FAQ") }}</li>
                                </ul>

                                <p><b>{{ $t("Refund_Policy_FAQ") }}</b></p>
                                <p>{{ $t("Refund_Policy_Intro_FAQ") }}</p>
                                <ul>
                                    <li>{{ $t("Refund_Within_14Days_FAQ") }}</li>
                                    <li>{{ $t("Refund_New_Unused_FAQ") }}</li>
                                    <li>{{ $t("Refund_No_GiftCards_FAQ") }}</li>
                                </ul>

                                <p><b>{{ $t("Refund_Process_FAQ") }}</b></p>
                                <ul>
                                    <li>{{ $t("Refund_Original_Method_FAQ") }}</li>
                                    <li>{{ $t("Refund_Timeline_FAQ") }}</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>

                    <AccordionPanel value="3" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="/images/message-question.png" alt="">
                                <div class="promo-title">{{ $t('customer_support_title') }}</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <div class="dia-chi-product">
                                <p><b>{{ $t('customer_support_contact_question') }}</b></p>
                                <p>{{ $t('customer_support_contact_intro') }}</p>
                                <ul>
                                    <li>{{ $t('customer_support_hotline') }}: <a href="tel:+84 902 225 282">+84 902 225
                                            282</a></li>
                                    <li>{{ $t('customer_support_email') }}: <a
                                            href="mailto:cs@joytime.vn">cs@joytime.vn</a></li>
                                    <li>{{ $t('customer_support_live_chat') }}</li>
                                </ul>

                                <p><b>{{ $t('customer_support_missing_confirmation_title') }}</b></p>
                                <p>{{ $t('customer_support_missing_confirmation_intro') }}</p>
                                <ol>
                                    <li>{{ $t('customer_support_check_spam') }}</li>
                                    <li>{{ $t('customer_support_verify_email') }}</li>
                                    <li>{{ $t('customer_support_contact_support') }}</li>
                                </ol>

                                <p><b>{{ $t('customer_support_track_booking_title') }}</b></p>
                                <p>{{ $t('customer_support_track_booking_detail') }}</p>
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
<style scoped>
.card{
    margin-bottom: 35px;
}
</style>
