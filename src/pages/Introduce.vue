    <template>
        <div class="introduce" style="padding-bottom: 10px;">

            <HeaderTitle :title="$t('Introduce')"></HeaderTitle>

            <div class="card p-3">
                <Accordion value="0">
                    <AccordionPanel value="0" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="/images/document-text.png" alt="">
                                <div class="promo-title">{{ $t('Our_Story_Title_About') }}</div>
                            </div>
                        </AccordionHeader>
                        <AccordionContent>
                            <p class="m-0 dia-chi-product">
                                {{ $t('Our_Story_Paragraph1_About') }}<br />
                                {{ $t('Our_Story_Paragraph2_About') }}<br />
                                {{ $t('Our_Story_Paragraph3_About') }}
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="1" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="/images/eye.png" alt="">
                                <div class="promo-title">{{ $t('Our_Vision_Title_About') }}</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <p class="m-0 dia-chi-product">
                                {{ $t('Our_Vision_Paragraph_About') }}
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="2" class="our-story mb-3">
                        <AccordionHeader>
                            <div class="d-flex gap-3 align-items-center">
                                <img class="img-itroduct" src="/images/element-equal.png" alt="">
                                <div class="promo-title">{{ $t('Our_Mission_Title_About') }}</div>
                            </div>
                        </AccordionHeader>

                        <AccordionContent>
                            <p class="m-0 dia-chi-product">
                                {{ $t('Our_Mission_Paragraph_About') }}
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
<style scoped>
.card{
    margin-bottom: 35px;
}
</style>
