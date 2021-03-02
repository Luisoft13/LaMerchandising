<template>
<div>
    <Header/>
    <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },

  data: () => ({
      drawer: false,
      group: null,
    }),
};
</script>
<style>
.content_fondo_image {
    background-image: url("../images/background.png");
}
</style>
