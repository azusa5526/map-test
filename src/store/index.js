import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	// strict: true,
	state: {
		mapObject: null
	},
	getters: {
		mapObject: (state) => state.mapObject
	},
	mutations: {
		SET_MAP_OBJECT: (state, payload) => {
			state.mapObject = payload;
		}
	},
	actions: {},
	modules: {}
});
