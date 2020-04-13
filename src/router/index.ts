import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/users",
    component: () =>
      import(/* webpackChunkName: "Users" */ "../views/Users/index.vue"),
    children: [
      {
        path: "profile",
        name: "Profile",
        component: () =>
          import(/* webpackChunkName: "Profile" */ "../views/Users/Profile.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
