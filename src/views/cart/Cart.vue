<template>
  <div>
    <!-- 导航 -->
    <nav-bar class="cart-nav">
      <div
        div
        slot="center"
      >购物车({{carLength}})</div>
    </nav-bar>
    <!-- 内容 -->
    <cart-list />
    <!-- 底部 -->
    <cart-bottom-bar />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

import { mapGetters } from "vuex";
import CartList from "./childCart/CartList";
import CartBottomBar from "./childCart/CartBottomBar";
export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    // ...mapGetters 他有两中写法
    ...mapGetters(["carLength"]), //数组写法是一一对应的

    /*  ...mapGetters({
      length: 'carLength',
      list: 'cartList'
    }) */
  },
};
</script>

<style scoped>
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>