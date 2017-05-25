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
      event(
        v-for="event of events",
        :event="event"
      )
</template>

<script>
import Event from '../components/Event'
import events from '../content/agenda'

export default {
  head: {
    title: 'VueConf 2017 | Talks'
  },
  components: { Event },
  data () {
    return {
      events
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.agenda__header
  margin-bottom: 20px

.subheader__description
  margin: 0 0 80px

.agenda
  position: relative

</style>
