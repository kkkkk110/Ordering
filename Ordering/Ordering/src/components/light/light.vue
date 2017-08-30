<template>
	<div>
		<button @click="btn">{{this.$store.state.light.btn}}</button>
		<img :src="'./src/assets/imgs/'+ this.$store.state.light.color +'.jpg'"/>
		<button @click="post">POST请求</button>

		<el-button type="primary">主要按钮</el-button>
	</div>
</template>

<script>
	import Vue from 'vue'
	import ElementUI from 'element-ui';
	import 'element-ui/lib/theme-default/index.css';
	Vue.use(ElementUI)

	export default {
		name: 'light',
		methods: {
			btn: function(){
				// console.log(this.$store.dispatch)
				this.$store.dispatch('actionsBtn');
				console.log('component', this.$store.state.light.color)
			},
			post: function(){
				this.$store.dispatch('actionsPost')
			}
		}
	}
</script>