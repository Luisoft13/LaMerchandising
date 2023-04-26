<template>
  <div>
    <Header />
    <v-app class="content_app">
      <div class="content_portada">
        <div class="content_portada__title">
          <h1 class="content_portada__title_h1">Productos</h1>
        </div>
        <v-img
          :src="require('@/images/ProductSection/img2.png')"
          class="content_portada__img"
          height="300px"
          max-width="500px"
        >
        </v-img>
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
import { listOtrosProductos } from "@/constants/listOtrosProductos.js";
import { listProductsDespensaBar } from "@/constants/listProductsDespensaBar.js";
import { listProductsRegalos } from "@/constants/listProductsRegalos.js";
import { listProductsSeguridadHigiene } from "@/constants/listProductsSeguridadHigiene.js";
import { listProductsTecnologia } from "@/constants/listProductsTecnologia.js";
import { listProductsTextiles } from "@/constants/listProductsTextiles.js";
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
    const products = [
      ...listOtrosProductos,
      ...listProductsDespensaBar,
      ...listProductsRegalos,
      ...listProductsSeguridadHigiene,
      ...listProductsTecnologia,
      ...listProductsTextiles,
    ];
    console.log('products', products)
    this.listOtrosProductos = products;
  },
  methods: {
    handleShowModal(product) {
      this.product = product;
      this.showModal = true;
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
  background-color: rgb(0, 103, 127);
  display: flex;
  justify-content: space-around;
  &__title {
    margin: auto;
    color: rgba(242, 38, 19, 1);
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
