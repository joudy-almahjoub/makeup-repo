<template>
  <div class="wrap">
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="#F48FB1"
            dark
            v-bind="attrs"
            v-on="on"
          > <v-icon left>
                 mdi-cart-check
               </v-icon>
            {{cartCount }} your cart
          </v-btn>
        </template>
        <v-card
        v-for="(item, index) in StoreCart" :key="index"
        >
         <v-img
                        :src="item.image"
                        height="300px"
                      ></v-img>
          <v-card-title class="text-h5 grey lighten-2">
           {{ item.name }}
          </v-card-title>
          <v-card-text>
          {{ '$' + item.price }}
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red"
              text
              @click="removeItem(index)"
            >
              remove
            </v-btn>
          </v-card-actions>
        </v-card>
            <v-btn>${{calcSum}}</v-btn>
          <v-btn
           color="#F48FB1"
            @click="dialog = false"
          >
            Close
          </v-btn>
      </v-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false
  }),
  computed: {
    StoreCart () {
      return this.$store.getters.StoreCart.map(cartitems => {
        return this.$store.getters.products.find(itemForSale => {
          return cartitems === itemForSale.id
        })
      })
    },
    cartCount () {
      return this.StoreCart.length
    },
    cart () {
      return this.$store.getters.StoreCart
    },
    calcSum () {
      return this.StoreCart.reduce((current, next) =>
        current + next.price, 0)
    }
  },
  methods: {
    removeItem (index) {
      this.$store.dispatch('removeItem', index)
    }
  }
}
</script>
<style scoped>
.wrap{
  position:fixed;
right: 0;
}
@media only screen and (max-width: 600px) {
 .wrap{
    position: sticky;
  }
}
</style>
