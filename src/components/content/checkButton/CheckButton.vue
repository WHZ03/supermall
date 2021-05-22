<template>
  <div class="check-button" :class="{isActive: isChecked}" >
      <img src="~assets/img/cart/tick.svg" alt="" >
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  data() {
    return {
    };
  },
  props: {
      isChecked: {
          type: Boolean,
          default: false
      }
  },
  methods: {
},
  mounted(){
},
};
</script>

<style scoped>
    .check-button{
        border:2px solid #aaa;
        border-radius: 50%;
    }
    .isActive{
        border-color: red;
        background-color: red;  
    }
</style>
