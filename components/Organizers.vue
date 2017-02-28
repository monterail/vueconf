<template lang="pug">
.section.organizers-section.post-section
  .container__inner
    h1
      | People behind the conference

    .organizers
      .organizer
        img.organizer__image(src="~static/img/evan.jpg" alt="Evan You")
        .organizer__title
          | Evan You
        .organizer__social
          a.icon.icon--github(href="https://github.com/yyx990803" target="_blank")
          a.icon.icon--twitter(href="https://twitter.com/youyuxi" target="_blank")

      .organizer.organizer--last
        img.organizer__image(src="~assets/img/damian.jpg" alt="Damian Dulisz")
        .organizer__title
          | Damian Dulisz
        .organizer__social
          a.icon.icon--github(href="https://github.com/shentao" target="_blank")
          a.icon.icon--twitter(href="https://twitter.com/damiandulisz" target="_blank")

      .organizer__company
        .organizer__content
          p.post-section__paragraph
            | Organized and supported by

          a.organizers__logo(href="http://monterail.com?utm_campaign=Vue.js&utm_medium=site&utm_source=vjsconf" target="_blank")
            img(src="~assets/img/monterail-logotype.svg" alt="Monterail")

    .organizers-more
      .organizers-more__text
        | #[a(href="http://monterail.com?utm_campaign=Vue.js&utm_medium=site&utm_source=vjsconf" target="_blank") Monterail] is a #[strong web development and design agency] based in Poland.
        | #[br] And we kinda love #[strong Vue]!
</template>

<script>
export default {
}
</script>

<style lang="sass">
@import ~assets/css/base/helpers

.organizers
  display: flex
  justify-content: space-between
  flex-wrap: wrap

.organizer
  width: 100%
  margin: 10px 0 40px 0

  @media #{$medium-up}
    width: 50%

  @media #{$large-up}
    width: 25%
    margin: 10px 0

.organizer__title
  font-size: 24px
  font-weight: 600
  color: $color-text

.organizer__subtitle
  font-size: 18px
  font-weight: 300
  color: $color-blue

.organizer__image
  max-width: 202px
  margin-bottom: 15px
  border-radius: 300px

.organizer__social
  margin-top: 15px

  .icon--twitter
    margin-left: 15px

.organizers-section
  background-color: $color-section

.organizer__company
  width: 100%
  margin: 10px 0

  @media #{$large-up}
    width: 35%

.organizers__logo
  img
    max-width: 233px
    width: 100%

.organizer__content
  display: inline-block

  @media #{$large-up}
    display: flex
    flex-direction: column
    margin-top: 45px

  .post-section__paragraph
    text-align: center

.organizers-more
  margin-top: 60px

.organizers-more__text,
.organizers-more__button
  margin: 10px 0

  @media #{$large-up}
    display: inline-block
    vertical-align: middle

.organizers-more__text
  font-size: 18px
  font-weight: 300
  color: $color-text
  line-height: 1.4
  text-align: left

  a
    font-weight: 600
    text-decoration: none
    color: $color-red

  @media #{$large-up}
    font-size: 20px
    text-align: center

.organizers-more__button
  background-color: $color-red

  &:hover
    background-color: lighten($color-red, 10%)
</style>
