import Vue from 'vue';
import Vuex from 'vuex';
import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import router from "./router/index"
import app from "./App.vue"
import store from "./vuex/store"

Vue.use(ElementUI);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(app)

})
