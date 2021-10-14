import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/views/Home.vue'

import Main from '@/components/mainbox/Maindemo'
import Welcome from '@/components/mainbox/Welcome'
import File from '@/components/mainbox/File'
import Personality from '@/components/mainbox/Personality'
import User from '@/components/mainbox/User'


Vue.use(VueRouter)

/*这里是设置路由规则的*/
const routes = [{
		path: '/',
		redirect: 'login'

	},
	{
		path: '/login',
		component: Login,
		meta: {
			title: 'login'
		}
	},
	{
		path: '/home',
		component: Home,
		children: [{
				path: '/home',
				component: Welcome
			},
			{
				path: 'main',
				component: Main,
				meta: {
					title: '项目管理'
				}
			},
			{
				path: 'file',
				component: File,
				meta: {
					title: '文档管理'
				}
			},
			{
				path: 'personality',
				component: Personality,
				meta: {
					title: '个性设置'
				}
			},
			{
				path: 'user',
				component: User,
				meta: {
					title: '用户列表'
				}
			},
			{
				path: 'welcome',
				component: Welcome,
				meta: {
					title: 'WELCOME-欢迎进入xxx系统'
				}
			}
		]
	}
]
/*将路由规则添加到router实例中*/
const router = new VueRouter({
	routes
})
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
	// 	to 将要访问的路径
	// 	from 代表从哪个路径跳转而来
	// 	next 函数表示放行
	// 	next() 放行next('/login')强制跳转
	if (to.path === '/login') return next();
	// 	//获取token
	//token在登录的时候回获取loken并保存到sessionStorage
	const tokenStr = window.sessionStorage.getItem('token');
	//判定当前页面中是否有对应的token
	if (!tokenStr) return next('/login');//if的简便写法
	next();
})

router.beforeEach(function(to, from, next) {
	window.document.title = to.meta.title
	console.log(from)
	next();
})

export default router
