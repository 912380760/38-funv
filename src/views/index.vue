<template>
  <div class="home">
    <!--    预加载图片-->
    <img src="../assets/bg2@2x.gif" alt="" style="display: none;">
    <img src="../assets/bg3@2x.png" alt="" style="display: none;">
    <img src="../assets/bg4@2x.png" alt="" style="display: none;">
    <img src="../assets/bg@2x.gif" alt="" style="display: none;">
    <img src="../assets/button1@2x.png" alt="" style="display: none;">
    <img src="../assets/button2@2x.png" alt="" style="display: none;">
    <img src="../assets/button3@2x.png" alt="" style="display: none;">
    <img src="../assets/button@2x.png" alt="" style="display: none;">
    <img src="../assets/p1动画.gif" alt="" style="display: none;">
    <img src="../assets/p2动画.gif" alt="" style="display: none;">
    <img src="../assets/关闭.png" alt="" style="display: none;">
    <img src="../assets/分享图片.png" alt="" style="display: none;">
    <img src="../assets/向警予@2x.png" alt="" style="display: none;">
    <img src="../assets/女企业家@2x.png" alt="" style="display: none;">
    <img src="../assets/女儿@2x.png" alt="" style="display: none;">
    <img src="../assets/女党员@2x.png" alt="" style="display: none;">
    <img src="../assets/女声@2x.png" alt="" style="display: none;">
    <img src="../assets/女程序员@2x.png" alt="" style="display: none;">
    <img src="../assets/屠呦呦@2x.png" alt="" style="display: none;">
    <img src="../assets/张桂梅@2x.png" alt="" style="display: none;">
    <img src="../assets/标题@2x.png" alt="" style="display: none;">
    <img src="../assets/深圳女孩@2x.png" alt="" style="display: none;">
    <img src="../assets/深圳小女孩@2x.png" alt="" style="display: none;">
    <img src="../assets/网红女主播@2x.png" alt="" style="display: none;">
    <img src="../assets/赵一曼@2x.png" alt="" style="display: none;">
    <img src="../assets/选中.png" alt="" style="display: none;">
    <img src="../assets/郎平@2x.png" alt="" style="display: none;">
    <img src="../assets/陈铁军@2x.png" alt="" style="display: none;">
    <img src="../assets/音乐icon.png" alt="" style="display: none;">
    <img src="../assets/麦克风.png" alt="" style="display: none;">

    <div class="bgm-btn" id="bgm-btn" :class="{active: audio}" @click="audioClick">
      <audio id="audio" loop autoplay preload>
        <source src="../assets/30秒片头音乐.mp3">
      </audio>

      <!--    预加载音乐-->
      <audio id="musicId0"  preload>
        <source src="../assets/录音/赵一曼.mp3">
      </audio>
      <audio id="musicId1"  preload>
        <source src="../assets/录音/陈铁军.mp3">
      </audio>
      <audio id="musicId2"  preload>
        <source src="../assets/录音/向警予.mp3">
      </audio>
      <audio id="musicId3"  preload>
        <source src="../assets/录音/郎平.mp3">
      </audio>
      <audio id="musicId4"  preload>
        <source src="../assets/录音/女党员-唱支山歌给党听.mp3">
      </audio>
      <audio id="musicId5"  preload>
        <source src="../assets/录音/女企业家.mp3">
      </audio>
      <audio id="musicId6"  preload>
        <source src="../assets/录音/女儿.mp3">
      </audio>
      <audio id="musicId7"  preload>
        <source src="../assets/录音/女声.mp3">
      </audio>
      <audio id="musicId8"  preload>
        <source src="../assets/录音/深圳女孩.mp3">
      </audio>
      <audio id="musicId9"  preload>
        <source src="../assets/录音/深圳小女孩.mp3">
      </audio>
      <audio id="musicId10"  preload>
        <source src="../assets/录音/女程序员.mp3">
      </audio>
      <audio id="musicId11"  preload>
        <source src="../assets/录音2/张桂梅.mp3">
      </audio>
      <audio id="musicId12"  preload>
        <source src="../assets/录音2/女主播.mp3">
      </audio>
      <audio id="musicId13"  preload>
        <source src="../assets/录音2/屠呦呦.mp3">
      </audio>
    </div>

    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutUp"
    >
