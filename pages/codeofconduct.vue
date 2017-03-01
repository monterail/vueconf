<template lang="pug">
.container
  .container__inner
    include:markdown-it ../content/coc.md
</template>
<script>
export default {
  head: {
    title: 'VueConf 2017 | Code of Conduct'
  }
}
</script>

<style lang="sass" scoped>
h1, h2, h3
  text-align: center

h1, h2
  margin-bottom: 0

h3
  margin-top: 0
</style>
