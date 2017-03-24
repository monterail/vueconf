<template lang="pug">
.container
  .container__inner.post-section
    h1.agenda__header Program
    p.subheader__description
      | The complete schedule will be published once all speakers are announced!
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
    title: 'VueConf 2017 | Agenda'
  },
  components: { Talk },
  data () {
    return {
      talks
    }
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
