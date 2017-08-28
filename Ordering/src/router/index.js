import Vue from "vue";
import VueRouter from "vue-router";


// import Cook from "../components/cookhouse/cook.vue";
// import light from "../components/light/light.vue";
import backstageComponent from '../components/backstage/backstage.vue';

import cook from "../components/cookhouse/cook.vue";
// import light from "../components/light/light.vue"
import serve from "../components/serve/serve.vue"
import mainpage from "../components/mainpage/mainpage.vue"


Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
	
		// {path: '/light', component: light},
		{path: '/backstage', component: backstageComponent},

		// {path:'/light', component:light},
		{path:'/cook',component:cook},
		{path:'/serve',component:serve},
		{path:'/',component:mainpage}



	]
})


export default router