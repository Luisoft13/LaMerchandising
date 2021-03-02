<template>
<div class="heroBlock">
  <v-carousel :show-arrows="false" cycle hide-delimiters height="auto">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      reverse-transition="fade-transition"
    >
      <v-img :src="item.src"></v-img>
    </v-carousel-item>
  </v-carousel>
</div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/images/slider1.png'),
          },
          {
            src: require('@/images/slider2.png'),
          },
          {
            src: require('@/images/slider3.png'),
          },
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
.heroBlock {
  margin-top: 80px;
  @media screen and (max-width: 625px){
    margin-top: 0px;
  }
}
</style>