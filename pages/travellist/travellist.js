Page({
  data: {
    toast2Foot: true,
    toast2Train: true
  },
  //事件处理函数
  bindViewNavigator: function(e) {
    var target = e.target.dataset.source;
    if (target === 'plane') {
      wx.navigateTo({
        url: '../placetarget/placetarget'
      })
    } else if (target === 'train') {
      this.setData({
        toast2Train: false
      })
    } else if (target === 'foot') {
      this.setData({
        toast2Foot: false
      })
    }
  },
  toastChangeFoot: function(e) {
    this.setData({
      toast2Foot: true
    });
  },
  toastChangeTrain: function(e) {
    this.setData({
      toast2Train: true
    });
  },
  onLoad: function () {
    console.log('onLoad');
  }
})
