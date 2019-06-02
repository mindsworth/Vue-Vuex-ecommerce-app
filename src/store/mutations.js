export const mutations = {
	ON_NEXT_PAGE: state => {
		state.currentPage++;
	},
	ON_PREV_PAGE: state => {
		state.currentPage--;
	},
	ON_GO_TO_PAGE: (state, payload) => {
		if (!(payload <= 0) && !(payload > state.pageToShow)) {
			state.currentPage = payload;
		}
	},
	FILTER_BY_BRAND: (state, payload) => {
		const brand = payload;

		state.currentPage = 1;

		if (!state.selectedBrands.includes(brand)) {
			state.selectedBrands = [...state.selectedBrands, payload];
		} else {
			state.selectedBrands = state.selectedBrands.filter(
				selectedBrand => selectedBrand !== brand
			);
		}
	}
};
