<template>
  <div class="heroBlock">
    <v-app style="min-height: auto">
        <v-carousel
          :show-arrows="true"
          cycle
          hide-delimiters
          height="auto"
          style="min-height: auto"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            reverse-transition="fade-transition"
          >
            <v-img :src="item.src"></v-img>
          </v-carousel-item>
        </v-carousel>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/images/icons/slider4.jpg"),
        },
        {
          src: require("@/images/icons/slider1.png"),
        },
        {
          src: require("@/images/icons/slider2.png"),
        },
        {
          src: require("@/images/icons/slider3.jpg"),
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.v-application--wrap {
  min-height: auto !important
}
</style>
<style lang="scss" scoped>
.heroBlock {
  margin-top: 110px;
  @media screen and (max-width: 625px) {
    margin-top: 0px;
  }
}
</style>
