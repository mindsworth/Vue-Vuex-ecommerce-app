import Vue from 'vue';
import Vuex from 'vuex';
import { phones, brands } from '../data';
import { getters } from './getters';
import { mutations } from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		brands,
		products: phones,
		perPage: 5,
		selectedBrands: [],
		filteredProduct: '',
		currentPage: 1,
		pageToShow: 0
	},
	getters,
	mutations
});

export default store;
