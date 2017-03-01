<template lang="pug">
div
  transition-group(name="fade", tag="div")
    speaker.fade(v-for="speaker of speakersList", :speaker="speaker", :key="speaker", :adjust-img-url="adjustImgUrl")
</template>

<script>
import Speaker from './Speaker'

export default {
  components: { Speaker },
  props: {
    limit: {
      type: Number,
      default: 999
    },
    speakers: {
      type: Array,
      required: true
    },
    adjustImgUrl: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    speakersList () {
      return this.speakers.slice(0, this.limit)
    }
  }
}
</script>

<style lang="css">
.fade {
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 0
}
</style>
