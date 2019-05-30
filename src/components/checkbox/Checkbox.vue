<template>
	<Fragment>
		<input
			type="checkbox"
			class="w0 h0 o-0 absolute"
			:name="brand"
			@change="onNextPage"
			:value="brand"
		/>
		<span class="custum-checkbox absolute h1 w1 ba left--2 top-0"></span>
	</Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapMutations } from "vuex";

export default {
	name: "Checkbox",
	components: { Fragment },
	props: {
		brand: String
	},
	data: () => ({
		Vmid: {
			top: 8 + "%",
			right: 7 + "%"
		}
	}),
	methods: {
		...mapMutations(["FILTER_BY_BRAND"]),
		onNextPage: function(e) {
			const checkbox = e.target.name;
			this.FILTER_BY_BRAND(checkbox);
		}
	}
};
</script>

<style lang="scss" scoped>
input:checked + .custum-checkbox::after {
	opacity: 1;
}
.custum-checkbox {
	top: 10%;
	border-radius: 2px;

	&::after {
		content: "";
		border-radius: inherit;
		position: absolute;
		width: 60%;
		height: 30%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 1px solid #000;
		background: #000;
		opacity: 0;
	}
}
</style>
