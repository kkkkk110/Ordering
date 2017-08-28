<template>
	
	<div class="cook">
		<div class="left">
			<p>新的菜单</p>  
			<div class="left_men">
				<transition-group nama="lis">
					<div v-for="(value,index) in num" class="f_men" :key="index" @click="click" :id="index" >

						菜名：{{value.name}}<br/>
						数量:	
						<transition appear appear-class="f-enter" appear-active-class="f-enter-active">
							<div class="men" :key="index"></div>
						</transition>
					</div>
				</transition-group>
			</div>
			
		</div>
		<div class="right">
			<p>正在进行菜单</p>
			<div class="right-menio">
				<div v-for="(value,index) in cook" class="f_menio" @click="clickio" :id="index">
				菜名：{{value}}<br/>
				数量：
				<transition appear appear-class="f-enter" appear-active-class="f-enter-active">
					<div class="menio"></div>
				</transition>
				</div>
			</div>
			
		</div>
	</div>
</template>


<script>
	import "./cook.scss";
	import vue from "vue"
	
	var socket = io.connect('ws://localhost:888');
	

	
	export default{
		data:function(){
			return {
				num:[],
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
				
	
				socket.on('bbs',function(aa){
				
						
						this.num=aa
						console.log(aa)
					}.bind(this))
		}
	
		
			
}
</script>

