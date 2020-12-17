import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router/router.js'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    loggedIn:false,
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
