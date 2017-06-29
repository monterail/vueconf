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
      div Here be some videas
</template>

<script>
import PhotoSlider from '../components/PhotoSlider'

import knh from '../assets/img/knh-front.jpg'

const importPhotos = (r) => {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}

const photos = Object.values(importPhotos(require.context('../static/summary/photos', false, /\.(png|jpe?g|svg)$/)));

export default {
  components: {
    PhotoSlider
  },
  data() {
    return {
      photos,
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
  // color: white

.desc-section
  // background-color: $color-green--dark
  // color: white

  // h1, h2, p
  //   color: white
</style>
