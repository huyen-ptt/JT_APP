<template>
    <Accordion class="mt-3">
        <div class="title-1477 pb-2">Companion information</div>
        <AccordionPanel class="customer1" value="5">
            <AccordionHeader class="p-0">
                <div class="service-details">
                    <div class="title145">Customer 1<span class="text-danger"> *</span>
                    </div>

                </div>
            </AccordionHeader>
            <AccordionContent class="p-0 servies-det">
                <div class="row mb-3">
                    <div class="col-6">
                        <label class="form-label">First Name</label>
                        <input type="text" class="form-control" placeholder="Your First Name">
                    </div>
                    <div class="col-6">
                        <label class="form-label">Family
                            Name</label>
                        <input type="text" class="form-control" placeholder="Your Family Name">
                    </div>
                </div>

                <!-- Nationality and Birthday -->
                <div class="row mb-3">
                    <div class="col-6">
                        <label class="form-label">Nationality</label>
                        <select class="form-select">
                            <option value="">Nationality</option>
                            <!-- Add nationality options -->
                        </select>
                    </div>
                    <div class="col-6">
                        <label class="form-label">Birthday</label>
                        <div class="position-relative">
                            <input type="text" class="form-control" placeholder="Birthday">
                            <svg class="calendar-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2">
                                </rect>
                                <line x1="16" y1="2" x2="16" y2="6">
                                </line>
                                <line x1="8" y1="2" x2="8" y2="6">
                                </line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Passport Number -->
                <div class="mb-3">
                    <label class="form-label">Passport
                        number</label>
                    <input type="text" class="form-control" placeholder="Passport number">
                </div>
            </AccordionContent>
        </AccordionPanel>
    </Accordion>
</template>
<script setup>
import { ref, onBeforeMount, computed, onMounted } from "vue";

</script>