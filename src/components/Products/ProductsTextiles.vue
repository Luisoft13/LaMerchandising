<template>
  <v-app class="content_app">
    <div class="text-center content_products_inicio">
      <ProductList
        :products="listProductTextiles"
        @click="handleShowModal($event)"
      />
    </div>
    <ProductModal :product="product" v-model="showModal" />
  </v-app>
</template>
<script>
import { listProductsTextiles } from "@/constants/listProductsTextiles.js"
import ProductList from "@/components/ProductList.vue";

export default {
  components: {
    ProductList,
    ProductModal: () => import("@/components/ProductModal.vue")
  },
  data() {
    return {
      showModal: false,
      listProductTextiles: []
    };
  },
  created() {
    this.listProductTextiles = listProductsTextiles
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
  background-color:rgb(0, 103, 127) !important;
}
.content_app {
  min-height: 100% !important;
  background: #f3f3f3;
  margin-top: 110px;
  margin-bottom: 50px;
  @media screen and (max-width: 625px){
    margin-top: 0px;
  }
}
.content_card {
  height: auto !important;
}
.content_products_inicio {
  padding-top: 30px;
  margin-left:30px;
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
  color:white;
  font-size:25px;
  @media screen and (max-width:625px) {
    margin-left: 10px;
    font-size:20px;
  }
}
.content_title_and_subtitle {
  flex-direction: column;
  height: 125px;;
  justify-content: flex-end;
}
.content_images {
  height: auto;
}
.content_img_modal {
  height: 350px;
}
.content_portada {
  background-color:rgb(0, 103, 127);
  display: flex;
  justify-content: space-around;
  &__title {
    margin: auto;
    color:rgba(242, 38, 19, 1);
  }
  &__title_h1 {
    font-size: 50px;
  }
  @media screen and (max-width:625px) {
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
