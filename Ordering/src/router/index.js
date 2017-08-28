import Vue from "vue";
import VueRouter from "vue-router";

// import Cook from "../components/cookhouse/cook.vue";
// import light from "../components/light/light.vue";
import backstageComponent from '../components/backstage/backstage.vue';

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
	
		// {path: '/light', component: light},
		{path: '/backstage', component: backstageComponent}


	]
})


export default router