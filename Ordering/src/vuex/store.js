import Vue from 'vue'
import Vuex from 'vuex'

import light from "../components/light/light";
import backstagejs from '../components/backstage/backstage';


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
    	light,
     	backstagejs
    }
})