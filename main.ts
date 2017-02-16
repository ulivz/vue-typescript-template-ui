import * as Vue from 'vue';
import App from './src/component/app.ts';
import * as ElementUI from 'element-ui';
import './theme/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
