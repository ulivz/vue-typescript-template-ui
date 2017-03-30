import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import App from './src/app'
import * as ElementUI from 'element-ui'
import './theme/index.css'
import routes from './src/routes'

Vue.use(ElementUI)
Vue.use(VueRouter)

console.log(routes)

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
