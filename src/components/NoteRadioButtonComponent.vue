<template>
    <div class="mb-3">
        <label class="form-label">
            {{ info.zoneName }}<span class="required-mark" v-if="info.bookingNoteRequired">*</span>
        </label>
        <div class="radio-group">
            <label class="radio-button" v-for="item in info.noteOptionItems">
                <input type="radio" name="locationType" :value="item.value" :checked='item.noteValue === item.value'
                @change="info.noteValue = item.value">
                {{ item.label }}
            </label>
        </div>
        <div class="error-message" v-if="info.triggerValid && info.noteValue == ''">
        <small>{{ $t('ERRPR_MISSING_NOTE_RADIO') }}</small>
    </div>
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