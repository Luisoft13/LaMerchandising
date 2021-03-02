<template>
  <v-footer
    color="#00677f"
    padless
    dark
    inset
  >
    <v-container>
      <v-row
        class="content_footer"
        no-gutters
      >
        <v-col class="content_col_footer" cols="12" sm="4">
          <h3 class="content_title_footer">Contacto</h3>
          <hr class="content_title_hr" style="width:120px; height:2px">
          <ul class="content_list_ul">
            <li>
              <v-icon>mdi-phone-classic</v-icon>
              +51 467 9324
            </li>
            <li>
              <v-icon>mdi-cellphone</v-icon>
              +51 987 702 700
            </li>
            <li>
              <v-icon>mdi-email</v-icon>
              contacto@lamerchandising.com
            </li>
            <li>
              <v-icon>mdi-email</v-icon>
              rguilfo@lamerchandising.com
            </li>
            <li>
              <v-icon>mdi-email</v-icon>
              ryepez@lamerchandising.com
            </li>
            <li>
              <v-icon>mdi-google-maps</v-icon>
              Calle Lord Cochrane 102, dpto 4, San Isidro
            </li>
          </ul>
        </v-col>
        <v-col class="content_col_footer" cols="12" sm="4">
          <h3 class="content_title_footer">La Merchandising</h3>
          <hr class="content_title_hr" style="width:120px; height:2px">
          <ul class="content_list_ul">
            <li>
              <v-icon>mdi-chevron-right</v-icon>
              <router-link
                to="productos-textiles"
                style="text-decoration:none; color: white"
              >
                Productos Textiles
              </router-link>
            </li>
            <li>
              <v-icon>mdi-chevron-right</v-icon>
              <router-link
                to="otros-productos"
                style="text-decoration:none; color: white"
              >
                Otros Productos
              </router-link>
            </li>
            <li>
              <v-icon>mdi-chevron-right</v-icon>
              <router-link
                to="despensa-bar"
                style="text-decoration:none; color: white"
              >
                Despensa Bar
              </router-link>
            </li>
            <li>
              <v-icon>mdi-chevron-right</v-icon>
              <router-link
                to="productos-tecnologicos"
                style="text-decoration:none; color: white"
              >
                Productos Tecnológicos
              </router-link>
            </li>
            <li>
              <v-icon>mdi-chevron-right</v-icon>
              <router-link
                to="productos-seguridad"
                style="text-decoration:none; color: white"
              >
                Seguridad e Higiene
              </router-link>
            </li>
          </ul>
        </v-col>
        <v-col class="content_col_footer" cols="12" sm="4">
          <h3 class="content_title_footer">Redes Sociales</h3>
          <hr class="content_title_hr" style="width:120px; height:2px">
          <v-btn
            href="https://www.facebook.com/lamerchandising/"
            target="_blank"
            text
          >
            <v-icon class="mr-10">mdi-facebook</v-icon>
            La Merchandising
          </v-btn>
          <v-btn
            href="https://www.facebook.com/lamerchandising/"
            target="_blank"
            text
          >
            <v-icon class="mr-10">mdi-instagram</v-icon>
            La Merchandising
          </v-btn>
          <!--<a 
            href="https://www.facebook.com/lamerchandising/"
            target="_blank" style="text-decoration:none"
          >
            <v-icon class="ml-10">mdi-instagram</v-icon>La Merchandising
          </a>-->
        </v-col>
        <v-col
          class="primary lighten-2 py-4 pt-10 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>La Merchandising</strong>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
  }
</script>
<style lang="scss" scoped>
.content_footer {
  justify-content: center !important;
  margin:20px
}
.content_list_ul {
  list-style: none;
  text-align: left;
  @media screen and (max-width:625px){ 
    text-align: center;
  }
  li {
    line-height: 30px;
  }
}
.content_title_hr {
  margin: auto;
  margin-bottom: 20px;
}
.content_title_footer {
  text-transform: uppercase;
  font-weight: bold;
}
.content_col_footer {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>