<template>
  <div class="cart">
    <scroll
      class="content"
      ref="scroll"
    >
      <cart-list-item
        v-for="(item,index) in cartList"
        :key="index"
        :product="item"
      />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  data() {
    return {};
  },
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(["carLength", "cartList"]),
  },
  methods: {},
  mounted() {},
  activated() {
    //解决不能滚动的效果，当点击购物车就刷新一次
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.cart {
  height: calc(100vh - 44px - 49px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
