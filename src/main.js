import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'babel-polyfill'

import Vuetify from 'vuetify'
import VApp from 'vuetify/es5/components/VApp'
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer'
import VFooter from 'vuetify/es5/components/VFooter'
import VList from 'vuetify/es5/components/VList'
import VBtn from 'vuetify/es5/components/VBtn'
import VIcon from 'vuetify/es5/components/VIcon'
import VGrid from 'vuetify/es5/components/VGrid'
import VToolbar from 'vuetify/es5/components/VToolbar'
import transitions from 'vuetify/es5/components/transitions'
import VForm from 'vuetify/es5/components/VForm'
import VTextField from 'vuetify/es5/components/VTextField'
import VSelect from 'vuetify/es5/components/VSelect'
import VCheckbox from 'vuetify/es5/components/VCheckbox'
import VSwitch from 'vuetify/es5/components/VSwitch'
import VDialog from 'vuetify/es5/components/VDialog'
import VCard from 'vuetify/es5/components/VCard'
import VSubheader from 'vuetify/es5/components/VSubheader'
import VDivider from 'vuetify/es5/components/VDivider'
import VRadioGroup from 'vuetify/es5/components/VRadioGroup'
import VDataTable from 'vuetify/es5/components/VDataTable'
import VTabs from 'vuetify/es5/components/VTabs'
import VChip from 'vuetify/es5/components/VChip'

import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    Vuetify,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VForm,
    VTextField,
    VSelect,
    VCheckbox,
    VSwitch,
    VDialog,
    VCard,
    VSubheader,
    VDivider,
    VRadioGroup,
    VDataTable,
    VTabs,
    VChip
  },
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
