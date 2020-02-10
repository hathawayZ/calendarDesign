import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
Vue.use(ElementUI, {
  size: 'small'
});

import axios from 'axios';
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')