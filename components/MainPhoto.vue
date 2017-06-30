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
  .main-photo
    .image-wrapper
      background-color: black
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
      filter: blur(15px)
      transform: translateZ(0)
      opacity: 0.3
      backface-visibility: hidden
      perspective: 1000
</style>
