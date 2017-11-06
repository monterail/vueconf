<template lang='pug'>
.site
  header.hero
    img.logo(src="~assets/img/announcement/big-bg-logo.svg")
    .hero-text
      img.h1(src="~assets/img/announcement/vueconf-title.svg")
      h2.h2 will be back in 2018
  .container__inner
    subscription.test
    article.article
      .text
        p.p
          | Monterail together with Evan You are working on
          | combining the best Vue-related talks into one
          | awesome conference. We set ourselves a high
          | target, but... let's make the next edition even better
          | then 2017!
      .video
        iframe(
          width="960"
          height="550"
          :src="videoUrl"
          frameborder="0"
          allowfullscreen
        )
      .text
        p.p
          | Our event was created for like-minded people who
          | love what they do and always crave to learn
          | somthing new.
        p.p
          | As VueConf attendee you'll have all insights from
          | world-class experts at your fingertips you need as a
          | savvy developer. As organizers we make sure all
          | presentations brings value to the audience. No
          | sales/marketing talks. Just pure knowledge.
    subscription(:info='false')
    footer.footer
      img.img(src="~assets/img/announcement/vueconf-logo-horizontal-white.svg")
</template>

<script>
import logo from './logo'
import subscription from './subscription'
import { Shape } from './helper'

export default {
  components: { logo, subscription },
  data() {
    return {
      videoUrl: `https://www.youtube.com/watch?v=TsgdiXGWlIY`
    }
  },
  mounted() {
    const site = document.getElementsByClassName("site");
    const total_bubbles = 100;

    for (let i = 0; i < total_bubbles; i++) {
      const shape = new Shape()
      const { className, background, transform, posX, posY } = shape

      const div = document.createElement("div")
      div.className = className
      div.style.background = background
      div.style.transform = transform
      div.style.top = posY
      div.style.left = posX

      site[0].appendChild(div)
    }
  }
}
</script>

<style>
.bubble {
  width: 15px;
  height: 15px;
  display: block;
  position: absolute;
}
</style>

<style lang="scss" scoped>

.site {
  color: white;
  position: relative;
  overflow: hidden;
  background-color: #34495f;
}

.hero {
  display: center;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.logo {
  height: 100vh;
  margin: 0 auto;
  display: flex;
}

.hero-text {
  position: absolute;
  left: 50%;
  top: 63%;
  transform: translate(-50%, -63%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}

.h1 {
  margin-bottom: 45px;
  max-width: 960px;
}

.h2 {
  margin: 0;
  font-size: 48px;
  font-family: 'Montserrat';
}

.subscription {
  margin-top: 80px;
}

.article {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.text {
  width: 630px;
  margin-top: 100px;
  background-color: #354A5E;
  z-index: 1;
}

.p {
  margin: 0;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: 300;
	line-height: 1.7;
	letter-spacing: 0.6px;
}

.video {
  border: 0 solid #000;
  border-radius: 20px;
  overflow: hidden;
  width: 960px;
  height: 550px;
  box-shadow: 0px 0px 31px 0px rgba(0,0,0,0.75);
  margin: 40px;
  z-index: 1;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 340px;
}

.img {
  width: 300px;
}
</style>

<!-- nuxt-link(to="/2017")
 button visit vueconf 2017
  | test -->
