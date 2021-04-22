import { createStore } from "vuex";
import homeStore from './homeStore';
import activeStore from './homeStore';
import carStore from './homeStore';
import userStore from './homeStore';
export default createStore({
  modules: {
    homeStore,
    activeStore,
    carStore,
    userStore
  }
});
