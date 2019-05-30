<template>
	<div class="home">
		<section class="w-100 center pv5 flex">
			<Aside />
			<ProductList />
		</section>
	</div>
</template>

<script>
import ProductList from "../components/product/ProductList";
import Aside from "../components/core/Aside";
export default {
	components: {
		ProductList,
		Aside
	}
};
</script>

<style>
</style>
