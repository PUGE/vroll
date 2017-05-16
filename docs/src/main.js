import Vue from 'vue'
import vroll from '../../src/index.js'

import 'github-markdown-css'
import 'highlight.js/styles/github.css'

import App from './App.vue'

Vue.use(vroll)

const rootNode = document.createElement('div')
document.body.appendChild(rootNode)

/* eslint-disable no-new */
new Vue({
  el: rootNode,
  render (h) {
    return h(App)
  }
})
