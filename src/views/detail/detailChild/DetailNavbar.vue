<template>
  <div>
    <nav-bar>
      <div
        slot="left"
        class="arrows"
        @click="arrowsClick"
      >
        <img
          src="~assets/img/common/back.svg"
          alt=""
        />
      </div>
      <div
        slot="center"
        class="titleNav"
      >
        <div
          v-for="(item, index) in titles"
          :key="item"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="btnClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavbar",
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {
    arrowsClick() {
      this.$router.back();
    },
    btnClick(index) {
      this.currentIndex = index;
      this.$emit("btnClick", index);
    },
  },
};
</script>

<style>
.arrows {
  display: flex;
  width: 100%;
  height: 100%;
}
.arrows img {
  margin-top: 10px;
  margin-left: 10px;
  width: 20px;
  height: 25px;
}
.titleNav {
  display: flex;
  padding: 0 20px;
}
.title-item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
}
</style>