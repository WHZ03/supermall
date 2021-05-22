<template>
  <div class="params-info" v-if="Object.keys(paramInfo).length !== 0">
    <table
      v-for="(table, index) in paramInfo.sizes"
      :key="index"
      class="info-size"
    >
      <tr v-for="(tr, inder) in table" :key="inder">
        <td v-for="(td, inded) in tr" :key="inded">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(set, index) in paramInfo.set" :key="index">
        <td class="info-key">{{ set.key }}</td>
        <td class="info-value">{{ set.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.images !== ''">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  components: {},
  directives: {},
  data() {
    return {};
  },
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.params-info {
  position: relative;
  z-index: 90;
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.params-info table {
  width: 100%;
  border-collapse: collapse;
}
.params-info table tr {
  height: 42px;
}

.params-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.info-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>