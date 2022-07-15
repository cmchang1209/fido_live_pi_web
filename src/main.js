import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import globalFunction from './plugins/global'
import "webrtc-streamer/html/libs/adapter.min"
import "webrtc-streamer/html/webrtcstreamer"

Vue.config.productionTip = false


Vue.use(globalFunction)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
