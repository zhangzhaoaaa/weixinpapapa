Page({
  data: {
    imgUrls: [
      'http://www.gdzp.org/uploadfile/2014/0905/20140905052820850.jpg',
      'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1307/23/c0/23655860_1374563879243_800x600.jpg',
      'http://bizhi.zhuoku.com/bizhi2008/0828/gaoqing/Zhiwu25.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    animationData:{},
    weather:{
      date:'',
      city:'',
      pm25:'',
      today:{},
      tomorrow:{}
    }
  },
  getLocation: function(e) {
    console.log(e)
    var that = this
    wx.getLocation( {
      type: 'gcj02',
      success: function( res ) {
        console.log( res )
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.openLocation({
          latitude:latitude,
          longitude:longitude,
          scale:1
        })
      }
    })
  },
  goPlace: function(){
    wx.redirectTo({url:"../prize/prize"})
  },
  onReady: function() {
    console.log("ready..");
    var that = this;
    console.log(this);
    wx.request({
      header:{
        "Content-Type":"application/json"
      },
      data: {
        location: '北京',
        output: 'json',
        ak: 'd9yywXyVIDPpPvbUEPpiuhZYaHmOpynP'
      },
      url: 'http://api.map.baidu.com/telematics/v3/weather',
      success: function (data) {
        console.log(data);
        if (data.statusCode == 200) {
          var results = data.data.results[0];
          that.data.weather["date"] = data.data.date;
          that.data.weather["city"] = results.currentCity;
          that.data.weather["pm25"] = results.pm25;
          that.data.weather["today"] = results.weather_data[0];
          that.data.weather["tomorrow"] = results.weather_data[1];
          console.log(that.weather);
          that.setData({
            weather:that.data.weather
          });
        }
      }
    });
  },
  onLoad: function() {
    console.log('onload....');
  },
  onShow: function() {
    console.log('onshow...')
  }
})