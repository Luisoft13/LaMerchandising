<template>
  <div>
    <Header />
    <v-app class="content_app">
      <div class="content_portada">
        <v-carousel :show-arrows="true" cycle hide-delimiters height="auto">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            reverse-transition="fade-transition"
          >
          <div :style="`background-color: ${backgroundColor(item)};`">
            <div class="content_portada__container">
              <div class="content_portada__title">
                <h1 class="content_portada__title_h1">{{item.title}}</h1>
              </div>
              <v-img
                :src="item.imgSrc"
                class="content_portada__img mx-auto"
                height="300px"
                max-width="500px"
              />
            </div>
          </div>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="text-center content_products_inicio">
        <ProductList
          :products="listOtrosProductos"
          @click="handleShowModal($event)"
        />
      </div>
      <ProductModal :product="product" v-model="showModal" />
    </v-app>
    <Footer />
    <Whatsapp />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { allListProducts } from "@/constants/allListProducts.js";
import Whatsapp from "@/components/Whatsapp.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  components: {
    Header,
    Footer,
    Whatsapp,
    ProductList,
    ProductModal: () => import("@/components/ProductModal.vue"),
  },
  data() {
    return {
      showModal: false,
      listOtrosProductos: [],
      product: null,
      items: [
        {
          id: 1,
          title: "Productos",
          imgSrc: require("@/images/ProductSection/img2.png"),
        },
        {
          id: 2,
          title: "Textiles",
          imgSrc: require("@/images/ProductSection/img1.png"),
        },
        {
          id: 3,
          title: "Tecnología",
          imgSrc: require("@/images/ProductSection/img42.png"),
        },
        {
          id: 4,
          title: "Bar, dulce y despensa",
          imgSrc: require("@/images/ProductSection/img3.png"),
        },
        {
          id: 5,
          title: "Regalos personalizados",
          imgSrc: require("@/images/ProductSection/img62.gif"),
        },
        {
          id: 6,
          title: "Seguridad e higiene",
          imgSrc: require("@/images/ProductSection/img52.png"),
        },
      ],
    };
  },
  metaInfo() {
    return {
      title: "La Merchandising",
      titleTemplate: `%s | Productos`,
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "./logo.png",
        },
      ],
    };
  },
  created() {
    this.listOtrosProductos = allListProducts;
  },
  methods: {
    handleShowModal(product) {
      this.product = product;
      this.showModal = true;
    },
    backgroundColor(item) {
      if (item.id === 1) return 'rgb(255, 71, 71)'
      if (item.id === 2) return 'rgb(92, 184, 0)'
      if (item.id === 3) return 'rgb(255, 141, 8)'
      if (item.id === 4) return 'rgb(248, 140, 147)'
      if (item.id === 5) return 'rgb(0, 106, 98)'
      if (item.id === 6) return 'rgb(120, 104, 222)'
      return 'rgb(0, 103, 127)'
    }
  },
};
</script>
<style lang="scss" scoped>
.content_app {
  min-height: 100% !important;
  background: #f3f3f3;
  margin-top: 110px;
  margin-bottom: 50px;
  @media screen and (max-width: 625px) {
    margin-top: 0px;
  }
}
.content_products_inicio {
  padding-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}
.content_portada {
  display: flex;
  justify-content: space-around;
  &__container {
    border-left: 4px solid white;
    border-right: 4px solid white;
    margin-right: 4px;
    margin-left: 4px;
  }
  &__title {
    margin: auto;
    color: white;
    text-decoration: underline;
  }
  &__title_h1 {
    font-size: 60px;
  }
  @media screen and (max-width: 625px) {
    &__title {
      font-size: 30px !important;
    }
    &__img {
      display: none;
    }
    &__title_h1 {
      font-size: 30px;
      margin-top: 10px;
    }
  }
}
</style>
