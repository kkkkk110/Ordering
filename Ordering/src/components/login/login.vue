<template>
	<div id="login">
		<h2>后  台  登   录</h2>
		<el-form ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名">
				<el-input type="text" v-model="name"></el-input>
			</el-form-item>
			<el-form-item label="确认密码">
				<el-input type="password" v-model="psw"></el-input>
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

	export default {
		data: () =>{
			return {		
				name: '',
				psw: '',
			}
		},
		methods: {
			submitForm(formName) {
				if(this.name!= '' && this.psw != ''){
					console.log(this.name, this.psw)
				}
				
				// this.$refs[formName].validate((valid) => {
				// 	if (valid) {
				// 		alert('submit!');
				// 	} else {
				// 		console.log('error submit!!');
				// 		return false;
				// 	}
				// });
			},
			resetForm(formName) {
				this.name = '';
				this.psw = '';
			}
		}
	}
</script>