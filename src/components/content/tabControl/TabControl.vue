<template>
	<div class="tab-control">
		<div
			v-for="(item, index) in titles"
			key="index"
			class="tab-control-item"
			:class="{ active: index === currentindex }"
			@click="tabclick(index)"
		>
			<span>{{ item }}</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentindex: 0,
		};
	},
	props: {
		titles: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	methods: {
		tabclick(index) {
			this.currentindex = index;
			this.$emit("tabcli", index);
		},
	},
};
</script>

<style>
.tab-control {
	display: flex;
	text-align: center;
	height: 44px;
	line-height: 44px;
	font-size: 15px;
}
.tab-control-item {
	flex: 1;
}
.active {
	color: var(--color-high-text);
}
.active span {
	padding: 5px;
	border-bottom: 3px solid var(--color-tint);
}
</style>