<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isShowTabContro"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="ContentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperLoad="isLoadOffsetTop"
      ></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showCode"></goods-list>
    </scroll>
    <!-- 监听组件点击事件，使用.native -->
    <backTop @click.native="btnClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

//引入混入
import {itemListenerMinxin,backtopMinxin} from 'common/mixin'

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    // BackTop,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
  },
  data() {
    return {
      //请求数据存到里面
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      // isShowBackTop: false,
      tabControlOffsetTop: 0,
      isShowTabContro: false,
      saveY: 0,
    };
  },
  computed: {
    showCode() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  //混入
  mixins: [itemListenerMinxin,backtopMinxin],
  mounted() {

  },
  methods: {
    /**
     *  事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    /**
     *  网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },

    //返回顶部
   /*  btnClick() {
      this.$refs.scroll.scrollTo(0, 0, 500); //第三个参数是毫秒数
    }, */

    //拿到滚动的位置
    ContentScroll(position) {
      //判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;

      //决定tabControl是否吸顶(postition: fixed)
      this.isShowTabContro = -position.y > this.tabControlOffsetTop;
    },

    //加载更多
    loadMore() {
      //监听图片什么时候加载完
      this.getHomeGoods(this.currentType);

      //刷新
      this.$refs.scroll.scroll.refresh();
    },

    //监听tabControl距离顶部的距离
    isLoadOffsetTop() {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
  activated() {
    //回到首页把记录的值给重新设置
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    //在重新刷新
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //离开首页记录当前的Y值
    this.saveY = this.$refs.scroll.getScrollY();

    //2.取消全局事件的监听
    this.$bus.$off("ItemImageLoad", this.itemImgListener)
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /*  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
}

.tab-control {
  position: relative;
  z-index: 10;

}

.content {
  overflow: hidden;
  position: absolute;
  /* top: 44px; */
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>