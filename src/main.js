import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import './theme/theme.less'
import router from './router/index'
import './base'
import VueCookies from 'vue-cookies'
import VueProgressBar from 'vue-progressbar'
Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueCookies)
Vue.use(VueProgressBar, {
  color: '#1890ff',
  failedColor: 'red',
  height: '2px'
})
export default new Vue({
  ...App,
  router,
  render: h => h(App)
}).$mount('#app')
