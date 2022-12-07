import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Jobs from "../views/Job/Jobs.vue";
import JobDetail from "../views/Job/JobDetail.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // component: AboutView,
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },

  {
    path: "/jobDetail/:id",
    name: "JobDetail",
    component: JobDetail,
    props: true,
  },

  //redirect

  {
    path: "/all-jobs",
    redirect: "/jobs",
  },

  //catchALL 404 Not Found URL
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
