<template lang="pug">
.section.post-section.cfp-section
  .nav-target#apply
  .center
    include:markdown-it ../content/speakers/cfp.md

    a.post-section__button.button(href="https://docs.google.com/forms/d/e/1FAIpQLSdtbxBpV0j_zCnELXQuIkeGH8x6gaOWE0J8tTsAdpa0O5MYOw/viewform" target="_blank")
      | Apply as a speaker

    p.post-section__paragraph
      | We will come back to you within a few days.
</template>

<script>
export default {
}
</script>

<style lang="sass">
</style>
