<template>
  <div class="page">
    <button
      v-ripple
      class="float-link"
      @click="handleWhatsappButtonClick"
    >
      <v-img
        :src="require('@/images/whatsapp.png')"
      />
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    handleWhatsappButtonClick () {
      const message = `&text=Hola *La Merchandising*, deseo más información de su empresa y de sus productos.`
      const phone = "51987702700"
      window.open(
        `https://api.whatsapp.com/send?phone=${phone}${message}`,
        '_blank'
      )
    }
  }
}
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>
.page {
  width: 100%;
  position: absolute;

  .float-link {
    display: block;
    background: transparent !important;
    position: fixed !important;
    bottom: 15px;
    right: 15px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    outline: none !important;
    border: none !important;
  }
}
</style>