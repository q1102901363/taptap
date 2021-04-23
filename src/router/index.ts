import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName:"home" */ "../views/home/index.vue"),
    meta: {
      titleA: "推荐",
      titleB: "即将上线",
      titleC: "视频",
      nameA: "Home",
      nameB: "Update",
      nameC: "Video",
    },
  },
  {
    path: "/update",
    name: "Update",
    component: () =>
      import(/* webpackChunkName:"update" */ "../views/update/index.vue"),
    meta: {
      titleA: "推荐",
      titleB: "即将上线",
      titleC: "视频",
      nameA: "Home",
      nameB: "Update",
      nameC: "Video",
    },
  },
  {
    path: "/video",
    name: "Video",
    component: () =>
      import(/* webpackChunkName:"video" */ "../views/video/index.vue"),
    meta: {
      titleA: "推荐",
      titleB: "即将上线",
      titleC: "视频",
      nameA: "Home",
      nameB: "Update",
      nameC: "Video",
    },
  },
  {
    path: "/categories",
    name: "Categories",
    component: () =>
      import(
        /* webpackChunkName:"categories" */ "../views/categories/index.vue"
      ),
  },
  {
    path: "/forum",
    name: "Forum",
    redirect: "/forum/follow",
    component: () =>
      import(/* webpackChunkName:"forum" */ "../views/forum/index.vue"),
    children: [
      {
        path: "/forum/follow",
        name: "Follow",
        component: () =>
          import(/* webpackChunkName:"forum" */ "../views/forum/follow.vue"),
        meta: {
          titleA: "关注",
          titleB: "推荐",
          titleC: "论坛",
          nameA: "Follow",
          nameB: "Hot",
          nameC: "Groups",
        },
      },
      {
        path: "/forum/hot",
        name: "Hot",
        component: () =>
          import(/* webpackChunkName:"forum" */ "../views/forum/hot.vue"),
        meta: {
          titleA: "关注",
          titleB: "推荐",
          titleC: "论坛",
          nameA: "Follow",
          nameB: "Hot",
          nameC: "Groups",
        },
      },
      {
        path: "/forum/groups",
        name: "Groups",
        component: () =>
          import(/* webpackChunkName:"forum" */ "../views/forum/groups.vue"),
        meta: {
          titleA: "关注",
          titleB: "推荐",
          titleC: "论坛",
          nameA: "Follow",
          nameB: "Hot",
          nameC: "Groups",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
