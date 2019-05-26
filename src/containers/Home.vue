<template>
	<div class="home">
		<section class="cf mw9 center ph2 pv6">
			<ProductList />
			<Pagination />
		</section>
	</div>
</template>

<script>
import ProductList from "../components/product/ProductList";
import Pagination from "../components/pagination/Pagination";
export default {
	components: {
		ProductList,
		Pagination
	}
};
</script>

<style>
</style>
