// pages/center/center.js

function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}


Page({

  /**
   * 页面的初始数据
   */
  inputValue: "",
  data: {
    poster: 'http://pic.rmb.bdstatic.com/7c0c533b33188aea30426b4f132c4b25.png@wm_2,t_55m+5a625Y+3L+eZveiho+acquWkruawtOeTtg==,fc_ffffff,ff_U2ltSGVp,sz_19,x_12,y_12',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    videoUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    // 弹幕列表
    danmuList: [
      {
        text: "第2秒出现的弹幕",
        color: "#fff",
        time: 2
      },
      {
        text: "第二秒出现的弹幕",
        color: "#ddd",
        time: 2
      },
      {
        text: "第三秒出现的弹幕",
        color: "#000",
        time: 3
      }
    ],

    muted: false

  },
  
  // 视频播放
  videoPlay: function(e){
    console.log("视频开始播放了！")
    this.videoContext.play()
  },

  // 静音处理
  muted: function(e){
    this.setData({
         muted: true
    });
  },

  // 视频暂停
  videoPause: function(e){
    console.log("视频播放暂停")
    this.videoContext.pause()
  },
  
  // 视频停止
  // 这个seek(0)在手机上没效果？？？
  videoRestart: function(e){
    console.log("视频播放从头开始");
    this.videoContext.seek(0);  
    
  },
  
  // 当视频播放结束的时候触发
  bindEnded: function(e){
    console.log("视频播放结束");
    this.videoContext.seek(0); 
  },


  // 获取弹幕输入内容，input失去焦点的时候获取，赋值给inputValue
  bindInputBlur: function(e){
    this.inputValue = e.detail.value;
    console.log(e.detail.value);
  },

  // 点击发送弹幕
  bindSendDanmu: function(e){
    console.log(e);
    console.log(this.inputValue);

    // 通过 this.videoContext 的sendDanmu方法，传入text和color。即可发送弹幕；
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },

  // 
  // bindTimeUpdate: function(e){
  //   console.log(this.videoContext)
  // },


  // 音频播放
  start: function(e){
    console.log("start play")
    this.audioCtx.play()
  },
  
  // 音频暂停
  pause: function(e){
    console.log("pause play")
    this.audioCtx.pause()
  },

  // 音频重新停止（重头开始）
  restart: function(e){
    console.log("restart play")
    this.audioCtx.seek(0); 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = wx.createAudioContext("myAudio");
      this.videoContext = wx.createVideoContext("myVideo")
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})