const paginationPipe = ( state, args ) => {
	const currentIndex = args.perPage * (args.currentPage - 1) || 0;

	return args || args.perPage || args.currentPage
		? state.slice(currentIndex, currentIndex + args.perPage)
		: state;
};

export default paginationPipe;
