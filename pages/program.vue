<template lang="pug">
.container
  .container__inner.post-section
    h1.agenda__header Conference program
    p.subheader__description
      strong DAY 2–3 (22–23 June) 9:00 – 18:00
      br
      br
      | Meet our speakers and discover their awesome talks.
      br
      | The final schedule will be published once all speakers are announced!
    .agenda
      talk(
        v-for="talk of talks",
        :talk="talk"
      )
</template>

<script>
import Talk from '../components/Talk'
import talks from '../content/agenda'

export default {
  head: {
    title: 'VueConf 2017 | Talks'
  },
  components: { Talk },
  data () {
    return {
      talks
    }
  },
  created () {
    this.$router.push('/schedule')
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
