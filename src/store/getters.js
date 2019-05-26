import paginationPipe from '../filters/paginationPipe';

export const getters = {
	getProducts(state) {
		return state.products;
	},
	getCurrentPage(state) {
		return state.currentPage;
	},
	paginate(state) {
		const { currentPage, perPage, products } = state;
		const compute = Math.ceil(products.length / perPage);

		state.pageToShow = compute;

		return paginationPipe(state.products, { currentPage, perPage });
	}
};
