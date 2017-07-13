<template lang="pug">
  .video-nav
    h3 All talks
    ul.video-nav__list
      li.video-nav__list-elem(v-for="talk in talks", @click="talkSelected(talk)", :class="{selected: isSelected(talk)}")
        .avatars
          .avatar(v-for="av in talk.avatar", :style="{backgroundImage: `url(${av})`}")
        .desc
          .desc__speaker {{talk.speaker}}
          .desc__talk-name {{talk.name}}
</template>
<script>
export default {
  props: {
    talks: {
      type: Array,
      required: true,
    },
    selectedTalk: {
      type: Object,
      required: true,
    }
  },
  methods: {
    talkSelected(talk) {
      this.$emit('talk:selected', talk)
    },
    isSelected(talk) {
      return talk === this.selectedTalk
    }
  }
}
</script>
<style lang="sass" scoped>
  @import ~assets/css/base/helpers

  .video-nav
    background: white
    height: 100%
    border-radius: 0 5px 5px 0
    display: flex
    flex-direction: column

    h3
      margin: 0
      font-weight: 300
      padding: 6px 0
      width: 100%
      border-bottom: 1px solid rgba(50, 50, 93, 0.05)

  .video-nav__list
    overflow-y: scroll
    height: 316px
    flex-grow: 1
    list-style-type: none
    margin: 0
    padding: 0

  .video-nav__list-elem
    width: 100%
    height: 100px
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-items: center
    position: relative
    cursor: pointer
    transition: all 0.2s ease

    &.selected
      background-color: $color-vue-green
      color: white

    &:not(:last-child)::after
      content: ""
      position: absolute
      bottom: 0
      left: calc(50% - 25px)
      width: 50px
      height: 1px
      background-color: rgba(50, 50, 93, 0.05)


  .avatars
    min-width: 100px
    height: 100px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    .avatar
      min-width: 48px
      min-height: 48px
      background-size: cover
      border-radius: 50%

      &:last-child:not(:first-child)
        margin-top: -10px


  .desc
    text-align: left

  .desc__speaker
    font-size: 16px

  .desc__talk-name
    font-size: 12px
</style>
