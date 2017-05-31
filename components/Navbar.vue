<template lang="pug">
.navbar(:class="isOpen && 'open'")
  .navbar__container
    nuxt-link.navbar__logo(to="/")

    button.navbar__burger(type="button", @click="toggle")
        .bar
        .bar
        .bar

    nav
      ul.navbar-nav(@click="toggle")
        li.navbar-nav__item
          nuxt-link(to="/speakers")
            | Speakers
        li.navbar-nav__item
          nuxt-link(to="/workshops")
            | Workshops
        li.navbar-nav__item
          nuxt-link(to="/program")
            | Program
        li.navbar-nav__item
          nuxt-link(to="/guide")
            | Guide

        li.navbar-nav__item
          a.button(
            href="https://events.zippydesk.com/vueconf-2017/register",
            @click="trackTicketsEvent"
          )
            | Get tickets
</template>

<script>
  export default {
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggle () {
        this.isOpen = !this.isOpen
      },
      trackTicketsEvent (event) {
        ga('send', 'event', {
          eventAction: 'click',
          eventLabel: event.target.href,
          eventCategory: 'Tickets link',
          transport: 'beacon'
        })
        _pq.push(['track', 'GoToTickets'])
        fbq('trackCustom', 'GoToTickets', { source: 'Navigation' });
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
      font-size: 15px
      font-weight: normal

  .navbar__burger
    display: none

  @media screen and (max-width:639px)
    .navbar__burger
      display: block
      border: 1px solid #ccc
      border-radius: 5px
      height: 30px
      width: 40px
      box-sizing: border-box
      padding: 8px 8px
      background: none

      .bar
        position: relative
        height: 2px
        margin-bottom: 3px
        background: #ccc
        transition: opacity 0.5s ease, transform 0.5s ease

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

    .navbar, .navbar ~ *
      transition: transform 0.3s ease

    .navbar.open, .navbar.open ~ *
      transform: translateX(-250px)

    .navbar.open
      .navbar__burger
        .bar:nth-child(1), .bar:nth-child(3)
          opacity: 0

        .bar:nth-child(2)
          transform: rotate(45deg) scale(0.7, 0.7)

        .bar:nth-child(2)::before
          content: ' '
          display: block
          position: absolute
          top: 0
          left: 0
          right: 0
          bottom: 0
          background: #ccc
          transform: rotate(90deg)
</style>
