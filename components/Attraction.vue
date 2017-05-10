<template lang="pug">
.attraction(:class="isOpen && 'attraction--expanded'")
  button.attraction__title(
    type="button",
    @click="toggle"
    tabindex="0"
  )
    | {{ attraction.title }}
  .attraction__accordion
    img.attraction__image(v-if="image", :src="image")
    .attraction__description
      p {{ attraction.description }}
      p.attraction__offer {{ attraction.offer }}
      p(v-html="attraction.instruction")
      a.button.button--small(:href="attraction.link" target="BLANK") WEBPAGE
      a.button.button--small.button--dark(v-if="attraction.formLink", target="BLANK", :href="attraction.formLink") DOWNLOAD BOOKING FORM
      a.button.button--small.button--dark(v-if="attraction.mapLink", target="BLANK", :href="attraction.mapLink") LOCATION
</template>

<script>
import Speaker from './Speaker'

export default {
  components: { Speaker },
  props: {
    attraction: {
      type: Object
    }
  },
  data () {
    return {
      isOpen: false,
      image: null
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  },
  watch: {
    isOpen () {
      this.image = this.attraction.image
    }
  }
}
</script>

<style lang="sass">
@import ~assets/css/base/helpers

.attraction__title
  margin: 15px 0
  font-size: 24px
  display: block
  font-weight: 600
  line-height: 28px
  vertical-align: middle
  cursor: pointer
  outline: none
  background: none
  border: none

  &:focus
    text-decoration: underline

  &:before
    content: "▶︎"
    font-size: 16px
    display: inline-block
    margin-right: 10px
    transition: transform 0.2s ease-in-out

.attraction
  padding: 15px 0
  border-bottom: 1px solid #ddd

  .button
    margin: 10px 20px 10px 0

  p
    margin: 0 0 10px
    font-size: 18px

  .attraction__accordion
    overflow: hidden
    max-height: 0
    transition: max-height 0.6s ease-in-out

    @media #{$medium-up}
      transition: max-height 0.2s ease-in-out

  &.attraction--expanded

    .attraction__accordion
      max-height: 1200px

      @media #{$medium-up}
        max-height: 500px


    .attraction__title:before
      transform: rotate(90deg)

.attraction__offer
  font-weight: 600

.attraction__image
  width: 300px
  margin-right: 20px
  margin-bottom: 20px

.attraction__description

  @media #{$medium-up}
    width: calc(100% - 320px)

.attraction__description,
.attraction__image
  display: inline-block
  vertical-align: top

</style>
