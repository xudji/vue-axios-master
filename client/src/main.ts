import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import store from "./store";
import router from "./router";

import App from "./App.vue";

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
