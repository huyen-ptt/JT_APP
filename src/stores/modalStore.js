import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
    state: () => ({
        visibleBottom: false
    }),
    actions: {
        open() {
            this.visibleBottom = true;
        },
        close() {
            this.visibleBottom = false;
        }
    }
});
