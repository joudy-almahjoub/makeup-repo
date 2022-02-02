<template>
  <v-carousel :show-arrows="false"
   :cycle="cycle">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data () {
    return {
      cycle: true,
      items: [
        {
          src: 'https://i.pinimg.com/564x/e8/57/ef/e857efc408692caeea80b41151bf28f1.jpg'
        },
        {
          src: 'https://i.pinimg.com/564x/f7/32/c0/f732c0659fb1f99290ce918d0ad7d7e3.jpg'
        },
        {
          src: 'https://i.pinimg.com/736x/66/25/18/66251881d55b00ab90757b8cd7cef326.jpg'
        },
        {
          src: 'https://i.pinimg.com/736x/f8/ac/cc/f8accc7c030ddd36c3b5e5f0bfaa8a86.jpg'
        }
      ]
    }
  }
}
</script>
