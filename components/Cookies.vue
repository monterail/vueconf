<template lang="pug">
.cookies__container(v-show="!cookiesAccepted")
  p.cookies__message
    | We use cookies to provide you with better user experience and for statistical purposes. You can block cookies by adjusting settings on your browser. If you do not block cookies, you give your consent to use them and store them in the memory of your device. For more information see our
    = " "
    a.cookie__link(href="https://conf.vuejs.org/privatepolicy") Privacy Policy
    | .
  button.button(type="button", @click="acceptCookies") Accept
</template>

<script>
export default {
  data () {
    return {
      cookiesAccepted: true
    }
  },
  methods: {
    acceptCookies () {
      this.$cookie.set('cookiesAccepted', true)
      this.cookiesAccepted = true
    }
  },
  created () {
    if (process.BROWSER_BUILD) {
      this.cookiesAccepted = !!this.$cookie.get('cookiesAccepted')
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.cookies__container
  position: fixed
  bottom: 0
  left: 0
  right: 0
  background: #fff
  padding: 20px

.cookies__message
  font-size: 16px
  display: inline-block
  margin: 0

  @media #{$medium-up}
    max-width: calc(100% - 100px)

.button
  padding: 8px 15px
  font-size: 16px
  float: right
  display: inline-block
  margin-top: 10px
</style>
