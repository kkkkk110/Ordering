import Vue from 'vue';
import Axios from 'axios';
const state = {
	// classify: 'aa',
}

const actions = {
	
	classify: (store) => {
		console.log(6666)
		Axios.get('http://localhost:1212/classify').then(function(res){
			// console.log(res)
			store.commit('classify', res.data)

			console.log('data', res.data)
		})
		// Axios.get('http://localhost:1212/classify', 'name=abc&psw=123',{
		// 	headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		// })
		//     .then(function(res){
		//         store.commit('mutationsPost', res.data)
		//         console.log(res.data);
		//     })
	},
	category: (store, value) => {
		console.log('js',value)
		Axios.get('http://localhost:1212/category?FenLei=' + value).then(function(res){
			// console.log(res)
			store.commit('category', res.data)

			console.log('data', res.data)
		})
	}
}
const mutations = {
	// mutationsBtn: (store) => {
	// 	// console.log(666)
	// 	state.color = state.color == 'red' ? 'yellow' : state.color == 'yellow' ? 'green' : 'red';
	// 	state.btn = state.btn == '黄灯' ? '绿灯' : state.btn == '绿灯' ? '红灯' : '黄灯' ;
	// },
	// mutationsPost: (store, res) => {
	// 	console.log('mutations', res)
	// }
	classify: (store, res) => {
		console.log('6667', res)
		console.log('arguments', arguments)
		state.classify = res;
	},
	category: (store, res) => {
		console.log('6667', res)
		console.log('arguments', arguments)
		state.category = res;
	}

}

export default {
	state,
	actions,
	mutations
}