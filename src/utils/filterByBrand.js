const filterByBrand = ( arr, brand ) => {
	if (!brand.length) return arr;

	return arr.filter(product => brand.includes(product.brand));
};

export default filterByBrand;
