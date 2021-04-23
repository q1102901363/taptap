import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Icon, Tabbar, TabbarItem } from "vant";
import "./assets/style/reset.scss";
import "./utils/rem";

createApp(App)
  .use(store)
  .use(Button)
  .use(Icon)
  .use(Tabbar)
  .use(TabbarItem)
  .use(router)
  .mount("#app");
