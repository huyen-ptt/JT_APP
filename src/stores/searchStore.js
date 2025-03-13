// Example using Composition API
import { defineStore } from "pinia";
import { ref } from "vue";


export const useSearchStore = defineStore(
    "search",
    () => {
        const search = ref({
            keyword: "",
            startBudget: 0,
            endBudget: 20000000,
            searchItems: [],
            sortBy: "TOP_BOOKING" 
        });
        const onAddSearchItem = (searchItem) => {
            search.value.searchItems.push(searchItem);
        };
        const onRemoveSearchItem = (searchItem) => {
           let captured = search.value.searchItems.find(r => r.id == searchItem.id);
           let _index = search.value.searchItems.indexOf(captured);
           search.value.searchItems.splice(_index, 1)
        }
        const onClearSearchItem = () => {
            search.value = {
                keyword: "",
                startBudget: 0,
                endBudget: 20000000,
                searchItems: []
            }
        }
        const onChangeSortBy = (sortBy) => {
            search.value.sortBy = sortBy;
        }
        return { search, onAddSearchItem, onRemoveSearchItem, onClearSearchItem, onChangeSortBy };
    },
    {
        persist: {
            enabled: true, // Bật chế độ lưu trạng thái
            storage: localStorage, // Hoặc sử dụng sessionStorage nếu muốn lưu tạm thời
        },
    }
);
