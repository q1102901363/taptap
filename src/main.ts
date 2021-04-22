import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button,Icon,Tabbar, TabbarItem } from "vant";

import "./assets/style/reset.scss"; //todo 去除浏览器默认样式
import "./utils/rem"; //todo 用于配置移动端自适应的  尺寸单位    xxx.rem
createApp(App).use(store).use(router).use(Button).use(Icon).use(Tabbar).use(TabbarItem).mount("#app");
