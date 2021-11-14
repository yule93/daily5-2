import Vue from "vue";
import VueRouter from "vue-router";
import CenterList from "../views/CenterList.vue";
import CenterView from "../views/CenterView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CenterList",
    component: CenterList,
  },
  {
    path: "/detail",
    name: "CenterView",
    component: CenterView,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
