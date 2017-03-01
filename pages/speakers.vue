<template lang="pug">
.container
  .container__inner.post-section
    h1
      | Speakers

    speakers-list(:speakers="speakers")

    h2
      | More announcements soon!

    .post-section.center.cfp-section#apply

      include:markdown-it ../content/speakers/cfp.md

      a.post-section__button.button(
        href="https://docs.google.com/forms/d/e/1FAIpQLSdtbxBpV0j_zCnELXQuIkeGH8x6gaOWE0J8tTsAdpa0O5MYOw/viewform"
        target="_blank"
      )
        | Apply as a speaker

      p.post-section__paragraph
        | We will come back to you within a few days.
</template>

<script>
import SpeakersList from '../components/SpeakersList'
import speakers from '../content/speakers/speaker-list'

export default {
  head: {
    title: 'VueConf 2017 | Speakers'
  },
  components: { SpeakersList },
  data () {
    return {
      speakers
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

h2
  margin: 60px 0 100px

.container__inner
  text-align: center
  z-index: 2

.container
  position: relative
  overflow: hidden
  z-index: 0

.cfp-section
  border-top: 1px solid #ddd
  padding-top: 60px
</style>
