import Vue from 'vue'
import VueCookie from 'vue-cookie'

if (process.BROWSER_BUILD) {
  Vue.use(VueCookie)
}
