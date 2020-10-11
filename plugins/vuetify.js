import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vReadMoreBox from "v-read-more-box";
import imageViewer from 'vue-image-viewer'
import VueHorizontalList from 'vue-horizontal-list'
Vue.use(VueHorizontalList)
Vue.use(imageViewer)
Vue.use(Vuetify)
Vue.use(vReadMoreBox)

export default new Vuetify({
  theme: {
    dark: false,
  },
})