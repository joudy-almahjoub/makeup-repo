<template>
  <v-app>
    <v-app-bar
      app

      dark
    >
      <div class="d-flex align-center justify-center">
        <span id="logo">For you</span>
      </div>

      <v-spacer></v-spacer>
<div class="d-lg-flex d-xl-flex d-md-flex d-none">

        <v-btn
       text
      :to="{name: 'Home'}" >
           <v-icon left>
                 mdi-home-heart
               </v-icon>
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn
        rounded
        id="shopcolor"
         :to="{name: 'Shop'}"
        >
         <v-icon left>
                 mdi-cart-variant
               </v-icon>
          <span class="ma-2">shop now</span>
        </v-btn>
        <v-btn
        text
         :to="{name: 'About'}"
        >
           <v-icon left>
                 mdi-account-group
               </v-icon>
          <span class="mr-2">About Us</span>
        </v-btn>

</div>
      <div class="d-flex d-sm-flex d-lg-none d-md-none">
        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
                   <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
            >
             <v-btn text
              :to="{name: 'Home'}"
             >
                 <v-icon left>
                 mdi-home-heart
               </v-icon>
               Home</v-btn>
            </v-list-item>
            <v-list-item
            >
             <v-btn text color="#F48FB1"
               :to="{name: 'Shop'}"
             >
                <v-icon left>
                 mdi-cart-variant
               </v-icon>
               Shop Now</v-btn> <br>
            </v-list-item>
            <v-list-item
            >
             <v-btn text
              :to="{name: 'About'}"
             >
                <v-icon left>
                 mdi-account-group
               </v-icon>About Us</v-btn> <br>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
<footerr/>
  </v-app>
</template>

<script>
import Footerr from './components/Footerr.vue'
export default {
  name: 'App',
  components: { Footerr },

  data: () => ({
    //
  })
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@300&display=swap');
#logo{
  font-family:BioRhyme;
  font-size: 25px;
  font-style: italic;
  font-stretch: expanded;
}
#shopcolor{
  color: #F48FB1;
}
body{
  font-family: BioRhyme;
}
</style>
