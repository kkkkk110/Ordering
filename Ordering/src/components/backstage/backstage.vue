<template>
	<div id="backstage">
		<div class="head">
			<span class="left"><i class="el-icon-arrow-left">返回</i></span>
			<span class="center">菜品后台管理系统</span>
			<span class="right"><el-button type="primary" size="small">退出</el-button></span>
		</div>
		<div class="main">
			<div class="left">
				<p><i class="el-icon-plus"></i>新增分类</p>
				<p>全部菜品</p>
				<ul>
					<li v-for="(obj, index) in classifyArr" @click="btn(obj.name,index)">{{index + 1}}. {{obj.name}}</li>
				</ul>
			</div>
			<div class="right">
				<p class="main_head">
					<span>{{head}}</span>
					<span>共{{length}}项</span>
				</p>
				<p class="main_nav">
					<span><i class="el-icon-plus i"></i>新增菜品</span>
					<span><i class="el-icon-edit i"></i>编辑菜品</span>
					<span><i class="el-icon-delete i"></i>删除菜品</span>
					<span><i class="el-icon-information i"></i>停用菜品</span>

					<span><i class="el-icon-plus i"></i>新增套餐</span>
					<span class="empty"></span>
					<span class="last"><el-input
						  placeholder="搜索..."
						  icon="search"
						  v-model="input2"
						  @click="handleIconClick(input2)">
						</el-input>
					</span>
				</p>
				<p class="details">
					<span>序号</span>
					<span>编号</span>
					<span>菜品名称</span>
					<span>详情</span>
					<span class="empty"></span>
					<span>售价</span>
					<span>会员价</span>
					<span>禁止折扣</span>
				</p>
				<ul>
					<li v-for="(obj, index) in category">
						<span>{{index+1}}</span>
						<span>{{obj.number}}</span>
						<span>{{obj.name}}</span>
						<span>{{obj.TeSe}}</span>
						<span class="empty"></span>
						<span>{{obj.price}}</span>
						<span>{{obj.VIPprice}}</span>
						<span>是</span>
					</li>
				</ul>
			</div>

		</div>
		
	</div>

</template>

<script>
	import Vue from 'vue';
	import ElementUI from 'element-ui';
	import 'element-ui/lib/theme-default/index.css';
	import './backstage.scss';
	import Axios from 'axios';
	Vue.use(ElementUI)

	export default {
		name: 'backstage',
		data: function() {
			return {
				input2: '',
				classifyArr: [],
				length: 0,
				head: '',
				category: []
			}	
		},
		methods: {
			btn: function(value, index){
				console.log(value)
				this.head = (index+1) + '. '+ value;
				// this.$store.dispatch('category', value);
				Axios.get('http://localhost:1212/category?FenLei=' + value).then(function(res){
					this.category = res.data;
					this.length = res.data.length;
					console.log('data', res.data)
				}.bind(this));
			},
			post: function(){
				this.$store.dispatch('actionsPost')
			},
			handleIconClick: function(ev){
				console.log(ev)
			}
		},
		created: function(){
			console.log('vue', this.$store.state.backstagejs.classify)
			// this.$store.dispatch('classify')

			Axios.get('http://localhost:1212/classify').then(function(res){
				this.classifyArr = res.data;
				console.log('data', res.data)
			}.bind(this));
		},
		beforeMount: function(){
			
		}
	}
</script>