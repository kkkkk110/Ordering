import Vue from 'vue'
import Vuex from 'vuex'
import backstagejs from '../components/backstage/backstage';
import serve from "../components/serve/serve";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
     	backstagejs,
    	serve    
    }
})