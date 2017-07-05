<template lang="pug">
  .photo-list
    .photo-list__wrapper
      .photo-thumb(
        v-for="photo in photos",
        v-bind:style="{backgroundImage: `url(${photo})`}",
        :class="{selected: isSelected(photo)}"
        @click="handlePhotoClick(photo)",
      )
</template>

<script>
import hero from '../assets/img/knh-front.jpg'

export default {
  props: {
    photos: {
      type: Array,
      required: true,
    },
    selectedPhoto: {
      type: String,
      required: true,
    }
  },
  methods: {
    handlePhotoClick(photo) {
      this.$emit('photo:selected', photo)
    },
    isSelected(photo) {
      return photo === this.selectedPhoto
    }
  }
}
</script>
<style lang="sass">
  @import ~assets/css/base/helpers

  .photo-list
    position: absolute
    top: 0
    left: 0
    z-index: 2

    padding: 0 20px
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.9)

    display: flex
    align-items: center

    overflow-x: scroll

    h1, h2, p
     color: white

  .photo-list__wrapper
    height: 520px

    display: flex
    flex-direction: column
    flex-wrap: wrap
    justify-content: flex-start
    align-items: center

  .photo-thumb
    width: 260px
    height: 140px
    background-size: 300px
    background-position: 50% 20%
    margin: 16px
    box-sizing: border-box
    border: 4px solid transparent
    border-radius: 2px
    cursor: pointer
    transition: border 0.1s ease
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.03), 0 5px 15px rgba(0, 0, 0, 0.06)

    &:hover, .selected
      border: 4px solid $color-green--dark
</style>
