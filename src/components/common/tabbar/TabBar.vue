<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "TabBar",
};
</script>

<style>
#tabbar {
	display: flex;
	position: fixed;
	background-color: #fff;
	left: 0;
	right: 0;
	bottom: 0;
	box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
	z-index: 999;
}
</style>