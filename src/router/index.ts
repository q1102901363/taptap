import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component:  () =>
    import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
  },
  {
    path: "/cate",
    name: "Cate",
    component:  () =>
    import(/* webpackChunkName: "cate" */ "../views/cate/index.vue"),
  },
  {
    path: "/active",
    name: "Active",
    component:  () =>
    import(/* webpackChunkName: "cate" */ "../views/active/index.vue"),
  },
  {
    path: "/car",
    name: "Car",
    component:  () =>
    import(/* webpackChunkName: "cate" */ "../views/car/index.vue"),
  },
  {
    path: "/mine",
    name: "Mine",
    component:  () =>
    import(/* webpackChunkName: "mine" */ "../views/mine/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component:  () =>
    import(/* webpackChunkName: "mine" */ "../views/register/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component:  () =>
    import(/* webpackChunkName: "mine" */ "../views/login/index.vue"),
  },
  {
    path: "/list/:id",
    name: "List",
    component:  () =>
    import(/* webpackChunkName: "list" */ "../views/list/index.vue"),
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component:  () =>
    import(/* webpackChunkName: "list" */ "../views/detail/index.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () =>
    import(/* webpackChunkName: "list" */ "../views/not-found/index.vue"),
  }
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
