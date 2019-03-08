var util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
     currentTab:0,
     winWidth:0,
     winHeight:0,
     movie:{},
     directors:[],
     casts:[]
  },
  switchNav:function(e){
    console.log(e);
    var id = e.currentTarget.id;
    this.setData({
      currentTab:id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var self = this;
    var key = util.getDataKey();
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/'+e.id+"?apikey="+key,
      header:{
        "Content-Type":"json"
      },
      success:function(res){
        console.log(res);
        var movie = res.data;
        self.setData({
          movie: movie,
          directors: movie.directors,
          casts: movie.casts
        });

        wx.setNavigationBarTitle({
          title: movie.title
        });
      }
    });
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
           winHeight:res.windowHeight,
           winWidth:res.windowWidth
        });
      },
    });
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