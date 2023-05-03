<template>
  <v-container fluid>
      <h1 class="text-center content_title_products">Mis productos</h1>
      <v-row style="justify-content:center">
        <v-col
          v-for="card in items"
          :key="card.title"
          :cols="card.flex"
          sm="4"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="content_images"
              height="350"
            >
            </v-img>
            <div class="content_images_title pb-3 pt-3" v-text="card.title"></div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#00677f" dark>
                <router-link class="content_images_btn" to="productos">Ver en productos</router-link>
                <v-icon color="white">mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("@/images/ProductSection/img2.png"),
          title: 'Productos',
          to: "productos",
          flex: 12,
        },
        {
          id: 2,
          src: require("@/images/ProductSection/img1.png"),
          title: 'Productos textiles',
          to: "textiles",
          flex:12,
        },
        {
          id: 3,
          src: require("@/images/ProductSection/img4.png"),
          title: 'Tecnología',
          to: "tecnologia",
          flex: 12,
        },
        {
          id: 4,
          src: require("@/images/ProductSection/img5.png"),
          title: 'Seguridad e higiene',
          to: "seguridad-higiene",
          flex: 12,
        },
        {
          id: 5,
          src: require("@/images/ProductSection/img6.jpg"),
          title: 'Regalos personalizados',
          to: "regalos",
          flex: 12,
        },
        {
          id: 6,
          src: require("@/images/ProductSection/img3.png"),
          title: 'Dulces y Despensa Bar',
          to: "dulces-despensa-bar",
          flex: 12,
        },
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.content_product_section {
  padding-top: 30px;
  margin-left:30px;
  margin-right: 30px;
  margin-bottom: 30px;
}
.content_title_products {
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
}
.content_images {
  background-color:rgb(215, 215, 215);
}
.content_images_title {
  color:rgba(242, 38, 19, 1);
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom:15px;
  padding-top:15px
}
.content_images_btn {
  color: white !important;
}
</style>
