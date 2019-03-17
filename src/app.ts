// View
import Vue from 'vue'
import App from './App.vue'
import { store } from './util/store'
import VueSocketio from 'vue-socket.io-extended'

var channel = '/mtchannel'

Vue.use(VueSocketio, io(location.protocol + '//' + document.domain + ':' + location.port + channel), { store })


let v = new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')