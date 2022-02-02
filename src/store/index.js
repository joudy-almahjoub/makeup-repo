import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    StoreCart: [],
    products: [
      {
        id: 1,
        name: 'MAC RED LIPSTICK',
        image:
          'https://i.pinimg.com/564x/9e/7a/b1/9e7ab1a849f21c9a545ac39b3084355c.jpg',
        price: 340
      },
      {
        id: 2,
        name: 'maybelline Maskara',
        image:
          'https://i.pinimg.com/564x/38/b7/d8/38b7d8020c36cf2c0cd6661ceffb8c3a.jpg',
        price: 240
      },
      {
        id: 3,
        name: 'NYX MATTE BRONZER',
        image:
          'https://i.pinimg.com/564x/e8/a2/71/e8a27119239192142100eff43f8dd0c3.jpg',
        price: 216
      },
      {
        id: 4,
        name: 'NYX BLUSHER',
        image:
          'https://i.pinimg.com/564x/bd/b0/3d/bdb03d7284c70a80102a018536333b2e.jpg',
        price: 440
      },
      {
        id: 5,
        name: 'MAC LIPSTICK',
        image:
          'https://i.pinimg.com/564x/02/9f/d3/029fd3bd1696bbc2e13a0881b34985bb.jpg',
        price: 103
      },
      {
        id: 6,
        name: 'ELF FOUNDATION',
        image:
          'https://i.pinimg.com/564x/2a/d8/b4/2ad8b4eccb30a416e8f318b2398e7e29.jpg',
        price: 225
      }]
  },
  mutations: {
    ADD_Item (state, id) {
      state.StoreCart.push(id)
    },

    REMOVE_Item (state, index) {
      state.StoreCart.splice(index, 1)
    }
  },
  actions: {
    addItem (context, id) {
      context.commit('ADD_Item', id)
    },

    removeItem (context, index) {
      context.commit('REMOVE_Item', index)
    }
  },
  modules: {
  },
  getters: {
    products: (state) => state.products,
    StoreCart: (state) => state.StoreCart
  }
})
