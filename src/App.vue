<template>
	<div id="app">
		<Navigation />
		<Home say="Hello Dashboard" />
	</div>
</template>

<script>
import Navigation from "./components/core/Navigation.vue";
import Home from "./containers/Home.vue";

export default {
	components: {
		Navigation,
		Home
	}
};
</script>

<style>
body {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin: 0;
	padding: 0;
	background-color: #f2f2f2;
}
</style>
