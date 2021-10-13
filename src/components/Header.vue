<template>
	<el-row :gutter="20">
		<el-col :span="16">
			<div class="grid-content bg-purple">
				<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
					background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item index="1">处理中心</el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的工作台</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项1</el-menu-item>
							<el-menu-item index="2-4-2">选项2</el-menu-item>
							<el-menu-item index="2-4-3">选项3</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="3" disabled>消息中心</el-menu-item>
					<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
				</el-menu>
			</div>
		</el-col>
		<el-col :span="8">
			<div class="grid-content bg-purple">
				
				<div class="line"></div>
				<div class="demo-image">
					<div class="block" v-for="fit in fits" :key="fit">
						<el-image style="width: 42px; float: left; margin-top: 10px; height: 42px" :src="url"
							:fit="fit">
						</el-image>
						用户名:<span>{{name}}</span>
					</div>
				</div>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: "eheader",
		data() {
			return {
				fits: ['fill'],
				url: 'https://img2.baidu.com/it/u=2653342432,4073413837&fm=26&fmt=auto',
				name: '',
				activeIndex: '1',
				activeIndex2: '1'
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
</style>
