// pages/data/data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      value: "",
      msg: ""
  },

  // 发送网络请求
  send: function () {
    // 在微信小程序中，可以通过wx.request 方法 发起
    // 网络请求并接收处理响应数据

    // 需要传入一个对象类型的参数
    // url, data, method 必不可少。
    wx.request({
      // 网络地址
      url: 'http://www.pygwt.online:8000',
      // 请求时，传递的参数
      data: {

      },
      // 发起请求时的请求方式 get / post
      method: 'get',
      // 处理成功响应的结果
      success: function(info){
        console.log(info);
      }
    })

  },

  // 获取位置
  getLocation: function(){
    console.log("获取用户位置，经纬度");

    // 在微信小程序中，可以使用wx.getLocation 方法
    // 可以获得用户的所在位置的经纬度
    // 需要用户授权

    // 需要传入对象类型的数据
    wx.getLocation({
      // 获取成功后调用函数 success 
      success: function(res) {
          console.log(res);
      },
    })
  },

  // view 文字点击事件 click
  click: function(){
    console.log("bind:tap 点击")
  },

  click2: function(){
    console.log("bindtap点击")
  },

  bindInput: function(ev){
    this.setData({
      msg: ev.detail.value
    })
  },

  loading: function(){
    // 小程序中可以通过 wx.showLoading 方法
    // 显示状态

    wx.showLoading({
      title: '加载中....',
    });
    setTimeout(function(){
      wx.hideLoading();
    }, 2000)
  },

  // toast 显示
  toast: function(){
    wx.showToast({
      title: 'toast',
    });
  },

  // sheet 显示
  // 从下往上 可选择项
  sheet: function(ev){
    wx.showActionSheet({
      itemList: [
        'python',
        '小程序',
        '前端'
      ],
      success: function (ev) {
        console.log(ev.tapIndex);
      }
    })

  },

  // 输入框获取焦点事件
  getFocus: function(){
    console.log("输入框获取到了焦点")
  },

  // 输入框失去焦点事件
  lostFocus: function(ev){
    console.log("输入框失去了焦点");
    console.log(ev)
    this.setData({
      value: ev.detail.value
    })
  },

  // 冒泡事件
  bindOuter: function(){
    console.log("bindta 外面盒子")
  },

  bindInner: function(){
    console.log("bindtap 里面盒子")
  },

  // 使用catchtap
  catchOuter: function(){
    console.log("catchtap 外面的盒子")
  },

  catchInner: function(){
    console.log("catcatap 里面的盒子")
  },

  // 事件对象
  // 通过ev.target.dataset获取页面传过来的值，参数
  getEvent: function(ev){
    console.log("获取事件对象")
    console.log(ev);
    console.log(ev.target);
    console.log(ev.target.dataset);
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