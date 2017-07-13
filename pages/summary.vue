<template lang="pug">
.container
  .section.desc-section
    .container__inner.post-section
      include:markdown-it ../content/summaryText.md

  photo-slider(:photos="photos", :autoPlayDuration="10000")
  .section.videos-section
    .container__inner.post-section
      h2 Talks
      video-player(:talks="talks")
      a.button.youtube(href="https://www.youtube.com/channel/UC9dJjbYeXjirDYYVfUD3bSw") See on YouTube
</template>

<script>
import PhotoSlider from '../components/PhotoSlider'
import VideoPlayer from '../components/VideoPlayer'

import talkVideos from '../content/talkVideos.js'

const s3Base = 'https://vueconf.s3.amazonaws.com'

const workshopPhotos = [...Array(19).keys()].map(index => ({
  url: `${s3Base}/workshops/workshop${index+1}.jpg`,
  thumbnail: `${s3Base}/workshops/workshop_min${index+1}.jpg`
}))

const vueconfPhotos = [...Array(159).keys()].map(index => ({
  url: `${s3Base}/vueconf-2017/img${index+1}.jpg`,
  thumbnail: `${s3Base}/vueconf-2017/img_min${index+1}.jpg`
}))

export default {
  components: {
    PhotoSlider,
    VideoPlayer,
  },
  data() {
    return {
      photos: [ ...vueconfPhotos, ...workshopPhotos ],
      talks: talkVideos,
    }
  },
  head: {
    title: 'VueConf 2017 | Summary'
  },
}
</script>

<style lang="sass" scoped>
  @import ~assets/css/base/helpers

  h1
    margin-bottom: 64px

  .desc-section
    padding-top: 0

  .videos-section
    background-color: $color-vue-green
    margin-bottom: -80px
    padding-top: 10px

    h2, p
      color: white


    .youtube
      background-color: white
      color: $color-vue-green
      font-size: 12pt
      margin-top: 48px

      &:hover
        background-color: darken(white, 5)
</style>
