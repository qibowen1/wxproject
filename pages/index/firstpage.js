// pages/index/firstpage.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[{
      link:'../rotapage/rotapage1',
      url:'../../image/tabericon/learn1.png'
    },{
      link:'../rotapage/rotapage2',
      url:'../../image/tabericon/learn2.png'
    },{
      link:'../rotapage/rotapage3',
      url:'../../image/tabericon/learn3.png'
    },{
      link:'../rotapage/rotapage4',
      url:'../../image/tabericon/learn4.png'
    }],
    indicatorDots:true,
    autoplay:true,
    circular:true,
    interval:3000,
    vertical:false,
    duration:1000,

    functionContainer:[{
      link:'../functionpage/myaims',
      url:'../../image/tabericon/myaims.png',
      id:1
    },{
      link:'../functionpage/talking',
      url:'../../image/tabericon/talk.png',
      id:2
    }]
  },
  catchTouchMove:function(e){
    return true;
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