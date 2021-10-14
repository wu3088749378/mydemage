<template>

	<div class="login">
		<el-row type="flex" class="row-bg" justify="center" align="middle" style="text-align: center;">
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<h2>x x x 登录系统</h2>
				</div>
			</el-col>
		</el-row>
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
					pwd: ''
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
				this.$axios.get('/vue/login').then(res => {

					if (this.ruleForm.name == res.data.username) {
						alert("登录成功")
						console.log(res.data)
						this.$store.commit('saveUser', res.data)
						//1.讲登录成功后的token，保存到客户端的sessionStorage中
						//1.1项目之中除了登录的API接口，其他的都要登录后才能进行下一步操作
						window.sessionStorage.setItem('token', res.data.token)
						//2.通过编程导航跳转到后台主页，路由地址是/home
						this.$router.push("/home")
					} else {
						alert("登录失败")
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
		top: 100px;
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

	h2 {
		margin-top: 120px;
		font-size: 36px;
	}
</style>
