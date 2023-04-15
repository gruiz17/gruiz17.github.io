<script>
  import {
    faHandPeace,
    faWrench,
    faGamepad,
    faDumbbell,
    faEnvelopeOpenText,
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faLinkedin,
    faJsSquare,
    faVuejs,
    faReact,
    faAngular,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
</script>

<div class="home">
  <div class="main-header">Gabriel Ruiz.</div>
  <div class="description">
    <FontAwesomeIcon icon={faHandPeace} size="lg" />&nbsp;&nbsp;Hello! I'm
    <span style="font-weight: 600">Gabriel Ruiz</span>. (Do you want to
    <a href="/projects">see my projects?</a>)
  </div>
  <div class="description">
    <FontAwesomeIcon icon={faLinkedin} size="lg" />&nbsp;&nbsp;I currently work
    for LinkedIn.
  </div>
  <div class="description">
    <FontAwesomeIcon icon={faJsSquare} size="lg" />&nbsp;&nbsp;I'm primarily a
    <span style="font-weight: 600">front-end developer</span>. I'm passionate
    about JavaScript and making good interfaces for users.
  </div>
  <div class="description">
    <FontAwesomeIcon icon={faVuejs} size="lg" />
    <FontAwesomeIcon icon={faReact} size="lg" />
    <FontAwesomeIcon icon={faAngular} size="lg" />
    I don't discriminate between JavaScript frameworks. I've worked with so many
    in the past -- Vue.js, React, Angular, Ember, etc. Though this site is built with the very excellent
    <a href="https://kit.svelte.dev//">Svelte</a>! (specifically, SvelteKit)<br />
  </div>
  <div class="description">
    <FontAwesomeIcon icon={faWrench} size="lg" />&nbsp;&nbsp;I do
    <span style="font-weight: 600">back-end</span>
    stuff too! I have worked on
    <span style="font-weight: 600">Ruby on Rails</span>,
    <span style="font-weight: 600">Python</span>
    and <span style="font-weight: 600">Golang</span> projects.
  </div>
  <div class="description" style="margin-bottom: 10px;">
    <FontAwesomeIcon
      icon={faDumbbell}
      size="lg"
    />&nbsp;&nbsp; I don't just code! In my spare time, I like to do random
    athletic things. I really enjoy
    <span style="font-weight: 600">tennis</span>
    and <span style="font-weight: 600">powerlifting</span> in particular.
  </div>
  <hr style="width: 300px; margin-bottom: 16px;" />
  <div class="social">
    <div style="margin-bottom: 16px;">
      <span style="font-weight: 600">Let's get in touch!</span> I'm on:
    </div>
    <div class="social-grid">
      <FontAwesomeIcon icon={faEnvelopeOpenText} size="lg" />
      <div>Email: <a href="mailto:gabe@ggruiz.me">gabe@ggruiz.me</a></div>
      <FontAwesomeIcon icon={faLinkedin} size="lg" />
      <div>
        LinkedIn: <a href="https://www.linkedin.com/in/ggruiz/">@ggruiz</a>
      </div>
      <FontAwesomeIcon icon={faGithub} size="lg" />
      <div>GitHub: <a href="https://github.com/gruiz17">@gruiz17</a></div>
    </div>
  </div>
</div>

<style lang="scss">
  .home {
    font-family: Arial, Helvetica, sans-serif;
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
  .description:first-child {
    margin-right: 8px;
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
