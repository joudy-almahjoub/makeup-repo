<template>
<div>
<cartbtn/>
    <v-container>
              <shopp
              v-for="product  in  products"
                :key="product.id"
                :id="product.id"
                :name="product.name"
                :image="product.image"
                :price="product.price"
              />

    </v-container>
</div>
</template>
<script>
import Cartbtn from '../components/cartbtn.vue'
import Shopp from '../components/Shopp.vue'
// import Shopp from '../components/Shopp.vue'
export default {
  name: 'Shop',

  components: {
    Shopp,
    Cartbtn
    // Shopp,
  },
  computed: {
    products () {
      return this.$store.getters.products
    }
  }
}
</script>
<style scoped>
div{
    background-color: antiquewhite;
}
</style>
