<template lang="pug">
  .main-photo
    .image-wrapper
      .image(v-bind:style="{backgroundImage: `url(${backgroundUrl})`}", :class="{loading: !loaded}")
      .image-backdrop(v-bind:style="{backgroundImage: `url(${photo.thumbnail})`}")
</template>

<script>


export default {
  mounted() {
    const url = this.photo.url;

    const img = new Image();
    img.onload = () => { this.loaded = true; }
    img.src = url;
    if (img.complete) img.onload();
  },
  props: {
    photo: {
      type: Object,
      required: true,
    },
    blur: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    backgroundUrl() {
      return this.loaded ? this.photo.url : this.photo.thumbnail
    }
  },
  data() {
    return {
      loaded: false
    }
  }
}
</script>
<style lang="sass" scoped>
  @import ~assets/css/base/helpers

  .main-photo
    .image-wrapper
      background-color: darken($color-text, 20)
      height: calc(100vh * 0.8)
      position: relative
      z-index: 0
      overflow: hidden
      transform: translateZ(0)
      backface-visibility: hidden
      perspective: 1000

    .image
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      background-repeat: no-repeat
      background-size: auto 100%
      background-position: center top
      z-index: 2
      transition: filter 0.5s ease

      &.loading
        filter: blur(2px)

    .image-backdrop
      position: absolute
      width: 100%
      height: 100%
      z-index: 1
      top: 0
      left: 0
      background-position: center
      background-size: cover
      // filter: blur(2px)
      transform: translate3d(0, 0, 0)
      opacity: 0.1
      backface-visibility: hidden
      perspective: 1000
</style>
