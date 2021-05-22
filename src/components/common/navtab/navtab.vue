<template>
  <div class="nav-tab">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navtab",
};
</script>

<style>
.nav-tab {
  height: 44px;
  line-height: 44px;
  display: flex;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
}
.left {
  width: 60px;
}
.center {
  flex: 1;
  text-align: center;
}
.right {
  width: 60px;
}
</style>