<template>
	<div id="listhome">
		<div class="listhometop">
			<h1>餐厅菜单</h1> 
			<h2 style="margin-left:800px;"> <router-link to="/overBookingCom">我的菜单</router-link></h2>
		</div>
		<listlogin></listlogin>
		<div class="list-body">
		<listnav></listnav>
		</div>
		<div class="list-content">
		<tdlist></tdlist>
		<!-- <ypstyle></ypstyle> -->
<!-- 		<mbstyle></mbstyle>
		<Wstyle></Wstyle>
		<Cstyle></Cstyle> -->
				<router-view class="list-viewer"></router-view>
		</div>
	    	<router-view></router-view>
	</div>
</template>

<script>
// import $ from 'jquery';
import './listhome.scss'
import listlogin from './listlogin/listlogin.vue';
import listnav from './nav/listnav.vue';
import tdlist from './list/tdlist.vue';
// import ypstyle from './list/ypstyle.vue';
// import mbstyle from './list/mbstyle.vue';
// import Wstyle from './list/Wstyle.vue';
// import Cstyle from './list/Cstyle.vue';
import axios from 'axios';

	export default {
		components: {
			'listlogin':listlogin,
			'listnav': listnav,
			'tdlist':tdlist
			// 'ypstyle':ypstyle,
			// 'mbstyle':mbstyle,
			// 'Wstyle':Wstyle,
			// 'Cstyle':Cstyle
		},
		data:function(){
			return{

			}
			}
		}
	
	
	
</script>