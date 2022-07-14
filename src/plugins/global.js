export default {
  install(Vue) {
    // 1. add global method or property
    /*Vue.myGlobalMethod = function() {
       some logic ...
    }*/

    // 2. add a global asset
    /*Vue.directive('my-directive', {
      bind(el, binding, vnode, oldVnode) {
         some logic ...
      }
      ...
    })*/

    // 3. inject some component options
    /*Vue.mixin({
      created: function() {
         some logic ...
      }
      ...
    })*/

    // 4. add an instance method
    Vue.prototype.$t = function(val) {
      return this.$vuetify.lang.translator(val)
    }
  }
}
