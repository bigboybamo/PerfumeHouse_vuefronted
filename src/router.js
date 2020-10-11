import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/Home",
      name: "Home",
      component: () => import("./views/Home"),
    },
    {
      path: "/perfumeslist",
      alias: "/perfumelist",
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
