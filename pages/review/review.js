Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    indicatorColor: "#fff",
    indicatorActiveColor: "#00f",
    circular: true,

    name: "python",
    age: 23,
    cities: [
      "武当山", "少林寺", "内蒙古", "丽江古城"
    ],
    score: 92
  },
  youxiu: function(res) {
    wx.showToast({
      title: '恭喜晋级',
    });
    console.log(res);
    console.log(res.currentTarget.dataset.index);
    console.log(res.target.dataset.index);
  }
})