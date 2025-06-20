<template>
    <div class="mb-3">
        <div class="d-flex justify-content-between">
            <div class="title145 pb-2">
                {{ $t('service_date') }}: {{ date }}
            </div>
            <!-- <img src="/images/edit-2.png" alt="" style="object-fit: contain;"> -->
        </div>

        <div class="row mb-3">
            <!-- <div class="col-12">
                <label class="form-label title-con">
                    {{ $t('HOUR') }}<span class="required-mark">*</span>
                </label>
                <select class="form-select" v-model="selectedHour" @change="updateMinutes">
                    <option disabled value="">{{ $t('SELECT_HOUR') }}</option>
                    <option :value="h" v-for="h in hours" :key="h">{{ h }}</option>
                </select>
            </div>
            <div class="col-12">
                <label class="form-label">
                    {{ $t('MINUTE') }}<span class="required-mark">*</span>
                </label>
                <select class="form-select" v-model="selectedMinute" :disabled="minutes.length <= 0"
                    @change="validate()">
                    <option disabled>{{ $t('SELECT_MINUTE') }}</option>
                    <option v-for="m in minutes" :value="m" :key="m">{{ m.toString().padStart(2, '0') }}</option>
                </select>
            </div> -->
            <div class="col-6 mb-3">
                <label class="form-label title-con">
                    {{ $t('HOUR') }}<span class="required-mark">*</span>
                </label>
                <div class="dropdown">
                    <button class="btn btn-light form-control text-start dropdown-toggle" type="button"
                        data-bs-toggle="dropdown">
                        {{ selectedHour !== '' ? selectedHour : $t('SELECT_HOUR') }}
                    </button>
                    <ul class="dropdown-menu mi">
                        <li v-for="h in hours" :key="h">
                            <a class="dropdown-item" href="#" @click.prevent="selectedHour = h; updateMinutes()">
                                {{ h }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-6 mb-3">
                <label class="form-label">
                    {{ $t('MINUTE') }}<span class="required-mark">*</span>
                </label>
                <div class="dropdown">
                    <button class="btn btn-light form-control text-start dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" :disabled="minutes.length === 0">
                        {{ selectedMinute !== '' ? selectedMinute.toString().padStart(2, '0') : $t('SELECT_MINUTE') }}
                    </button>
                    <ul class="dropdown-menu mi" v-if="minutes.length > 0">
                        <li v-for="m in minutes" :key="m">
                            <a class="dropdown-item" href="#" @click.prevent="selectedMinute = m; validate()">
                                {{ m.toString().padStart(2, '0') }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="error-message" v-if="info.triggerValid && info.noteValue == ''">
                <small>{{ $t('ERRPR_MISSING_NOTE_DATETIME') }}</small>
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

    if (selectedHour.value == "" || selectedMinute.value == "") {
        props.info.isValidNoteItem = false;
    }
    else {
        props.info.noteValue = `${props.date} ${selectedHour.value}:${selectedMinute.value}`
        props.info.isValidNoteItem = true;
    }
}

// Gọi khi mounted
onMounted(() => {
    updateMinutes()
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
.dropdown-toggle::after {
    display: none;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
}
</style>
