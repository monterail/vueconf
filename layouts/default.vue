<template>
<div>
  <input id="burger-target" type="checkbox"/>
  <navbar></navbar>

  <nuxt></nuxt>

  <div class="container__inner">
    <footer-section></footer-section>
  </div>
  <cookies/>
</div>
</template>

<script>
import Navbar from '~components/Navbar'
import FooterSection from '~components/Footer'
import Cookies from '~components/Cookies'

export default {
  components: { Navbar, FooterSection, Cookies },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  }
}
</script>

<style lang="sass">
@import ~assets/css/style

</style>
