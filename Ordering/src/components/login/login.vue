<template>
	<div id="login">
		<h2>后  台  登   录</h2>
		<el-form :model="ruleForm2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="pass">
				<el-input type="text" v-model="ruleForm2.pass"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
				<el-input type="password" v-model="ruleForm2.checkPass"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
				<el-button @click="resetForm('ruleForm2')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import './login.scss';
	import Axios from 'axios';

	export default {
		data: () =>{
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入用户名'));
				} 
				// else {
				// if (this.ruleForm2.checkPass !== '') {
				// 	this.$refs.ruleForm2.validateField('checkPass');
				// }
				// 	callback();
				// }
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				}
				// } else if (value !== this.ruleForm2.pass) {
				// 	callback(new Error('两次输入密码不一致!'));
				// } else {
				// 	callback();
				// }
			};
			return {
				ruleForm2: {
					pass: '',
					checkPass: '',
				},
		   //      rules2: {
					// pass: [{ validator: validatePass, trigger: 'blur' }],
					// checkPass: [{ validator: validatePass2, trigger: 'blur' }]
		   //      }
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>