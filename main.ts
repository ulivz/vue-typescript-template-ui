import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import App from './src/component/app';
import * as ElementUI from 'element-ui';
import './theme/index.css';
import routes from './src/routes.ts';

Vue.use(ElementUI);

const router = new VueRouter(routes);

const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
