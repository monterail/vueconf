<template lang="pug">
.container
  .agenda
    talk(
      v-for="talk in this.talks",
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
  data() {
    return {
      talks
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.agenda
  margin: 0 10px
  max-width: 700px
  position: relative
  @media #{$medium-up}
    margin: 0 auto

.agenda__card
  height: 100px
  width: 100%
</style>
