<template>
	<div class="wrapper" ref="wrap">
		<div class="context">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
	data() {
		return {
			bs: null,
		};
	},
	props: {
		probeType: {
			type: Number,
			default: 0,
		},
		pullUpLoad: {
			type: Boolean,
			default: false,
		},
	},
	mounted() {
		this.bs = new Bscroll(this.$refs.wrap, {
			click: true,
			probeType: this.probeType,
			pullUpLoad: this.pullUpLoad,
		});
		this.bs.on("scroll", (position) => {
			this.$emit("scroll", position);
		});
		this.bs.on("pullingUp", () => {
			this.$emit("pullingUp");
		});
	},
	methods: {
		scrollTo(x, y, time = 500) {
			this.bs.scrollTo(x, y, time);
		},
		finishPullUp() {
			this.bs.finishPullUp();
		},
	},
};
</script>

<style>
</style>