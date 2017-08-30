import Vue from "vue";
import VueRouter from "vue-router";

import overBookingCom from "../components/OverBooking/overBookingCom.vue";
import backstageComponent from '../components/backstage/backstage.vue';
import cook from "../components/cookhouse/cook.vue";
import serve from "../components/serve/serve.vue"
import mainpage from "../components/mainpage/mainpage.vue"

import listhome from "../components/home/listhome.vue"
import ypstyle from "../components/home/list/ypstyle.vue"
import tlist from "../components/home/list/tlist.vue"
import mbstyle from "../components/home/list/mbstyle.vue"
import Wstyle from "../components/home/list/Wstyle.vue"
import Cstyle from "../components/home/list/Cstyle.vue"

import loginComponent from '../components/login/login.vue';



Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{path:'/overBookingCom',component:overBookingCom},
	
		{path: '/backstage', name:'backstage', component: backstageComponent},

		{path: '/listhome', component: listhome},
		{path:'/cook',component:cook},
		{path:'/tlist',component:tlist},
		{path:'/ypstyle',component:ypstyle},
		{path:'/mbstyle',component:mbstyle},
		{path:'/Cstyle',component:Cstyle},
		{path:'/Wstyle',component:Wstyle},
		{path:'/serve',component:serve},
		{path:'/',component:mainpage},	
		{path: '/login', component: loginComponent}


	]
})
router.beforeEach((to, from, next) =>{
	console.log('666', to);
	if(to.name == 'backstage'){
		if(window.localStorage.getItem('name')!= ''){
			next();
		}
	}else{
		
	}

	next();
	// if(!window.localStorage.getItem('name')){

		// router.replace('login');
	// 	next();
	// } 
	
})

export default router