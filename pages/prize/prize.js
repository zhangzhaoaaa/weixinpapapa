/**
 * Created by zhangmike on 16/9/29.
 */
Page({
	data: {
		imgUrls: [
			'https://pic3.zhimg.com/b0595e32b6a310a2c43605f381856cd2_b.jpg',
			'https://pic4.zhimg.com/4ab1572229c348d6969865a901e198b7_b.jpg',
			'https://pic3.zhimg.com/b63e5e23e7d8c3302cb4f1c5de2ae292_b.jpg',
			'https://pic3.zhimg.com/a251faebba765d096428058e3d0fb21e_b.jpg',
			'https://pic4.zhimg.com/6ccff3a267c115370136d0ffb9073d17_b.jpg'
		],
		indicatorDots: true,
		autoplay: true,
		interval: 2000,
		duration: 1000,
		image:'',
		modalHidden: true
	},
	onLoad: function(options) {
		console.log('onload....');
	},
	selectBeauty: function() {
		/*this.setData({
			image: this.data.imgUrls[Math.floor(Math.random() * 3)]
		})*/
		wx.navigateTo({
			url: '../papa/papa?id='+this.data.imgUrls[Math.floor(Math.random() * 5)]
		})
	},
	onShow: function() {
		console.log('onshow...')
	}
})