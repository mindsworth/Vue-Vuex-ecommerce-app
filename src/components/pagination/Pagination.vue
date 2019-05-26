<template>
	<div class="tc b mw8 center">
		<div class="dib overflow-hidden mt4 bg-white br2">
			<nav>
				<button
					class="fl dib link dim black f5 b ph2 pv3 bg-white ba bw0 pointer"
					:style="
						getCurrentPage === 1 && {
							cursor: 'not-allowed',
							opacity: 0.4
						}
					"
					title="Previous"
					:disabled="getCurrentPage === 1"
					tabindex="-1"
					@click="onPrevPage()"
				>
					&larr; Previous
				</button>
				<button
					class="fr dib link dim black f5 b ph2 pv3 bg-white ba bw0 pointer"
					:style="
						getCurrentPage === pageToShow && {
							cursor: 'not-allowed',
							opacity: 0.4
						}
					"
					href="#"
					title="Next"
					:disabled="getCurrentPage === pageToShow"
					@click="onNextPage()"
				>
					Next &rarr;
				</button>

				<div class="overflow-hidden center dt tc">
					<a
						v-for="(num, index) in pageToShow"
						:key="index"
						:class="[
							'dtc link f5 b ph2 pv3',
							getCurrentPage !== num && 'black dim',
							getCurrentPage === num &&
								'bg-light-purple white bg-animate hover-bg-purple'
						]"
						href="#"
						:title="num"
						>{{ num }}</a
					>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
import * as Types from "../../store/types";
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
	name: "Pagination",
	data() {
		return {};
	},
	computed: {
		...mapGetters(["getCurrentPage"]),
		...mapState(["pageToShow"])
	},
	methods: {
		...mapMutations(["ON_NEXT_PAGE", "ON_PREV_PAGE"]),
		onNextPage: function() {
			this.ON_NEXT_PAGE();
		},
		onPrevPage: function() {
			this.ON_PREV_PAGE();
		}
	}
};
</script>

<style>
</style>
