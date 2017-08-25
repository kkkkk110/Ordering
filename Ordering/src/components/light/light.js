import Vue from 'vue';

const state = {
	color: 'red',
	btn: '黄灯'
}

const actions = {
	actionsBtn: (store) => {
		console.log(store)
		store.commit('mutationsBtn')
	}
}
const mutations = {
	mutationsBtn: (store) => {
		// console.log(666)
		state.color = state.color == 'red' ? 'yellow' : state.color == 'yellow' ? 'green' : 'red';
		state.btn = state.btn == '黄灯' ? '绿灯' : state.btn == '绿灯' ? '红灯' : '黄灯' ;
	}
}

export default {
	state,
	actions,
	mutations
}