<template>
  <div>
    <v-footer padless
    dark
    >
    <v-col cols="12" justify="center" align="center">
      <span>Get connected with us on social networks!
            <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
      </span>
    </v-col>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>For You</strong>
      </v-col>
    </v-footer>
  </div>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@300&display=swap');
div{
  font-family: BioRhyme;
}
</style>
