<template>
    <v-container fluid class="content_welcome">
        <v-row>
            <v-col cols="12" sm="6">
                <h1 class="title_welcome">
                    Bienvenidos a <br>La <br>Merchandising<br>
                </h1>
                <h2 class="subtitle_welcome">RENEE GUIULFO</h2>
            </v-col>
            <v-col cols="12" sm="4" class="content_image">
                <v-img
                    :src="require('@/images/background.png')"
                    height="400px"
                    class="content_fondo_image"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-right" cols="12" sm="6">
                <div></div>
            </v-col>
            <v-col class="text-right" cols="12" sm="6">
                <h3>Gracias por visitar nuestra web</h3>
                <h4>Le invitamos a conocer nuestra empresa y nuestros productos.
                    No dude en contactarnos para solicitar una mayor información o un presupuesto personalizado.
                </h4>
                <v-btn text small class="mt-5">
                    <router-link to="nosotros"> Conoce más sobre nosotros</router-link>
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.content_welcome {
    padding-top: 30px;
}
.title_welcome {
    font-size: 56px;
    padding-bottom: 15px;
    @media screen and (max-width:625px) {
        font-size: 40px;

    }
}
.subtitle_welcome {
    font-size:26px;
}
.content_btn_welcome {
    font-size: 18px;
}
.content_image {
    @media screen and (max-width:625px) {
        display: none;
    }
}
</style>
