<template>
<div>
    <Header/>
    <v-container class="content_nosotros">
        <v-img
            :src="require('@/images/background.png')"
            height="500px"
            class="content_fondo_image"
        />
        <div class="content_title">
            <h1 class="content_h1">Nuestra empresa</h1>
            <h2 class="content_h2">Nuestra amplia experiencia nos ha convertido en una empresa cuya misión es ofrecer productos publicitarios que se integren con las estrategias de marketing de cada empresa.</h2>
            <h2 class="content_h2">Cumplimos con las fechas de entrega comprometidas con los clientes sin ningún retraso y eso nos diferencia ya que nuestros clientes no necesitan más que nuestra palabra y compromiso</h2>
        </div>
    </v-container>
    <v-container class="container_fortalezas">
        <h1 class="text-center content_title_fortalezas">Nuestras principales fortalezas son:</h1>
        <v-row class="content_first_block">
            <v-col cols="12" sm="6">
                <v-row>
                    <v-col cols="12" sm="4">
                        <v-img class="content_first_block__image" :src="require('@/images/icons/handshake.png')"></v-img>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <h2 class="content_first_block__title">Innovación</h2>
                        <h4 class="content_first_block__subtitle">Desarrollamos productos de acuerdo a las reales necesidades de nuestros clientes. Esto garantiza la originalidad de nuestra oferta.</h4>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="6">
                <v-row>
                    <v-col cols="12" sm="4">
                        <v-img class="content_first_block__image" :src="require('@/images/icons/medal.png')"></v-img>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <h2 class="content_first_block__title">Calidad</h2>
                        <h4 class="content_first_block__subtitle">Trabajamos con los mejores materiales del mercado local e internacional. Nuestro control de calidad hace que nuestros productos tengan muy buen acabado lo que garantiza la estética y la duración de los mismos.</h4>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="content_second_block">
            <v-col cols="12" sm="6">
                <v-row>
                    <v-col cols="12" sm="4">
                        <v-img class="content_second_block__image" :src="require('@/images/icons/heart.png')"></v-img>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <h2 class="content_second_block__title">Trascendencia</h2>
                        <h4 class="content_second_block__subtitle">Los productos publicitarios que producimos buscan ser útiles con el fin de que sean valorados por el cliente final y, de esta manera, la marca tenga una correcta y importante recordación.</h4>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="6">
                <v-row>
                    <v-col cols="12" sm="4">
                        <v-img class="content_second_block__image" :src="require('@/images/icons/rocket.png')"></v-img>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <h2 class="content_second_block__title">Relaciones a largo plazo</h2>
                        <h4 class="content_second_block__subtitle">Todos los puntos anteriores —INNOVACIÓN, CALIDAD Y TRASCENDENCIA— han hecho que los lazos comerciales con nuestros clientes sean duraderos y recurrentes. Sabemos responder a las necesidades y contingencias con gran profesionalismo.</h4>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Header,
        Footer
    },

    data: () => ({
        drawer: false,
        group: null,
    }),
    metaInfo () {
        return {
            title: "La Merchandising",
            titleTemplate: `%s | Nosotros`,
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: "./logo.png"
                }
            ]
        }
    },
};
</script>
<style lang="scss" scoped>
.content_fondo_image {
    background-color:white;
    width: 100%;
    margin: auto;
    height: 80%;
}
.content_title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 625px){
     margin-left: 5px;
     margin-right: 5px;
     top:30%;
     left: 0;
     transform: translate(0);
   }
}
.content_nosotros {
   position: relative;
   text-align: center;
   margin-top: 80px;
   padding-left: 30px;
   padding-right: 30px;
   @media screen and (max-width: 625px){
     margin-top: 0px;
   }
}
.content_h1 {
    font-size: 40px;
    color:#00677f;
}
.content_h2 {
  line-height: 30px;
  color:gray;
}
.content_title_fortalezas {
    padding-bottom: 30px;
    color:rgba(242, 38, 19, 1);
}
.content_first_block {
    margin-bottom: 30px;
    &__title {
        padding-bottom: 15px;
        font-weight: bold;
        color:#00677f;
    }
    &__subtitle {
        color: gray;
    }
    @media screen and (max-width: 625px){
        &__image {
            width: 100px;
            margin: auto;
        }
    }
}
.container_fortalezas {
    margin-top: 20px;
    @media screen and (max-width: 625px){
        margin-top: 200px;
    }
}
.content_second_block {
    margin-bottom: 30px;
    &__title {
        padding-bottom: 15px;
        font-weight: bold;
        color:#00677f;
    }
    &__subtitle {
        color: gray;
    }
    @media screen and (max-width: 625px){
        &__image {
            width: 100px;
            margin: auto;
        }
    }
}
</style>
