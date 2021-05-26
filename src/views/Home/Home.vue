<template>
	<div id="home">
		<navtab class="home-nav">
			<template #center>
				<div>购物街</div>
			</template>
		</navtab>
		<scroll
			class="content"
			ref="content"
			:probeType="3"
			:pullUpLoad="true"
			@scroll="bTopscroll"
			@pullingUp="loadmore"
		>
			<home-swiper :banners="banners"></home-swiper>
			<recommend-view :recommends="recommends"></recommend-view>
			<fashion-view />
			<tab-control
				:titles="['流行', '新款', '精选']"
				class="tab-control"
				@tabcli="tabcli"
			></tab-control>
			<goodslist :goods="goods[typecount].list" />
		</scroll>
		<back-top @click="backtopcli" v-show="isshowBacktop"></back-top>
	</div>
</template>

<script>
import navtab from "components/common/navtab/navtab";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FashionView from "./childComps/FashionView";
import TabControl from "components/content/tabControl/TabControl";
import Goodslist from "components/content/Goods/Goodslist";
import Scroll from "components/common/scroll/scroll";
import BackTop from "components/content/Backtop/BackTop";
import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
	name: "Home",
	data() {
		return {
			banners: [],
			recommends: [],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] },
			},
			typecount: "pop",
			isshowBacktop: false,
		};
	},
	components: {
		navtab,
		HomeSwiper,
		RecommendView,
		FashionView,
		TabControl,
		Goodslist,
		Scroll,
		BackTop,
	},
	created() {
		this.getHomeMultidata();
		this.getHomeGoods("pop");
		this.getHomeGoods("new");
		this.getHomeGoods("sell");
	},
	methods: {
		tabcli(index) {
			switch (index) {
				case 0:
					this.typecount = "pop";
					break;
				case 1:
					this.typecount = "new";
					break;
				case 2:
					this.typecount = "sell";
					break;
			}
		},
		//网络封装方法
		getHomeMultidata() {
			getHomeMultidata().then((res) => {
				this.banners = res.data.banner.list;
				this.recommends = res.data.recommend.list;
			});
		},
		getHomeGoods(type) {
			let page = this.goods[type].page + 1;
			getHomeGoods(type, page).then((res) => {
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page += 1;
			});
		},
		backtopcli() {
			this.$refs.content.scrollTo(0, 0);
		},
		bTopscroll(position) {
			this.isshowBacktop = Math.abs(position.y) > 1000;
		},
		loadmore() {
			this.getHomeGoods(this.typecount);
			this.$refs.content.finishPullUp();
		},
	},
};
</script>

<style scoped>
#home {
	height: 1500px;
	position: relative;
}
.home-nav {
	background-color: var(--color-tint);
	color: #fff;
	position: sticky;
	top: 0;
	z-index: 999;
}
.tab-control {
	position: sticky;
	top: 44px;
	z-index: 99;
	background-color: #fff;
}
.content {
	position: absolute;
	top: 44px;
	left: 0;
	right: 0;
	bottom: 49px;
	overflow: hidden;
}
</style> 	