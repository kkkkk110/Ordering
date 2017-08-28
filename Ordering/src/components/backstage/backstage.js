import Vue from 'vue';
import Axios from 'axios';

const state = {
	classify: [],
	category: [],
	msg: {}
}

const actions = {
	
	classify: (store) => {
		store.commit('classify')
	},
	category: (store, value) => {
		store.commit('category',  value)
	},
	compilemsg: (store, value) => {
		store.commit('compilemsg',  value)
	},
}
const mutations = {
	classify: (store) => {

		Axios.get('http://localhost:1212/classify').then(function(res){
			state.classify = res.data;

			console.log('data', res.data)
		})
	},
	category: (store,  value) => {
		Axios.get('http://localhost:1212/category?FenLei=' + value).then(function(res){
			state.category = res.data;

			// console.log('data', res.data)
		})
	},
	compilemsg: (store, value) =>{
		state.msg = value;
	}
}

export default {
	state,
	actions,
	mutations
}