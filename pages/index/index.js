//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {nickName:'zeromike',avatarUrl:'https://avatars1.githubusercontent.com/u/3007631?v=3&u=290c208816cc4182025ef579fa8b1d6238e0f916&s=140'}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../travellist/travellist'
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
      that.update()
    })
  },
   onReady: function () {
       var context = wx.createContext();
    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();

    function initHeader() {
        width = 400;
        height = 600;
        target = {x: 10, y: height};

        ctx = context;

        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        setInterval(animate, 17);
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
            wx.drawCanvas({
                canvasId: 'firstCanvas',
                actions: ctx.getActions()
            });
        }
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
           // console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
        };
    }
  },
  onUnload: function () {
    clearInterval(this.interval)
  }
})
