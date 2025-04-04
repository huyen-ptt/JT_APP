<template>
    <div class="container-fluid px-0">
        <!-- Search Header -->
        <div class="search-header d-flex align-items-center">
            <!-- Nút mũi tên quay lại -->

            <i class="fa-solid fa-arrow-left"  @click="$router.go(-1)"></i>
            <div class="input-group">
                <input class="search-list form-control" v-model="searchTerm" type="text" placeholder="Place to go..."
                    aria-label="Search" />
                <!-- Dấu X để xóa input, luôn hiển thị khi có nội dung -->
                <button v-if="searchTerm" class="btn-close" type="button" aria-label="Clear"
                    @click="clearInput"></button>
            </div>
        </div>

        <!-- Food Items List -->
        <div class="food-list">
            <div class="title-list-search">Recent Searches</div>
            <!-- Item 1 -->
            <div class="food-item d-flex align-items-center">
                <img src="../assets/images/7.png" alt="Day Tour" >
                <p class="title-s">Day Tour | Explore Hanoi Capital in One Day...</p>
            </div>

            <!-- Item 2 -->
            <div class="food-item d-flex align-items-center">
                <img src="../assets/images/8.png" alt="Street Food Tour" >
                <p class="title-s">Hanoi Street Food Walking Tour</p>
            </div>

            <!-- Item 3 -->
            <div class="food-item d-flex align-items-center">
                <img src="../assets/images/10.jpg" alt="BBQ Buffet" >
                <p class="title-s">BBQ Buffet Party at The Yacht - Ambassador Cruise</p>
            </div>

            <!-- Item 4 -->
            <div class="food-item d-flex align-items-center">
                <img src="../assets/images/6.png" alt="Day Tour" >
                <p class="title-s">Day Tour | Explore Hanoi Capital in One Day...</p>
            </div>

            <!-- Item 5 -->
            <div class="food-item d-flex align-items-center">
                <img src="../assets/images/7.png" alt="Savor Restaurant" >
                <p class="title-s">Savor Exquisite Cuisine at All Season Restaurant | Hanoi</p>
            </div>

            <!-- Item 6 -->
            <div class="food-item d-flex align-items-center">
                <img src="../assets/images/3.png" alt="Gia Thien Restaurant" >
                <p class="title-s">Set Menu Dining at Gia Thien Restaurant | Hanoi</p>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';

const searchTerm = ref('');

// Hàm xóa input
const clearInput = () => {
    searchTerm.value = '';
};
</script>

<style scoped>
.search-header {
    position: relative;
    /* Để đảm bảo các phần tử con có thể dùng position tuyệt đối */
}

.fa-arrow-left {
    position: absolute;
    left: 34px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 20px;
    z-index: 9;
    cursor: pointer;
    color: #333;
}

.input-group {
    margin-left: 40px;
    /* Đẩy phần input qua phải một chút để không che mất nút mũi tên */
}

.input-group {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}

.btn-close {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}


.search-header {
    position: sticky;
    top: 0;
    /* background: white; */
    z-index: 1000;
    padding: 12px 15px;
    /* border-bottom: 1px solid #eee;    */
}

.search-term {
    font-size: 16px;
    color: #333;
    margin: 0 15px;
    flex-grow: 1; 
}

.food-item {
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.food-item img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    object-fit: cover;
    border-radius: 8px;
}

.food-item .title-s {
    font-size: 14px !important;
    font-weight: 500;
    color: #03294C;
    margin: 0;
}

.close-btn {
    border: none;
    background: none;
    padding: 5px;
}

.back-btn {
    border: none;
    background: none;
    padding: 5px;
}

.search-list {
    position: relative;
    flex: 1 1 auto;
    border-radius: 14px; 
    width: 1%;
    min-width: 0;
    padding: 14px 53px;
}
</style>