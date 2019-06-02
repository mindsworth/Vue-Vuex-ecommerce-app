<template>
	<div class="w-20 mb4">
		<div class="f3 dib bg-light-purple white h3 flex items-center ph4">
			<i class="fas fa-filter" />
			<span class="f4 fw4 ml2 mv0 pa0">Filters</span>
		</div>
		<nav class="">
			<div class="ph4 pv1 bg-light-gray">
				<h3>Brands</h3>
			</div>
			<ul class="list-group flex-row flex-wrap">
				<li class="list ml4 mt2" v-for="brand in getBrands" :key="brand">
					<label class="custom-checkbox text-capitalize relative pointer">
						{{brand}} <span title="Number of items" class="bg-gray ph1 white ba bw1 ml3 dib">{{brandsCount[brand]}}</span>
						<Checkbox :brand="brand"/>
					</label>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import Checkbox from "../checkbox/Checkbox";
import { mapGetters } from "vuex";

export default {
	name: "Aside",
	components: {
		Checkbox
	},
	computed: {
		...mapGetters(['getBrands', 'brandsCount'])
	}
};
</script>

<style>
</style>
