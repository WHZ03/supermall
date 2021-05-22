module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视觉的宽度,对应的是我们设计稿的宽度
      viewportHeight: 667, //视窗的高度,对应的是我们设计稿的高度。(也可以不配置)
      unitprecision: 5, //指定`px`转换为视窗单位制的小数位数 (很多时候无法整除)
      viewportUnit: 'vw', //指定需要转换成的视窗单位,建议使用vw
      selectorBlackList: [], //指定不需要转换的类.后面在讲
      minPixelValue: 1, //小于或等于`1px` 不转换位视窗单位
      mediaQuery: false, //允许在媒体阐述中转换`px`
      // exclude: ['GoodsListItem.vue']
    }
  }
}
