<template lang="pug">
.container
  pre.
    | {{ data[0].user }}
  .container__inner
    include:markdown-it ../content/terms.md
</template>
<script>
import axios from 'axios'

export default {
  async data () {
    let { data } = await axios.get('https://api.github.com/repos/monterail/vue-multiselect/issues?state=open')
    return {
      data
    }
  },
  head: {
    title: 'VueConf 2017 | Terms & Conditions'
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
