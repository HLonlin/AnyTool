// views/index/index.js
const app = getApp();
const current = app.tools.randomMaxToMin(3, 1) - 1; //随机首屏图
Page({
  /**
   * 页面的初始数据
   */
  data: {
    header: {
      title: 'Mr.Feng',
      sign: '台灯是夜猫子的阳光，熬夜是梦想者的倔强。',
      url: '/pages/index/index'
    },
    swiperItem_list: ['../../images/index/1.jpg', '../../images/index/2.jpg', '../../images/index/3.jpg'],
    indicator: false,
    autoplay: false,
    interval: 4000,
    duration: 500,
    circular: true,
    current: current,
    verse: {
      content: "渐霜风凄紧，关河冷落，残照当楼。",
      title: "《八声甘州·对潇潇暮雨洒江天》 - 宋代 - 柳永"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    // wx.cloud.callFunction({
    //   name: 'test',
    //   data: {
    //     url: 'https://hbimg.huabanimg.com/2151b0d41b31c7af47e6697e1c197395c9185718f680-hS9ukP_fw236/format/webp'
    //   },
    //   success: function(res){
    //     that.setData({
    //       backgrounImg:res
    //     })
    //     console.log(that.data.backgrounImg)
    //   }
    // })
    // wx.cloud.callFunction({ // 随机诗句
    //   name: 'verse',
    //   success: function (res) {
    //     that.setData({
    //       verse:{
    //         content:res.result.content,
    //         title:"《"+res.result.origin.title+"》" + " - " + res.result.origin.dynasty + " - " + res.result.origin.author
    //       }
    //     })
    //   }
    // })
    this.fillCanvas();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  fillCanvas: function () {
    let that = this;
    let canvasList = [];
    let query = wx.createSelectorQuery();

    var width, height, canvas, ctx, animateHeader = true;
    var circles = [];

    var settings = {
      color: 'rgba(255,255,255,.5)',
      radius: 10,
      density: 0.3,
      clearOffset: 0.2
    };
    // for (var i = 0, imax = that.data.swiperItem_list.length; i < imax; i++) {
    //   query.select('#canvasItem' + i)
    //     .fields({
    //       node: true,
    //       size: true
    //     })
    //     .exec((res) => {
    //       canvas=res[0].node;
    //       ctx = canvas.getContext('2d');
    //       width=canvas.width;
    //       height=canvas.height;
    //     })
    // }
    // function animate() {
    //   if (animateHeader) {
    //     ctx.clearRect(0, 0, width, height);
    //     for (var i in circles) {
    //       circles[i].draw();
    //     }
    //   }
    //   requestAnimationFrame(animate);
    // }
    // function randomColor() {
    //   var r = Math.floor(Math.random() * 255);
    //   var g = Math.floor(Math.random() * 255);
    //   var b = Math.floor(Math.random() * 255);
    //   var alpha = Math.random().toPrecision(2);
    //   return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    // }
    // function Circle() {
    //   var that = this;
    //   // constructor
    //   (function () {
    //     that.pos = {};
    //     init();
    //   })();

    //   function init() {
    //     that.pos.x = Math.random() * width;
    //     that.pos.y = height + Math.random() * 100;
    //     that.alpha = 0.1 + Math.random() * settings.clearOffset;
    //     that.scale = 0.1 + Math.random() * 0.3;
    //     that.speed = Math.random();
    //     if (settings.color === 'random') {
    //       that.color = randomColor();
    //     }
    //     else {
    //       that.color = settings.color;
    //     }
    //   }

    //   this.draw = function () {
    //     if (that.alpha <= 0) {
    //       init();
    //     }
    //     that.pos.y -= that.speed;
    //     that.alpha -= 0.0005;
    //     ctx.beginPath();
    //     ctx.arc(that.pos.x, that.pos.y, that.scale * settings.radius, 0, 2 * Math.PI, false);
    //     ctx.fillStyle = that.color;
    //     ctx.fill();
    //     ctx.closePath();
    //   };
    // }
  }
})