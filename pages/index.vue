<template>
  <div class="home">
    <div class="main-header">
      Gabriel Ruiz.
    </div>
    <div class="description">
      <font-awesome-icon
        :icon="['far', 'hand-peace']"
        size="lg"
      />&nbsp;&nbsp;Hello! I'm
      <span style="font-weight: 600">Gabriel Ruiz</span>.
      (Do you want to 
      <nuxt-link to="/projects">
      see my projects?
      </nuxt-link>)
    </div>
    <div class="description">
      <font-awesome-icon
        :icon="['fab', 'js-square']"
        size="lg"
      />&nbsp;&nbsp;I'm primarily a
      <span style="font-weight: 600">front-end developer</span>. I've worked
      with a lot of JavaScript libraries and frameworks --
      <span style="font-weight: 600">
        React, Redux, d3.js, Angular, jQuery, Bootstrap
      </span>
      , and more.
    </div>
    <div class="description">
      <font-awesome-icon :icon="['fab', 'vuejs']" size="lg" />&nbsp;&nbsp;My
      favorite is <span style="font-weight: 600">Vue.js</span>, though. In fact,
      this page you're on now is built with it (+the excellent <a href="https://nuxtjs.org/">Nuxt.js</a>)!<br> I use Vue.js a lot in my work, along
      with <span style="font-weight: 600">Vuex</span>.
    </div>
    <div class="description">
      <font-awesome-icon :icon="['fas', 'wrench']" size="lg" />&nbsp;&nbsp;I do
      back-end stuff too! I work a lot with
      <span style="font-weight: 600">Ruby on Rails</span> right now, but I've
      also worked with <span style="font-weight: 600">Python</span> and
      <span style="font-weight: 600">Golang</span>.
    </div>
    <div class="description" style="margin-bottom: 10px;">
      <font-awesome-icon
        :icon="['fas', 'running']"
        size="lg"
      />&nbsp;<font-awesome-icon
        :icon="['fas', 'dumbbell']"
        size="lg"
      />&nbsp;&nbsp; I don't just code! In my spare time, I like to do random
      athletic things. I really enjoy
      <span style="font-weight: 600">long-distance running</span> and
      <span style="font-weight: 600">powerlifting</span> in particular.
    </div>
    <hr style="width: 300px; margin-bottom: 16px;" >
    <div class="social">
      <div style="margin-bottom: 16px;">
        <span style="font-weight: 600">Let's get in touch!</span> I'm on:
      </div>
      <div class="social-grid">
        <font-awesome-icon :icon="['fas', 'envelope-open-text']" size="lg" />
        <div>Email: <a href="mailto:gabe@ggruiz.me">gabe@ggruiz.me</a></div>
        <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
        <div>
          LinkedIn: <a href="https://www.linkedin.com/in/ggruiz/">@ggruiz</a>
        </div>
        <font-awesome-icon :icon="['fab', 'github']" size="lg" />
        <div>GitHub: <a href="https://github.com/gruiz17">@gruiz17</a></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Index',
  components: {}
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    max-width: 400px;
    margin-bottom: 16px;
  }
}

@media screen and (min-width: 400px) {
  .home {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
      width: 400px !important;
      margin-bottom: 16px;
    }
  }
}

.main-header {
  margin-bottom: 16px;
}

.social-grid {
  display: grid;
  grid-template-columns: 1fr 11fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
}
</style>
