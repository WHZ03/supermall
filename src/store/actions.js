import {
  ADD_COUNTER,
  ADD_TO_CART
} from './matations-types'

export default {
  addCart(context, paylode) { //context 格式上下文
    return new Promise((res, rej) => {
      //paylode新添加的商品
      /* let oldpayduct = null //先定义一个空
      for (let item of state.cartList) { //遍历cartlist里面的对象
        if (item.iid == paylode.iid) { //判断里面的对象里的id是否等于新添加对象的id一样
          oldpayduct = item
        }
      } */

      let oldpayduct = context.state.cartList.find(item =>
        item.iid == paylode.iid
      )
      //2.判断oldpaylode 里面是否有东西，如果有就count+1
      if (oldpayduct) {
        // oldpayduct.count += 1
        context.commit(ADD_COUNTER, oldpayduct)
        res('添加的商品加一')
      } else {
        //首先oldpayduct是没有内容,我们就添加一个内容，在添加一个属性
        paylode.count = 1
        // state.cartList.push(paylode)
        context.commit(ADD_TO_CART, paylode)
        res('新添加的商品')
      }
    })
  }
}
