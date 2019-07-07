import Vue from 'vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faHandPeace } from '@fortawesome/free-regular-svg-icons'
import {
  faWrench,
  faRunning,
  faDumbbell,
  faEnvelopeOpenText
} from '@fortawesome/free-solid-svg-icons'
import {
  faVuejs,
  faJsSquare,
  faReact,
  faCss3Alt,
  faAngular,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

library.add(
  faHandPeace,
  faVuejs,
  faJsSquare,
  faReact,
  faCss3Alt,
  faAngular,
  faWrench,
  faRunning,
  faDumbbell,
  faLinkedin,
  faGithub,
  faEnvelopeOpenText
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
