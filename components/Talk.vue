<template lang="pug">
.talk__container
  .talk(:id="id")
    .talk__image-container
      .talk__images
        img.talk__image(v-for="image of images", :src="image", :alt="talk.author")
      .talk__author {{ talk.author }}
      .talk__author-info {{ talk.authorInfo }}
      .talk__social__container
        .talk__social(v-for="social of talk.social")
          a.icon.icon--github(v-if="social.github", :href="social.github" target="_blank")
          a.icon.icon--gitlab(v-if="social.gitlab", :href="social.gitlab" target="_blank")
          a.icon.icon--twitter(v-if="social.twitter", :href="social.twitter" target="_blank")
    .talk__description(:style="{ flex: descFlex }")
      h2.talk__topic {{ talk.topic }}
      slot
        p {{ talk.description }}
      div.center
        slot(name="ticket")
</template>

<script>
export default {
  name: 'Talk',
  props: ['talk', 'descFlex'],
  computed: {
    images () {
      return Array.isArray(this.talk.img) ? this.talk.img : [this.talk.img]
    },
    id () {
      return this.talk.author.toLowerCase().split(' ').join('-')
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers
@import ~assets/css/components/card

.talk__container
  margin-bottom: 40px

.talk
  display: flex
  padding: 40px 10px
  margin-bottom: 20px
  align-items: center
  justify-content: space-around
  flex-direction: column
  @include card
  cursor: auto

  @media #{$medium-up}
    flex-direction: row
    padding: 40px

.talk__description
  flex: 5
  display: flex
  flex-direction: column
  justify-content: flex-start
  height: 100%
  white-space: pre-line
  padding: 0 15px

  p, ul, li
    font-size: 18px

  ul
    margin: 0
    padding-left: 30px

.talk__image-container
  flex: 3
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between

.talk__images
  flex-direction: row
  display: flex

.talk__image
  display: block
  margin: 0 -10px
  height: 70px
  width: 70px
  border-radius: 50%
  padding-bottom: 10px

  @media #{$medium-up}
    height: 150px
    width: 150px

.talk__social__container
  display: flex
  flex-direction: row

.talk__social
  margin: 10px 20px 0

  .icon:not(:last-child)
    padding-right: 10px

.talk__topic
  color: $color-vue-green
  margin: 15px
  text-align: center

  @media #{$medium-up}
    margin: 5px 0 0
    text-align: left

.talk__author
  font-weight: 600
  font-size: 20px
  padding-bottom: 5px

  @media #{$medium-up}
    font-size: 24px

.talk__author-info
  text-align: center

.center
  margin-top: 30px

.button
  text-transform: uppercase
  font-size: 16px
  font-weight: normal
</style>
