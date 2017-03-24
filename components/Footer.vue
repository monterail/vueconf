<template lang="pug">
footer.footer
  .container__inner
    .footer__top
      ul.footer__list
        h3.footer__header Contact
        li
          | Twitter:
          = ' '
          a(href="https://twitter.com/vueconf" target="_blank")
            span.at VueConf
        li
          | Email:
          a  vueconf
            span.at monterail.com
      ul.footer__list.footer__list--small
        h3.footer__header Useful links
        li: nuxt-link(to="/speakers") Speakers
        li: nuxt-link(to="/program") Program
        li: a(href="https://conf.vuejs.org/terms") Terms & Conditions
        li: nuxt-link(to="/codeofconduct") Code of Conduct
        li: nuxt-link(to="/privatepolicy") Private Policy

    .footer__bottom
      | Proudly supported by
      strong  Evan You
      |  and
      a(href="https://monterail.com"): strong.footer__logo
      .footer__copyright
        | Copyright 2016-2017 Monterail. All rights reserved.
</template>

<style lang="sass">
@import ~assets/css/base/helpers

.footer
  margin-top: 80px
  padding-top: 70px
  padding-bottom: 30px
  background: #fff
  border-top: 1px solid #e6e6e6

.footer__top
  padding-bottom: 40px

  @media #{$medium-up}
    display: flex
    justify-content: space-around

.footer__logo
  display: inline-block
  vertical-align: middle

  &:before
    content: ''
    background-image: url('~assets/img/monterail-logotype.svg')
    margin-left: 6px
    display: inline-block
    height: 24px
    width: 119px
    background-size: contain
    background-repeat: no-repeat

.footer__list
  list-style: none
  padding: 0
  margin: 0
  font-size: 22px

  li
    line-height: 1.4
    font-weight: 300

  a
    font-weight: 400
    color: $color-link
    text-decoration: none

  &.footer__list--small
    font-size: 20px

.footer__header
  margin: 15px 0
  font-size: 36px
  font-weight: 300
  color: $color-text

.footer__bottom
  font-size: 20px
  font-weight: 400
  line-height: 36px
  text-align: center
  color: $color-text

  a
    text-decoration: none
    color: $color-text
    white-space: nowrap

.footer__img
  height: 24px
  display: inline-block
  margin-bottom: -3px
  margin-left: 4px

.footer__copyright
  font-size: 13px
  margin-top: 0
  color: #9D9D9D

span.at:before
  content: '@'
</style>
