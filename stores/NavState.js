import { defineStore } from 'pinia'

export const useNavState = defineStore('navState', {
  state:()=>({
    navActive: false
  }),
  actions: {
    navToggle() {
      this.navActive = !this.navActive;
    },
    closeNav() {
      this.navActive = false;
      }
  },
});
