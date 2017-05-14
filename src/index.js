import IScrollView from './index.vue'
import IScroll from './iscroll-lite.js'
export default {
  install (Vue, options = {}) {
    Vue._IScroll = IScroll
    Vue.component('iscroll-view', IScrollView)
  }
}