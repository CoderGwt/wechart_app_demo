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

    // checkbox
    "items": [
      {name: "CHINA", value: "中国", checked: "true"},
      {name: "UK", value: "英国"},
      {name: "USA", value: "美国"},
      {name: "FRANCE", value: "法国"},
      {name: "JAPAN", value: "日本"},
    ]

  },

  default: function(data){
    console.log("default")
  },

  primary: function(data){
    console.log("primary")
  },

  warn: function(data){
    console.log("warn")
  },

  checkboxChange: function(data){
    console.log(data.detail.value)
  }

})