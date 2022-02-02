<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" justify="center" align="center">
          <v-tabs color="#f48fb1e1" background-color="antiquewhite">
            <v-tab>service one</v-tab>
                  <v-tab-item>
                    <v-row>
                      <v-col cols="6">
                        <h2 class="pa-3">Makeup Artists</h2>
                        <h4 class="pa-1">in case you are looking for a professional makeup artist<span> "For You"</span> have many experts that can help you!</h4>
                    </v-col>
                    <v-col>
                      <v-img src="https://i.pinimg.com/736x/60/a6/f6/60a6f6dd1774fb156fb25cc450ea0161.jpg" max-width="450"></v-img>
                    </v-col>
                    </v-row>
                  </v-tab-item>
            <v-tab>service Two</v-tab>
          <v-tab-item>
                    <v-row>
                      <v-col cols="6">
                        <h2 class="pa-3">Fashionista</h2>
                        <h4 class="pa-1">You wanna look stylish and modern?</h4>
                        <p>well,we have plenty ways that can help you just contact us for more details</p>
                    </v-col>
                    <v-col>
                      <v-img src="https://i.pinimg.com/564x/24/66/d2/2466d286b2bc870a0879d2643ac48b84.jpg" max-width="450"></v-img>
                    </v-col>
                    </v-row>
                  </v-tab-item>
            <v-tab>service Three</v-tab>
             <v-tab-item>
                    <v-row>
                      <v-col cols="6">
                        <h2 class="pa-3">Hair Dresser</h2>
                        <h4 class="pa-1">You want your hair to look good?</h4>
                        <p><span>"For You"</span> always your best choice for good looking, so if you are interesred our hair dressers can always help you! </p>
                    </v-col>
                    <v-col>
                      <v-img src="https://i.pinimg.com/736x/71/6c/8b/716c8b76486c882ee113c67300c72180.jpg" max-width="450" ></v-img>
                    </v-col>
                    </v-row>
                  </v-tab-item>
                  <v-spacer></v-spacer>
          </v-tabs>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@300&display=swap');
div{
  background-color: antiquewhite;
    font-family: BioRhyme;
}
span{
  color: #f48fb1e1;
}
</style>
