<template>
	
	<div class="cook">
		<div class="left">
			<p>新的菜单</p>
			<div class="left_men">
				
				<div v-for="(value,index) in num" class="f_men" @click="click" :id="index">
				{{value}}
				<transition appear appear-class="f-enter" appear-active-class="f-enter-active">
					<div class="men"></div>
				</transition>
				</div>
			</div>
			
		</div>
		<div class="right">
			<p>正在进行菜单</p>
			<div class="right-menio">
				<div v-for="(value,index) in cook" class="f_menio" @click="clickio" :id="index">
				{{value}}
				<transition appear appear-class="f-enter" appear-active-class="f-enter-active">
					<div class="menio"></div>
				</transition>
				</div>
			</div>
			
		</div>
	</div>
</template>


<script>
	// import "./cook.scss";
	import vue from "vue"
	
	var socket = io.connect('ws://localhost:888');
	

	
	export default{
		data:function(){
			return {
				num:["而温热我认为1","而温热我认为2","而温热我认为3"],
				cook:[]
			}
		},
		methods:{
			addnum:function(){
				this.num.splice(0,1)
				this.cook.push("sfsf")
			},
			click:function(event){
			
				this.cook.push(this.num[event.target.id])
				this.num.splice(event.target.id,1)

					
			},
			clickio:function(event){
				this.cook.splice(event.target.id,1)
				console.log(event.target.innerText)
				socket.emit('serve',event.target.innerText)
			}
		},
		created:function(){
				
		var  cooks = "{name:撒旦撒旦撒旦撒旦撒,age:19}"
		var cc = JSON.stringify(cooks)

				socket.emit('aa',cooks)

				socket.on('bbs',function(aa){
						this.num.push(aa)
					}.bind(this))
		}
	
		
			
}
</script>

