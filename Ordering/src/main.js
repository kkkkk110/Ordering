import Vue from 'vue';

import Vuex from 'vuex';

import router from "./router/index"
import app from "./App.vue"
import store from "./vuex/store"

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(app)

})