<!--      page1-->
      <div id="page1" v-if="active === 'page1'">
        <div class="title animated pulse"></div>
        <div class="btn animated pulse" @click="handleClick">点击聆听</div>
      </div>
    </transition>

    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutUp"
    >
      <!--      page2-->
      <div id="page2" v-if="active === 'page2'">
        <div class="btn animated pulse" @click="handleClick2">选择捞起</div>
        <div
            :class="'select ' + i.name + (i.active ? ' active' : '')"
            :style="{
              width: i.size * ratio.width / 2 + 'px',
              height: i.size * ratio.width / 2 + 'px',
              left: i.left * ratio.width / 2 + 'px',
              top: i.top * ratio.height / 2 + 'px',
            }"
            :key="index"
            v-for="(i,index) in selectList"
            @click="handleSelect(index)"
        >
        </div>
        <div class="dialog" v-if="audioModule" :class="{show: dialog}">
          <div :class="'bg' + ' musicList' + this.random">
          <!--音谱-->
            <div :style="{
              width: 428 / 2 * ratio.width + 'px',
              left: 160 / 2 * ratio.width + 'px',
              bottom: 234 / 2 * ratio.height + 'px'
            }" id="waveform"></div>
            <!--遮罩为了挡住音谱-->
            <div class="mask-waveform" :style="{
              width: 428 / 2 * ratio.width + 'px',
              left: 160 / 2 * ratio.width + 'px',
              bottom: 234 / 2 * ratio.height + 'px',
              height: 110 / 2 * ratio.height + 'px'}"></div>
          </div>
          <div class="btn-list">
            <div class="btn1" @click="dialogClose">继续捞起</div>
            <div class="btn2" @click="handleClick3">分享您的心声</div>
          </div>
        </div>
      </div>
    </transition>

    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutUp"
    >
      <div id="page3" v-if="active === 'page3'">
        <div class="h1">
          <span class="nickName">{{ nickname + ' ' }}</span>
          聆听了<span class="num">{{ num + '个' }}</span>声音漂流瓶
        </div>
        <div class="h2" :style="{
          top: 116 / 2 * ratio.height + 'px'
        }">收获关键词</div>
        <div class="keyword-list" :style="{
          top: 225 / 2 * ratio.height + 'px',
          left: 125 / 2 * ratio.width + 'px'
        }">
          <div class="keyword" :style="{
            'margin-right': 50 / 2 * ratio.width + 'px'
          }" :key="index" v-for="(i, index) in keyword">{{ i }}</div>
        </div>
        <div class="share-btn" id="share-btn" @click="fenxiang">分享并转发</div>

        <div class="recording">
          <img class="recording-img" @click="recording" src="../assets/button@2x.png" alt="">
          <div class="recording-text">
            长按录制 <br/>
            为您的美好发声
          </div>
        </div>
        <div class="left-bottom-text">
          您的心声，有可能被收录进 <br/>
          深圳市妇联博物馆
        </div>
        <div class="right-bottom-text" :style="{
          right: 89 / 2 * ratio.width + 'px',
          bottom: 162 / 2 * ratio.height + 'px',
          'line-height': 38 / 2 * ratio.height + 'px'
        }">扫一扫看深圳女声</div>

<!--        录音弹窗-->
        <div class="mask-share" v-if="recordActive">
          <div class="mask" @click="closeMask2"></div>
          <div class="record-box animated zoomIn">
            <img class="close" @click="closeMask2" src="../assets/关闭.png" alt="">
            <img src="../assets/麦克风.png" class="maiKeFen" alt="">
            <div class="time-box">
              00:00
            </div>
            <div class="button-box">
              <div class="button-box-1" @click="countdown">开始录音</div>
              <div class="button-box-2" @click="stopCountdown">结束保存</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
<!--    分享遮罩-->
    <div class="mask-share" v-if="mask" >
      <div class="mask" @click="closeMask"></div>
      <div id="fenxiangImg"></div>
    </div>

