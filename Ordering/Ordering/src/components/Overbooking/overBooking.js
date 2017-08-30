const state = {
	num:'1'
}

const actions = {
	actionsUp: (store) => {
		console.log(store)
		store.commit('mutationsUp')
	},
	
}
const mutations = {
	mutationsUp: (store) => {
		
		state.num++;
		
	}
}

export default {
	state,
	actions,
	mutations
}