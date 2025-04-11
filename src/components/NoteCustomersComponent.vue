<template>
   <Accordion class="mt-3">
  <div class="title-1477 pb-2">{{ info.zoneName }}</div>
  <AccordionPanel class="customer1" v-for="(customer, index) in customers" :value="index" :key="index">
    <AccordionHeader class="customer-accordion-custom-class">
        <div class="title145">{{ $t('CUSTOMER') }} {{ index + 1 }}<span class="text-danger"> *</span></div>
    </AccordionHeader>
    <AccordionContent class="p-0 servies-det">
      <div class="row mb-3">
        <div class="col-12">
          <label class="form-label">{{ $t('FIRST_NAME') }}</label>
          <input type="text" class="form-control" :placeholder="$t('FIRST_NAME')" v-model="customer.firstName">
          <div class="error-message" v-if="info.triggerValid && customer.firstName == ''">
            <small>{{ $t('ERRPR_MISSING_CUSTOMER_FIRSTNAME_INPUT') }}</small>
          </div>
        </div>
        <div class="col-12">
          <label class="form-label">{{ $t('FAMILY_NAME') }}</label>
          <input type="text" class="form-control" :placeholder="$t('FAMILY_NAME')" v-model="customer.familyName">
          <div class="error-message" v-if="info.triggerValid && customer.familyName == ''">
            <small>{{ $t('ERRPR_MISSING_CUSTOMER_FAMILYNAME_INPUT') }}</small>
          </div>
        </div>
      </div>

      <!-- Nationality and Birthday -->
      <div class="row mb-3">
        <div class="col-12">
          <label class="form-label">{{ $t('NATIONALITY') }}</label>
          <Select v-model="customer.country" :options="countries" id="country_2" optionLabel="name"
            optionValue="code" :placeholder="$t('NATIONALITY')" filter
            :filterPlaceholder="$t('NATIONALITY')" class="form-select na"
            :emptyFilterMessage="$t('NO_RESULTS_FOUND')"></Select>
          <div class="error-message" v-if="info.triggerValid && customer.country == ''">
            <small>{{ $t('ERRPR_MISSING_CUSTOMER_COUNTRY_INPUT') }}</small>
          </div>
        </div>
        <div class="col-12">
          <label class="form-label">{{ $t('BIRTHDAY') }}</label>
          <div class="position-relative">
            <DatePicker width="100%" v-model="customer.birthDay" dateFormat="dd/mm/yyyy" class="date-check "/>
          </div>
          <div class="error-message" v-if="info.triggerValid && customer.birthDay == ''">
            <small>{{ $t('ERRPR_MISSING_CUSTOMER_BIRTHDAY_INPUT') }}</small>
          </div>
        </div>
      </div>

      <!-- Passport Number -->
      <div class="mb-3">
        <label class="form-label">{{ $t('PASSPORT_NUMBER') }}</label>
        <input type="text" v-model="customer.passportNumber" class="form-control"
          :placeholder="$t('PASSPORT_NUMBER')">
        <div class="error-message" v-if="info.triggerValid && customer.passportNumber == ''">
          <small>{{ $t('ERRPR_MISSING_CUSTOMER_PASSPORT_INPUT') }}</small>
        </div>
      </div>
    </AccordionContent>
  </AccordionPanel>
</Accordion>
</template>
<script setup>
import { ref, onBeforeMount, computed, onMounted, watch, toRef } from "vue";
import DatePicker from 'primevue/datepicker';
import { useI18n } from 'vue-i18n'
import Select from 'primevue/select';

const { locale, t } = useI18n();

const props = defineProps({
    info: Object,
    trigger: Boolean,
    count: Number
})



const customers = ref([]);
const tempateCustomerNote = ref({
    firstName: "",
    familyName: "",
    country: "",
    birthDay: "",
    passportNumber: ""
})


