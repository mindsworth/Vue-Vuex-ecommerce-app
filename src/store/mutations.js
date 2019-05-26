export const mutations = {
	ON_NEXT_PAGE: (state) => {
		state.currentPage++;
	},
	ON_PREV_PAGE: (state) => {
		state.currentPage--;
	}
};
