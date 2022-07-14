import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

import zhHant from '@/i18n/vuetify/zhHant'

/*Vue.component('lang-component', {
  methods: {
    changeLocale(val) {
      this.$vuetify.lang.current = val
    },
  },
})*/

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  lang: {
    locales: { zhHant },
    current: 'zhHant'
  },
})
