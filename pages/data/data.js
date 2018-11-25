// pages/data/data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      value: "",
      msg: ""
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

  getFocus: function(){
    console.log("输入框获取到了焦点")
  },

  lostFocus: function(ev){
    console.log("输入框失去了焦点");
    console.log(ev)
    this.setData({
      value: ev.detail.value
    })
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