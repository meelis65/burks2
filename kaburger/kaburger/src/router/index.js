import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contacts",
    name: "Kontaktid",
    component: () => 
      import(/* webpackChunkName: "about" */ "../views/Contacts.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => 
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => 
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () =>
    import("../views/Admin.vue"),
  },
    {
    path: "/updateburger",
    name: "updateBurger",
    component: () =>
    import("../views/updateBurger.vue"),
  },
  {
    path: "/Cart",
    name: "Cart",
    component: () =>
    import("../views/Cart.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;