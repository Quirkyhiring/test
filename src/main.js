import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
import './assets/css/global.css'


import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
