//index.js
//获取应用实例
var app = getApp()
Page({
  page: function(){
    wx.navigateTo({
      url: '../page/page'
    });
  },
  nopage: function () {
      wx.navigateTo({
        url: '../nopage/page'
      });
  },
  loadIndex: function (event) {
    var slef = this;
    var str = event.currentTarget.dataset.title;
    if (str=='主页'){
      slef.setData({
        essay: true,
        tool: true,
        share: true
      })
    }
    if (str == '工具') {
      slef.setData({
        essay: false,
        tool: true,
        share: false
      })
    }
    if (str == '分享') {
      slef.setData({
        essay: false,
        tool: false,
        share: true
      })
    }
    if (str == '随笔') {
      slef.setData({
        essay: true,
        tool: false,
        share: false
      })
    }
    if (str == '展示') {
      slef.setData({
        essay: false,
        tool: false,
        share: false
      })
    }
    slef.setData({
      title: str
    })
  },
  data: {
    motto: 'Hello World',
    title: '主页',
    essay: true,
    tool: true,
    share: true,
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    // 加载首页的数据
    

  }
})
