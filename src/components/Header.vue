<template>
    <div>
        <v-app-bar class="content-app-bar" dense flat absolute v-if="!$vuetify.breakpoint.xsOnly">
        <v-toolbar flat class="mainHeader">
            <v-img
              :src="require('@/images/icons/logo.png')"
              alt="RTS ENVIRONMENTAL SERVICES, INC."
              width="200"
            />
            <v-spacer></v-spacer>
            <v-toolbar-items>
            <v-btn text to="home">Inicio</v-btn>
            <v-btn text to="nosotros" exact-path>Nosotros</v-btn>
            <v-btn text to="productos" exact-path>Productos</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        </v-app-bar>
        <v-app-bar class="content-app-bar" flat dense v-else>
          <v-img
            :src="require('@/images/icons/logo.png')"
            alt="RTS ENVIRONMENTAL SERVICES, INC."
            width="200"
          />
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary class="content_drawer">
          <v-app-bar flat color="white">
              <v-spacer></v-spacer>
              <v-icon
                large
                class="content_icon_close"
                @click="drawer = false"
              >
                mdi-close
              </v-icon>
          </v-app-bar>
          <v-list>
            <v-list-item link v-for="(item, index) in nav" :key="index" :to="item.to">
              <v-list-item-content>
                <v-list-item-title :title="item.title">{{
                  item.text
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: false,
    dialog: false,
    nav: [
      {
        icon: "mdi-home",
        text: "Inicio",
        to:"home",
        title: "Back to Home page",
        active: true,
      },
      {
        icon: "mdi-home",
        text: "Nosotros",
        to: "nosotros",
        title: "About this demo",
        active: false,
      },
      {
        icon: require('@/images/icons/school-supplies.png'),
        text: "Productos",
        to:"productos",
        title: "Productos",
        active: false,
      },
    ],
  }),
};
</script>
<style>
.v-list-item__icon {
    min-width: 20px !important;
}
.v-list-item--active {
  background-color: rgb(0, 140,127) !important;
  color: white !important;
}
.v-btn:before {
  background-color: rgb(0, 140,127) !important;
  color: white !important;
}
</style>
<style lang="scss">
.v-toolbar__title {
  font-weight: 600;
  text-transform: uppercase;
}

@media screen and (max-width: 625px) {
  .v-toolbar__content {
    padding: 0 !important;
  }
}
.mainHeader {
  .v-toolbar__items {
    .v-btn__content {
      a {
        color: black;
      }
    }

    .v-btn {
      @media screen and (max-width: 625px) {
        padding: 0 0 0 10px;
      }
    }
  }
}
.content-app-bar {
  background-color: white !important;
  margin-top: 30px !important;
  height: 80px !important;
  @media screen and (max-width: 625px) {
    margin-top: 15px !important;
  }
}
.content_list_group {
  display: flex;
  flex-direction: column;
}
.content_list_item {
  height: 100%;
  padding-right: 0px !important;
}
.content_list_group_items {
  background: white;
}
.content_icon_close {
  padding-right: 8px;
}
.content_drawer {
  background-color:rgb(0, 103, 127)
}
</style>
