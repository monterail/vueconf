<template lang="pug">
div
  .container
    .section.post-section
      h1 Conference guide
    .container__inner
      .half
        img.venue-image(src="~assets/img/knh-front.jpg" alt="New Horizons Cinema, Wrocław")
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
          | 50-077 Wrocław,
          br
          | Poland
        a.button.button--dark(href="https://goo.gl/maps/wDdmhQGQb9N2", target="_BLANK") SEE THE MAP
        p
          | Want to know more about the decision making behind the venue?
          br
          | Read on!
    .container__inner
      .half.text-left
        h2: strong The location
        p.
          It was one of the most important criteria for picking the venue  – just next to the city centre and old town. This means it’s a perfect oportunitty for all the attendees to explore Wrocław, one of the most beautiful cities in Poland.
        p.
          Secondly, there are multiple hotels and hostels nearby, meaning no need to use the public transportation to reach the venue and back, as well as tons of restaurants and pubs to go after the conference.
      .half
        img(src="~assets/img/knh-inner.jpg" alt="New Horizons Cinema, Wrocław")

    wroclaw-video
</template>

<script>
import VenueSection from '~components/Venue'
import WroclawVideo from '~components/WroclawVideo'

export default {
  components: {
    VenueSection,
    WroclawVideo
  },
  head: {
    title: 'VueConf 2017 | Guide'
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
  @import ~assets/css/base/helpers

  .container__inner
    margin-bottom: 100px

  .venue-image
    max-height: 540px

  .half
    display: inline-block
    max-width: 100%
    vertical-align: top
    text-align: left
    position: relative
    width: 100%
    margin-bottom: 20px

    img
      max-width: 100%

      @media #{$medium-up}
        max-width: none
        right: 20px
        position: absolute

    @media #{$medium-up}
      padding: 0 20px
      max-width: calc(50% - 40px)

  .button
    margin-top: 20px
    font-weight: 400
    font-size: 16px
</style>
