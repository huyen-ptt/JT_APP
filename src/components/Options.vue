<template>
    <div>
        <div class="journey-title-joytime pb-2">From/to</div>
        <button class="option-btn-booking" :class="{ 'selected': tempSelectedOption === 'over-week' }"
            @click="selectTempOption('over-week')">
            Hoan Kiem/ Ba Dinh Districts
        </button>
        <button class="option-btn-booking" :class="{ 'selected': tempSelectedOption === 'weekends' }"
            @click="selectTempOption('weekends')">
            Tay Ho/ Cau Giay / Long Bien Districts
        </button>
    </div>
    <div>
        <div class="journey-title-joytime pb-2">Vehicle Type</div>
        <button class="option-btn-booking" :class="{ 'selected': tempSelectedOption === '4 Seats' }"
            @click="selectTempOption('4 Seats')">
            4 Seats
        </button>
        <button class="option-btn-booking" :class="{ 'selected': tempSelectedOption === '7 Seats' }"
            @click="selectTempOption('7 Seats')">
            7 Seats
        </button>
        <button class="option-btn-booking" :class="{ 'selected': tempSelectedOption === '16 Seats' }"
            @click="selectTempOption('16 Seats')">
            16 Seats
        </button>
    </div>
    <div>
        <div class="journey-title-joytime pb-2">Pick-up Time</div>
        <button class="option-btn-booking" :class="{ 'selected': tempSelectedOption === '7:00 - 22:59' }"
            @click="selectTempOption('7:00 - 22:59')">
            7:00 - 22:59
        </button>
        <button class="option-btn-booking" :class="{ 'selected': tempSelectedOption === '23:00 - 6:59' }"
            @click="selectTempOption('23:00 - 6:59')">
            23:00 - 6:59
        </button>
   
    </div>
</template>