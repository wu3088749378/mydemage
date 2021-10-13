<template>
	<el-table :data="tableData" border style="width: 100%">
		<el-table-column fixed prop="date" label="文档管理简介" width="120">
		</el-table-column>
		<el-table-column prop="name" label="系统元素" width="120">
		</el-table-column>
		<el-table-column prop="province" label="主要步骤" width="120">
		</el-table-column>
		<el-table-column prop="city" label="主要类型" width="120">
		</el-table-column>
		<el-table-column prop="address" label="管理特点" width="300">
		</el-table-column>
		<el-table-column prop="zip" label="文献" width="120">
		</el-table-column>
		<el-table-column fixed="right" label="操作" width="100">
			<template slot-scope="scope">
				<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
				<el-button type="text" @click="open" size="small">编辑</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		methods: {
			handleClick(row) {
				this.result1 = row;
			},
			open(row) {
				// this.handleClick(row)
				const cEle = this.$createElement;
				this.$msgbox({
					title: '信息编辑',
					message: cEle('el-form', null, [
						cEle('el-form-item', null, [
							cEle('el-input', null, )
						], row)
					])
				})
				//1.日期
				//2.姓名
				//3.省份
				//4.市区
				//5.地址
				//6.邮箱
			}
		},

		data() {
			return {
				result1: {},
				tableData: [{
					date: '2016-05-02',
					name: '李璐',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 154264
				}, {
					date: '2016-05-04',
					name: '李璐',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1517 弄',
					zip: 154264
				}, {
					date: '2016-05-01',
					name: '李璐',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1519 弄',
					zip: 154264
				}, {
					date: '2016-05-03',
					name: '李璐',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1516 弄',
					zip: 154264
				}]
			}
		},
		// components:{
		// 	template:{`
				
		// 	`}
		// }
	}
</script>
