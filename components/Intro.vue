<template lang="pug">
.container__inner
  .section.post-section
    .nav-target#survey
    include:markdown-it ../content/intro.md

    a.post-section__button.button(href="https://docs.google.com/forms/d/e/1FAIpQLSfiRF9JIpvAcWL7EsnpODIhf_JiNX3PETA_S3XnqmtuG2foQA/viewform" target="_blank")
      | Take the survey
</template>

<script>
export default {
}
</script>

<style lang="sass">
</style>
