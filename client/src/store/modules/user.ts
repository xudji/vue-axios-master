import { defineStore } from "pinia";
import { getStorage, removeStorage } from "../../utils/storage";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: getStorage("token"),
    };
  },
  actions: {
    logout() {
      removeStorage("token");
      this.token = "";
    },
  },
});
