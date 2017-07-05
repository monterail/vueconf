<template lang="pug">
  .main-photo
    .image-wrapper
      .image(v-bind:style="{backgroundImage: `url(${photo})`}")
      .image-backdrop(v-bind:style="{backgroundImage: `url(${photo})`}")
</template>

<script>


export default {
  props: {
    photo: {
      type: String,
      required: true,
    },
    blur: {
      type: Boolean,
      required: true,
    }
  },
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

    .image-backdrop
      position: absolute
      width: 100%
      height: 100%
      z-index: 1
      top: 0
      left: 0
      background-position: center
      background-size: cover
      //filter: blur(2px)
      transform: translate3d(0, 0, 0)
      opacity: 0.1
      backface-visibility: hidden
      perspective: 1000
</style>
