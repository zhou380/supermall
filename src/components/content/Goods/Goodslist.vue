<template>
	<div class="goods-list">
		<goodlistitem v-for="item in goods" :list="item" />
	</div>
</template>

<script>
import Goodlistitem from "./Goodlistitem.vue";
export default {
	components: { Goodlistitem },
	props: {
		goods: {
			type: Array,
			default() {
				return [];
			},
		},
	},
};
</script>

<style>
.goods-list {
	display: flex;
	flex-flow: wrap;
	justify-content: space-evenly;
}
</style>