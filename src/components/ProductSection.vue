<template>
  <div class="content_product_section">
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
              height="300px"
            >
            </v-img>
            <v-card-title class="content_images_title" v-text="card.title"></v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#00677f" dark>
                <router-link class="content_images_btn" :to="card.to">Ver productos</router-link>
                <v-icon color="white">mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("@/images/ProductSection/img1.png"),
          title: 'Productos textiles',
          to: "textiles",
          flex:12,
        },
        {
          id: 2,
          src: require("@/images/ProductSection/img2.png"),
          title: 'Otros Productos',
          to: "otros-productos",
          flex: 12,
        },
        {
          id: 3,
          src: require("@/images/ProductSection/img3.png"),
          title: 'Dulces y Despensa Bar',
          to: "dulces-despensa-bar",
          flex: 12,
        },
        {
          id: 4,
          src: require("@/images/ProductSection/img4.png"),
          title: 'Tecnología',
          to: "tecnologia",
          flex: 12,
        },
        {
          id: 5,
          src: require("@/images/ProductSection/img5.png"),
          title: 'Seguridad e higiene',
          to: "seguridad-higiene",
          flex: 12,
        },
        {
          id: 5,
          src: require("@/images/ProductSection/img5.png"),
          title: 'Regalos',
          to: "regalos",
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
}
.content_images_btn {
  color: white !important;
}
</style>