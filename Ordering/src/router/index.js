import Vue from "vue";
import VueRouter from "vue-router";

<<<<<<< HEAD
// import Cook from "../components/cookhouse/cook.vue";
// import light from "../components/light/light.vue";
import backstageComponent from '../components/backstage/backstage.vue';
=======
import cook from "../components/cookhouse/cook.vue";
import light from "../components/light/light.vue"
import serve from "../components/serve/serve.vue"
>>>>>>> 97f91143802fe1424885748ac9b29e8854c006a8

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
	
<<<<<<< HEAD
		// {path: '/light', component: light},
		{path: '/backstage', component: backstageComponent}
=======
		{path:'/light', component:light},
		{path:'/cook',component:cook},
		{path:'/serve',component:serve}
>>>>>>> 97f91143802fe1424885748ac9b29e8854c006a8


	]
})


export default router