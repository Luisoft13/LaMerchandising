<template>
  <v-card class="mx-auto" @click="$emit('click')">
    <v-img
      style="min-height: 300px"
      class="align-end text-white"
      height="300"
      max-height="300"
      :src="product.src"
    />

    <!--<v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>-->

    <v-card-text class="text-center">
      <div class="product-card__name text-truncate-3-line font-weight-bold pb-1">{{product.name}}</div>
      <span class="product-card__code font-weight-medium">{{product.code}}</span>
    </v-card-text>

    <!--<v-card-actions>
      <v-btn color="orange"> Share </v-btn>

      <v-btn color="orange"> Explore </v-btn>
    </v-card-actions>-->
  </v-card>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  &__name {
    color: #444;
    font-size: 18px;
  }
  &__code {
    color: #9d2560;
    font-size: 18px;
  }
}
.text-truncate-3-line {
  display: block;
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
</style>
