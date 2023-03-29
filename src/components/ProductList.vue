<template>
  <div class="product-list">
    <ProductCard
      v-for="(product, index) in products"
      :key="`product-list-card-${index}`"
      :product="product"
      @click="$emit('click', product)"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  props: {
    products: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 12px;
}
</style>
