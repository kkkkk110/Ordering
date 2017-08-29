<template>
	<div id="listlogin-box">
		<div class="listlogin-body">
		<input type="text" class="tnumber" placeholder="台号">
		<input type="text" class="pnumber" placeholder="人数">
	    	<button class="ent" @click="goent">提交</button>
	    	<router-view></router-view>
	    </div>
	</div>
</template>

<script>
import './listlogin.scss'
import $ from 'jquery';
	export default {
		name: 'listlogin',
		methods: {
			goent: function(){
				// console.log(this.$store.dispatch)
				console.log($('.tnumber').val())
				this.$router.push({ path: '/listhome' })
				// console.log($pnumber.val())
				this.$store.dispatch('actionsBtn');
			},

		}

	
	}
</script>