<template>
    <div>
        <Header/>
        <Inicio/>
        <ProductSection/>
        <ProductTextiles/>
        <Welcome/>
        <Footer/>
        <Whatsapp/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Inicio from '@/components/Inicio';
import ProductSection from '@/components/ProductSection.vue'
import ProductTextiles from '@/components/Products/ProductsTextiles.vue'
import Welcome from '@/components/Welcome.vue'
import Footer from '@/components/Footer.vue'
import Whatsapp from '@/components/Whatsapp.vue'


export default {
  name: 'App',

  components: {
    Header,
    Inicio,
    ProductSection,
    ProductTextiles,
    Welcome,
    Footer,
    Whatsapp
  },
  metaInfo () {
        return {
            title: "La Merchandising",
            titleTemplate: `%s | Inicio`,
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: "./logo.png"
                }
            ]
        }
    },
  data: () => ({
      drawer: false,
      group: null,
    }),
};
</script>