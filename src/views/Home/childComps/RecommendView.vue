<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 5px 0px;
  border-bottom: 10px solid #eee;
}
.recommend .recommend-item {
  flex: 1;
}
.recommend .recommend-item img {
  width: 80%;
  border-radiuls: 100%;
}
</style>