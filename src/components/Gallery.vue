<template>
<div>
  <v-container>
      <v-row>
          <v-col cols="12">
              <h2 class="d-flex justify-center">Our Gallery</h2>
          </v-col>
      </v-row>
        <v-row>
          <v-col
            v-for="(item,n) in items"
            :key="n"
            class="d-flex child-flex"
            cols="4"
          >
          <v-hover v-slot="{hover}">
            <v-img
            id="img"
              :src="item.src"
              aspect-ratio="1"
              class="grey lighten-2"
              :class="{'scale': hover}"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-hover>
          </v-col>
        </v-row>
  </v-container>
</div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://i.pinimg.com/564x/61/8f/98/618f98ed36402ca9659bf12be4c9762f.jpg'
        },
        {
          src: 'https://i.pinimg.com/564x/7a/27/83/7a27836c38b9ed6da9891e4155fdc265.jpg'
        },
        {
          src: 'https://i.pinimg.com/736x/9e/e6/35/9ee63563fb62b0a8677ca0d31a45af62.jpg'
        },
        {
          src: 'https://i.pinimg.com/564x/e7/7b/aa/e77baad56a43c29c3e96a9e8186ca4a9.jpg'
        },
        {
          src: 'https://i.pinimg.com/736x/56/5a/87/565a870ef59793b59fdf4061684788ba.jpg'
        },
        {
          src: 'https://i.pinimg.com/736x/ad/28/b5/ad28b51a23387d33b4e43682c95317da.jpg'
        }
      ]
    }
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@300&display=swap');
#img{
  border-bottom-left-radius:50px ;
  border-top-right-radius:50px ;
}
h2{
  font-size: 30px;
  font-style:italic;
  color: #F48FB1;
  font-weight: 900;
  font-family: BioRhyme;

}
.scale{
  transform: scale(1.1);
  transition: transform 1s;
}
div{
  background-color:antiquewhite;
}
</style>
