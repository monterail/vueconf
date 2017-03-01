<template lang="pug">
.container
  .container__inner
    include:markdown-it ../content/terms.md
</template>
<script>
export default {
  head: {
    title: 'VueConf 2017 | Terms & Conditions'
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

h1, h2, h3
  text-align: center

h1, h2
  margin-bottom: 0

h3
  margin-top: 0

a, a:visited
  text-decoration: none
  color: $color-link
</style>
