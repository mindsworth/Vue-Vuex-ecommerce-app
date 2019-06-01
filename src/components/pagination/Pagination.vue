<template>
	<div class="flex w-100 justify-center">
		<div class="inline-flex overflow-hidden mt4 bg-white br2 ph3">
			<nav class="br b--moon-gray">
				<button
					class="fl dib link dim black f5 b ph2 pv3 bg-white ba bw0 pointer"
					:style="getCurrentPage === 1 && disableClass"
					title="Previous"
					:disabled="getCurrentPage === 1"
					tabindex="-1"
					@click="onPrevPage()"
				>
					<i class="f5 fas fa-chevron-left"></i> Previous
				</button>
				<button
					class="fr dib link dim black f5 b pl2 pr4 pv3 bg-white ba bw0 pointer pr-5"
					:style="getCurrentPage === pageToShow && disableClass"
					href="#"
					title="Next"
					:disabled="getCurrentPage === pageToShow"
					@click="onNextPage()"
				>
					Next <i class="f5 fas fa-chevron-right" />
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
						@click.prevent="onGotoPage(num)"
						>{{ num }}</a
					>
				</div>
			</nav>
			<div class="overflow-hidden inline-flex items-center ml4">
				<span class="f6">Go to page</span>
				<input
					type="number"
					name=""
					class="br3 mw3 h2 ml2 ph2 outline-0"
					v-model="goto"
					@change.enter="onGotoPage(Number(goto))"
				/>
				<button
					class="bg-white ba bw0 pointer b ml2 outline-0"
					:style="(goto <= 0 || goto > pageToShow) && disableClass"
					@click.prevent="onGotoPage(Number(goto))"
					:disabled="goto <= 0 || goto > pageToShow"
				>
					Go <i class="f5 fas fa-chevron-right" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";

export default {
	name: "Pagination",
	data() {
		return {
			goto: null,
			disableClass: {
				cursor: "not-allowed",
				opacity: 0.4
			}
		};
	},
	computed: {
		...mapGetters(["getCurrentPage"]),
		...mapState(["pageToShow"])
	},
	methods: {
		...mapMutations(["ON_NEXT_PAGE", "ON_PREV_PAGE", "ON_GO_TO_PAGE"]),
		onNextPage: function() {
			this.ON_NEXT_PAGE();
		},
		onPrevPage: function() {
			this.ON_PREV_PAGE();
		},
		onGotoPage: function(page) {
			this.ON_GO_TO_PAGE(page);
		}
	}
};
</script>

<style>
</style>
