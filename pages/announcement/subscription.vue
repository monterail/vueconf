<template lang='pug'>
  section.subscription
    .input-wrapper
      form(
        action="https://www.getrevue.co/profile/vuenewsletter/add_subscriber"
        id="revue-form"
        method="post"
        name="revue-form"
        target="_blank"
      )
        input.input(
          autocomplete="off"
          id="member_email"
          name="member[email]"
          placeholder='Please enter your email adress'
          required
          type="email"
        )
        button.input__button(
          @click="trackNewsletterEvent"
          id="member_submit",
          name="member[subscribe]",
          type="submit",
          value="Subscribe",
        ) send me updates
    small.small(v-if='info') (We'll send you a special Early Bird offer once it's available)
</template>

  input.button.button--dark(

  )


<script>
export default {
  props: {
    info: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.subscription {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-wrapper {
  background-color: #222F3C;
  border-radius: 5px;
  padding: 3px;
  z-index: 1;
}

.input {
  background-color: transparent;
  border: none;
  outline: none;
  width: 350px;
  padding: 3px 7px;
}

.input__button {
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 15px;
  text-transform: uppercase;
  background-color: #33B077;
  outline: none;
}

.small {
  margin-top: 10px;
  color: #B9BEC4;
  background-color: #354A5E;
  z-index: 1;
  font-family: 'Open Sans';
}
</style>
