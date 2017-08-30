<template>
	<div id="backstage">
		<div class="head">

			<span class="left"><i class="el-icon-arrow-left"><router-link to="/">返回 </router-link></i></span>
			<span class="center">菜品后台管理系统</span>
			<span class="right" @click="quit"><el-button type="primary" size="small" ><router-link to="/">退出</router-link></el-button></span>
		</div>
		<div class="main">
			<div class="left">
				<p ref="abc" @click="addclassify"><i class="el-icon-plus"></i>新增分类</p>

				<p>全部菜品</p>
				<ul>
					<li v-for="(obj, index) in this.$store.state.backstagejs.classify" @click="btn(obj.name,index)" :key="index">{{index + 1}}. {{obj.name}}</li>
				</ul>
			</div>
			<div class="right">
				<p class="main_head">
					<span>{{head}}</span>
					<span>共{{this.$store.state.backstagejs.category.length}}项</span>
				</p>
				<p class="main_nav">
					<span @click="add"><i class="el-icon-plus i"></i>新增菜品</span>
					<span @click="compile"><i class="el-icon-edit i"></i>编辑菜品</span>
					<span @click="del"><i class="el-icon-delete i"></i>删除菜品</span>
					<span><i class="el-icon-information i"></i>停用菜品</span>

					<span><i class="el-icon-plus i"></i>新增套餐</span>
					<span class="empty"></span>
					<span class="last"><el-input
						  placeholder="搜索..."
						  icon="search"
						  v-model="inputSeek"
						  @click="seek(inputSeek)">
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
					<li v-for="(obj, index) in this.$store.state.backstagejs.category" @click="Selected(index, $event)" :class="{active: index == currentIndex}" :key="index">
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
		<div class="shade" v-show="shade"></div>
		<div class="add" v-show="addshade">
            <addComponent></addComponent>   
		</div>
		<div class="compile" v-show="compileshade">
			<compileComponent :msgObj="msgObj"></compileComponent>
		</div>
		<div class="addClassify" v-show="classifyshade">
			<ClassifyComponent></ClassifyComponent>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import ElementUI from 'element-ui';
	import 'element-ui/lib/theme-default/index.css';
	import './backstage.scss';
	import Axios from 'axios';
	import addComponent from './add.vue';
	import compileComponent from './compile.vue';
	import ClassifyComponent from './addClassify.vue'
	Vue.use(ElementUI);

	export default {
		name: 'backstage',
		data: function() {
			return {
				inputSeek: '',
				// classifyArr: [],
				head: '',
				arr: this.$store.state.backstagejs.category,
				// category: [],
				shade: false,
				addshade: false,
				compileshade: false,
				classifyshade:false,
				// delshade: true,
				currentIndex:  0,
				msgObj: {},
			}	
		},
		components: {
			addComponent,
			compileComponent,
			ClassifyComponent
		},
		methods: {
			btn: function(value, index){
				this.head = (index+1) + '. '+ value;
				this.currentIndex = 0;
				this.$store.dispatch('category', value);
			},
			post: function(){
				this.$store.dispatch('actionsPost')
			},
			seek: function(res){
				if(/^\d+$/.test(res)){
					this.$store.dispatch('seekNum', res);
				}else{
					this.$store.dispatch('seekName', res);
				}
			},
			add: function(){
				if(!this.shade){
					this.shade = true;
					this.addshade = true;
				}				
			},
			compile: function(){
				if((!this.shade && this.head) || this.$store.state.backstagejs.amend ){
					this.shade = true;
					this.compileshade = true;
					
					this.msgObj = this.$store.state.backstagejs.category[this.currentIndex]
					// this.$store.dispatch('compilemsg', this.msgObj)
					// console.log('adasd', this.$store.state.backstagejs.category)
				}
			},
			del: function(){
				if(this.head || this.$store.state.backstagejs.amend){
					// console.log(this.category[this.currentIndex])
					// console.log(this.$confirm)
					this.$confirm('此操作将永久删除这条信息, 是否继续?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
							console.log(6666)
							Axios.get('http://localhost:1212/del?id=' + this.$store.state.backstagejs.category[this.currentIndex].id).then(function(res){
								if(res.data.succeed){
									this.btn(this.head.substring(3), this.head.substring(0, 1)-1);
									this.$message({
										type: 'success',
										message: '删除成功!'
									});
								}else{
									this.$message({
										type: 'error',
										message: '删除失败!'
									});
								}
							}.bind(this));
							
						}).catch(() => {
							this.$message({
							type: 'info',
							message: '已取消删除'
						});          
					});
				}				
			},
			Selected: function(index, ev){
				this.currentIndex = index;

			},
			addclassify: function(){
				if(!this.shade){
					this.shade = true;
					this.classifyshade = true;
				}
			},
			quit: function(){
				console.log(666)
				window.localStorage.setItem('name', '')
			}
		},
		created: function(){
			this.$store.dispatch('classify')
		},
		beforeMount: function(){
			
		},
		mounted: function(){

	// console.log('666', this.$refs.abc, this.$nextTic);

			document.onkeyup = function(e){
				if(e.keyCode == 13){
					this.seek(this.inputSeek)
				}
			}.bind(this)
	    }
	}
</script>