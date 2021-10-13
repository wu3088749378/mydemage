import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/views/Home.vue'

import Main from '@/components/mainbox/Maindemo'
import Welcome from '@/components/mainbox/Welcome'



Vue.use(VueRouter)

/*这里是设置路由规则的*/
const routes = [{
		path: '/',
		component: Login
	},
	{
		path: '/home',
		component: Home,
		children: [{
				path: '/home',
				redirect: 'welcome'
			},
			{
				path: 'main',
				component: Main,
				meta: {
					title: '欢迎进入项目管理'
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

router.beforeEach(function(to, from, next) {
	window.document.title = to.meta.title
	console.log(from)
	next();
})

export default router
