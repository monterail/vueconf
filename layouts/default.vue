<template>
<div>
  <navbar></navbar>

  <nuxt></nuxt>

  <footer-section></footer-section>
  <cookies/>
  <splash-video :videoUrl="splashVideoUrl"></splash-video>
</div>
</template>

<script>
import Navbar from '~components/Navbar'
import FooterSection from '~components/Footer'
import Cookies from '~components/Cookies'
import SplashVideo from '~components/SplashVideo'

export default {
  components: { Navbar, FooterSection, Cookies, SplashVideo },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  },
  data() {
    return {
      splashVideoUrl: 'https://www.youtube.com/embed/TsgdiXGWlIY'
    }
  }
}
</script>

<style lang="sass">
@import ~assets/css/style

</style>
