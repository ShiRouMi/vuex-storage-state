import Vue from "vue"
import Vuex from "vuex"
import products from "./modules/products"
import cart from "./modules/cart"
// import createVuexStorageState from "vuex-storage-state"
import createVuexStorageState from "./plugin"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products,
    cart
  },
  plugins: [
    createVuexStorageState({
      name: "ooo-state"
    })
  ]
})

export default store
