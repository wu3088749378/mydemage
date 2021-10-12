<template>
	
	<div class="login">
		<h2>XXX登录系统</h2>
		<div class="login_box">
			<el-form class="login_form" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
				<el-form-item label="用户名" prop="name">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="ruleForm.pwd"></el-input>
				</el-form-item>
				<el-form-item class="login_btn">
					<el-button @click="onSubmit()" size="medium">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				ruleForm: {
					name: '',
					pwd:''
				},
				rules: {
					name: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
				}
			}
		},
		methods: {
			onSubmit() {
				// console.log('submit!');
				this.$axios.get('/api/list').then(res=>{
					console.log()
					if(this.ruleForm.name == res.data().username){
						alert("登录成功")
					}
				})
				//console.log(this.$axios.get("/api/list"))
			}
		},
		created() {

		}
	}
</script>

<style scoped>
	/*scope属性：将样式代码私有化，只能在当前这个组件里生效*/

	.login {
		background: #509af4;
		width: 100%;
		height: 768px;
	}
	
	.login_box {
		width: 300px;
		height: 200px;
		background: #ccc6a4;
		margin: 0 auto;
		position: relative;
		top: 300px;
		border-radius: 5px;
	}

	.login_form {
		position: relative;
		top: 15px;
		right: 10px;
	}

	.login_btn {
		position: relative;
		left: 150px;
	}
	h2{
		position: absolute;
		top: 250px;
		left: 620px;
		width: 200px;
		margin: 0 auto;
	}
</style>