<!--    IOS分享遮罩2-->
    <div class="mask-share" v-if="mask2" @click="mask2 = false">
      <div class="mask"></div>
      <img class="tips" src="../assets/分享图片.png" alt="" />
    </div>
  </div>
</template>

<script>
let u = navigator.userAgent;
const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1

import axios from 'axios'
import wx from 'weixin-js-sdk';
import WaveSurfer from 'wavesurfer.js';
import html2canvas from 'html2canvas';
// import Vsconsole from 'vconsole'
// new Vsconsole()

// 录音
import audio0 from '../assets/录音/赵一曼.mp3'
import audio1 from '../assets/录音/陈铁军.mp3'
import audio2 from '../assets/录音/向警予.mp3'
import audio3 from '../assets/录音/郎平.mp3'
import audio4 from '../assets/录音/女党员-唱支山歌给党听.mp3'
import audio5 from '../assets/录音/女企业家.mp3'
import audio6 from '../assets/录音/女儿.mp3'
import audio7 from '../assets/录音/女声.mp3'
import audio8 from '../assets/录音/深圳女孩.mp3'
import audio9 from '../assets/录音/深圳小女孩.mp3'
import audio10 from '../assets/录音/女程序员.mp3'
import audio11 from '../assets/录音2/张桂梅.mp3'
import audio12 from '../assets/录音2/女主播.mp3'
import audio13 from '../assets/录音2/屠呦呦.mp3'

// const random = Math.floor(Math.random() * 3) + 1
/**
 * 获取随机数
 * @param random 排除随机数
 * @return {*|number}
 */
function getRandom(excluded, max) {
  const random = Math.floor(Math.random() * max)
  if(excluded) {
    if(excluded === random) {
      return getRandom(excluded, max)
    } else {
      return random
    }
  }

  return random
}

/**
 * str 倒计时时间
 * dom 倒计时显示元素
 * 创建倒计时
 */
function countTime(str, dom) {
  calcTime(str, dom)
  //递归每秒调用countTime方法，显示动态时间效果
  const intervalId = setInterval(function() {
    calcTime(str, dom)
  }, 1000)
  return  intervalId
}

// 计算时间
function calcTime(str, dom) {
  //获取当前时间
  var date = new Date();
  var now = date.getTime();
  //设置截止时间
  var endDate = new Date(str);
  var end = endDate.getTime();

  //时间差
  var leftTime = now-end;
  //定义变量 h,m,s保存倒计时的时间
  var h,m,s;
  if (leftTime>=0) {
    h = Math.floor(leftTime/1000/60/60%24) < 10 ? '0' + Math.floor(leftTime/1000/60/60%24) : Math.floor(leftTime/1000/60/60%24);
    m = Math.floor(leftTime/1000/60%60) < 10 ? '0' + Math.floor(leftTime/1000/60%60) : Math.floor(leftTime/1000/60%60);
    s = Math.floor(leftTime/1000%60) < 10 ? '0' + Math.floor(leftTime/1000%60) : Math.floor(leftTime/1000%60);
  } else {
    m = 0;
    s = 0;
  }
  //将倒计时赋值到dom中
  $(dom).text(m + ":" + s)
}

/**
 * 清除定时器
 */
function clearCountTime(intervalId) {
  clearInterval(intervalId)
}

