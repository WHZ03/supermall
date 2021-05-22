<template>
  <div class="bottom-bar">
      <div class="left">
          <div class="bar-item bar-left">
          <i class="icon"></i>
          <p class="text">客服</p>
      </div>
      <div class="bar-item bar-left">
          <i class="icon icon02"></i>
          <p class="text">店铺</p>
      </div>
      <div class="bar-item bar-left">
          <i class="icon icon03"></i>
          <p class="text">收藏</p>
      </div>
      </div>
      <div class="right">
          <div @click="btnClickCar">加入购物车</div>
          <div>购买</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottombar',
  data() {
    return {
    };
  },
  methods: {
      btnClickCar() {
          this.$emit('btnClickCar');
      }
},
  mounted(){
},
};
</script>

<style scoped>
.bottom-bar {
    height: 49px;
    background-color: #fff;
    position: relative;
    bottom: 49px;

    display: flex;
    text-align: center;
}
.left {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bar-item {
    flex: 1;
}
.bar-item .icon{
    width: 22px;
    height: 20px;
    display: block;
    margin: 0 auto;
    background: url('~assets/img/detail/detail_bottom.png') no-repeat 0px -53px/cover;
}
.bar-item .icon02 {
    background: url('~assets/img/detail/detail_bottom.png') no-repeat 0px -99px/cover;
}
.bar-item .icon03 {
    background: url('~assets/img/detail/detail_bottom.png') no-repeat 0px 0px/cover;
}
.bar-item .text {
    margin-top: 8px;
}
.right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.right>div {
    flex: 1;
    width: 100%;
    height: 100%;
    line-height: 49px;
}
.right>div:nth-child(1) {
    background-color: #ffe817;
    font-weight: 500;
}
.right>div:nth-child(2) {
    color: #fff;
    background-color: #FF779A;
}
</style>
