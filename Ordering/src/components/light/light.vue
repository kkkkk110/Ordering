<template>
	<div>
		<button @click="btn">{{this.$store.state.light.btn}}</button>
		<img :src="'./src/assets/imgs/'+ this.$store.state.light.color +'.jpg'"/>
	</div>
</template>

<script>
	export default {
		name: 'light',
		methods: {
			btn: function(){
				// console.log(this.$store.dispatch)
				this.$store.dispatch('actionsBtn');
				console.log('component', this.$store.state.light.color)
			}
		}
	}
</script>