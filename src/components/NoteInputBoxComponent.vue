<template>

    <div class="mb-3">
        <label class="form-label">
            {{ info.zoneName }}<span class="required-mark" v-if="info.bookingNoteRequired">*</span>
        </label>
        <input type="text" class="form-control" v-model="info.noteValue" :placeholder="info.notePlaceHolder">
    </div>
    <div class="error-message" v-if="info.triggerValid && info.noteValue == ''">
        <small>{{ $t('ERRPR_MISSING_NOTE_INPUT') }}</small>
    </div>
</template>
<script setup>
import { ref, onBeforeMount, computed, onMounted, watch } from "vue";

const props = defineProps({
    info: Object,
    trigger: Boolean
})

watch(props.info?.triggerValid, () => {
    validate();
})
const validate = () => {
    if (props.info.noteValue) {
        props.info.isValidNoteItem = true;
    } else {
        props.info.isValidNoteItem = false;
    }
}


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
</style>