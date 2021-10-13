<template>
	<el-container>
		<el-header>
			<eheader></eheader>
		</el-header>
		<el-container>
			<el-aside>
				<el-menu style="height: 600px;" default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
					@close="handleClose" background-color="#2e3638" text-color="#ffffff" active-text-color="#ffd04b">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-user"></i>
							<span>用户管理</span>
						</template>
						<el-menu-item-group>
							<!-- <template slot="title">分组一</template> -->
							<el-menu-item index="1-1">
								<el-link class="el-link" :underline="false">
									<router-link to="/home/user">用户列表</router-link>
								</el-link>
							</el-menu-item>
							<!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">
							<!-- <router-link to="/home/main">项目管理</router-link> -->
							<el-link class="el-link" :underline="false">
								<router-link to="/home/main">项目管理</router-link>
							</el-link>
						</span>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-document"></i>
						<span slot="title">
							<el-link class="el-link" :underline="false">
								<router-link to="/home/file">文档管理</router-link>
							</el-link>
						</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">
							<el-link class="el-link" :underline="false">
								<router-link to="/home/personality">个性设置</router-link>
							</el-link>
						</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-main style="height: 600px;">
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import Header from '@/components/Header'
	export default {
		name: 'home',
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		components: {
			'eheader': Header
		}
	}
</script>

<style scoped>
	.el-header,
	.el-footer {
		background-color: rgba(84, 92, 100);
		color: #333;
		/* text-align: center; */
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
	span.el-link{
		color: #FFFFFF;
	} 
</style>
