<template>
    <div id="app" class="app-container">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center p-3">
            <button class="close-btn-booking">
                <i class="fas fa-times"></i>
            </button>
            <button class="reset-btn-booking" @click="resetSelection">
                <i class="fas fa-redo-alt"></i> Reset Selection
            </button>
        </div>

        <!-- Main Content -->
        <div class="content-wrapper-booking p-3">
            <!-- Ticket cards with accordion -->
            <div v-for="(ticket, index) in tickets" :key="index" class="ticket-card-booking p-4 mb-3">
                <div class="news-title-blogg mb-2">{{ ticket.name }}</div>
                <div class="see-detail-booking mb-2" @click="visibleBottom = true">
                    See detail <i class="fa-solid fa-chevron-down"></i>
                    <Drawer v-model:visible="visibleBottom" header="Detail" position="bottom" style="height: auto"
                        class="bo-goc so-luong-mua">
                        <div class="container detail-see pb-4">
                            <div class="tour-card-see-detail">
                                <h2 class="tour-title-see-detail">SunWorld Fansipan Tickets | Combo Fansipan Cable Car +
                                    Muong Hoa</h2>

                                <div class="price-text-see-detail pb-3">
                                    From <span class="price-value-booking">USD 34</span>
                                </div>

                                <p class="dia-chi-product">
                                    Conquer the highest peak in Vietnam effortlessly on an unforgettable cable car
                                    journey.
                                    Enjoy the breathtaking scenery of Sapa's terraced rice fields and the pristine
                                    natural landscape of Fansipan.
                                </p>

                            </div>
                        </div>
                        <div class="bottom-menu menu-search bo-goc " @click="visibleBottom = false">
                            <router-link to="" class="btn-search "> <button class="search-button btn-search"
                                    id="search">
                                    OK
                                </button></router-link>
                        </div>
                    </Drawer>
                </div>
                <div class="d-flex justify-content-between align-items-center  pb-3 border-bottom">
                    <div class="price-booking">
                        From <span class="price-value-booking">{{ ticket.price.currency }} {{ ticket.price.value
                        }}</span>
                        <div class="packages-count-booking">~ USD 24</div>

                    </div>
                    <button class="book-btn-booking" @click="toggleBookingAccordion(index)">Book</button>
                </div>

                <!-- Accordion content - appears when expanded -->
                <div v-if="ticket.bookingExpanded" class="booking-accordion-content mt-3">
                    <!-- Date Selection Card -->
                    <div class="date-card-booking">
                        <div class="date-card-title-booking">Select Date</div>
                        <div class="calendar-nav-container-booking">
                            <button class="calendar-nav-booking" @click="prevMonth">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <div class="calendar-month-header-booking">{{ currentMonth }}/{{ currentYear }}</div>
                            <button class="calendar-nav-booking" @click="nextMonth">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>

                        <div class="calendar-grid-booking">
                            <div class="calendar-day-header-booking"
                                v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :key="day">
                                {{ day }}
                            </div>
                            <div v-for="n in firstDayOfMonth" :key="'empty-' + n"></div>
                            <div v-for="day in daysInMonth" :key="day" class="calendar-day-booking"
                                :class="{ selected: isSelectedDate(day, index), disabled: isDisabledDate(day) }"
                                @click="selectDate(day, index)">
                                {{ day }}
                            </div>
                        </div>
                    </div>

                    <!-- Option Selection - Đã chuyển thành dropdown -->
                    <div class="section-item-booking">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="section-title-booking">Option</div>
                            <div>
                                <a href="#" class="add-btn-booking" @click.prevent="toggleOptionDropdown(index)"
                                    v-if="!ticket.selectedOption">
                                    Add Option
                                </a>
                                <div v-else class="selected-option-display" @click="toggleOptionDropdown(index)">
                                    {{ ticket.selectedOption === 'over-week' ? 'Over the week' : 'Weekends and holidays'
                                    }}
                                    <i class="fas fa-chevron-down ml-2"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Option Dropdown -->
                        <div v-if="ticket.showOptionDropdown" class="option-dropdown-booking mt-2">
                            <div class="option-btn-container-booking">
                                <button class="option-btn-booking"
                                    :class="{ 'selected': tempSelectedOption === 'over-week' }"
                                    @click="selectTempOption('over-week')">
                                    Over the week
                                </button>
                                <button class="option-btn-booking"
                                    :class="{ 'selected': tempSelectedOption === 'weekends' }"
                                    @click="selectTempOption('weekends')">
                                    Weekends and holidays
                                </button>
                            </div>
                            <!-- <Options/> -->
                           
                        </div>
                    </div>

                    <!-- Guest Selection - Đã chuyển thành dropdown -->
                    <div class="section-item-booking">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="section-title-booking">Guest</div>
                            <a href="#" class="add-btn-booking" @click.prevent="toggleGuestDropdown(index)">
                                Add Guest
                            </a>
                        </div>
                        <div v-if="ticket.guestSelected" class="selected-guest-display mt-2"
                            @click="toggleGuestDropdown(index)">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <div v-if="ticket.guests.adult > 0">Adult: {{ ticket.guests.adult }}</div>
                                    <div v-if="ticket.guests.child > 0">Child: {{ ticket.guests.child }}</div>
                                </div>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>

                        <!-- Guest Dropdown -->
                        <div v-if="ticket.showGuestDropdown" class="guest-dropdown-booking mt-2">
                            <div>
                                <div class="guest-item-booking border-bottom">
                                    <div class="">

                                        <!-- Adult Section -->
                                        <div
                                            class="price-item-so-luong d-flex justify-content-between align-items-center">
                                            <div>
                                                <div class="price-label-so-luong">Adult</div>
                                                <div class="price-amount-so-luong">VND 320,000</div>
                                                <div class="price-text">~USD 41.2/Unit</div>
                                            </div>
                                            <div class="quantity-controls-so-luong">
                                                <button class="quantity-btn-so-luong"
                                                    @click="updateQuantity('adult', -1)"
                                                    :disabled="adultQuantity === 0">−</button>
                                                <span class="quantity-display-so-luong">{{ adultQuantity
                                                }}</span>
                                                <button class="quantity-btn-so-luong"
                                                    @click="updateQuantity('adult', 1)">+</button>
                                            </div>
                                        </div>

                                        <!-- Child Section -->
                                        <div
                                            class="price-item-so-luong d-flex justify-content-between align-items-center">
                                            <div>
                                                <div class="price-label-so-luong">Child</div>
                                                <div class="price-amount-so-luong">VND 320,000</div>
                                                <div class="price-text">~USD 27.2/Unit</div>
                                            </div>
                                            <div class="quantity-controls-so-luong">
                                                <button class="quantity-btn-so-luong"
                                                    @click="updateQuantity('child', -1)"
                                                    :disabled="childQuantity === 0">−</button>
                                                <span class="quantity-display-so-luong">{{ childQuantity
                                                }}</span>
                                                <button class="quantity-btn-so-luong"
                                                    @click="updateQuantity('child', 1)">+</button>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <!-- <div class="guest-item-booking">
                                    <div>
                                        <div class="guest-type-booking">Child</div>
                                        <div class="guest-price-booking">USD 78 / pax</div>
                                    </div>
                                    <div class="guest-controls-booking">
                                        <button class="guest-btn-booking" @click="decrementGuest('child')"
                                            :disabled="tempGuests.child <= 0">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <div class="guest-count-booking">{{ tempGuests.child }}</div>
                                        <button class="guest-btn-booking" @click="incrementGuest('child')">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div> -->
                            </div>
                            <!-- <div class="mt-3">
                                <button class="btn btn-primary w-100" @click="confirmGuestSelection">Confirm</button>
                            </div> -->
                        </div>
                    </div>
                </div>



            </div>
        </div>

        <!-- Footer -->
        <div class="app-footer-booking">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <div class="packages-count-booking">{{ selectedCount }} packages</div>
                    <div class="total-price-booking">USD {{ totalPrice }}</div>
                    <div class="packages-count-booking">~ USD 24</div>

                </div>
                <div class="d-flex align-items-center">
                    <div class="cart-icon-booking">
                        <img src="../assets/images/shopping-cong.png">
                    </div>
                    <button class="buy-btn-booking px-4" @click="buyNow">Buy Now ({{ selectedCount }})</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Drawer from 'primevue/drawer';
