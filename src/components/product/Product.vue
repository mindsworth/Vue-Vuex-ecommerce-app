<template>
	<article
		class="fl w-100 w-50-m w-20-ns pa2-ns mb5"
		@mouseenter="showAddToCartBtn = true"
		@mouseleave="showAddToCartBtn = false"
	>
		<div class="bg-white tc pa3">
			<img :src="product.images[0]" class="w-75" />
		</div>
		<div class="bg-white tc pa3 link">
			<h3 class="f5 ma0 black-70" :title="product.title">
				{{ truncated }}
			</h3>
			<h3 class="f4 fw9 ma0 mt2 black-90">{{ computePrice }}</h3>
			<!-- <h6 class="f5 fw5 ma1 black-60">30% Off</h6> -->
		</div>
		<div class="relative" v-show="showAddToCartBtn">
			<div class="bg-white tc pa3 link bt b--black-10 absolute w-100">
				<a
					class="f6 fw7 bg-animate hover-bg-purple link br2 ph3 pv2 mb2 dib white bg-light-purple"
					href="/"
					>Add to cart</a
				>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	name: "Product",
	props: {
		product: Object
	},
	data() {
		return {
			showAddToCartBtn: false
		};
	},
	computed: {
		truncated() {
			const text = this.product.title;
			const textLen = text.length;
			const max = 45;
			return textLen > max ? text.slice(0, max) + "..." : text;
		},
		computePrice() {
			const amount = this.product.price.toFixed(2);
			const price = "₦" + amount;

			return price;
		}
	}
};
</script>

<style>
</style>
