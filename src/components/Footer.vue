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
              rguiulfo@lamerchandising.com
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
                to="productos"
                style="text-decoration:none; color: white"
              >
                Productos
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
            href="https://www.instagram.com/lamerchandising/"
            target="_blank"
            text
          >
            <v-icon class="mr-10">mdi-instagram</v-icon>
            La Merchandising
          </v-btn>
          <div class="content_asociate">
            <h3 class="content_title_footer">Asociados a:</h3>
            <hr class="content_title_hr" style="width:120px; height:2px">
            <v-img
              :src="require('@/images/asociate.png')"
              alt="asociate"
              width="180"
              class="content_asociate__img"
            />
          </div>
        </v-col>
        <v-col
          class="primary lighten-2 py-4 text-center white--text content_year"
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
.content_asociate {
  padding-top: 10px;
  &__img {
    width: 180px;
    margin: auto;
    background: white;
  }
}
.content_year {
  margin-top: 15px;
}
</style>
