<template lang="pug">
.attraction(:class="isOpen && 'attraction--expanded'")
  h4.attraction__title(@click="isOpen = !isOpen")
    | {{ attraction.title }}
  .attraction__description
    p {{ attraction.description }}
    p.attraction__offer {{ attraction.offer }}
    p {{ attraction.instruction }}
    a.button.button--small(:href="attraction.link" target="BLANK") WEBPAGE
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
      isOpen: false
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
    margin-bottom: 20px

  p
    margin: 0 0 10px
    font-size: 18px

  .attraction__description
    overflow: hidden
    max-height: 0
    transition: max-height 0.2s ease-in-out

  &.attraction--expanded

    .attraction__description
      max-height: 500px

    .attraction__title:before
      transform: rotate(90deg)

.attraction__offer
  font-weight: 600
</style>
