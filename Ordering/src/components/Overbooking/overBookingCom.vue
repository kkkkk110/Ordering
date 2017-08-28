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
					<span>
						 <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" >全选</el-checkbox>
					</span>
					<span>菜品</span>
					<span>数量</span>
					<span>价格</span>
				</div>
				<div class="cooklist_data">
					<ul>
						<li v-for="(value,index) in foodlength" >
							<span class="chioce_cook">
								<el-checkbox-group>
								    <el-checkbox></el-checkbox>
							 	</el-checkbox-group>
							</span>
							<span class="title_cook">
								<i>
									<img src="../../assets/imgs/drinks/timg (1).jpg" />
								</i>
								<span>{{value.name}}</span>
							</span>
							<span class="title_num">
								<span class="reduce">-</span>
								<input name="Gqty" id="Gqty" type="text"   value="1">
								<span class="plus">+</span>
							</span>
							<span class="title_price">
								{{value.price}}
							</span>
							<span class="title_del el-icon-close">
								
							</span>
						</li>
					</ul>
				</div>
				
			</div>
			<div class="buttonList">
				<button class="underDan" @click="underOdd(foodlength)">下单</button>
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
			}
		},
		beforeMount:function(){
			
			Axios.post('http://localhost:1212/overBooking').then(function(res){
				this.food = res.data
				console.log(this.food);
			}.bind(this))
		},
		computed:{
			foodlength:function(){
				return this.food.slice(0,10)
			}
		},
		methods: {
	      underOdd:function(value){
	      	console.log(value)
	      	socket.emit('aa',value)
	      }
	    }
	}
</script>