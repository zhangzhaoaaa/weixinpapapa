/**
 * Created by zhangmike on 16/9/29.
 */
Page({
	data: {
		image:'',
		modalHidden: true,
		toast2No: true
	},
	onLoad: function(options) {
		console.log('onload....');
		this.setData({
			image: options.id
		})
	},
	nothanku: function() {
		this.setData({
			toast2No: false
		});
	},
	gohotel: function() {
		this.setData({
			modalHidden: false
		})
	},
	modalChange: function() {
		wx.redirectTo({
			url: '../wakeup/wakeup'
		})
		this.setData({
			modalHidden: true
		})
	},
	modalCancel: function (){
		this.setData({
			modalHidden: true
		})
	},
	toastChangeNo: function(){
		this.setData({
			toast2No: true
		});
	}
})