<template>
  <v-app>
    <Header />
    <div class="content_app">
      <div class="content_portada">
        <v-carousel :show-arrows="true" cycle hide-delimiters height="auto">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            reverse-transition="fade-transition"
          >
            <v-img :src="item.imgSrc"></v-img>
            <!--<div :style="`background-color: ${backgroundColor(item)};`">
              <div class="content_portada__container d-flex py-2">
              <v-img
                v-if="!$vuetify.breakpoint.smAndDown"
                :src="item.imgSrc"
                class="content_portada__img mx-auto"
                height="400px"
                max-width="500px"
              />
              <div class="content_portada__title px-8">
                <div class="content_portada__title_h1 mb-0" style="border-top: 2px solid white; border-bottom:2px solid white">{{item.title}}</div>
              </div>
            </div>
          </div>-->
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
    </div>
    <Footer />
    <Whatsapp />
  </v-app>
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
          imgSrc: require("@/images/ProductSection/productos-portada.webp"),
        },
        {
          id: 2,
          title: "Textiles",
          imgSrc: require("@/images/ProductSection/textiles-portada.webp"),
        },
        {
          id: 3,
          title: "Tecnología",
          imgSrc: require("@/images/ProductSection/tecnologia-portada.webp"),
        },
        {
          id: 4,
          title: "Bar, dulce y despensa",
          imgSrc: require("@/images/ProductSection/despensabar-portada.webp"),
        },
        {
          id: 5,
          title: "Regalos personalizados",
          imgSrc: require("@/images/ProductSection/regalos-portada.webp"),
        },
        {
          id: 6,
          title: "Seguridad e higiene",
          imgSrc: require("@/images/ProductSection/higiene-portada.webp"),
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
      if (item.id === 1) return "rgb(55, 198, 124)";
      if (item.id === 2) return "#FF08F8";
      if (item.id === 3) return "#F5EC17";
      if (item.id === 4) return "rgb(248, 140, 147)";
      if (item.id === 5) return "rgb(8, 38, 255)";
      if (item.id === 6) return "rgb(120, 104, 222)";
      return "rgb(0, 103, 127)";
    },
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
    display: grid;
    grid-template-columns: 60% 40%;
  }
  &__title {
    margin: auto;
    color: white;
  }
  &__title_h1 {
    font-size: 60px;
  }
  @media screen and (max-width: 960px) {
    &__title {
      padding-top: 16px;
      padding-bottom: 16px;
    }
    &__img {
      display: none;
    }
  }
  @media screen and (max-width: 625px) {
    &__title {
      font-size: 30px !important;
      padding-top: 16px;
      padding-bottom: 16px;
    }
    &__img {
      display: none;
    }
    &__title_h1 {
      font-size: 30px;
    }
  }
}
</style>
