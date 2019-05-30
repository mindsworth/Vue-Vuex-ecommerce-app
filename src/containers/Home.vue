<template>
	<div class="home">
		<section class="cf mw9 center ph2 pv6">
			<FilterComponent />
			<ProductList />
		</section>
	</div>
</template>

<script>
import ProductList from "../components/product/ProductList";
import FilterComponent from "../components/filter/FilterComponent";
export default {
	components: {
		ProductList,
		FilterComponent
	}
};
</script>

<style>
</style>
