<template lang="pug">
.hint
  h3.hint__title {{ hint.title }}
  p {{ hint.description }}
  p.hint__instruction(v-if="hint.instruction" v-html="hint.instruction")
  a.button.button--small(v-if="hint.link", :href="hint.link" target="BLANK") WEBPAGE
</template>

<script>
export default {
  props: {
    hint: {
      type: Object
    }
  }
}
</script>

<style lang="sass">
@import ~assets/css/base/helpers

.hint__title
  font-size: 22px


.hint
  padding: 15px 0
  border-bottom: 1px solid #ddd

  .button
    margin: 10px 20px 10px 0

  p
    margin: 0 0 10px
    font-size: 18px

</style>
