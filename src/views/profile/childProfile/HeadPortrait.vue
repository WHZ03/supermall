<template>
  <div class="head-portrait">
    <div class="top">
      <img
        src="~assets/img/profile/avatar.svg"
        alt=""
        class="images"
      >
      <div class="login">
        <p>登录/注册</p>
        <p>暂无绑定手机号</p>
      </div>
      <div class="arrows_01">
        <img
          src="~assets/img/common/arrow-left.svg"
          alt=""
        >
      </div>
    </div>
    <div class="bottom">
      <div>
        <p><span>0.00</span>元</p>
        <p>我的余额</p>
      </div>
      <div>
        <p><span>0</span>个</p>
        <p>我的优惠</p>
      </div>
      <div>
        <p><span>0</span>分</p>
        <p>我的积分</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadPortrait",
  components: {},
  directives: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.top {
  height: 120px;
  background-color: var(--color-tint);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.head-portrait .images {
  width: 80px;
  height: 80px;
}
.head-portrait .login {
  flex: 1;
  color: #fff;
}
.login p:nth-child(1) {
  margin-left: 10px;
  font-size: 18px;
}
.login p:nth-child(2) {
  margin-top: 5px;
  margin-left: 7px;
  background: url(~assets/img/profile/phone.svg) no-repeat;
  background-size: 15px 15px;
  padding: 0 18px;
  font-size: 14px;
}
.arrows_01 img {
  width: 25px;
  height: 25px;
}

.bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  border-bottom: 10px solid rgba(0, 0, 0, 0.05);
}
.bottom div {
  flex: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}
.bottom div:nth-child(1),
.bottom div:nth-child(2) {
  border-right: 1px solid #ccc;
}
.bottom span {
  font-size: 20px;
  color: red;
  margin-bottom: 5px;
  font-weight: 600;
}
</style>