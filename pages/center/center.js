// pages/center/center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: 'http://pic.rmb.bdstatic.com/7c0c533b33188aea30426b4f132c4b25.png@wm_2,t_55m+5a625Y+3L+eZveiho+acquWkruawtOeTtg==,fc_ffffff,ff_U2ltSGVp,sz_19,x_12,y_12',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },

  start: function(e){
    console.log("start play")
    this.audioCtx.play()
  },
  
  pause: function(e){
    console.log("pause play")
    this.audioCtx.pause()
  },

  restart: function(e){
    console.log("restart play")
    this.audioCtx.seek(0); // 
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
      this.audioCtx = wx.createAudioContext("myAudio")
  
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