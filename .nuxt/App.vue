<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="layout"></component>
  </div>
</template>

<script>
import NuxtLoading from './components/nuxt-loading.vue'

let layouts = {

  "_default": process.BROWSER_BUILD ? () => System.import('/Users/damiandulisz/code/monterail/vueconf/layouts/default.vue') : require('/Users/damiandulisz/code/monterail/vueconf/layouts/default.vue')

}

export default {
  head: {"title":"starter","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, user-scalable=no"},{"hid":"description","content":"First worldwide conference by Monterail and Evan You about Vue.js - the progressive JavaScript framework. Inspiring talks and workshops led by world experts."},{"name":"description","content":""},{"property":"og:title","content":"VueConf 2017 | Vue.js Conference"},{"property":"og:site_name","content":"VueConf 2017 | Vue.js Conference"},{"property":"og:url","content":"http://conf.vuejs.org"},{"property":"og:type","content":"website"},{"property":"og:description","content":"First worldwide conference by Monterail and Evan You about Vue.js - the progressive JavaScript framework. Inspiring talks and workshops led by world experts."},{"property":"og:image","content":"images/vueconf-facebook.jpg"},{"property":"twitter:image","content":"images/logo.png"},{"property":"twitter:title","content":"VueConf 2017 | Vue.js Conference"},{"property":"twitter:description","content":"First worldwide conference by Monterail and Evan You about Vue.js - the progressive JavaScript framework. Inspiring talks and workshops led by world experts."},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"icon","type":"image/x-icon","href":"favicon.ico"}]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  
  mounted () {
    this.$loading = this.$refs.loading
    this.$nuxt.$loading = this.$loading
  },
  
  methods: {
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      if (typeof layouts[_layout] === 'function') {
        return this.loadLayout(_layout)
      }
      this.layout = layouts[_layout]
      return Promise.resolve(this.layout)
    },
    loadLayout (_layout) {
      return layouts[_layout]()
      .then((Component) => {
        layouts[_layout] = Component
        this.layout = layouts[_layout]
        return this.layout
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
        console.error(e)
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>


