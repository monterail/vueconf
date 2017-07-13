<template lang="pug">
  .video-player
    .video-player__window
      iframe(width="640", height="360", :src="selectedTalk.videoUrl", frameborder="0", allowfullscreen)
    .video-player__nav
      video-nav(:talks="filteredTalks" @talk:selected="handleTalkSelected", :selectedTalk="selectedTalk")
</template>
<script>
import VideoNav from './VideoNav'
import evan from '../static/img/evan.jpg'
import chris from '../static/img/chris.jpg'
import alex from '../static/img/alex.jpg'
import sebastien from '../static/img/sebastien.jpg'

export default {
  components: {
    VideoNav,
  },
  props: {
    talks: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      selectedTalk: this.talks[0]
    }
  },
  computed: {
    filteredTalks() {
      return this.talks.filter(t => t.videoUrl.length != 0)
    }
  },
  methods: {
    handleTalkSelected(talk) {
      this.selectedTalk = talk
    }
  }
}
</script>
<style lang="sass" scoped>
  @import ~assets/css/base/helpers

  .video-player
    display: flex
    flex-direction: row
    height: 360px
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.03), 0 5px 15px rgba(0, 0, 0, 0.06)
    border-radius: 5px
    overflow: hidden




  iframe
    position: relative
    top: 0
    left: 0
    width: 640px
    height: 360px

  .video-player__window
    background-color: black
    padding-bottom: 0
    position: relative

  .video-player__nav
    flex-grow: 1

  @media #{$large-down}
    .video-player
      flex-direction: column
      width: 100%
      height: auto

      iframe
        width: 100%
        height: 100%
        position: absolute
        top: 0
        left: 0
        bottom: 0
        right: 0

    .video-player__window
      padding-top: 56.25%
</style>
