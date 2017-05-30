<template lang="pug">
.container
  .container__inner.post-section
    h1.agenda__header Conference program
    p.subheader__description
      strong DAY 1 (22 June) 9:00 – 18:00
    .agenda
      event(
        v-for="event of eventsDay1",
        :event="event"
      )
    p.subheader__description
      strong DAY 2 (23 June) 9:00 – 18:00
    .agenda
      event(
        v-for="event of eventsDay2",
        :event="event"
      )
</template>

<script>
import Event from '../components/Event'
import eventsDay1 from '../content/scheduleDay1'
import eventsDay2 from '../content/scheduleDay2'

export default {
  head: {
    title: 'VueConf 2017 | Talks'
  },
  components: { Event },
  data () {
    return {
      eventsDay1,
      eventsDay2
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.agenda__header
  margin-bottom: 20px

.subheader__description
  margin: 80px 0

.agenda
  position: relative

</style>
