import Vue from 'vue';
import Axios from 'axios';

const state = {
	classify: [],
	category: [],
	msg: {},
	amend: false,
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
	seekNum: (store, value) => {
		store.commit('seekNum',  value)
	},
	seekName: (store, value) => {
		store.commit('seekName',  value)
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
	},
	seekNum: (store,  value) => {
		Axios.get('http://localhost:1212/seekNum?number=' + value).then(function(res){
			state.category = res.data;
			state.amend = true;
		})
	},
	seekName: (store,  value) => {
		Axios.get('http://localhost:1212/seekName?name=' + value).then(function(res){
			state.category = res.data;
			state.amend = true;
		})
	}

}

export default {
	state,
	actions,
	mutations
}