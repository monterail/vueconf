<template lang="pug">
div
  .container
    .section.post-section
      h1.header Conference guide
      p.subheader__description
        strong All the information about the event, accommodation, and Wrocław in one place.

    .container__inner
      .content
        .half
          img.venue-image(src="~assets/img/knh-front.jpg" alt="New Horizons Cinema, Wrocław")
        .half.text-left
          h2
            | The Venue:
            br
            strong New Horizons Cinema
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
    .container__inner
      .content
        .half.text-left
          h2: strong The location
          p.
            It was one of the most important criteria for picking the venue  – just next to the city centre and old town. This means it’s a perfect oportunitty for all the attendees to explore Wrocław, one of the most beautiful cities in Poland.
          p.
            Secondly, there are multiple hotels and hostels nearby, meaning no need to use the public transportation to reach the venue and back, as well as tons of restaurants and pubs to go after the conference.
        .half
          img(src="~assets/img/knh-inner.jpg" alt="New Horizons Cinema, Wrocław")

    .container__inner
      h2: strong Why Wrocław?
      p.
        We chose Wroclaw as the venue for VueConf because the city has a well-developed IT sector - the best in Poland. Due to its uniqueness, it became the European Capital of Culture in 2016. Wroclaw itself is a magical, picturesque place with a long history and has about 100 bridges.
      p.
        To break the hard set schedule, plan a few extra days after the conference and explore the city, visit various nightclubs and taste Polish cuisine - there are plenty of restaurants to choose from. There are also many options for walking tours: search for famous dwarves (small figures spread around the city), follow fantastic murals or taste a diverse array of beer brands. Meet Wroclaw before you leave!
    wroclaw-video
    .container__inner
      h2: strong Hotel recommendations
      p.
        Here you can find helpful info that will make your stay in Wroclaw easier and more entertaining. We chose several places and attractions that are certainly worth your attention. Check out these special conference discounts and extras:

      attraction(v-for="hotel of hotels", :attraction="hotel")
      h2: strong Restaurant recommendations
      p.
        A list of our favorite places to eat and drink. Show your VueConf badge and get special discounts!

      attraction(v-for="restaurant of restaurants", :attraction="restaurant")

      h2.more-info More information to come...
</template>

<script>
import VenueSection from '~components/Venue'
import WroclawVideo from '~components/WroclawVideo'
import Attraction from '~components/Attraction'
import hotels from '~/content/hotels'
import restaurants from '~/content/restaurants'

export default {
  components: {
    VenueSection,
    WroclawVideo,
    Attraction
  },
  head: {
    title: 'VueConf 2017 | Guide'
  },
  data () {
    return {
      hotels,
      restaurants
    }
  }
}
</script>

<style lang="sass" scoped>
  @import ~assets/css/base/helpers

  .container__inner
    position: relative

    @media #{$medium-up}
      padding-top: 100px
      padding-bottom: 100px

  .venue-image
    max-height: 540px

  .half
    display: inline-block
    max-width: 100%
    vertical-align: top
    text-align: left
    position: relative
    margin-bottom: 20px
    padding: 0 20px

    img
      max-width: 100%

      @media #{$medium-up}
        max-width: none
        right: 20px
        position: absolute

    @media #{$medium-up}
      width: 100%
      max-width: calc(50% - 40px)

  .button
    margin-top: 20px
    font-weight: 400
    font-size: 16px

  .more-info
    margin-top: 60px
    text-align: center
</style>
