<template>
  <tabbar>
    <tab-bar-item path="/Home" activeColor="blue">
      <template #item-icon><img src="~assets/img/tabbar/home.png" /></template>
      <template #item-icon-active
        ><img src="~assets/img/tabbar/home-active.png"
      /></template>
      <template #item-text><div>首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/Classify" activeColor="yellow">
      <template #item-icon
        ><img src="~assets/img/tabbar/classify.png"
      /></template>
      <template #item-icon-active
        ><img src="~assets/img/tabbar/classify-active.png"
      /></template>
      <template #item-text><div>分类</div></template>
    </tab-bar-item>
    <tab-bar-item path="Shopping">
      <template #item-icon
        ><img src="~assets/img/tabbar/shopping.png"
      /></template>
      <template #item-icon-active
        ><img src="~assets/img/tabbar/shopping-active.png"
      /></template>
      <template #item-text><div>购物车</div></template>
    </tab-bar-item>
    <tab-bar-item path="Profile" activeColor="red">
      <template #item-icon><img src="~assets/img/tabbar/my.png" /></template>
      <template #item-icon-active
        ><img src="~assets/img/tabbar/my-active.png"
      /></template>
      <template #item-text><div>我的</div></template>
    </tab-bar-item>
  </tabbar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabbar",
  components: {
    tabbar: TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>