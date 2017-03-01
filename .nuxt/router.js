'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _3668c528 = process.BROWSER_BUILD ? () => System.import('/Users/damiandulisz/code/monterail/vueconf/pages/index.vue') : require('/Users/damiandulisz/code/monterail/vueconf/pages/index.vue')

const _4e1b6aca = process.BROWSER_BUILD ? () => System.import('/Users/damiandulisz/code/monterail/vueconf/pages/terms-and-conditions.vue') : require('/Users/damiandulisz/code/monterail/vueconf/pages/terms-and-conditions.vue')

const _5f60af6d = process.BROWSER_BUILD ? () => System.import('/Users/damiandulisz/code/monterail/vueconf/pages/schedule.vue') : require('/Users/damiandulisz/code/monterail/vueconf/pages/schedule.vue')

const _f8acd170 = process.BROWSER_BUILD ? () => System.import('/Users/damiandulisz/code/monterail/vueconf/pages/code-of-conduct.vue') : require('/Users/damiandulisz/code/monterail/vueconf/pages/code-of-conduct.vue')

const _54d696aa = process.BROWSER_BUILD ? () => System.import('/Users/damiandulisz/code/monterail/vueconf/pages/speakers.vue') : require('/Users/damiandulisz/code/monterail/vueconf/pages/speakers.vue')



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
			path: "/terms-and-conditions",
			component: _4e1b6aca,
			name: "terms-and-conditions"
		},
		{
			path: "/schedule",
			component: _5f60af6d,
			name: "schedule"
		},
		{
			path: "/code-of-conduct",
			component: _f8acd170,
			name: "code-of-conduct"
		},
		{
			path: "/speakers",
			component: _54d696aa,
			name: "speakers"
		}
  ]
})
