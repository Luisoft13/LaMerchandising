<template>
  <v-card class="mx-auto" @click="$emit('click')" style="width:100%">
    <img
      class="product-card__image"
      loading="lazy"
      :src="product.src"
    />
    <v-card-text class="text-center">
      <div class="product-card__name text-truncate-3-line font-weight-bold pb-1">{{product.name}}</div>
      <span class="product-card__code font-weight-medium">{{product.code}}</span>
    </v-card-text>
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
  &__image {
    width: 100%;
    height: 300px;
    max-height: 300px;
    min-height: 300px
  }
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
