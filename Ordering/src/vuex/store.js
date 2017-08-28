import Vue from 'vue'
import Vuex from 'vuex'

import light from "../components/light/light"
import serve from "../components/serve/serve"
import cook from "../components/cookhouse/cook"


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
    	light,
    	serve,
    	cook
     
    }
})