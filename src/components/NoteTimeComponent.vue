<template>
    <div class="mb-3">
        <div class="d-flex justify-content-between">
            <div class="title145 pb-2">
                Service date: {{ date }}
            </div>
            <!-- <img src="../assets/images/edit-2.png" alt="" style="object-fit: contain;"> -->
        </div>

        <div class="row mb-3">
            <div class="col-6">
                <label class="form-label title-con">
                    Hour<span class="required-mark">*</span>
                </label>
                <select class="form-select" v-model="selectedHour" @change="updateMinutes">
                    <option disabled value="">Select hour</option>
                    <option :value="h" v-for="h in hours" :key="h">{{ h }}</option>
                </select>
            </div>
            <div class="col-6">
                <label class="form-label">
                    Minute<span class="required-mark">*</span>
                </label>
                <select class="form-select" v-model="selectedMinute" :disabled="minutes.length <= 0" @change="validate()">
                    <option disabled>Select minute</option>
                    <option v-for="m in minutes" :value="m" :key="m">{{ m.toString().padStart(2, '0') }}</option>
                </select>
            </div>
            <div class="error-message" v-if="info.triggerValid && info.noteValue == ''">
                <small>{{$t('ERRPR_MISSING_NOTE_DATETIME')}}</small>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, computed, onMounted, watch } from "vue";

const props = defineProps({
    info: Object,
    date: String
})

const hours = ref([])
const minutes = ref([])

const now = new Date()
const currentHour = now.getHours()
const currentMinute = now.getMinutes()

// Thêm 1 giờ vào thời điểm hiện tại
const startingHour = currentHour + 1

// Danh sách giờ từ giờ hiện tại + 1 đến 23
hours.value = Array.from({ length: 24 - startingHour }, (_, i) => startingHour + i)

// Biến để theo dõi giờ được chọn
const selectedHour = ref("")
const selectedMinute = ref("")

// Hàm xử lý khi chọn giờ
const updateMinutes = () => {
    if (selectedHour.value == null) return

    if (selectedHour.value === startingHour) {
        // Nếu là giờ đầu tiên (giờ hiện tại + 1)
        const roundedStartMinute = Math.ceil(currentMinute / 5) * 5
        minutes.value = Array.from({ length: Math.floor((60 - roundedStartMinute) / 5) }, (_, i) => roundedStartMinute + i * 5)
    } else {
        // Nếu là các giờ sau thì full phút
        minutes.value = Array.from({ length: 12 }, (_, i) => i * 5)
    }
    validate()
}
watch(props.info?.triggerValid, () => {
    validate();
})
const validate = () => {
    
    if(selectedHour.value == "" || selectedMinute.value == ""){
        props.info.isValidNoteItem = false;
    }
    else{
        props.info.noteValue = `${props.date} ${selectedHour.value}:${selectedMinute.value}`
        props.info.isValidNoteItem = true;
    }
}

// Gọi khi mounted
onMounted(() => {
    updateMinutes()
})
</script>