export default {
  name: 'home',
  data() {
    return {
      nickname: sessionStorage.getItem('nickname'),
      userImage: 'page-female1',

      audio: false, // 音乐是否播放背景音乐
      // 计算长宽比
      ratio: {
        width: document.body.clientWidth / 375,
        height: document.body.clientHeight / 667,
      },
      // 当前页面
      active: 'page1',

      audioModule: false,

      // 选中瓶子
      selectActive: undefined,
      dialog: false,
      // 随机播放ID
      random: undefined,
      // 计算用户捞了多少个漂流瓶
      num: 0,
      keywordList: [
          '热爱', '勇敢', '阳光', '善良', '坚强', '认真', '耐心', '细致', '担当', '谦逊', '可爱', '执着', '创新', '真诚', '独立'
      ],
      keyword: ['热爱', '勇敢', '阳光'],
      selectList: [
        {size: 170, name: 'select1', top: 385, left: 133, active: false},
        {size: 170, name: 'select2', top: 395, left: 465, active: false},
        {size: 190, name: 'select3', top: 575, left: 45, active: false},
        {size: 190, name: 'select4', top: 520, left: 305, active: false},
        {size: 160, name: 'select5', top: 555, left: 540, active: false},
        {size: 190, name: 'select6', top: 700, left: 185, active: false},
        {size: 170, name: 'select7', top: 690, left: 460, active: false},
        {size: 190, name: 'select8', top: 870, left: 75, active: false},
        {size: 180, name: 'select9', top: 850, left: 330, active: false},
        {size: 190, name: 'select10', top: 850, left: 520, active: false},
      ],

      // 分享遮罩
      mask: false,
      mask2: false,
      recordActive: false,
      // 录音定时器ID
      intervalId: undefined,
      imgUrl: '',
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    handleSelect(index) {
      this.selectActive = index;
      const newArray = this.selectList.map(ele => {
        ele.active = false
        return ele
      });
      newArray[index].active = true;
      this.selectList = newArray
    },
    // 初始化播放器
    init(file) {
      const wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#ccc',
        progressColor: '#cc3e93',
        height: 110 / 2 * this.ratio.height,
        cursorColor: 'transparent'
      });
      wavesurfer.on('ready', function () {
        console.log('初始化成功')
        // wavesurfer.play();
      });
      wavesurfer.load(file);
      this.wavesurfer = wavesurfer;
    },

    // 点击聆听
    handleClick() {
      this.active = 'page2';
      const audioElement = document.getElementById('audio');
      audioElement.play();
      this.audio = true;

      this.random = getRandom(this.random, 13);
      const audioFile = this.getAudio(this.random)
      console.log(audioFile)

      setTimeout(() => {
        this.audioModule = true
      }, 1000)
      setTimeout(() => {

        this.init(audioFile)
      }, 1200)
    },
    // 获取音频文件
    getAudio(random) {
      let audio;
      switch (random) {
        case 0:
          audio = audio0;
          break;
        case 1:
          audio = audio1;
          break;
        case 2:
          audio = audio2;
          break;
        case 3:
          audio = audio3;
          break;
        case 4:
          audio = audio4;
          break;
        case 5:
          audio = audio5;
          break;
        case 6:
          audio = audio6;
          break;
        case 7:
          audio = audio7;
          break;
        case 8:
          audio = audio8;
          break;
        case 9:
          audio = audio9;
          break;
        case 10:
          audio = audio10;
          break;
        case 11:
          audio = audio11;
          break;
        case 12:
          audio = audio12;
          break;
        case 13:
          audio = audio13;
          break;
      }
      return audio
    },
    // 选择捞起
    handleClick2() {
      if (this.selectActive !== undefined) {
        this.dialog = true;

        const audioElement = document.getElementById('audio');
        if(this.audio) {
          audioElement.pause();
          this.audio = false;
        }
        try {
          this.wavesurfer.play()
        }catch (err) {
          console.log(err)
        }
        if(this.num < 10) {
          this.num += 1;
        }
        console.log(this.random)
      }
    },
    // 继续捞起 关闭弹窗
    dialogClose() {
      this.selectActive = undefined;
      const newArray = this.selectList.map(ele => {
        ele.active = false
        return ele
      })
      this.selectList = newArray

      const audioElement = document.getElementById('audio');
      audioElement.play();
      this.audio = true;
      this.dialog = false
      this.random = getRandom(this.random, 13);

      // 重新初始化音频
      try {
        this.wavesurfer.destroy()
        const audioFile = this.getAudio(this.random)
        this.init(audioFile)
      }catch (err) {
        console.log(err)
      }
    },

    handleClick3() {
      this.active = 'page3'
      this.wavesurfer.destroy()
      const audioElement = document.getElementById('audio');
      audioElement.play();
      this.audio = true;


      let array = [];
      for(let i = 0;i<3;i++) {
        const random = getRandom(undefined, this.keywordList.length)
        array.push(this.keywordList[random])
        this.keywordList.splice(random, 1)
      }
      this.keyword = array
      console.log(array)
    },

    // 分享
    fenxiang() {
      if(isAndroid) {
        this.mask = true
        html2canvas(document.body, {
          ignoreElements: (element) => {
            if(element.id === 'bgm-btn' || element.id === 'share-btn') {
              return true
            }
          },
          logging: true,
          useCORS: true
        }).then(function(canvas) {
          let b64;
          try {
            b64 = canvas.toDataURL("image/png");
            const dom = $(`<img id="img" src="${b64}" alt="">`)
            $('#fenxiangImg').append(dom)
          } catch (err) {
            console.log(err)
            // alert(err)
          }
          console.log('复制成功')
        });
      } else {
        this.mask2 = true
      }
    },
    // 关闭分享图片
    closeMask() {
      this.mask = false
      $('#fenxiangImg')[0].innerHTML = ''
    },

    // 点击录音
    recording() {
      this.recordActive = true

      const audioElement = document.getElementById('audio');
      if(this.audio) {
        audioElement.pause()
      } else {
        audioElement.play();
      }
      this.audio = !this.audio;
    },
    // 关闭录音
    closeMask2() {
      const audioElement = document.getElementById('audio');
      if(this.audio) {
        audioElement.pause()
      } else {
        audioElement.play();
      }
      this.audio = !this.audio;

      this.recordActive = false
      clearCountTime(this.intervalId)
      this.intervalId = undefined;
    },
    audioClick() {
      const audioElement = document.getElementById('audio');
      if(this.audio) {
        audioElement.pause()
      } else {
        audioElement.play();
      }

      this.audio = !this.audio;
    },
    // 开始倒计时
    countdown() {
      const now = Date.now()
      if (!this.intervalId) {
        this.intervalId = countTime(now, $('.time-box'))
      }
    },
    // 结束倒计时
    stopCountdown() {
      clearCountTime(this.intervalId)
      this.intervalId = undefined;
    }
  },
  async mounted() {
    console.log(this.ratio)
    const wechaturl = window.location.href.split('#')[0]

    // 微信分享
    await axios({
      method: 'get',
      url: 'https://api.scms.sztv.com.cn/api/weixin/jstoken?url=' + encodeURIComponent(wechaturl) + '&siteId=79',
    }).then(res => {
      const { data } = res;
      if (data) {
        let {timestamp, noncestr, appId, signature} = data;
        console.log(timestamp, noncestr, appId, signature)

        const title = this.nickname + '向你投了一个声音漂流瓶，美好圳在发声',
            link = window.location.origin + window.location.pathname,
            imgUrl = (window.location.origin + window.location.pathname) + '/logo.jpg';

        wx.config({
          debug: false,
          appId: appId,
          timestamp: timestamp,
          nonceStr: noncestr,
          signature: signature,
          jsApiList: ["updateTimelineShareData", "updateAppMessageShareData"]
        }),
            wx.ready((() => {
              wx.checkJsApi({
                jsApiList: ["updateTimelineShareData", "updateAppMessageShareData"],
                success: function (e) {
                  console.log(e)
                }
              }),

                  // “分享到朋友圈”及“分享到QQ空间”
                  wx.updateTimelineShareData({
                    title, // 分享标题
                    link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl, // 分享图标
                    success: function () {
                      console.log('分享到朋友圈设置成功')
                      // 设置成功
                    }
                  }),

                  // “分享给朋友”及“分享到QQ”
                  wx.updateAppMessageShareData({
                    title: '声音漂流瓶', // 分享标题
                    desc: title, // 分享描述
                    link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl, // 分享图标
                    success: function () {
                      console.log('分享给朋友设置成功')
                      // 设置成功
                    }
                  });
            })),
            wx.error((function (e) {
              console.log(e)
            }))
      }
      console.log(data)
    });
  }
}
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
}

