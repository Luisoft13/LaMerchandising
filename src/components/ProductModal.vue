<template>
  <v-dialog v-model="showModal" width="600">
    <v-card>
      <v-app-bar flat class="content_app_bar px-1" height="48">
        <v-spacer></v-spacer>
        <v-icon color="white" @click="showModal = false"> mdi-close </v-icon>
      </v-app-bar>
      <v-card-text class="pt-4 fill-height mx-auto">
        <v-img :src="productImageSrc" max-width="360" max-height="360"/>
        <div
          class="font-weight-bold py-3"
          style="font-size: 24px; line-height: 24px"
        >
          {{ productName }}
        </div>
        <v-card-title class="justify-center subtitle_images_modal">
          {{ productCode}}
        </v-card-title>
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    product: { type: Object, default: () => {}  },
    value: { type: Boolean, default: false }
  },
  computed: {
    showModal: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    productImageSrc () {
      return this.product?.src || ''
    },
    productName () {
      return this.product?.name || ''
    },
    productCode () {
      return this.product?.code || ''
    }
  },
};
</script>
<style lang="scss" scoped>
.content_app_bar {
  height: 100%;
  background-color:rgb(0, 103, 127) !important;
}
.subtitle_images_modal {
  color: #9d2560;
  padding: 4px;
}
</style>
