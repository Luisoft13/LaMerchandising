<template>
  <div>
    <Header />
    <v-app class="content_app">
      <div class="content_portada">
        <div class="content_portada__title">
          <h1 class="content_portada__title_h1">Regalos Personalizados</h1>
        </div>
        <v-img
          :src="require('@/images/ProductSection/img62.gif')"
          class="content_portada__img"
          height="300px"
          max-width="500px"
        >
        </v-img>
      </div>
      <v-container>
        <div class="content_presentation">
          <span class="content_presentation__text">
            Personaliza tu box para una sorpresa espectacular. Creemos juntos un
            regalo especial, armalo con tus productos favoritos, útiles de
            escritorio, libros, ropa, calzados, vinos, etc. Además contamos con
            la edición limitada del artista plástico José Carlos Tassara C.
          </span>
        </div>
      </v-container>
      <div class="text-center content_products_inicio">
        <ProductList
          :products="listProductsRegalos"
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
import { listProductsRegalos } from "@/constants/listProductsRegalos.js";
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
      listProductsRegalos: [],
      product: null,
    };
  },
  metaInfo() {
    return {
      title: "La Merchandising",
      titleTemplate: `%s | Regalos`,
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
    this.listProductsRegalos = listProductsRegalos;
  },
  methods: {
    handleShowModal(product) {
      this.product = product;
      this.showModal = true;
    },
  },
};
</script>
<style lang="scss">
.v-application--wrap {
  min-height: 100% !important;
}
.v-dialog {
  max-height: 95% !important;
  overflow-y: hidden !important;
}
</style>
<style lang="scss" scoped>
.content_app_bar {
  height: 100%;
  background-color: rgb(0, 103, 127) !important;
}
.content_app {
  min-height: 100% !important;
  background: #f3f3f3;
  margin-top: 110px;
  margin-bottom: 50px;
  @media screen and (max-width: 625px) {
    margin-top: 0px;
  }
}
.content_card {
  height: auto !important;
}
.content_products_inicio {
  padding-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}
.title_images {
  justify-content: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  color: #444;
}
.subtitle_images {
  color: #9d2560;
}
.subtitle_images_modal {
  color: #9d2560;
  padding: 4px;
}
.content_app_bar_title {
  height: 100%;
  color: white;
  font-size: 25px;
  @media screen and (max-width: 625px) {
    margin-left: 10px;
    font-size: 20px;
  }
}
.content_title_and_subtitle {
  flex-direction: column;
  height: 125px;
  justify-content: flex-end;
}
.content_images {
  height: auto;
}
.content_img_modal {
  height: 350px;
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
    font-size: 50px;
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
.content_presentation {
  margin-top: 25px;
  margin-bottom: 8px;
  &__text {
    font-size: 24px !important;
  }
  @media screen and (max-width: 625px) {
    margin-top: 2px;
    &__text {
      font-size: 16px !important;
    }
  }
}
</style>
