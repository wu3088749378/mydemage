<template>
	<div class="login">
		<div class="login_box">
			<el-form class="login_form" ref="form" :model="form" label-width="80px">
				<el-form-item label="用户名">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="form.pwd"></el-input>
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
				form: {
					name: '',
					pwd: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		},
		created() {

		}
	}
</script>

<style scoped>
	/*scope属性：将样式代码私有化，只能在当前这个组件里生效*/

	.login {
		background: #42B983;
		width: 100%;
		height: 768px;
	}

	.login_box {
		width: 300px;
		height: 200px;
		background: #fff;
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
</style>
