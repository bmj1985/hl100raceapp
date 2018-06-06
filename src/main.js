import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill'

// import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#A97C54',
    secondary: '#525050',
    accent: '#848181',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    blue: '#5B6789',
    green: '#639D6A',
    taupe: '#CBA37F',
    darkText: '#303131',
    input: '#F6D7BD'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
