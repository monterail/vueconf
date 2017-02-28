<template lang="pug">
.section.ticket-section
  .container__inner
    .nav-target#tickets
    h1 Tickets
    .ticket
      span.ticket__name Super Early Bird
        span.ticket__date (22-23 June)
      button.button.button--dark.ticket__price Buy for € 199
    .ticket
      span.ticket__name Early Bird
        span.ticket__date (22-23 June)
      button.button.button--dark.ticket__price Buy for € 249
</template>

<script>
export default {
}
</script>

<style lang="sass">
@import ~assets/css/base/helpers

.ticket-section
  background-color: $color-green--dark
  text-align: center

  h1
    color: #fff

.ticket
  display: flex
  justify-content: space-between
  margin: 0 auto
  text-align: left
  max-width: 600px
  background: #fff
  padding: 7px 7px 7px 40px
  border-radius: 50px
  margin-bottom: 20px

.ticket__name
  padding-right: 20px
  line-height: 49px
  font-size: 22px

.ticket__date
  padding-left: 10px
  color: #bbb
  line-height: 49px
  font-size: 18px

.ticket__price
  display: inline-block
  font-size: 22px
  vertical-align: middle
</style>
