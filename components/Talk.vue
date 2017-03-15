<template lang="pug">
.talk__container
  .talk
    .talk__image-container
      img.talk__image(:src="talk.img", :alt="talk.author")
      .talk__author {{ talk.author }}
      .talk__social
        a.icon.icon--github(v-if="talk.github", :href="talk.github" target="_blank")
        a.icon.icon--twitter(v-if="talk.twitter", :href="talk.twitter" target="_blank")
      .talk__author-info {{ talk.authorInfo }}
    .talk__description
      h2.talk__topic {{ talk.topic }}
      p.talk__description-intro {{ talk.descriptionIntro }}
      p {{ talk.description }}
</template>

<script>
export default {
  name: 'Talk',
  props: ['talk']
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers
@import ~assets/css/components/card

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
  flex: 2
  display: flex
  flex-direction: column
  justify-content: flex-start
  height: 100%
  padding: 0 15px

  p
    font-size: 18px

.talk__description-intro
  padding-bottom: 10px

.talk__image-container
  flex: 1
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between

.talk__image
  display: block
  margin: 0 auto
  height: 70px
  width: 70px
  border-radius: 50%
  padding-bottom: 10px

  @media #{$medium-up}
    height: 150px
    width: 150px

.talk__social
  margin-bottom: 10px

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
    padding-bottom: 10px

.talk__author-info
  text-align: center

</style>
