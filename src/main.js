import Vue from 'vue'
<<<<<<< HEAD
import ElementUI from 'element-ui'
// import '../theme/index.css'
import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-default/menu.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerMap from './router.js'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({routes: routerMap})

const app = new Vue({
  router
}).$mount('#app');
=======
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
>>>>>>> init
