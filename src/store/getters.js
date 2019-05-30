import { paginationPipe, filterByBrand } from '../utils/index';

export const getters = {
	getBrands(state) {
		return state.brands;
	},
	getCurrentPage(state) {
		return state.currentPage;
	},
	filterProducts(state) {
		const brand = state.selectedBrands;
		const products = state.products;

		const filteredProduct = filterByBrand(products, brand);
		return filteredProduct;
	},
	paginate(state) {
		const { currentPage, perPage } = state;
		const compute = Math.ceil(getters.filterProducts(state).length / perPage);

		state.pageToShow = compute;

		return paginationPipe(getters.filterProducts(state), { currentPage, perPage });
	},
	brandsCount(state) {
		const counts = {};
		state.products.forEach(product => {
			counts[product.brand] = counts[product.brand] + 1 || 1;
		});

		return counts;
	}
};
