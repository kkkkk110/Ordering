import Vue from 'vue';
// import App from './App.vue'

import Vuex from 'vuex';

// import lightComponent from './components/light/light.vue';
// import lightjs from './components/light/light';

import router from "./router/index"
import app from "./App.vue"
import store from "./vuex/store"

// Vue.use(Vuex);
// const store = new Vuex.Store({
// 	modules: {
// 		light: lightjs,
// 	}
// })
new Vue({
  el: '#app',
  store,
  router,
  store,
  render: h => h(app)
})
