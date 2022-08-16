import { createRouter, createWebHashHistory } from "vue-router";
import LayoutVue from "../layout/Layout.vue";
import LoginVue from "../login/Login.vue";

const routes = [
  { name: "notes", path: "/", component: LayoutVue },
  { name: "auth", path: "/auth", component: LoginVue },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