import Options from '../components/Options.vue';
import { ref, computed, onMounted } from 'vue';
const visibleBottom = ref(false);
const adultQuantity = ref(4);
const childQuantity = ref(0);
// const visibleBottom = ref(false);

// Function to update quantities
const updateQuantity = (type, change) => {
    if (type === 'adult') {
        const newQuantity = adultQuantity.value + change;
        if (newQuantity >= 0) {
            adultQuantity.value = newQuantity;
        }
    } else if (type === 'child') {
        const newQuantity = childQuantity.value + change;
        if (newQuantity >= 0) {
            childQuantity.value = newQuantity;
        }
    }
};
// Reactive state with ref
const tickets = ref([
    {
        name: 'SunWorld Fansipan Tickets | Combo Fansipan Combo Cable Car Tickets + Lunch Buffet',
        price: { currency: 'USD', value: 34.5 },
        details: 'This ticket includes entrance to SunWorld Fansipan and access to all basic attractions.',
        detailExpanded: false,
        bookingExpanded: false,
        selectedDate: null,
        selectedOption: null,
        guestSelected: false,
        guests: { adult: 0, child: 0 },
        // Thêm 2 thuộc tính mới cho dropdown
        showOptionDropdown: false,
        showGuestDropdown: false
    },
    {
        name: 'SunWorld Fansipan Car Tickets + Lunch Buffet',
        price: { currency: 'USD', value: 80.6 },
        details: 'Premium ticket with skip-the-line access and guided tour included.',
        detailExpanded: false,
        bookingExpanded: false,
        selectedDate: null,
        selectedOption: null,
        guestSelected: false,
        guests: { adult: 0, child: 0 },
        showOptionDropdown: false,
        showGuestDropdown: false
    },
    {
        name: 'Combo Cable Car Tickets + Lunch Buffet + Premium ticket',
        price: { currency: 'VND', value: 1200000 },
        details: null,
        detailExpanded: false,
        bookingExpanded: false,
        selectedDate: null,
        selectedOption: null,
        guestSelected: false,
        guests: { adult: 0, child: 0 },
        showOptionDropdown: false,
        showGuestDropdown: false
    }
]);

