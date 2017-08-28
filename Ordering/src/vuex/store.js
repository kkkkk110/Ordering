import Vue from 'vue'
import Vuex from 'vuex'




import cook from "../components/cookhouse/cook"


import backstagejs from '../components/backstage/backstage';
import serve from "../components/serve/serve";


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {

    	serve,
    	cook,
      	backstagejs,

    }
})