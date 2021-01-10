import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
import { genrateRouter } from "../utils/routerHelper";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: () => import("../views/Home.vue") },    
  ],
});

router.beforeEach(async (to, from, next) => {
  if (!store.state.hasAuth) {   
    await store.dispatch("setUserRouters");   
    const newRouters = genrateRouter(store.state.userRouters);
    debugger
    newRouters.forEach((r) => {
      router.addRoute(r);
    });
    next({ path: to.path });
  } else {
    next();
  }
});

export default router;
