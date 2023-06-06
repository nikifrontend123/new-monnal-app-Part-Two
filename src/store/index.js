import { createStore } from "vuex";
import purchases from '@/modules/purchases/store/purchase.js'
import storeManager from '@/modules/storeManager/store/storeManager.js'

export default createStore({
  state: {
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    purchases: purchases,
    storeManager: storeManager
  },
});
