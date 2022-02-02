<template>

    <div>
       <hero/>
      <gallery/>
      <div id="div1"><contact/></div>
    </div>

</template>

<script>
import Hero from '../components/Hero.vue'
import Gallery from '../components/Gallery.vue'
import Contact from '../components/Contact.vue'

export default {
  name: 'Home',

  components: {
    Hero,
    Gallery,
    Contact
  }
}
</script>
<style scoped>
#div1{
  background-color: #f48fb18a;
}
</style>
