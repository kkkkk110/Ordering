<template>
	<div class="serve">
			<div class="logo"></div>
			<transition-group name="list">
				<div class="servegoods" v-for="(value,index) in goods" :key="index">{{value}}</div>
			</transition-group>
	</div>
	
</template>

<script>
	import "./serve.scss"
	var socket = io.connect('ws://localhost:888');
	
	export default{
		data:function(){
			return {
				goods:[]
			}
		},
		created:function(){
			socket.on('serve',function(s){
				this.goods.push(s)
				
			}.bind(this))	
		}

	}
</script>