import Vue from 'vue'
import App from './App.vue'
import imgPreview from '../../index'
Vue.use(imgPreview)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
