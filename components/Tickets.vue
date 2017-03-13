<template lang="pug">
.section.ticket-section
  .container__inner
    .nav-target#tickets
    h1 Tickets
    .ticket(v-for="ticket in tickets")
      span.ticket__name {{ ticket.name }}
        span.ticket__date {{ ticket.date }}
      a.button.button--dark.ticket__price(
        href="https://events.zippydesk.com/vueconf-2017/register",
        @click="trackTicketsEvent"
      )
        | {{ ticket.price }}
</template>

<script>
import tickets from '../content/tickets'

export default {
  data () {
    return {
      tickets
    }
  },
  methods: {
    trackTicketsEvent (event) {
      ga('send', 'event', {
        eventAction: 'click',
        eventLabel: event.target.href,
        eventCategory: 'Tickets link',
        transport: 'beacon'
      })
      _pq.push(['track', 'GoToTickets'])
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.ticket-section
  background-color: $color-green--dark
  text-align: center

  h1
    color: #fff

.button[disabled]
  background: #ddd
  pointer-events: none

.ticket
  margin: 0 auto
  text-align: left
  max-width: 600px
  background: #fff
  margin-bottom: 20px
  border-radius: 5px
  padding: 15px
  text-align: center

  @media #{$medium-up}
    text-align: left
    padding: 7px 7px 7px 40px
    border-radius: 50px
    display: flex
    justify-content: space-between

    .button--dark
      margin-top: 0

.ticket__name
  padding-right: 20px
  line-height: 43px
  font-size: 22px

.tickets__info
  color: #fff
  margin-top: 10px
  font-weight: 300

.ticket__date
  padding-left: 10px
  color: #bbb
  line-height: 43px
  font-size: 18px

.ticket__price
  display: inline-block
  font-size: 22px
  vertical-align: middle

.button--dark
  font-size: 18px
  line-height: 22px
  margin-top: 10px
</style>
