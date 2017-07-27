<template lang="pug">
  transition(name="splash-video")
    .splash-video(v-if="open", v-cloak)
      .backdrop
      .modal-window
        .modal-window__video
          iframe(
            width="853",
            height="480",
            :src="autoplayUrl",
            frameborder="0",
            allowfullscreen
          )
        button.modal-window__button.button(@click="close") ✕
</template>

<script>
  const KEY = 'vueconf-splash-video-viewed'
  const TIMEOUT_VALUE = 4000

  export default {
    props: {
      videoUrl: { type: String, required: true }
    },
    beforeMount() {
      setTimeout(() => {
        if(this.$cookie) this.open = !this.$cookie.get(KEY)
      }, TIMEOUT_VALUE)
    },
    data() {
      return {
        open: false
      }
    },
    methods: {
      close(){
        this.open = false
        this.$cookie.set(KEY, false)
      }
    },
    computed: {
      autoplayUrl() {
        return `${this.videoUrl}?autoplay=1`
      }
    }
  };
</script>

<style lang="sass" scoped>
  .splash-video
    z-index: 11
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    opacity: 1

    &[v-cloak]
      display: none

    .backdrop
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1

      background-color: rgba(0, 0, 0, 0.7)

    .modal-window
      background-color: transparent
      max-height: 100%
      width: 100%
      max-width: calc(80%)
      border-radius: 4px
      margin: 0 20px
      position: relative
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center

    .modal-window__button
      width: 32px
      height: 32px
      display: flex
      justify-content: center
      align-items: center
      padding: 2px 0 0 2px
      font-size: 14px
      position: absolute
      top: -10px
      right: -10px

    .modal-window__video
      position: relative
      padding-bottom: 56.25%; /* 16:9 */
      padding-top: 25px
      height: 0
      width: 100%
      height: 100%

      iframe
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%

  .splash-video-enter-active
    transition: opacity .5s 1s ease

  .splash-video-leave-active
    transition: opacity .5s ease

  .splash-video-enter, .splash-video-leave-to
    opacity: 0

</style>
