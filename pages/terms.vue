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
