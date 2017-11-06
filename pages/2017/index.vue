<template lang="pug">
.site
  hero-section

  .container
    .container__inner.section.post-section
      h1 Speakers
      speakers-list(:speakers="speakers")
      .center
        nuxt-link(to="/2017/schedule")
          button.button.speaker-button Check the schedule
    // tickets-section#tickets
    venue-section
    newsletter-section

    sponsors-section
    organizers-section
</template>

<script>
import SpeakersList from '~/components/SpeakersList'
import HeroSection from '~/components/Hero'
import NewsletterSection from '~/components/Newsletter'
import SponsorsSection from '~/components/Sponsors'
import OrganizersSection from '~/components/Organizers'
import SubmitTalks from '~/components/SubmitTalks'
import TicketsSection from '~/components/Tickets'
import VenueSection from '~/components/Venue'
import speakers from '../../content/speakers/speaker-list'

export default {
  layout: '2017',
  components: {
    HeroSection,
    NewsletterSection,
    OrganizersSection,
    SponsorsSection,
    SpeakersList,
    SubmitTalks,
    TicketsSection,
    VenueSection
  },
  head: {
    title: 'VueConf 2017 – 21–23 June, 2017 in Wrocław, Poland'
  },
  data () {
    return {
      speakers
    }
  }
}
</script>

<style lang="sass" scoped>
  @import ~assets/css/base/helpers

  .site
    color: $color-text
    background-color: #f9f9f9

  .speaker-button
    margin: 40px 0 10px

  .container
    padding-top: 50px

  .center
    margin-top: 20px

  h3
    margin: 50px 0 0
    font-size: 24px
    font-family: "Source Sans Pro", sans-serif
    font-weight: 300
    color: #35485E

    @media #{$medium-up}
      font-size: 32px
</style>
