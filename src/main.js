import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App) // renders the app file into index.html (public)
}).$mount('#app')
