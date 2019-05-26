<template>
	<Fragment>
		<div v-for="product in products" :key="product.id">
			<Product :product="product"/>
		</div>
	</Fragment>
</template>

<script>
import Product from "./Product";
import { Fragment } from "vue-fragment";

export default {
	name: "ProductList",
	components: { Product, Fragment },
	data() {
		return {products: this.$store.getters.paginate}
	}
};
</script>
<style>
</style>
