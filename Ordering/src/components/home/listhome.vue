<template>
	<div id="listhome">
		<div class="listhometop">
			<h1>餐厅菜单</h1>
		</div>
		<div id="listlogin-box">
		<div class="listlogin-body">
		<input type="text" class="tnumber" placeholder="台号">
		<input type="text" class="pnumber" placeholder="人数">
	    <button class="ent" @click="goent">提交</button>
	    	<router-view></router-view>
	    </div>
	</div>
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
import $ from 'jquery';
import './listhome.scss'
// import listlogin from './listlogin/listlogin.vue';
import listnav from './nav/listnav.vue';
import tdlist from './list/tdlist.vue';
// import ypstyle from './list/ypstyle.vue';
// import mbstyle from './list/mbstyle.vue';
// import Wstyle from './list/Wstyle.vue';
// import Cstyle from './list/Cstyle.vue';
import axios from 'axios';

	export default {
		components: {
			// 'listlogin':listlogin,
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