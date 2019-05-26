import Vue from 'vue';
import Vuex from 'vuex';
import { phones } from '../data/productsfixtures';
import { getters } from './getters';
import { mutations } from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		products: phones,
		perPage: 10,
		currentPage: 1,
		pageToShow: 0
	},
	getters,
	mutations
});

export default store;
