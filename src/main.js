import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress'
// import VueTouch from 'vue-touch'
// Vue.use(VueTouch, {name: 'v-touch'})


import 'normalize.css'
import 'animate.css'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false;

// 配置页面加载过度条
router.beforeEach((to,from,next) => {
  NProgress.start();
  next()
});
router.afterEach(() => {
  NProgress.done()
});

// 添加bus集中处理简单的非父子组件通信,不建议依赖此功能,复杂情况应该走vuex
const Bus = new Vue();

const $vue = new Vue({
  data: {
    Bus,
  },
  router,
  render: h => h(App)
}).$mount('#app');

window.$vue = $vue;
