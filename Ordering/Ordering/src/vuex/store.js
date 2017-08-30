import Vue from 'vue'
import Vuex from 'vuex'
import overbooking from "../components/Overbooking/overbooking"
import cook from "../components/cookhouse/cook"
import mainpage from "../components/mainpage/mainpage"
import backstagejs from '../components/backstage/backstage';
import serve from "../components/serve/serve";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
    	overbooking,
    	serve,
    	cook,
      	backstagejs,
      	mainpage,
    }
})