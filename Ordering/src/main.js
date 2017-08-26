import Vue from 'vue';
// import App from './App.vue'

import Vuex from 'vuex';

import lightComponent from './components/light/light.vue';

import lightjs from './components/light/light';
import backstageComponent from './components/backstage/backstage.vue';
import backstagejs from './components/backstage/backstage';

Vue.use(Vuex);
const store = new Vuex.Store({
	modules: {
		light: lightjs,
		backstagejs
	}
})
new Vue({
  el: '#app',
  store,
  render: h => h(backstageComponent)
})
