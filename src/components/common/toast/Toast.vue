<template>
  <div
    class="toast"
    v-show="isShow"
  >
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  components: {},
  directives: {},
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  /*  props: {
    message: {
      type: String,
      default: "",
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  }, */
  mounted() {},
  methods: {
    show(message = "你好", duration = 1500) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.75);
  padding: 8px 10px;
  color: #fff;
  z-index: 999;
}
</style>