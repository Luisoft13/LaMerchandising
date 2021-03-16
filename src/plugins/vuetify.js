import Vue from 'vue'
import Vuetify, {
    VApp,
    VToolbar,
    VCard,
    VBtn,
    VDialog,
    VDivider,
    VGrid,
    VIcon,
    VProgressCircular,
    VList,
    VAvatar,
    VListGroup,
  } from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
    components: {
      VApp,
      VToolbar,
      VCard,
      VBtn,
      VProgressCircular,
      VList,
      VListGroup,
      VAvatar,
      VIcon,
      VDialog,
      VDivider,
      VGrid
    },
})

export default new Vuetify({
  // icons: {
  //   iconfont: 'md', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  // },
  theme: {
    themes: {
      light: {
        primary: '#24A4ED',
        error: "#FA3F25",
        warning: "#FFA800",
        success: "#2AAF00",
        black: "#333",
      },
    },
  },
});