// Vẫn giữ các biến này nhưng sẽ không sử dụng chúng làm modal nữa
const showOptionModal = ref(false);
const showGuestModal = ref(false);
const tempSelectedOption = ref(null);
const tempGuests = ref({ adult: 0, child: 0 });
const currentMonth = ref(3);
const currentYear = ref(2025);
const daysInMonth = ref(31);
const firstDayOfMonth = ref(1); // Assuming March 1st, 2025 is a Saturday (6)
const activeTicketIndex = ref(null);

// Computed properties
const selectedCount = computed(() => {
    return tickets.value.filter(ticket =>
        ticket.selectedDate && ticket.selectedOption && ticket.guestSelected).length;
});

const totalPrice = computed(() => {
    let total = 0;
    tickets.value.forEach(ticket => {
        if (ticket.selectedDate && ticket.selectedOption && ticket.guestSelected) {
            const basePrice = ticket.price.value;
            const adultPrice = ticket.guests.adult * 112;
            const childPrice = ticket.guests.child * 78;

            // Convert to USD if needed
            if (ticket.price.currency === 'VND') {
                total += (basePrice / 24000) + adultPrice + childPrice;
            } else {
                total += basePrice + adultPrice + childPrice;
            }
        }
    });
    return total.toFixed(2);
});


const toggleBookingAccordion = (index) => {
    // Close any previously opened accordion
    tickets.value.forEach((ticket, i) => {
        if (i !== index) {
            ticket.bookingExpanded = false;
            // Đóng tất cả các dropdown khi chuyển accordion
            ticket.showOptionDropdown = false;
            ticket.showGuestDropdown = false;
        }
    });

    // Toggle the selected accordion
    tickets.value[index].bookingExpanded = !tickets.value[index].bookingExpanded;
    activeTicketIndex.value = index;
};