.bgMixin(@image) {
  width: 100%;
  height: 100%;
  background: url(@image) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
  //animation-duration: 10s;
}

#page1 {
  .bgMixin(@image: "../assets/bg@2x.gif");

  .title {
    position: absolute;
    top: 11.62%;
    left: 2.35rem;
    width: 2.7rem;
    height: 6.87rem;
    background: url("../assets/标题@2x.png");
    background-size: 100% 100%;
    //animation-direction: alternate;
    animation-iteration-count: infinite;
    //animation-duration: 6s;
  }
  .btn {
    position: absolute;
    bottom: .79rem;
    left: 2.16rem;
    width: 3.19rem;
    height: 1.09rem;
    background: url("../assets/button3@2x.png") no-repeat;
    background-size: 100%;
    text-align: center;
    font-size: .44rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #C50279;
    line-height: .96rem;
    padding-bottom: .13rem;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
  .pinzi {
    width: 100%;
    height: 100%;
    background: url("../assets/p1动画.gif");
    background-size: 100% 100%;
  }

  .title-box {
    position: absolute;
    width: 6.4rem;
    bottom: .31rem;
    left: .55rem;
    display: flex;
    justify-content: space-between;
    font-size: .2rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #FFFFFF;
    line-height: .4rem;
  }
}

