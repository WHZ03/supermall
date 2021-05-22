<template>
  <div class="cart-info">
    <div class="check-button">
      <!-- 监听组件的点击 必须加native -->
      <check-button :is-checked="product.checked" @click.native="Checked"/> 
    </div>
    <div class="cart-image">
      <img :src="product.Images" alt="商品图片">
    </div>
    <div class="cart-content">
      <div class="cart-title">{{product.title}}</div>
      <div class="cart-desc">{{product.desc}}</div>
      <div class="cart-content-center">
         <div class="cart-price">￥{{product.price}}</div>
         <div class="cart-count">x{{product.count}}</div>
      </div>
    </div>
  </div> 

</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';


export default {
  name: "CartListItem",
  data() {
    return {};
  },
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    Checked() {
      this.product.checked = !this.product.checked
    }
  },
  mounted() {},
};
</script>

<style scoped>
.cart-info {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.check-button {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-image img{
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
  margin-left: 5px;
}
.cart-content {
  width: 280px;
  margin-left: 10px;
}
.cart-title,.cart-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cart-content .cart-title {
  font-size: 16px;
  font-weight: 500;
}
.cart-content-center {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.cart-desc {
  font-size: 14px;
  margin-top: 15px;
}
.cart-price {
  color: #EB683A;
}
.cart-count {
  margin-right: 15px;
  font-weight: 500;
}
</style>
