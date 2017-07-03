<template lang="pug">
.container
  .container__inner.post-section
    h1.summary__header Conference Summary
  .section.desc-section
    .container__inner.post-section
      include:markdown-it ../content/summaryText.md

  photo-slider(:photos="photos")
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

const importPhotos = (r) => {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}

const photos = Object.values(importPhotos(require.context('../static/summary/photos', false, /\.(png|jpe?g|svg)$/)));

export default {
  components: {
    PhotoSlider,
    VideoPlayer,
  },
  data() {
    return {
      photos,
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
    margin-bottom: 0

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