#page2 {
  .bgMixin(@image: "../assets/bg2@2x.gif");

  .gif {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }
  .btn {
    position: absolute;
    bottom: .79rem;
    left: 2.16rem;
    width: 3.19rem;
    height: 1.09rem;
    background: url("../assets/button3@2x.png") no-repeat;
    background-size: 100%;
    text-align: center;
    font-size: .4rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #C50279;
    line-height: .96rem;
    padding-bottom: .13rem;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
  .select {
    position: absolute;
    user-select: none;

    &.active {
      background: url("../assets/选中.png") no-repeat;
      background-size: 100% 100%;
      animation: rotation 4s linear infinite;
    }
  }
  .active1 {
    position: absolute;
    top: 0;
    left: 0;
    background: url("../assets/选中.png") no-repeat;
    background-size: 100%;
    width: 2.06rem;
    height: 2.06rem;
  }
}
.dialog {
  position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: url("../assets/bg4@2x.png");
  background-size: 100% 100%;
  transition: .5s all;

  &.show {
    top: 0;
  }

  .bg {
    position: absolute;
    bottom: 12.75%;
    width: 100%;
    height: 10.28rem;

    background-size: 100% 100%;
  }
  .musicList0 {
    background-image: url("../assets/赵一曼@2x.png");
  }
  .musicList1 {
    background-image: url("../assets/陈铁军@2x.png");
  }
  .musicList2 {
    background-image: url("../assets/向警予@2x.png");
  }
  .musicList3 {
    background-image: url("../assets/郎平@2x.png");
  }
  .musicList4 {
    background-image: url("../assets/女党员@2x.png");
  }
  .musicList5 {
    background-image: url("../assets/女企业家@2x.png");
  }
  .musicList6 {
    background-image: url("../assets/女儿@2x.png");
  }
  .musicList7 {
    background-image: url("../assets/女声@2x.png");
  }
  .musicList8 {
    background-image: url("../assets/深圳女孩@2x.png");
  }
  .musicList9 {
    background-image: url("../assets/深圳小女孩@2x.png");
  }
  .musicList10 {
    background-image: url("../assets/女程序员@2x.png");
  }
  .musicList11 {
    background-image: url("../assets/张桂梅@2x.png");
  }
  .musicList12 {
    background-image: url("../assets/网红女主播@2x.png");
  }
  .musicList13 {
    background-image: url("../assets/屠呦呦@2x.png");
  }
  .btn-list {
    display: flex;
    position: absolute;
    bottom: .6rem;
    left: .54rem;

    .btn1 {
      width: 3.19rem;
      height: 1.09rem;
      background: url("../assets/button3@2x.png") no-repeat;
      background-size: 100%;
      text-align: center;
      font-size: .4rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #C50279;
      line-height: .96rem;
      padding-bottom: .13rem;
    }
    .btn2 {
      width: 3.19rem;
      height: 1.09rem;
      background: url("../assets/button2@2x.png") no-repeat;
      background-size: 100%;
      text-align: center;
      font-size: .4rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #C50279;
      line-height: .96rem;
      padding-bottom: .13rem;
    }
  }
}

