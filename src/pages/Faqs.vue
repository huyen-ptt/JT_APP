    <template>
        <div class="introduce">
            <div class="top-bar-product p-4 bg-white title">
                <button class="back-button-product" @click="$router.go(-1)">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h1 class="page-title-product">FAQs</h1>
                <button class="cart-button-product">

                </button>
            </div>
            <div class="card  p-3">
                <Accordion value="0">
                    <AccordionPanel value="0" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="../assets/images/message-question.png" alt="">
                                <div class="promo-title">Joytime Account Step</div>
                            </div>
                        </AccordionHeader>
                        <AccordionContent>

                            <div class="dia-chi-product"><b>Register a Joytime
                                    Account</b>
                                <ul>
                                    <li>Visit <a href="https://joytime.vn">https://joytime.vn</a>, click on 'Sign Up/Log
                                        In'.
                                    </li>
                                    <li>Enter your email, phone number, and password.</li>
                                    <li>Click 'Agree'.</li>
                                    <li>After successfully logging in, your profile picture will be
                                        displayed in the top right corner of the screen.</li>
                                </ul><b>How do I change the password?</b>
                                <ul>
                                    <li>Log in to Your Account, go to the joytime.vn and log in to
                                        your account using your email and current password.</li>
                                    <li>Access Account Settings, Once logged in, click on your
                                        profile icon, and choose “Change Password”</li>
                                    <li>Enter Current and New Password, you will be prompted to enter
                                        your current password, followed by your new password. Make sure your new
                                        password meets the security requirements, such as a minimum length or the use of
                                        special characters.</li>
                                    <li>Save Changes, after entering the required information, click
                                        “Change Password” to confirm the change.</li>
                                </ul>
                            </div>

                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="1" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="../assets/images/message-question.png" alt="">
                                <div class="promo-title">Discover and Experience</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <div class="dia-chi-product">
                                <p><b>How do I book a tour or service on
                                        Joytime?</b></p>
                                <p>Booking with Joytime is simple:</p>
                                <ul>
                                    <li>Visit joytime.vn.</li>
                                    <li>Browse through the categories to find your desired service.
                                    </li>
                                    <li>Select the service, choose your options (e.g., date,
                                        quantity), and add to the cart.</li>
                                    <li>Proceed to checkout and complete payment. You will receive a
                                        confirmation email with your booking details shortly after.</li>
                                </ul>
                                <p><b>What payment methods does Joytime
                                        accept?</b></p>
                                <p>We accept the following payment methods:</p>
                                <ul>
                                    <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
                                    <li>PayPal</li>
                                </ul><b>Can I book multiple services at once?</b>
                                <p>Yes, you can add multiple services to your cart and complete a
                                    single checkout for all bookings.</p><b>Is my payment information
                                    secure?</b>
                                <p>Absolutely. Joytime uses advanced encryption technologies to
                                    ensure your payment details are secure.</p><b>Are there any
                                    discounts for travelers frequently?</b>
                                <p>Yes, Joytime frequently offers promotions and discounts for
                                    customers. Create an account on our website to receive promotional emails, or follow
                                    us on social media (Facebook, Instagram,..) to stay updated on the latest deals.</p>
                                <b>How can I apply a promo code?</b>
                                <ul>
                                    <li>Select the product/service you desire</li>
                                    <li>Complete the required information process</li>
                                    <li>Enter the promo code in the 'ENTER PROMO CODE' field</li>
                                    <li>Complete the payment process</li>
                                </ul><b>Payment in Currencies Other Than Vietnamese Dong</b>
                                <ul>
                                    <li>When paying for orders on Joytime, you can use several types
                                        of currencies.</li>
                                    <li>Joytime determines the conversion rate, and the actual amount
                                        charged to your account will depend on the rate applied at the time of payment.
                                        Please note that your bank or credit card issuer may convert the payment to your
                                        country's default currency, which could result in additional fees for currency
                                        conversion.</li>
                                    <li>Some banks or credit card providers may charge extra
                                        conversion fees for online transactions. These fees are applied by the bank or
                                        card issuer, not Joytime.</li>
                                    <li>For further information on these charges, please contact your
                                        bank or credit card issuer.</li>
                                </ul>
                                <p>Note: Joytime does not charge any conversion or transaction fees.
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="2" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="../assets/images/message-question.png" alt="">
                                <div class="promo-title">Cancellation & Refunds</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <div class="dia-chi-product">
                                <p><b>Can I cancel or modify my booking?</b></p>
                                <p>Yes, you can cancel or modify your booking, subject to the
                                    cancellation policy of the specific service or tour.</p>
                                <ul>
                                    <li>Cancellation policies are mentioned on each product page.
                                    </li>
                                    <li>For modifications, please contact our customer support team
                                        with your booking details.</li>
                                </ul>
                                <p><b>What is the refund policy?</b></p>
                                <p>Refunds depend on the cancellation policy of the service provider.
                                    Generally:</p>
                                <ul>
                                    <li>If applicable, returns can be made for products purchased
                                        through our services within 14 days of receipt.</li>
                                    <li>Products must be new or unused for a return to be eligible.
                                    </li>
                                    <li>Items such as gift cards are non-refundable.</li>
                                </ul>
                                <p><b>Refund Process:</b></p>
                                <ul>
                                    <li>Refunds will be issued to the original payment method unless
                                        otherwise agreed.</li>
                                    <li>It may take up to 10 business days to process the refund.
                                    </li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="3" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="../assets/images/message-question.png" alt="">
                                <div class="promo-title">Customer Support</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <div class="dia-chi-product">
                                <p><b>How do I contact Joytime for support?</b></p>
                                <p>You can reach out to our customer support team via:</p>
                                <ul>
                                    <li>Hotline: <a href="tel:+84 902 225 282">+84 902 225 282</a></li>
                                    <li>Email: <a href="mailto:cs@joytime.vn">cs@joytime.vn</a></li>
                                    <li>Live Chat: Available on our Social Media Platform (Facebook, Instagram,..) Our
                                        team is available 24/7 to assist you.</li>
                                </ul>
                                <p><b>What should I do if I don't receive my booking confirmation?</b></p>
                                <p>If you haven't received your confirmation email:</p>
                                <ol>
                                    <li>Please check your spam folder. In some cases, emails may be redirected to this
                                        folder.</li>
                                    <li>Ensure the email address entered during booking is correct.</li>
                                    <li>For modifications, please contact our customer support team with your booking
                                        details.</li>
                                </ol>
                                <p><b>Can I track the status of my booking?</b></p>
                                <p>Yes, you can log in to your account on our website to view and track your booking
                                    status.</p>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
        </div>
    </template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
</script>
