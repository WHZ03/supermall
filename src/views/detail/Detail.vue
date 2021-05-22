<template>
  <div id="detail">
    <detail-navbar
      class="detail-nav"
      @btnClick="clickTop"
      ref="nav"
    />
    <!-- <div>{{$store.state.cartList.length}}</div> -->
    <scroll
      class="conten"
      ref="scroll"
      :probe-type='3'
      @scroll="srolls"
    >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      />
      <detail-params-info
        ref="params"
        :param-info="paramInfo"
      />
      <detail-comment-info
        ref="comment"
        :comment-info="commentInfo"
      />
      <goods-list
        ref="recommend"
        :goods="recommendInfo"
      />
    </scroll>
    <backTop
      @click.native="btnClick"
      v-show="isShowBackTop"
    />
    <detail-bottombar @btnClickCar="btnClickCar" />
    <!-- <p
      v-show="pop_up"
      @click="Success"
      class="success"
    >购物车加入成功</p> -->
    <!--     <toast
      :message="message"
      :isShow="pop_up"
    /> -->
  </div>
</template>

<script>
import DetailNavbar from "./detailChild/DetailNavbar";

import Scroll from "components/common/scroll/Scroll";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommend,
} from "network/detail";
import DetailSwiper from "./detailChild/DetailSwiper";
import DetailBaseInfo from "./detailChild/DetailBaseInfo";
import DetailShopInfo from "./detailChild/DetailShopInfo";

import DetailGoodsInfo from "./detailChild/DetailGoodsInfo";
import DetailParamsInfo from "./detailChild/DetailParamsInfo";
import DetailCommentInfo from "./detailChild/DetailCommentInfo";
import DetailBottombar from "./detailChild/DetailBottombar";
import GoodsList from "components/content/goods/GoodsList";

import { mapActions } from "vuex";

//混入
import { itemListenerMinxin, backtopMinxin } from "common/mixin";
//引入防抖
import { debounce } from "common/utils";

export default {
  name: "Detail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottombar,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: null,
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendInfo: [],
      themeTopYs: [],
      getthemeTopYs: null,
      currentIndex: 0,
      //弹窗
    };
  },
  created() {
    //1.保存存下来的iid
    this.iid = this.$route.query.iid;

    //2.请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      //3.获取顶部轮播图的信息
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      //4.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //5.获取商家店铺信息
      this.shop = new Shop(data.shopInfo);

      //6.获取商品详情图片信息
      this.detailInfo = data.detailInfo;

      //7.获取参数信息
      this.paramInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );

      //8.获取评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }

      //等对应的Dom渲染出来，最新的数据
      //单数图片没有加载完成(目前获取的offsetTop值不包含图片)
      //offsetTop的值不对时，都是因为图片没有加载出来
      /* this.$nextTick(() => {
          this.themeTopYs.push(0) 
          this.themeTopYs.push(this.$refs.params.$el.offsetTop);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
          console.log( this.themeTopYs);
      }); */
    });

    //3.获取推荐数据
    getRecommend().then((res) => {
      this.recommendInfo = res.data.list;
    });

    //4监听详情的图片加载完成
    //防抖
    this.getthemeTopYs = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //给this.themeTopYs后面添加一个最大值
      this.themeTopYs.push(Number.MAX_VALUE);
    }, 100);
  },
  methods: {
    ...mapActions(["addCart"]),
    imageLoad() {
      // this.$refs.scroll.refresh();
      this.newrefresh();
      //调用监听详情的图片加载
      this.getthemeTopYs();
    },
    clickTop(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    /* 
      0, 8948, 9852, 10179

      positionY 在  0 和 8948 之间 index 就等于0
      positionY 在  8948 和 9852 之间 index 就等于1
      positionY 在  9852 和 10179 之间 index 就等于2
      positionY 当  10179 和  最大值 之间 index 就等于3
    */
    srolls(position) {
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        /* if (
          positionY > this.themeTopYs[i] &&
          this.themeTopYs[i + 1] > positionY
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        } */
        if (
          (this.currentIndex !== i &&
            i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            this.themeTopYs[i + 1] > positionY) ||
          (i === length - 1 && positionY > this.themeTopYs[i])
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.isShowBackTop = positionY > 1000;
    },
    btnClickCar() {
      //获取购物车的信息
      const product = {};
      product.Images = this.topImages[0];
      product.title = this.goods.title;
      product.price = this.goods.realPrice;
      product.desc = this.goods.desc;
      product.iid = this.iid;
      //将商品添加到购物车中
      //dispatch是可以返回一个Promise对象    这里也可以映射使用mapActions
      /* this.$store.dispatch("addCart", product).then((res) => {
        console.log(res);
      }); */
      this.addCart(product).then((res) => {
        /*  this.pop_up = true;
        this.message = res;
        setTimeout(() => {
          this.pop_up = false;
        }, 1500); */
        this.$toast.show(res);
      });
    },
  },
  mixins: [itemListenerMinxin, backtopMinxin],
  mounted() {},
  destroyed() {
    this.$bus.$off("ItemImageLoad", this.itemImgListener);
  },
};
</script>

<style scoped>
#detail {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: #fff;
}

.conten {
  height: calc(100% - 44px);
}
.success {
  height: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: pink;
  font-size: 20px;
}
</style>
