<template lang="pug">
.section.sponsors-section.center
  .container__inner
    h1 Sponsors
    .sponsors__container
      .div
        a(href="https://codeship.com/", target="_BLANK")
          img.sponsor__image(src="~assets/img/logo_codeship_colour.svg")

    h2 Media partners
    .sponsors__container
      .div
        a(href="http://vue-newsletter.com/", target="_BLANK")
          img.partner__image(src="~assets/img/logo_vue-newsletter.png")
        a(href="https://vuejsfeed.com/", target="_BLANK")
          img.partner__image(src="~assets/img/vuejsfeed-logo.png")

    p Help us make it the best possible conference for the community.
    a.button(href="mailto:support@vueconf.eu") Become a Partner
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.button
  margin-top: 40px

.sponsors-section
  background-color: $color-white

  h1
    margin-bottom: 40px
  h2
    margin-top: 40px
    margin-bottom: 40px

.sponsors__container
  display: flex
  flex-wrap: wrap
  justify-content: center
  margin: 60px 0

.sponsor__image
  max-width: 90%
  width: 360px
  height: auto
  margin: 0 20px 20px 20px

.partner__image
  display: inline-block
  vertical-align: middle
  max-width: 210px
  height: auto
  margin: 0 12px 20px 12px
</style>
