import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import AboutUsView from "../views/AboutUsView.vue";
import todoView from "../views/todoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  {
    path: "/about-us",
    name: "aboutus",
    component: AboutUsView,
  },
  {
    path: "/todo",
    name: "todo",
    component: todoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
