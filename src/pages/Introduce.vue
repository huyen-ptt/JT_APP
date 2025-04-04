    <template>
        <div class="introduce">

            <HeaderTitle :title="$t('Introduce')"></HeaderTitle>

            <div class="card  p-3">
                <Accordion value="0">
                    <AccordionPanel value="0" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="../assets/images/document-text.png" alt="">
                                <div class="promo-title">Our Story</div>
                            </div>
                        </AccordionHeader>
                        <AccordionContent>
                            <p class="m-0 dia-chi-product">
                                "Joytime" a name that combines "joy" and "time" embodies our passion and commitment to
                                bringing travelers joyful moments as they explore Vietnam!  We believe that each trip is
                                not
                                just about visiting new places, but also about deeply connecting with local culture and
                                creating unforgettable memories. Joytime understands the value of these meaningful
                                experiences and is dedicated to accompanying you as you uncover the beauty of Vietnam.
                                 Joytime offers a multi-service platform and local experiences, focusing on providing
                                international travelers with rich cultural and travel experiences in Vietnam. From
                                booking
                                transportation, travel SIM cards, and local tours to engaging in cultural, culinary, and
                                shopping activities, we are always ready to connect you with the true essence of
                                Vietnam.
                                With exclusive offers and in-depth travel guidance, Joytime aims to help you create
                                memorable moments as you explore the country and its people.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="1" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="../assets/images/eye.png" alt="">
                                <div class="promo-title">Our Vision</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <p class="m-0 dia-chi-product">
                                To become the leading platform for international travelers, offering unique cultural and
                                travel experiences in Vietnam.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="2" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="../assets/images/element-equal.png" alt="">
                                <div class="promo-title">Our Mission</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <p class="m-0 dia-chi-product">
                                Joytime is committed to providing high-quality, reliable, and convenient travel
                                services,
                                connecting international travelers with Vietnam's distinctive culture and memorable
                                moments.
                                We continuously strive to enhance our offerings to provide you with ideal journeys and
                                help
                                you fully discover the beauty of Vietnam. With a team of experienced professionals,
                                knowledgeable and passionate about Vietnamese travel, we are always ready to support
                                international travelers at every step, serving as a bridge to help you explore a
                                refined,
                                intimate, and colorful Vietnam.
                            </p>
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
