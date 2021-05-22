<template>
  <div>
    <div class="info-title">
      <p>用户评价</p>
      <p>更多</p>
    </div>
    <div v-if="commentInfo.user" class="info-content" >
      <div class="info-content-title">
        <img :src="commentInfo.user.avatar" alt="">
        <h4>{{commentInfo.user.uname}}</h4>
      </div>
      <div class="info-content-text"> 
        <p>{{commentInfo.content}}</p>
        <div class="info-other">
          <span>{{commentInfo.created | showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
      </div>
      <div class="info-content-images">
        <img v-for="(item,index) in commentInfo.images" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>

import {formatDate} from 'common/utils'

export default {
  name: "DetailCommentInfo",
  components: {
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {};
  },
  filters: {
    showDate(value) {
      //1.将时间戳转成Date对象
      const date = new Date(value * 1000)

      //2.将data进行格式化
      return formatDate(date, 'yyyy/MM/dd hh:mm:ss')
    }
  },
  methods: {},
};
</script>

<style  scoped>
.info-title {
  position: relative;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding: 20px 10px;
  margin-left: 15px;
  margin-right: 15px;
  color: #333;
}
.info-content {
  padding: 10px;
}
.info-content-title {
  display: flex;
}
.info-content-title img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.info-content-title h4 {
  font-size: 16px;
  line-height: 50px;
  margin-left: 10px;
}
.info-content-text {
  margin-top: 10px;
}
.info-content-text>p {
  font-size: 14px;
  color: #333;
}
.info-content-images {
  margin-top: 10px;
  width: 100px;
  height: 100px;
  display: flex;
}
.info-content-images img {
  width: 100%;
  height: 100%;
  
}
</style>