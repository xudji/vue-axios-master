import { createRouter, createWebHistory } from "vue-router";
import { requestListMap } from "../utils/request";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/about/index.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  requestListMap.forEach(({ pathname, cancel }, key) => {
    if (pathname !== to.path) {
      cancel();
      requestListMap.delete(key);
    }
  });
  next();
});

export default router;
