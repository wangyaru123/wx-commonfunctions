const app = getApp();

Page({

  //页面的初始数据
  data: {
    channelNum: 1
  },

  //手动输入数量
  input_num: function (e) {
    let input_num = e.detail.value;//手动输入
    console.log(input_num)
    if (input_num > 0 && input_num < 31) {
      this.setData({
        channelNum: input_num
      })
    } else {
      wx.showToast({
        title: '输入信道超出了范围',
        image: '/images/icon_warm.png'
      })
    }
  },

  //数量加函数
  numadd: function (e) {
    const index = this.data.channelNum;
    if (index == 30) {
      wx.showToast({
        title: '当前信道为最大值',
        image: '/images/icon_warm.png'
      })
      return false
    }
    this.setData({
      channelNum: parseInt(index) + 1
    })
  },
  //数量减函数
  numminus: function (e) {
    const index = this.data.channelNum;
    if (index == 1) {
      wx.showToast({
        title: '当前信道为最小值',
        image: '/images/icon_warm.png'
      })
      return false
    }
    this.setData({
      channelNum: parseInt(index) - 1
    })
  }

})