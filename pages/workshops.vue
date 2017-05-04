<template lang="pug">
.container
  .container__inner.post-section
    h1.agenda__header Workshops
    p.subheader__description
      strong DAY 1 (21 June) 9:00 – 17:00
      br
      br
      | Theory is not enough.
      br
      | Join our intensive,
      strong  8-hour long workshops
      |  with world-class Vue.js experts.
      br
      br
      | Workshops and conference tickets are sold separately.
      br
      | Only 20 tickets per workshop.
    .agenda
      talk(:talk="evanWorkshop", :desc-flex="7")
        a.button(slot="ticket", disabled) Sold out
      talk(:talk="blakeWorkshop", :desc-flex="7")
        :markdown-it
          As an application grows, you will notice that components will share common code and state. Eventually as the application grows it can become more important to manage this state carefully, to improve maintainability, predictability and application flow.

          Vuex, is inspired by elm. It is not only a **library** but a **state management pattern**. Introducing these patterns, improves the overall application flow and creates a centralised state. However, it is easy to go overboard with state managment; thus we will look at a full range of best practices to ensure you can make the most of Vuex.

          Schedule:
          - What is Vuex?
          - Looking at state management patterns
          - Determining application state from local state
          - Using **Actions**, **Mutations** and **Getters**
          - Modularising a store
          - Composing actions (Promises and Async/Await)
          - Avoiding common pitfalls
        a.button(slot="ticket", href="https://events.zippydesk.com/vueconf-2017/register") Get the ticket
      talk(:talk="sarahWorkshop", :desc-flex="7")
        :markdown-it
          #### Detailed description will be published soon
        a.button(slot="ticket", href="https://events.zippydesk.com/vueconf-2017/register") Get the ticket
</template>

<script>
import Talk from '../components/Talk'

export default {
  head: {
    title: 'VueConf 2017 | Workshops'
  },
  components: { Talk },
  data () {
    return {
      evanWorkshop: {
        type: "talk",
        img: "/img/evan.jpg",
        topic: "Advanced Features from the Ground Up",
        author: "Evan You",
        social: [
          {
            github: "https://github.com/yyx990803",
            twitter: "https://twitter.com/youyuxi"
          }
        ],
        authorInfo: "Vue.js Author",
        description: "We often reach for existing libraries when dealing with advanced app features such as routing, state management, form validation and i18n, and a lot of times the implementations behind these libraries can be a black box. \n\n In this workshop we are going to build simple versions of such libraries from the ground up using basic Vue features. \n\n This will help you better understand the nature of these problems and how to better leverage Vue’s reactivity system to come up with elegant solutions."
      },
      blakeWorkshop: {
        type: "talk",
        img: "/img/blake.jpg",
        topic: "Application state with Vuex",
        author: "Blake Newman",
        social: [
          {
            github: "https://github.com/blake-newman",
            twitter: "https://twitter.com/blakenewman"
          }
        ],
        authorInfo: "Software Engineer at Sainsbury’s",
      },
      sarahWorkshop: {
        type: "talk",
        img: "/img/sarah.jpg",
        topic: "Animated Interfaces with Vue.js",
        author: "Sarah Drasner",
        social: [
          {
            github: "https://github.com/sdras",
            twitter: "https://twitter.com/sarah_edo"
          }
        ],
        authorInfo: "Consultant",
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.agenda__card
  height: 100px
  width: 100%

.agenda__header
  margin-bottom: 20px

.subheader__description
  margin: 0 0 80px
</style>
