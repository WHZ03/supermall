<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkedClick"
      />
      <span>全选</span>
    </div>

    <div class="reduce">
      合计: {{totalPrice}}
    </div>

    <div
      class="calculate"
      @click="calculate"
    >
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: { CheckButton },
  directives: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      //判断是否是空，如果是空就不选中
      if (this.cartList.length === 0) return false;

      //使用filter过滤
      // return !this.cartList.filter((item) => !item.checked).length;

      //2.使用find查找是否没有被选中的    find 性能低一点
      return !this.cartList.find((item) => !item.checked);

      //3.普通的遍历
      /* for (let item of this.cartList) {
        if (!item.checked) {
          return false;
        }
      }

      return true; */
    },
  },
  mounted() {},
  methods: {
    checkedClick() {
      if (this.isSelectAll) {
        //如果全部选中的话，就全部不选中
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        // 如果某一个没有被选中，则全部都选中
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
    calculate() {
      if (!this.isSelectAll) {
        this.$toast.show("请选择购买的商品", 1500);
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #eee;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}

.check-button {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.reduce {
  margin-left: 10px;
  flex: 1;
}

.calculate {
  width: 100px;
  background-color: red;
  color: #fff;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
}
</style>