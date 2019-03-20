//index.js

Page({
  // 处理数据
  data: {
    "imgUrls": [
      "https://lg-awf6ud7o-1257084981.cos.ap-shanghai.myqcloud.com/item_1.png",
      "https://lg-awf6ud7o-1257084981.cos.ap-shanghai.myqcloud.com/item_2.png",
      "https://lg-awf6ud7o-1257084981.cos.ap-shanghai.myqcloud.com/item_3.png",
      "https://lg-awf6ud7o-1257084981.cos.ap-shanghai.myqcloud.com/item_4.png",
    ],
    "indicatorDots": true,
    "indicatorColor": "#ccc",
    "indicatorActiveColor": "#fff",
    "autoplay": true,
    "interval": 3000,
    "duration": 1000,
    "circular": true,
    "number1": 12,
    "number2": 32,
    "inputValue": "",

    "height": 20,
    "focus": false,

    // checkbox
    "items": [{
        name: "CHINA",
        value: "中国",
        checked: "true"
      },
      {
        name: "UK",
        value: "英国"
      },
      {
        name: "USA",
        value: "美国"
      },
      {
        name: "FRANCE",
        value: "法国"
      },
      {
        name: "JAPAN",
        value: "日本"
      },
    ],

    "users": [{
        name: "python",
        age: 22,
        gender: "男"
      },
      {
        name: "flask",
        age: 16,
        gender: "女"
      },
      {
        name: "linux",
        age: 8,
        gender: "女"
      },
      {
        name: "django",
        age: 26,
        gender: "男"
      },
    ]

  },

  default: function(data) {
    console.log("default")
  },

  primary: function(data) {
    console.log("primary")
  },

  warn: function(data) {
    console.log("warn")
  },

  checkboxChange: function(data) {
    console.log(data.detail.value)
  },

  bindInput: function(data) {
    console.log(data);
    console.log(data.detail);
    console.log(data.detail.value)
    this.setData({
      inputValue: data.detail.value
    })
  },

  // 表单点击提交事件
  bindSubmit: function(e) {
    console.log("点击提交按钮，表单数据 ", e.detail.value)
  },

  bindReset: function(e) {
    console.log("点击了重置按钮")
  },


  // slider change
  // 完成一次拖动后触发的事件
  sliderChange: function(e) {
    console.log(e.detail.value);
  },
  // 拖动过程中触发的事件
  bindChanging: function(e) {
    console.log(e.detail.value)
  },


  // switch 
  switchBindSubmit: function(e) {
    console.log(e);
    console.log(e.detail);
    console.log(e.detail.value)
  },

  switchBindReset: function(e) {
    console.log("点击了重新选择");
  },

  // text 
  textSubmit: function(e) {
    console.log(e);
    console.log(e.detail.value);
    console.log(e.detail.value.content);
  },

  bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function(e) {
    console.log(e.detail.value.textarea)
  },


  // icon 图标
  iconSuccess: function(e) {
    console.log("点击了success")
  },
  iconSuccessNoCircle: function(e) {
    console.log("点击了iconSuccessNoCircle")
  },
  iconInfo: function(e) {
    console.log("点击了iconInfo")
  },
  iconWarn: function(e) {
    console.log("点击了iconWarn")
  },

  iconWaiting: function(e) {
    console.log("点击了iconWaiting")
  },
  iconCacel: function(e) {
    console.log("iconCacel")
  },
  iconDownload: function(e) {
    console.log("点击了iconDownload")
  },
  iconSearch: function(e) {
    console.log("点击了iconSearch")
  },
  iconClear: function(e) {
    console.log("点击了iconClear")
  },


})