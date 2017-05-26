<template lang="pug">
.event__container
  .event__time 12:00
  .event-card(
    :id="id",
    :class="isOpen && 'event-card--expanded'",
    @click="toggle"
  )
    .event__header
      .event__images-container
        img.event__image(v-for="image of images", :src="image", :alt="event.author")
      .event__header-content
        .event__author-container(v-if="event.author")
          div
            .event__author {{ event.author }}
            .event__author-info {{ event.authorInfo }}
          .event__social__container
            .event__social(v-for="social of event.social")
              a.icon.icon--github(v-if="social.github", :href="social.github" target="_blank")
              a.icon.icon--gitlab(v-if="social.gitlab", :href="social.gitlab" target="_blank")
              a.icon.icon--twitter(v-if="social.twitter", :href="social.twitter" target="_blank")
        h2.event__topic(:class="event.type=='break' && 'event__topic--break'") {{ event.topic }} 
          small (1h)
    .event__accordion
      .event__description(v-if="event.description")
        slot
          p {{ event.description }}

</template>

<script>
export default {
  name: 'Event',
  props: ['event', 'descFlex'],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  },
  computed: {
    images () {
      return Array.isArray(this.event.img) ? this.event.img : [this.event.img]
    },
    id () {
      if(this.event.author) {
        return this.event.author.toLowerCase().split(' ').join('-')
      }
      return this.event.topic.toLowerCase().split(' ').join('-')
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers
@import ~assets/css/components/card

.event__container
  position: relative
  padding-bottom: 40px

.event__time
  text-align: center
  font-weight: 600
  font-size: 28px
  padding-bottom: 30px

  @media #{$medium-up}
    position: absolute
    left: 0
    top: 16px
    width: 120px
    padding-top: 35px

.event__time:after
  content: ""
  display: none
  position: absolute
  width: 11px
  height: 11px
  border-radius: 50%
  background-color: #ddd
  top: 40px
  right: calc(50% - 5px)

  @media #{$medium-up}
    display: block
    top: calc(50% - 2px)
    right: -7px

.event__container:first-child .event__time:after
  display: block

.event-card
  padding: 20px 14px
  @include card

  @media #{$medium-up}
    margin-left: 160px

.event-card:before
  content: ""
  position: absolute
  width: 3px
  background-color: #ddd
  top: 45px
  height: 21px
  left: calc(50% - 2px)

  @media #{$medium-up}
    height: auto
    top: 0
    bottom: 0
    left: 120px

.event-card:after
  content: ""
  position: absolute
  width: 3px
  background-color: #ddd
  bottom: 4px
  height: 36px
  left: calc(50% - 2px)
  
  @media #{$medium-up}
    display: none

.event__container:last-child .event-card:after
  display: none

@media #{$medium-up}
  .event__container:first-child .event-card:before
    top: 70px

  .event__container:last-child .event-card:before
    bottom: auto
    height: 70px

.event__description
  display: flex
  height: 100%
  white-space: pre-line
  padding: 0 15px 10px 15px

  p, ul, li
    font-size: 18px
    text-align: left

  ul
    margin: 0
    padding-left: 30px
  
  @media #{$medium-up}
    padding-left: 100px

.event__accordion
  overflow: hidden
  max-height: 0
  transition: max-height 0.6s ease-in-out

  @media #{$medium-up}
    transition: max-height 0.2s ease-in-out

.event-card--expanded
  .event__accordion
    max-height: 1200px

    @media #{$medium-up}
      max-height: 600px


.event__header
  display: flex
  flex-direction: column
  align-items: center
  justify-content: flex-start
  @media #{$medium-up}
    flex-direction: row

.event__image
  display: inline-block
  height: 80px
  width: 80px
  border-radius: 50%
  margin-left: -20px
  padding-bottom: 10px
  &:first-child
    margin-left: 0

  @media #{$medium-up}
    display: block
    margin-left: 0
    margin-right: 20px
    margin-top: -20px
    padding-bottom: 0
    &:first-child
      margin-top: 0

.event__social__container
  display: flex
  flex-direction: row

.event__social
  padding: 10px 20px
  .icon:not(:last-child)
    padding-right: 10px

  @media #{$medium-up}
    border-left: 1px solid #efefef
    &:first-child
      margin-left: 20px

.event__topic
  color: $color-vue-green
  margin: 10px 0
  text-align: center
  font-weight: 600
  font-size: 22px

  small
    font-size: 22px
    font-weight: 300

  @media #{$medium-up}
    text-align: left
    font-size: 24px
    small
      font-size: 24px

  @media #{$large-up}
    font-size: 28px
    small
      font-size: 28px

.event__topic--break
  color: $color-text

.event__author-container
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  @media #{$medium-up}
    justify-content: flex-start
    flex-direction: row


.event__author
  text-align: center
  font-weight: 600
  font-size: 20px
  @media #{$medium-up}
    text-align: left

.event__author-info
  text-align: center
  font-size: 12px
  text-transform: uppercase
  @media #{$medium-up}
    text-align: left

</style>
