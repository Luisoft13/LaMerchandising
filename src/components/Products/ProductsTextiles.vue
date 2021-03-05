<template>
  <v-app class="content_app">
    <div class="text-center content_products_inicio">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-row>
            <v-col
              v-for="card in listProductTextiles"
              :key="card.code"
              :cols="card.flex"
              sm="3"
              v-bind="attrs"
              v-on="on"
              align-self="end"
              @click="showModal(card)"
            >
              <v-card class="content_card">
                <v-img :src="card.src" class="content_images">
                </v-img>
                <div class="d-flex content_title_and_subtitle">
                  <h3
                    height="50px"
                    class="title_images"
                    v-text="card.name"
                  >
                  </h3>
                  <h4
                    class="subtitle_images"
                    height="15px"
                    v-text="card.code"
                  >
                  </h4>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </template>

        <v-card>
          <v-app-bar flat>
              <v-spacer></v-spacer>
              <v-icon
                @click="dialog = false"
              >
                mdi-close
              </v-icon>
          </v-app-bar>
          <v-card-text>
            <v-img :src="imageModal"> </v-img>
            <v-card-title class="justify-center">{{imageCode}}</v-card-title>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>
<script>
import { listProductsTextiles } from "@/constants/listProductsTextiles.js"
export default {
  data() {
    return {
      dialog: false,
      imageModal: '',
      imageCode: '',
      listProductTextiles: []
    };
  },
  created() {
    this.listProductTextiles = listProductsTextiles
  },
  methods: {
    showModal(card) {
      this.imageModal = card.src,
      this.imageCode = card.code,
      this.dialog = true
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
.content_app {
  min-height: 100% !important;
  background: #f3f3f3;
  margin-top: 30px;
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
  color: #9d2560
}
.content_title_and_subtitle {
  flex-direction: column;
  height: 125px;;
  justify-content: flex-end;
}
</style>
