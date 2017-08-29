<template>
	<div id="overBox">
		<div class="header">
			<i class="el-icon-arrow-left"></i>
			<h3>logo</h3>
			<i class="el-icon-time"><span>呼叫服务</span></i>
		</div>
		<div class="contant">
			<div class="contantData">
				<div class="tablelist">
					<span>桌号</span>
					<i>007</i>
					<span>人数</span>
					<i>04</i>
				</div>
				<div class="total">
					总计
					<i>$0.00</i>
				</div>
			</div>
			<div class="cooklist">
				<div class="cooklist_title">
					<span class="cookCheck">
						<label for="checkAll">
							全选
							<input type="checkbox" class="checkAll" id="checkAll">
						</label>
					</span>
					<span>菜品</span>
					<span>数量</span>
					<span>价格</span>
				</div>
				<div class="cooklist_data">
					
					<ul>
						<li v-for="(value,index) in foodlength">
							<span class="chioce_cook">
							    <input type="checkbox" class="littleCheck" id="littleCheck">
							</span>
							<span class="title_cook">
								<i>
									<img src="../../assets/imgs/drinks/timg (1).jpg" />
								</i>
								<strong>{{value.name}}</strong>
							</span>
							<span class="title_num">
								<span class="reduce" @click="down(index,value.price)">-</span>
								<span class="num_qty" ref="numUp">1</span>
								<span class="plus" @click="up(index,value.price)">+</span>
							</span>
							<span class="title_price" ref="num_price">
								{{value.price}}
							</span>
							<span class="title_del el-icon-close">
								
							</span>
						</li>
					</ul>
					<div class="buttonList">
						<el-button type="danger" class="underDan" @click="underOdd(foodlength)">下单</el-button>
					</div>
				</div>
				
			</div>
			
		</div>
	</div>
</template>

<script>
	import Axios from 'axios';
	import '../../assets/common/base.css'
	import './overBooking.scss'
	var socket = io.connect('ws://localhost:888');
	export default {
		data:function(){
			return {
				food:[],
				checkAll: true,
				isIndeterminate: true,
				checkedCities: ['a', 'b'],
				num:1,
				total:''
			}
		},
		beforeMount:function(){
			
			Axios.post('http://localhost:1212/overBooking').then(function(res){
				this.food = res.data
				console.log(this.food);
			}.bind(this))
		},
		computed:{
			foodlength:{
				get: function(){
                    return this.food.slice(0,10)
                },
                set: function(newValue){
                    this.food = newValue
                }
			}
		},
		methods: {
	    	underOdd:function(value){
		      	
		      	socket.emit('aa',value)
	    	},
	    	up:function(e,aa){
	    		
	    		this.$refs.numUp[e].innerText++;
	    		var total = this.$refs.numUp[e].innerText*aa
	    		this.$refs.num_price[e].innerText=total;
	    	},
	    	down:function(e,aa){
	    		
	    		if(this.$refs.numUp[e].innerText>1){
	    			this.$refs.numUp[e].innerText--;
	    		}
	    		var total = this.$refs.numUp[e].innerText*aa
	    		this.$refs.num_price[e].innerText=total;
	    	}
		   
		}
	}
</script>