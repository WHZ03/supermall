<template>
  <div>
    <swiper class="dh-swiper">
      <swiper-item v-for="item in topImages" :key="item">
        <img :src="item" alt="" class="img" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.dh-swiper {
  height: 300px;
  overflow: hidden;
}
</style>