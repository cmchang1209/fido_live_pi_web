import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import globalFunction from './plugins/global'

Vue.config.productionTip = false

Vue.use(globalFunction)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
