import { debounce } from "./utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMinxin = {
  data() {
    return {
      itemImgListener: null,
      newrefresh: null
    }
  },
  mounted() {
    //3.监听图片加载完成
    this.newrefresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      this.newrefresh();
    }
    this.$bus.$on("ItemImageLoad", this.itemImgListener);
  }
}

export const backtopMinxin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    //返回顶部
    btnClick() {
      this.$refs.scroll.scrollTo(0,0,500)
    },
  },
}