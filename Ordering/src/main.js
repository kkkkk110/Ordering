import Vue from 'vue';
// import App from './App.vue'

import Vuex from 'vuex';

import lightComponent from './components/light/light.vue';
import lightjs from './components/light/light';

Vue.use(Vuex);
const store = new Vuex.Store({
	modules: {
		light: lightjs,
	}
})
new Vue({
  el: '#app',
  store,
  render: h => h(lightComponent)
})
