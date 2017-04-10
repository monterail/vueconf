<template lang="pug">
.section.post-section
  .nav-target#venue
  .container__inner
    h1
      | Venue
    .half
      img(src="~assets/img/nhcinema.jpg" alt="New Horizons Cinema, Wrocław")
    .half.text-left
      h2: strong New Horizons Cinema
      p
        | The conference (Juen 22–23) will take place in the
        strong  New Horizons Cinema
        | , the largest art-cinema in Poland.

      p
        strong Address:
        br
        | Kazimierza Wielkiego 19a-21
        br
        | 50-077 Wrocław, Poland
      a.button.button--dark(href="https://goo.gl/maps/wDdmhQGQb9N2", target="_BLANK") SEE THE MAP
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  @import ~assets/css/base/helpers

  .half
    display: inline-block
    max-width: calc(50% - 40px)
    vertical-align: middle
    text-align: left
    padding: 0 20px

    img
      max-width: 100%

  .button
    margin-top: 20px
    font-weight: 400
    font-size: 16px
</style>
