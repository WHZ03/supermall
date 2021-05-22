<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return {
          isLoad: false,
        };
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    //监听图片的大小
    imgLoad() {
      //定义一个变量，不重复获取每个轮播图的高度
      if (!this.isLoad) {
        this.$emit("swiperLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style>
</style>