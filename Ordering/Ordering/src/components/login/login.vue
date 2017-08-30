<template>
	<div id="login">
		<h2>后  台  登   录</h2>
		<el-form ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名">
				<el-input type="text" v-model="name" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item label="确认密码">
				<el-input type="password" v-model="psw" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item class="center">
				<el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
				<el-button @click="resetForm">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import './login.scss';
	import Axios from 'axios';
	import qs from 'qs';
	import router from '../../router/index';

	export default {
		data: () =>{
			return {		
				name: '',
				psw: '',
			}
		},
		methods: {
			submitForm(formName) {
				if(this.name.trim() != '' && this.psw.trim() != ''){
					// console.log(this.name, this.psw)
					let str = `name=${this.name.trim()}&psw=${this.psw.trim()}`;
					let data = qs.stringify({
						name: this.name.trim(),
						psw: this.psw.trim()
					})
					console.log(str)
					Axios.post('http://localhost:1212/getuser' , data).then(function(res){
						console.log(res)
						if(res.data.length > 0){
							router.push({name: 'backstage'})
							window.localStorage.setItem('name', this.name.trim());
						}else{
							 this.$message({ type: 'error',message: '用户名或密码错误!'})
						}

	                }.bind(this))
				}
			},
			resetForm(formName) {
				this.name = '';
				this.psw = '';
			}
		}
	}
</script>