import { defineStore } from 'pinia';
export default defineStore('counterSTore', {
  state: () => ({ counter: 0 }),
  actions: {
    increment() {
      this.counter++;
    },
  },
});
