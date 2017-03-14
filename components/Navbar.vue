<template lang="pug">
.navbar
  .navbar__container
    nuxt-link.navbar__logo(to="/")

    label#burger(for="burger-target")
        .bar
        .bar
        .bar

    nav
      ul.navbar-nav
        li.navbar-nav__item
          nuxt-link(to="/speakers")
            | Speakers
        li.navbar-nav__item
          nuxt-link(to="/agenda")
            | Agenda
        li.navbar-nav__item
          a(href="/speakers#apply")
            | Apply as a speaker

        li.navbar-nav__item
          a.button(
            href="https://events.zippydesk.com/vueconf-2017/register",
            @click="trackTicketsEvent"
          )
            | Get tickets
</template>

<script>
  export default {
    methods: {
      trackTicketsEvent (event) {
        ga('send', 'event', {
          eventAction: 'click',
          eventLabel: event.target.href,
          eventCategory: 'Tickets link',
          transport: 'beacon'
        })
        _pq.push(['track', 'GoToTickets'])
      }
    }
  }
</script>

<style lang="sass">
  @import ~assets/css/base/helpers

  .navbar
    display: block
    position: fixed
    z-index: 10
    background: rgba(#fff, 0.8)
    border-bottom: 1px solid #efefef
    width: 100%
    padding: 20px 0
    align-items: center

  .nav-target
    position: absolute
    top: -76px

  .navbar__container
    max-width: 960px
    padding: 0 20px
    margin: 0 auto
    display: flex
    justify-content: space-between

  .navbar__logo
    background-image: url('~assets/vueconf_logo.svg')
    background-size: contain
    background-repeat: no-repeat
    width: 260px
    height: 40px

  .navbar__logo,
  .navbar-nav__item a
    text-decoration: none
    color: $color-blue

    &.button
      color: white

  .navbar-nav
    margin: 0
    padding: 0
    list-style: none

  .navbar-nav__item
    display: inline-block
    vertical-align: middle
    padding-left: 25px
    line-height: 35px
    text-transform: uppercase

    a
      font-size: 16px
      font-weight: normal

  #burger
    display: none

  #burger-target
    position: fixed
    left: -99999px
    display: none

  @media screen and (max-width:639px)
    #burger
      display: block
      align-self: center
      border: 1px solid #ccc
      border-radius: 5px
      display: flex
      flex-direction: column
      align-items: stretch
      justify-content: space-between
      height: 30px
      width: 40px
      box-sizing: border-box
      padding: 8px 8px

      .bar
        height: 2px
        background: #ccc

    #burger-target
      display: inline-block

    #burger-target ~ *
      transition: transform 0.3s ease

    #burger-target:focus ~ *
      transform: translateX(-250px)

    nav
      position: absolute
      left: 100%
      top: 0
      li
        width: 250px
        padding-left: 0 !important
        padding: 0
        > a
          padding: 15px 25px
          display: block
        + li
          box-shadow: 0 -10px 0 -9px #eee

      .button
        margin: 20px auto
        display: block
        max-width: calc(100% - 100px)
</style>
