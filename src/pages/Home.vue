<template>
    <div>
        <Header/>
        <Inicio/>
        <ProductSection/>
        <ProductTextiles/>
        <Welcome/>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Inicio from '@/components/Inicio';
import ProductSection from '@/components/ProductSection.vue'
import ProductTextiles from '@/components/Products/ProductsTextiles.vue'
import Welcome from '@/components/Welcome.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Inicio,
    ProductSection,
    ProductTextiles,
    Welcome,
    Footer
  },
  data: () => ({
      drawer: false,
      group: null,
    }),
};
</script>