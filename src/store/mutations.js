import {
  ADD_COUNTER,
  ADD_TO_CART
} from './matations-types'

export default {
  [ADD_COUNTER](state, paylode) {
    paylode.count++
  },
  [ADD_TO_CART](state, paylode) {
    //添加一个属性，默认为true
    paylode.checked = true
    state.cartList.push(paylode)
  }
}
