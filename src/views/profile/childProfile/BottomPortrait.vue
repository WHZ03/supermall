<template>
  <div>
    <div class="top">
      <div>
        <img
          src="~assets/img/profile/message.svg"
          alt=""
        >
        <span>我的消息</span>
      </div>
      <div>
        <img
          src="~assets/img/profile/pointer.svg"
          alt=""
        >
        <span>积分商城</span>
      </div>
      <div>
        <img
          src="~assets/img/profile/vip.svg"
          alt=""
        >
        <span class="span03">会员卡</span>
      </div>
    </div>
    <div class="bottom">
      <div>
        <img
          src="~assets/img/profile/cart.svg"
          alt=""
        >
        <span>我的购物车</span>
      </div>
      <div>
        <img
          src="~assets/img/profile/shopping.svg"
          alt=""
        >
        <span class="span03">下载购物出APP</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomPortrait",
  components: {},
  directives: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.top {
  padding: 0 20px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 10px solid rgba(0, 0, 0, 0.05);
}
.top div,
.bottom div {
  display: flex;
  align-items: center;
}
.top img,
.bottom img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.top span,
.bottom span {
  flex: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px 0;
}
.top .span03,
.bottom .span03 {
  border: 0;
}
.bottom {
  padding: 0 20px;
}
</style>