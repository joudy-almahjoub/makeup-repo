<template>
    <div>
      <v-container>
          <v-row>
              <v-col>
                  <v-card
                    class="mx-auto"
                    max-width="344"
                    id="card"
                  >
                    <v-img
                      :src="image"
                      height="300px"
                      id="img"
                    ></v-img>
                    <v-card-title>
                      {{name}}
                    </v-card-title>
                    <v-card-subtitle>
                   price:  {{ "$" + price }}
                    </v-card-subtitle>
                    <v-card-actions>
                      <v-btn
                      id="btn"
                        text
                        @click=" addItem(id)"
                      >
                       <v-icon left>
                 mdi-cart-arrow-down
               </v-icon>
                        Add to cart
                      </v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
    </div>
</template>
<script>

export default {
  props: ['id', 'name', 'image', 'price'],

  components: {
  },
  methods: {
    addItem (id) {
      this.$store.dispatch('addItem', id)
    }
  }
}
</script>
<style scoped>
#card{
  background-color: #f48fb18a;
}
#btn{
  background-color: antiquewhite;
  color: black;
  border-radius: 300px;
}
#img{
    border-bottom-left-radius:50px ;
  border-top-right-radius:50px ;
  overflow: hidden;
}

</style>