#page3 {
  .bgMixin(@image: "../assets/bg3@2x.png");

  .h1 {
    position: absolute;
    top: 4.65%;
    width: 100%;
    text-align: center;
    font-size: .36rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #fff;
    line-height: .5rem;

    .nickName, .num {
      color: #FFFFDD;
    }
  }
  .h2 {
    position: absolute;
    width: 100%;
    top: 9.45%;
    text-align: center;
    font-size: .4rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #FFFFFF;
    line-height: .6rem;
  }
  .keyword-list {
    display: flex;
    position: absolute;

    .keyword {
      font-size: .68rem;
      font-family: Source Han Sans CN;
      font-weight: 800;
      color: #FFFFDD;
      line-height: .64rem;
      text-shadow: 0px 8px 10px rgba(214, 100, 151, 0.75);
    }
  }
  .share-btn {
    position: absolute;
    top: 26.46%;
    left: 2.16rem;
    width: 3.19rem;
    height: 1.09rem;
    background: url("../assets/button2@2x.png") no-repeat;
    background-size: 100%;
    text-align: center;
    font-size: .4rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #C50279;
    line-height: .96rem;
    padding-bottom: .13rem;
  }
  .recording {
    position: absolute;
    top: 47.3%;
    width: 100%;
    text-align: center;

    .recording-img {
      width: 1.73rem;
      height: 1.38rem;
      margin-bottom: .29rem;
    }
    .recording-text {
      font-size: .46rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #C50279;
      line-height: .60rem;
    }
  }
  .left-bottom-text {
    position: absolute;
    left: 1.04rem;
    bottom: 18.67%;
    font-size: .28rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #C50279;
    line-height: .40rem;
  }
  .right-bottom-text {
    position: absolute;
    font-size: .2rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #FFFFFF;
    line-height: .38rem;
  }
}

.mask-share {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .8;
    z-index: 5;
    user-select: none;
  }
  .tips {
    position: absolute;
    width: 5.52rem;
    height: 3.66rem;
    right: .4rem;
    top: .4rem;
    z-index: 6;
    color: #fff;
    font-size: .4rem;
  }
}

.bgm-btn {
  position: absolute;
  z-index: 2;
  right: .1rem;
  top: 20%;
  width: .58rem;
  height: .58rem;
  background-image: url("../assets/音乐icon.png");
  background-size: cover;


  &.active {
    animation: rotation 1s linear infinite;
  }
}

// 旋转动画
@keyframes rotation{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.tada2 {
  animation-name: tada2;
}
// 旋转动画
@keyframes tada2{
  10%, 30%, 50%, 70%, 90% {
    transform: rotate3d(0, 0, 1, 3deg);
  }
  0%, 20%, 40%, 60%, 80%, 100% {
    transform: rotate3d(0, 0, 1, -3deg);
  }
}
// 声音波纹
#waveform {
  position: absolute;
}
.mask-waveform {
  position: absolute;
  z-index: 3;
}
#fenxiangImg {
  width: 100%;
  height: 100%;
  transform: scale(0.85, 0.85);
  position: absolute;
  z-index: 10;
}

.record-box {
  width: 6.4rem;
  height: 9rem;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 14%;
  left: .55rem;
  z-index: 10;

  .close {
    position: absolute;
    top: .22rem;
    left: .2rem;
    width: .6rem;
    height: .6rem;
  }
  .maiKeFen {
    margin: .9rem .78rem .48rem .78rem;
    width: 4.86rem;
    height: 4.87rem;
  }
  .time-box {
    font-family: Source Han Sans CN;
    font-size: .7rem;
    font-weight: 400;
    color: #C50279;
    line-height: .6rem;
    text-align: center;
  }
  .button-box {
    display: flex;
    margin: .67rem .4rem 0 .4rem;

    .button-box-1, .button-box-2 {
      width: 2.6rem;
      height: .9rem;
      background: url("../assets/button1@2x.png");
      background-size: 100% 100%;
      font-size: .4rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #FFFFFF;
      line-height: .9rem;
      text-align: center;
    }
    .button-box-1 {
      margin-right: .39rem;
    }
  }

}

</style>
<style>
#img {
  width: 100%;
  height: 100%;
}
</style>
