module.exports = {
  build: {
    filenames: {
      // TMP: Increment this each time when doing a release to bust the cache
      app: 'app.' + Date.now() + '.js'
    }
  },
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
      { property: 'og:title', content: 'VueConf 2017 – June 21–23, 2017 in Wrocław, Poland | Vue.js Conference' },
      { property: 'og:site_name', content: 'VueConf 2017 – June 21–23, 2017 in Wrocław, Poland | Vue.js Conference' },
      { property: 'og:url', content: 'http://conf.vuejs.org' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'First worldwide conference by Monterail and Evan You about Vue.js - the progressive JavaScript framework. Inspiring talks and workshops led by world experts.' },
      { property: 'og:image', content: 'img/cover.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@vueconf' },
      { property: 'twitter:image', content: 'img/cover.png' },
      { property: 'twitter:title', content: 'VueConf 2017 – June 21–23, 2017 in Wrocław, Poland | Vue.js Conference' },
      { property: 'twitter:description', content: 'First worldwide conference by Monterail and Evan You about Vue.js - the progressive JavaScript framework. Inspiring talks and workshops led by world experts.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#3EB882' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo-48.png' },
      { rel: 'manifest', href: '/manifest.json' }
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
  plugins: [
    '~plugins/analytics',
    '~plugins/cookies'
  ]
}
