import Vue from 'vue'
import Router from 'vue-router'
import axios from "axios";

Vue.use(Router);
const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ './views/index.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
  ]
})

// 解析url参数
function parse_url(url) { //定义函数
  const pattern = /(\w+)=(\w+)/ig; //定义正则表达式
  const parames = {}; //定义数组
  url.replace(pattern, function (a, b, c) {
    parames[b] = c;
  });
  return parames; //返回这个数组.
}


// router.beforeEach((to, from, next) => {
//   // 微信授权登录
//   const appid = 'wx79de2567508f607a';
//   const redirect_uri = encodeURIComponent(window.location.href.split('#')[0]);
//   const scope = 'snsapi_userinfo'
//   // 访问微信授权路径,如授权成功会重定向到redirect_uri
//   const weixinUrl =
//       `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=STATE#wechat_redirect`
//
//   // 获取当前url   取到code
//   const url = window.location.href;
//   const params = parse_url(url);
//
//   if (params.code) {
//     axios({
//       method: 'get',
//       url: 'https://api.scms.sztv.com.cn/api/weixin/userinfo',
//       params: {
//         code: params.code,
//         siteId: 79,
//       }
//     }).then(res => {
//       const { data } = res;
//       if (data.success && data.data) {
//         const { sex, nickname, headimgurl } = data.data;
//         window.sex = sex;
//         window.nickname = nickname;
//         window.headimgurl = headimgurl;
//         sessionStorage.setItem('sex', sex)
//         sessionStorage.setItem('nickname', nickname)
//         sessionStorage.setItem('headimgurl', headimgurl)
//
//         next()
//       } else {
//         // 获取授权
//         window.location.href = weixinUrl;
//       }
//
//       console.log(data)
//     });
//   } else {
//     window.location.href = weixinUrl;
//   }
//
// })

export default router


