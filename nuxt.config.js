module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', content: "First worldwide conference by Monterail and Evan You about Vue.js - the progressive JavaScript framework. Inspiring talks and workshops led by world experts." },
      { name: 'description', content: '' },
      { property: 'og:title', content: 'VueConf 2017 | Vue.js Conference' },
      { property: 'og:site_name', content: 'VueConf 2017 | Vue.js Conference' },
      { property: 'og:url', content: 'http://conf.vuejs.org' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'First worldwide conference by Monterail and Evan You about Vue.js - the progressive JavaScript framework. Inspiring talks and workshops led by world experts.' },
      { property: 'og:image', content: 'images/vueconf-facebook.jpg' },
      { property: 'twitter:image', content: 'images/logo.png' },
      { property: 'twitter:title', content: 'VueConf 2017 | Vue.js Conference' },
      { property: 'twitter:description', content: 'First worldwide conference by Monterail and Evan You about Vue.js - the progressive JavaScript framework. Inspiring talks and workshops led by world experts.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  // css: ['~assets/css/style.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins: ['~plugins/analytics']
}
