<template>
  <v-app class="content_app">
    <div class="text-center content_products_inicio">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-row>
            <v-col
              v-for="card in items"
              :key="card.code"
              :cols="card.flex"
              sm="3"
              v-bind="attrs"
              v-on="on"
              align-self="end"
              @click="showModal(card)"
            >
              <v-card height="295px">
                <v-img :src="card.src" class="content_images">
                </v-img>
                <v-card-text fill-height>
                  <v-card-title
                    class="title_images"
                    v-text="card.name"
                  >
                  </v-card-title>
                  <v-card-subtitle
                    class="title_images"
                    v-text="card.code"
                  >
                  </v-card-subtitle>
                </v-card-text>
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
            <v-img :src="imageModal" class="content_images" height="300px"> </v-img>
            <v-card-title class="justify-center">{{imageCode}}</v-card-title>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      imageModal: '',
      imageCode: '',
      items: [
        {
          id: 1,
          src: require("@/images/ProductSection/img1.png"),
          name: "Casaca Impermeable para caballeros",
          code: "LM-1",
          flex: 12,
        },
        {
          id: 2,
          src: require("@/images/ProductSection/img2.png"),
          code: "LM-2",
          name: "Casaca Impermeable",
          flex: 12,
        },
        {
          id: 3,
          src: require("@/images/ProductSection/img3.png"),
          code: "LM-3",
          name: "Casaca Impermeable",
          flex: 12,
        },
        {
          id: 3,
          src: require("@/images/ProductSection/img3.png"),
          code: "LM-4",
          name: "Casaca Impermeable",
          flex: 12,
        },
      ],
    };
  },
  methods: {
    showModal(card) {
      this.imageModal = card.src,
      this.imageCode = card.code,
      this.dialog = true
    }
  },
};
</script>
<style lang="scss">
.v-application--wrap {
  min-height: 100% !important;
}   
</style>
<style lang="scss" scoped>
.content_app {
  min-height: 100% !important;
}
.content_products_inicio {
  padding-top: 30px;
  margin-left:30px;
  margin-right: 30px;
}
.title_images {
  justify-content: center;
}
</style>