// Thêm hàm mới để xử lý dropdown Option
const toggleOptionDropdown = (index) => {
    // Đóng tất cả các dropdown khác
    tickets.value.forEach((ticket, i) => {
        if (i !== index) {
            ticket.showOptionDropdown = false;
            ticket.showGuestDropdown = false;
        } else {
            // Đóng guest dropdown của ticket hiện tại
            ticket.showGuestDropdown = false;
        }
    });

    // Toggle option dropdown của ticket này
    tickets.value[index].showOptionDropdown = !tickets.value[index].showOptionDropdown;

    // Cập nhật temporary option và active ticket index
    tempSelectedOption.value = tickets.value[index].selectedOption || 'over-week';
    activeTicketIndex.value = index;
};

// Thêm hàm mới để xử lý dropdown Guest
const toggleGuestDropdown = (index) => {
    // Đóng tất cả các dropdown khác
    tickets.value.forEach((ticket, i) => {
        if (i !== index) {
            ticket.showOptionDropdown = false;
            ticket.showGuestDropdown = false;
        } else {
            // Đóng option dropdown của ticket hiện tại
            ticket.showOptionDropdown = false;
        }
    });

    // Toggle guest dropdown của ticket này
    tickets.value[index].showGuestDropdown = !tickets.value[index].showGuestDropdown;

    // Cập nhật temporary guests và active ticket index
    tempGuests.value = {
        adult: tickets.value[index].guests.adult || 0,
        child: tickets.value[index].guests.child || 0
    };
    activeTicketIndex.value = index;
};

const resetSelection = () => {
    tickets.value.forEach(ticket => {
        ticket.bookingExpanded = false;
        ticket.selectedDate = null;
        ticket.selectedOption = null;
        ticket.guestSelected = false;
        ticket.guests = { adult: 0, child: 0 };
        // Reset các dropdown
        ticket.showOptionDropdown = false;
        ticket.showGuestDropdown = false;
    });
};

const nextMonth = () => {
    currentMonth.value++;
    if (currentMonth.value > 12) {
        currentMonth.value = 1;
        currentYear.value++;
    }
    updateCalendar();
};

const prevMonth = () => {
    currentMonth.value--;
    if (currentMonth.value < 1) {
        currentMonth.value = 12;
        currentYear.value--;
    }
    updateCalendar();
};

const updateCalendar = () => {
    // Get days in month
    daysInMonth.value = new Date(currentYear.value, currentMonth.value, 0).getDate();

    // Get first day of month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    let firstDay = new Date(currentYear.value, currentMonth.value - 1, 1).getDay();
    // Adjust for Monday as first day of week
    firstDayOfMonth.value = firstDay === 0 ? 6 : firstDay - 1;
};

const isSelectedDate = (day, ticketIndex) => {
    if (tickets.value[ticketIndex].selectedDate) {
        return tickets.value[ticketIndex].selectedDate.day === day &&
            tickets.value[ticketIndex].selectedDate.month === currentMonth.value &&
            tickets.value[ticketIndex].selectedDate.year === currentYear.value;
    }
    return false;
};

const isDisabledDate = (day) => {
    // Example: disable past dates
    const today = new Date();
    if (currentYear.value < today.getFullYear()) return true;
    if (currentYear.value === today.getFullYear() && currentMonth.value < today.getMonth() + 1) return true;
    if (currentYear.value === today.getFullYear() && currentMonth.value === today.getMonth() + 1 && day < today.getDate()) return true;
    return false;
};

const selectDate = (day, ticketIndex) => {
    if (!isDisabledDate(day)) {
        tickets.value[ticketIndex].selectedDate = {
            day: day,
            month: currentMonth.value,
            year: currentYear.value
        };
    }
};

const selectTempOption = (option) => {
    tempSelectedOption.value = option;
};


const buyNow = () => {
    // Implement checkout functionality
    console.log('Proceeding to checkout with', selectedCount.value, 'packages.');
    alert('Checkout with ' + selectedCount.value + ' packages for USD ' + totalPrice.value);
};

// Lifecycle hook
onMounted(() => {
    updateCalendar();
});
</script>