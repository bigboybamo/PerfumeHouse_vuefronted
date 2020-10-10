import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/perfumes",
      name: "perfumes",
      component: () => import("./components/PerfumeList"),
    },
    {
      path: "/perfumes/:id",
      name: "perfume-details",
      component: () => import("./components/Perfume"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddPerfume"),
    },
  ],
});
