<template>
	<div
		class="flex bg-white fixed z-999 ph3-ns items-center top-nav w-100 tl border-box f5 lh-title fw6 h3-ns bt bb b--moon-gray"
	>
		<div class="w-30 flex items-center h-100">
			<img
				class="pr3"
				src="../../assets/icons/burger-menu.svg"
				alt="Burger Menu"
				width="25"
			/>
			<a class="logo no-underline black fw9 f4" href="/">BUY-LEX</a>
		</div>
		<div class="w-100 bl pl3 b--moon-gray h-100 flex items-center">
			<img
				class
				src="../../assets/icons/search.svg"
				alt="Search icon"
				width="25"
			/>
		</div>
		<div class="w-60 tr top-link h-100">
			<a class="no-underline silver bl b--moon-gray" href="/">Sign In</a>
			<a class="no-underline silver bl b--moon-gray" href="/">Sign Up</a>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
	letter-spacing: 0.2rem;
}
.top-link .no-underline {
	display: inline-block;
	padding: 1.35rem 3rem;
}
</style>
