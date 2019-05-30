export const mutations = {
	ON_NEXT_PAGE: (state) => {
		state.currentPage++;
	},
	ON_PREV_PAGE: (state) => {
		state.currentPage--;
	},
	ON_GO_TO_PAGE: ( state, payload ) => {
		if (!(payload <= 0) && !(payload > state.payload)) {
			state.currentPage = payload;
		}
	}
};
