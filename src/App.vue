<template>
  <div id="app">
    <main-tabbar />
    <!-- 排除详情页在外 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import MainTabbar from "components/content/MainTabbar";

export default {
  name: "App",
  components: {
    MainTabbar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
