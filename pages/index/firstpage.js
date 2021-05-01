// pages/index/firstpage.js
var app = getApp();
var imageDate = require('json.js');
var startpoint;
var windowHeight;
var windowWidth;
Page({
  data: {
    imgs: [{
      link: '../rotapage/rotapage1',
      url: '../../image/tabericon/learn1.png'
    }, {
      link: '../rotapage/rotapage2',
      url: '../../image/tabericon/learn2.png'
    }, {
      link: '../rotapage/rotapage3',
      url: '../../image/tabericon/learn3.png'
    }, {
      link: '../rotapage/rotapage4',
      url: '../../image/tabericon/learn4.png'
    }],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    vertical: false,
    duration: 1000,

    btnfunclist: [{
      imgurl: imageDate.dataList[0],
      title: '每日签到',
      icon: 'icon-qiandao-mian',
      id: '1'
    }, {
      imgurl: imageDate.dataList[1],
      title: '交流中心',
      icon: 'icon-jiaoliu',
      id: '2'
    }, {
      imgurl: imageDate.dataList[2],
      title: "天气预告",
      icon: 'icon-tianqi',
      id: '3'
    }, {
      imgurl: imageDate.dataList[3],
      title: '我的目标',
      icon: 'icon-mubiao',
      id: '3'
    }],
    buttonFtop:350,
    buttonFLeft:0
  },
  catchTouchMove: function (e) {
    return true;
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    windowHeight=wx.getSystemInfoSync().windowHeight;
    windowWidth=wx.getSystemInfoSync().windowWidth;
    console.log(windowWidth);
    console.log(windowHeight);
  },
  //点击浮动窗口事件
  btn_Click: function (res) {
    wx.showToast({
      title: '创建我的目标',
      icon: 'success',
      duration: 1000,
    })
  },

  //获取开始位置
  btn_Start: function (e) {
    var startpoint=e.touches[0];
  },
  //拖动浮动窗口事件
  btn_Move: function (e) {
    var endpoint=e.touches[e.touches.length-1];
    var Top=0;
    var Left=0;
    if(endpoint.clientY<50){
      Top=0;
    }else if(endpoint.clientY>windowHeight-50){
      Top=windowHeight.clientY-50;
    }else{
      Top=endpoint.clientY-30;
    }
    if(endpoint.clientX<50){
      Left=0;
    }else if(endpoint.clientX>windowWidth-50){
      Left=windowWidth.clientX-50;
    }else{
      Left=endpoint.clientX;
    }
    this.setData({
      buttonFLeft: Left,
      buttonFtop:  Top
    })
  },
  btn_End: function (e) {
      var endpoint = e.changedTouches[0];
      var Top=0;
      var Left=0;
      if(endpoint.clientY<50){
        Top=0;
      }else if(endpoint.clientY>windowHeight-50){
        Top=windowHeight.clientY-50;
      }else{
        Top=endpoint.clientY-30;
      }
      if(endpoint.clientX<50){
        Left=0;
      }else if(endpoint.clientX>windowWidth-50){
        Left=windowWidth.clientX-50;
      }else{
        Left=endpoint.clientX;
      }
      this.setData({
        buttonFLeft: Left,
        buttonFtop: Top
      })
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