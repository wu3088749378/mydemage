import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/views/Home.vue'
import Main from '@/components/Maindemo'
Vue.use(VueRouter)

/*这里是设置路由规则的*/
const routes = [{
		path: '/',
		component: Login
	},
	{
		path: '/home',
		component: Home,
		children:[
			{
				path:'main',
				component:Main
			}
		]
	}
]
/*将路由规则添加到router实例中*/
const router = new VueRouter({
	routes
})

export default router
