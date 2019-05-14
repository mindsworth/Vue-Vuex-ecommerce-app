import Vue from 'vue'
import App from './App.vue'
import 'tachyons'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
