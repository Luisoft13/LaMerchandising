<template>
<div>
  <Header/>
  <v-app class="content_app">
    <div class="content_portada">
      <div class="content_portada__title">
        <h1 class="content_portada__title_h1">Dulces y Despensa Bar</h1>
      </div>
      <v-img
        :src="require('@/images/ProductSection/img3.png')"
        class="content_portada__img"
        height="300px"
        max-width="500px"
      >
      </v-img>
    </div>
    <div class="text-center content_products_inicio">
      <v-dialog class="content_dialog" v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-row>
            <v-col
              v-for="card in listProductsDespensaBar"
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
          <v-app-bar flat class="content_app_bar">
               <div class="content_app_bar_title">
                 {{imageName}}
               </div>
              <v-spacer></v-spacer>
              <v-icon
                color="white"
                @click="dialog = false"
              >
                mdi-close
              </v-icon>
          </v-app-bar>
          <v-card-text class="pt-4">
            <v-img :src="imageModal"> </v-img>
            <v-card-title class="justify-center subtitle_images_modal">{{imageCode}}</v-card-title>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
  <Footer/>
  <Whatsapp/>
</div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { listProductsDespensaBar } from "@/constants/listProductsDespensaBar.js"
import Whatsapp from '@/components/Whatsapp.vue'

export default {
  components: {
    Header,
    Footer,
    Whatsapp
    },
  data() {
    return {
      dialog: false,
      imageModal: '',
      imageCode: '',
      imageName: '',
      listProductsDespensaBar: []
    };
  },
  metaInfo () {
        return {
            title: "La Merchandising",
            titleTemplate: `%s | Dulces y Despensa Bar`,
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: "./logo.png"
                }
            ]
        }
    },
  created() {
    this.listProductsDespensaBar = listProductsDespensaBar
  },
  methods: {
    showModal(card) {
      this.imageModal = card.src,
      this.imageCode = card.code,
      this.imageName = card.name,
      this.dialog = true
    }
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
