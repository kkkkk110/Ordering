import Vue from "vue";
import VueRouter from "vue-router";

import cook from "../components/cookhouse/cook.vue";
import light from "../components/light/light.vue"
import serve from "../components/serve/serve.vue"

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
	
		{path:'/light', component:light},
		{path:'/cook',component:cook},
		{path:'/serve',component:serve}


	]
})


export default router