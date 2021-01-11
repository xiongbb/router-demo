import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import { genrateRouter } from "../utils/routerHelper";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: () => import("../views/Home.vue") },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (!store.state.hasAuth) {
    await store.dispatch("setUserRouters");
    const newRouters = genrateRouter(store.state.userRouters);

    newRouters.forEach((r) => {
      router.addRoute(r);
    });
    next({ path: to.path });
  } else {
    next();
  }
});

export default router;
