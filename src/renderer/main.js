import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import {Button, Layout, Menu, Icon, Modal, message} from 'ant-design-vue'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Modal)
Vue.prototype.$message = message
Vue.prototype.$confirm = Modal.confirm

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
