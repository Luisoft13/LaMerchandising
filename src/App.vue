<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
//import Header from '@/components/Header';
//import Inicio from '@/components/Inicio';
//import ProductSection from '@/components/ProductSection.vue'
//import ProductTextiles from '@/components/Products/ProductsTextiles.vue'
//import Welcome from '@/components/Welcome.vue'
//import Footer from '@/components/Footer.vue'

export default {
  name: 'App',

  /*components: {
    Header,
    Inicio,
    ProductSection,
    ProductTextiles,
    Welcome,
    Footer
  },*/

  data: () => ({
      drawer: false,
      group: null,
    }),
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
