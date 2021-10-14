import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		name: '',
		
	},
	mutations: {
		saveUser: function(state, payload) { //payload就是一个对象{name:'123',pwd:'abc'}
			state.name = payload.username
		}
	},
	actions: {},
	modules: {}
})
