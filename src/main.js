import Vue from 'vue'
import App from './app4/App.vue'
import '@/assets/main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
