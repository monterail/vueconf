<template lang="pug">
  .photo-slider-section(@keyup.right="nextPhoto")
    .main-photo-section()
      transition(name="main-photo", :class="{'blur': listOpen}")
        main-photo.main-photo(:blur="listOpen", :photo="selectedPhoto", :key="selectedPhoto")
    transition(name="photo-list")
      photo-list(v-show="listOpen", selectedPhoto="selectedPhoto", @photo:selected="handlePhotoSelected", :photos="photos")
    .buttons-section(v-if="!listOpen")
      .auto-play-button.button(@click="toggleAutoPlay")
        img(:src="icon")
      .show-list-button.button(@click="openList")
        div Show all photos
</template>
<script>
import MainPhoto from './MainPhoto'
import PhotoList from './PhotoList'

import playIcon from '../assets/img/media-play.svg'
import pauseIcon from '../assets/img/media-pause.svg'


export default {
  components: {
    MainPhoto,
    PhotoList,
  },
  props: {
    photos: {
      type: Array,
      required: true,
    },
    autoPlayDuration: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      listOpen: false,
      autoPlay: false,
      selectedPhoto: this.photos[0],
      autoPlayTimeout: 0,
    }
  },
  computed: {
    icon() {
      return this.autoPlay ? pauseIcon : playIcon
    }
  },
  mounted() {
    this.startAutoPlay()
    window.addEventListener('keyup', (ev) => {
      if(ev.key === 'ArrowRight') {
        this.prevPhoto()
        this.stopAutoPlay()
      } else if (ev.key === 'ArrowLeft') {
        this.nextPhoto()
        this.stopAutoPlay()
      }
    })
  },
  beforeDestroy() {
    this.stopAutoPlay()
  },
  methods: {
    openList() {
      this.listOpen = true
    },
    closeList() {
      this.listOpen = false
    },
    toggleAutoPlay() {
      if(this.autoPlay) {
        this.stopAutoPlay()
      } else {
        this.startAutoPlay()
      }
    },
    startAutoPlay() {
      this.autoPlay = true
      const autoNext = () => {
        this.nextPhoto()
        this.autoPlayTimeout = setTimeout(autoNext, this.autoPlayDuration || 5000)
      }
      autoNext()
    },
    stopAutoPlay() {
      this.autoPlay = false
      clearTimeout(this.autoPlayTimeout)
    },
    handlePhotoSelected(photo) {
      this.stopAutoPlay()
      this.closeList()
      this.selectedPhoto = photo
    },
    nextPhoto() {
      const index = this.photos.indexOf(this.selectedPhoto)
      const nextIndex = (index === this.photos.length-1) ? 0 : index + 1
      this.selectedPhoto = this.photos[nextIndex]
    },
    prevPhoto() {
      const index = this.photos.indexOf(this.selectedPhoto);
      const prevIndex = (index === 0) ? this.photos.length-1 : index - 1
      this.selectedPhoto = this.photos[prevIndex]
    }
  }
}
</script>
<style lang="sass" scoped>
  .photo-slider-section
    position: relative
    height: calc(100vh * 0.8)
    overflow: hidden
    background-color: black

  .main-photo-section
    transition: filter 0.2s ease
    filter: blur(0px)

    // // blur performance hack
    // -webkit-backface-visibility: hidden
    // -webkit-perspective: 1000
    // -webkit-transform: translate3d(0,0,0)
    // -webkit-transform: translateZ(0)
    backface-visibility: hidden
    transform: translateZ(0)
    perspective: 1000

    &.blur
      filter: blur(5px)

  .main-photo
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0

  .buttons-section
    position: absolute
    right: 0
    bottom: 0
    padding: 32px
    color: white
    opacity: 0.7
    transition: opacity 0.2s ease

    &:hover
      opacity: 1

  .show-list-button
    font-size: 10pt

  .auto-play-button
    height: 36px
    width: 36px
    padding: 0
    margin-right: 12px
    display: inline-flex
    justify-content: center
    align-items: center

    img
      padding-left: 2px

  .photo-list-enter, .photo-list-leave-to
    opacity: 0
    transform: scale(1.2)

  .photo-list-enter-to, .photo-list-leave
    opacity: 1
    transform: scale(1)

  .photo-list-enter-active, .photo-list-leave-active
    transition: opacity 0.2s ease, transform 0.2s ease

  .main-photo-enter
    opacity: 0
    transform: scale(0.95)

  .main-photo-enter-to, .main-photo-leave
    opacity: 1
    transform: scale(1)

  .main-photo-leave-to
    opacity: 0
    transform: scale(1.05)

  .main-photo-enter-active, .main-photo-leave-active
    transition: opacity 1s ease, transform 1s ease
    transform-origin: 50% 50%


</style>
