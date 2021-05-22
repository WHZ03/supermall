<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <head-portrait />
    <bottom-portrait />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HeadPortrait from "./childProfile/HeadPortrait";
import BottomPortrait from "./childProfile/BottomPortrait.vue";

export default {
  components: {
    NavBar,
    HeadPortrait,
    BottomPortrait,
  },
  name: "Profile",
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>