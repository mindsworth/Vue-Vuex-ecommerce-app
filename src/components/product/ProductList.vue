<template>
	<Fragment>
		<div v-for="product in paginate" :key="product.id">
			<Product :product="product"/>
		</div>
		<Pagination />
	</Fragment>
</template>

<script>
import Product from "./Product";
import { Fragment } from "vue-fragment";
import Pagination from "../pagination/Pagination";
import { mapGetters, mapState, mapMutations } from "vuex";

export default {
	name: "ProductList",
	components: { Product, Fragment, Pagination },
	data() {
		return {}
	},
	computed: {
		...mapGetters(['paginate'])
	}
};
</script>
<style>
</style>
