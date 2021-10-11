import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'

Vue.use(VueRouter)

/*这里是设置路由规则的*/
const routes = [
  {
	path: '/',
  component: Login
  }
]
/*将路由规则添加到router实例中*/
const router = new VueRouter({
  routes
})

export default router