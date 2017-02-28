'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _3668c528 = process.BROWSER_BUILD ? () => System.import('/Users/damiandulisz/code/monterail/vueconf/pages/index.vue') : require('/Users/damiandulisz/code/monterail/vueconf/pages/index.vue')

const _1eca6eee = process.BROWSER_BUILD ? () => System.import('/Users/damiandulisz/code/monterail/vueconf/pages/venue.vue') : require('/Users/damiandulisz/code/monterail/vueconf/pages/venue.vue')

const _54d696aa = process.BROWSER_BUILD ? () => System.import('/Users/damiandulisz/code/monterail/vueconf/pages/speakers.vue') : require('/Users/damiandulisz/code/monterail/vueconf/pages/speakers.vue')

const _e26d48be = process.BROWSER_BUILD ? () => System.import('/Users/damiandulisz/code/monterail/vueconf/pages/terms.vue') : require('/Users/damiandulisz/code/monterail/vueconf/pages/terms.vue')



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _3668c528,
			name: "index"
		},
		{
			path: "/venue",
			component: _1eca6eee,
			name: "venue"
		},
		{
			path: "/speakers",
			component: _54d696aa,
			name: "speakers"
		},
		{
			path: "/terms",
			component: _e26d48be,
			name: "terms"
		}
  ]
})
