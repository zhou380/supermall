<template>
	<div class="good-item">
		<img :src="list.show.img" title="" />
		<div class="good-item-text">
			<p>{{ list.title }}</p>
			<span class="good-item-price">{{ list.price }}</span>
			<span class="good-item-cfav">{{ list.cfav }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		list: Object,
		default() {
			return {};
		},
	},
};
</script>

<style>
.good-item {
	width: 48%;
	text-align: center;
}
.good-item img {
	width: 100%;
	border-radius: 5%;
}
.good-item-text p {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.good-item-price {
	color: var(--color-tint);
	padding-right: 5px;
}
.good-item-cfav {
	color: grey;
	position: relative;
}
.good-item-cfav::before {
	content: "";
	background: url("~assets/img/common/collect.svg") no-repeat;
	display: inline-block;
	width: 15px;
	height: 15px;
	background-size: 100%;
}
</style>