// console.log('currentPays',currentPays)
const countries = ref([
    { name: t("Vietnam"), code: 'VN' },
    { name: t("United_States"), code: 'US' },
    { name: t("China"), code: 'CN' },
    { name: t("Japan"), code: 'JP' },
    { name: t("South_Korea"), code: 'KR' },
    { name: t("Germany"), code: 'DE' },
    { name: t("France"), code: 'FR' },
    { name: t("United_Kingdom"), code: 'GB' },
    { name: t("Canada"), code: 'CA' },
    { name: t("Australia"), code: 'AU' },
    { name: t("India"), code: 'IN' },
    { name: t("Brazil"), code: 'BR' },
    { name: t("Russia"), code: 'RU' },
    { name: t("Mexico"), code: 'MX' },
    { name: t("Italy"), code: 'IT' },
    { name: t("Spain"), code: 'ES' },
    { name: t("Indonesia"), code: 'ID' },
    { name: t("Saudi_Arabia"), code: 'SA' },
    { name: t("Turkey"), code: 'TR' },
    { name: t("Argentina"), code: 'AR' },
    { name: t("Thailand"), code: 'TH' },
    { name: t("Philippines"), code: 'PH' },
    { name: t("Netherlands"), code: 'NL' },
    { name: t("Belgium"), code: 'BE' },
    { name: t("Sweden"), code: 'SE' },
    { name: t("Norway"), code: 'NO' },
    { name: t("Denmark"), code: 'DK' },
    { name: t("Finland"), code: 'FI' },
    { name: t("Austria"), code: 'AT' },
    { name: t("Switzerland"), code: 'CH' },
    { name: t("Czech_Republic"), code: 'CZ' },
    { name: t("Greece"), code: 'GR' },
    { name: t("Portugal"), code: 'PT' },
    { name: t("Ireland"), code: 'IE' },
    { name: t("Israel"), code: 'IL' },
    { name: t("South_Africa"), code: 'ZA' },
    { name: t("Egypt"), code: 'EG' },
    { name: t("Malaysia"), code: 'MY' },
    { name: t("Singapore"), code: 'SG' },
    { name: t("New_Zealand"), code: 'NZ' },
    { name: t("Colombia"), code: 'CO' },
    { name: t("Chile"), code: 'CL' },
    { name: t("Peru"), code: 'PE' },
    { name: t("Venezuela"), code: 'VE' },
    { name: t("Pakistan"), code: 'PK' },
    { name: t("Bangladesh"), code: 'BD' },
    { name: t("Nigeria"), code: 'NG' },
    { name: t("Kenya"), code: 'KE' },
    { name: t("Morocco"), code: 'MA' },
    { name: t("Algeria"), code: 'DZ' },
    { name: t("Iraq"), code: 'IQ' },
    { name: t("Kuwait"), code: 'KW' },
    { name: t("Qatar"), code: 'QA' },
    { name: t("Oman"), code: 'OM' },
    { name: t("Jordan"), code: 'JO' },
    { name: t("Ukraine"), code: 'UA' },
    { name: t("Serbia"), code: 'RS' },
    { name: t("Romania"), code: 'RO' },
    { name: t("Bulgaria"), code: 'BG' },
    { name: t("Slovakia"), code: 'SK' },
    { name: t("Hungary"), code: 'HU' },
    { name: t("Lithuania"), code: 'LT' },
    { name: t("Latvia"), code: 'LV' },
    { name: t("Estonia"), code: 'EE' },
    { name: t("Belarus"), code: 'BY' },
    { name: t("Moldova"), code: 'MD' },
    { name: t("Georgia"), code: 'GE' },
    { name: t("Armenia"), code: 'AM' },
    { name: t("Azerbaijan"), code: 'AZ' },
    { name: t("Cuba"), code: 'CU' },
    { name: t("Dominican_Republic"), code: 'DO' },
    { name: t("Honduras"), code: 'HN' },
    { name: t("Guatemala"), code: 'GT' },
    { name: t("El_Salvador"), code: 'SV' },
    { name: t("Costa_Rica"), code: 'CR' },
    { name: t("Panama"), code: 'PA' },
    { name: t("Paraguay"), code: 'PY' },
    { name: t("Uruguay"), code: 'UY' },
    { name: t("Czechia"), code: 'CZ' },
    { name: t("Kosovo"), code: 'XK' },
    { name: t("North_Macedonia"), code: 'MK' },
    { name: t("Vatican_City"), code: 'VA' },
    { name: t("Afghanistan"), code: 'AF' },
    { name: t("Albania"), code: 'AL' },
    { name: t("Cambodia"), code: 'KH' },
    { name: t("Iceland"), code: 'IS' },
    { name: t("Iran"), code: 'IR' },
    { name: t("Kazakhstan"), code: 'KZ' },
    { name: t("Laos"), code: 'LA' },
    { name: t("Luxembourg"), code: 'LU' },
    { name: t("Myanmar"), code: 'MM' },
    { name: t("Nepal"), code: 'NP' },
    { name: t("Poland"), code: 'PL' },
    { name: t("Slovenia"), code: 'SI' },
    { name: t("Tanzania"), code: 'TZ' },
    { name: t("Tunisia"), code: 'TN' },
    { name: t("United_Arab_Emirates"), code: 'AE' },
    { name: t("Uzbekistan"), code: 'UZ' },
    { name: t("Yemen"), code: 'YE' },
    { name: t("Zimbabwe"), code: 'ZW' },
]);

const onValidateCustomerInfo = () => {

}
const emit = defineEmits(['update:info']);
const generateNoteValue = () => {
    console.log('AN')
  let str = "";
  customers.value.forEach(r => {
    str += `[${r.firstName} - ${r.familyName} - ${r.birthDay} - ${r.country} - ${r.passportNumber}] `;
  });

  // Emit ra info mới có noteValue được cập nhật
  emit('update:info', {
    ...props.info,
    noteValue: str
  });
};

watch(customers, generateNoteValue, { deep: true, immediate: true });

onMounted(() => {
    for (let i = 0; i < props.count; i++) {
        customers.value.push(JSON.parse(JSON.stringify(tempateCustomerNote.value)));
    }
})


</script>
<style scoped>
.form-select,
.form-control {
    background-color: #F5F7FA;
    border: 1px solid #EDF1F7;
    border-radius: 15px;
    font-size: 14px;
    padding: 10px 12px;
    font-weight: 400;
    color: #8A929E;
}
.form-label {
    font-size: 14px;
    color: #8A929E;
    margin-bottom: 6px;
}
.na .p-select-label.p-placeholde{
  color: #8A929E !important;

}
</style>